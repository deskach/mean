import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import constants from './constants';
import { submitSurvey } from "../../actions/actions";
import { withRouter } from "react-router-dom";

class SurveyFormReview extends Component {
  render() {
    const { onCancel, formValues, submitSurvey, history } = this.props;
    const { surveyForm: { config } } = constants;
    const reviewFields = config.map(({ caption, name }, i) => (
      <div key={i}>
        <label>{caption}:</label>&nbsp;<span>{formValues[name]}</span>
      </div>
    ));

    return (
      <div>
        <h4>Please confirm your entries.</h4>
        {reviewFields}
        <button className={'yellow darken-3 btn'} onClick={onCancel}>
          Back
        </button>
        <button className={'green btn right'}
                onClick={() => submitSurvey(formValues, history)}>
          <i className={'material-icons left'}>email</i>
          Send
        </button>
      </div>
    );
  }
}

SurveyFormReview.propTypes = { onCancel: PropTypes.func.isRequired };
SurveyFormReview.defaultProps = {};

const mapStateToProps =
  ({ form: { surveyForm: { values: formValues } } }) => ({ formValues });

export default connect(mapStateToProps, { submitSurvey })(
  withRouter(SurveyFormReview)
);
