import React, { Component } from 'react';
import Chibi from './Chibi';
//import logo from './paris-logo.svg';
import logo from './weiss.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ANiME GiRL</h1>
        </header>
        <Chibi />
      </div>
    );
  }
}

export default App;
