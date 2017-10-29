import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Hello World!</h4>
        <a href={"/auth/google"}>Sign in with Google</a>
      </div>
    );
  }
}

export default App;
