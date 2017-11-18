import React, { Component } from 'react';
import logo from './paris-logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Naruto AR</h1>
        </header>
        <p className="App-intro">
          hurr.
        </p>
      </div>
    );
  }
}

export default App;
