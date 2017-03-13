import React, { Component } from 'react';
import Reactlogo from './Reactlogo.svg';
import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={Reactlogo} className="React-logo" alt="logo" />
          <img src={logo} className="Max-logo" alt="logo" />
        </div>
        <Quiz />
      </div>
    );
  }
}

export default App;
