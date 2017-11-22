const Path = require('path-parser');
const _ = require('lodash');
const { URL } = require('url');
const mongooze = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/templates/survey');

const Survey = mongooze.model('surveys');

module.exports = app => {
  app.get('/api/surveys', requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id, })
      .select({ recipients: false });

    res.send(surveys);
  });

  app.get('/api/surveys/:surveyId/:choice', (req, res) => res.send('Thanks for voting!'));

  app.post('/api/surveys/webhooks', (req, res) => {
    const p = new Path('/api/surveys/:surveyId/:choice');

    _.chain(req.body)
      .map(({ url, email }) => {
        const pathname = new URL(url).pathname;
        const { surveyId, choice } = p.test(pathname) || {};

        return surveyId ? { email, surveyId, choice, } : undefined;
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne({
          _id: surveyId,
          recipients: {
            $elemMatch: { email: email, responded: false }
          }
        }, {
          $inc: { [choice]: 1 },
          $set: { 'recipient.$.responded': true },
          lastResponded: new Date(),
        })
          .exec();
      })
      .value();

    res.send(200);
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients: emails } = req.body;
    const recipients = emails.split(',').map(email => ({ email: email.trim() }));
    const survey = new Survey({
      title,
      subject,
      body,
      recipients,
      _user: req.user.id,
      dateSent: Date.now()
    });
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      // await mailer.send(); //TODO: Implement me
      await survey.save();

      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
