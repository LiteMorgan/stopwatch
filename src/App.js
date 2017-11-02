import React, { Component } from 'react';
import Controls             from './components/Controls';
import Stopwatch            from './components/Stopwatch';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      stopwatch: 0,
    }
  }


  render() {
    return (
      <div className="App">
        <main className="App__content">
          {/* All Components housed here */}
          <div className="App__panel">
            <Stopwatch />
            <Controls />
          </div>
          <div className="App__panel">
          </div>
        </main>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my terrible attempt at a Stopwatch</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
