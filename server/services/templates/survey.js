const keys = require('../../config/keys');

module.exports = survey => {
  return `
  <html><body><div>
      <h3>Please give your feedback!</h3>
      <p>Answer the following question:</p>
      <p>${survey.body}</p>
      <div>
          <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
          <br/>
          <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
      </div>
  </div></body></html>
`;
};
