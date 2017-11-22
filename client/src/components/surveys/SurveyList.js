import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSurveys } from "../../actions/actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  render() {
    const surveys = this.props.surveys.map(s => (
      <div className="card blue-grey darken-1" key={s._id}>
        <div className="card-content white-text">
          <span className="card-title">{s.title}</span>
          <p>{s.body}</p>
          <p className={'right'}>
            Sent On: {new Date(s.dateSent).toLocaleDateString()}
          </p>
        </div>
        <div className="card-action">
          <a>Yes: {s.yes}</a>
          <a>No: {s.no}</a>
        </div>
      </div>
    ));

    return <div>{surveys}</div>;
  }
}

SurveyList.propTypes = { fetchSurveys: PropTypes.func.isRequired };
SurveyList.defaultProps = {};

export default connect(({ surveys }) => ({ surveys }), { fetchSurveys })(SurveyList);
