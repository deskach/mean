import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/index';
import Landing from "./Landing";
import Dashboard from "./Dashboard";


const SurveyNew = () => <h2>Survey New </h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path={'/'} component={Landing}/>
            <Route exact path={'/surveys'} component={Dashboard}/>
            <Route path={'/surveys/new'} component={SurveyNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
