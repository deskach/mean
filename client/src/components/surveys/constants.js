let i = 0;

export default {
  surveyForm: {
    config: [
      { name: 'title', caption: 'Survey Title' },
      { name: 'subject', caption: 'Subject Line' },
      { name: 'body', caption: 'Email body' },
      { name: 'recipients', caption: 'Recipient List' },
    ],
    stages: {
      INPUT: i++,
      REVIEW: i++,
    }
  }
};
