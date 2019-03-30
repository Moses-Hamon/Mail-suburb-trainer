import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './Text';

class App extends Component {
    render() {
      const name = "Moe";
      const names = [
        'Chris',
        'Tom',
        'Alex'
      ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Text name={name} names={names}/> 
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
