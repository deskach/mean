import React from 'react';

const SurveyField = (props) => {
  const { touched, error } = props.meta;

  return (
    <div>
      <div className={'form-error'}>{touched && error}</div>
      <input {...props.input} placeholder={props.caption}/>
    </div>
  );
};

SurveyField.propTypes = {};
SurveyField.defaultProps = {};

export default SurveyField;

