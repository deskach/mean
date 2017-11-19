import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";

class SurveyForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          <Field type={'text'} name={'surveyTitle'} component={'input'}/>
          <button type={'submit'}>Submit</button>
        </form>
      </div>
    );
  }
}

SurveyForm.propTypes = {};
SurveyForm.defaultProps = {};

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
