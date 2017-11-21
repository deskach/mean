import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import { validate } from "../../utils/form";
import PropTypes from 'prop-types';
import constants from './constants';


class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        {constants.surveyForm.config.map((v, i) => (
          <Field type={'text'} {...v} key={i} component={SurveyField}/>
        ))}
      </div>
    );
  }

  render() {
    const { handleSubmit, onSurveySubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(onSurveySubmit)}>
          {this.renderFields()}
          <Link type={'button'} className={'btn red'} to={'/surveys'}>Cancel</Link>
          <button type={'submit'} className={'teal btn right'}>
            Next <i className={'material-icons left'}>done</i>
          </button>
        </form>
      </div>
    );
  }
}

SurveyForm.propTypes = { onSurveySubmit: PropTypes.func.isRequired };
SurveyForm.defaultProps = {};

export default reduxForm({
  validate: validate.bind(null, constants.surveyForm.config),
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm);
