import React, { Component } from 'react';
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import constants from './constants';
import { reduxForm } from "redux-form";


const { INPUT, REVIEW } = constants.surveyForm.stages;

class SurveyNew extends Component {
  state = {
    stage: INPUT,
  };

  render() {
    const stage2component = {
      [INPUT]: <SurveyForm onSurveySubmit={() => this.setState({ stage: REVIEW })}/>,
      [REVIEW]: <SurveyFormReview onCancel={() => this.setState({ stage: INPUT })}/>,
    };
    const content = stage2component[this.state.stage];

    return (
      <div>
        {content}
      </div>
    );
  }
}

SurveyNew.propTypes = {};
SurveyNew.defaultProps = {};

export default reduxForm({ form: 'surveyForm' })(SurveyNew);

