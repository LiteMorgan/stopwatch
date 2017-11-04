import React, { Component } from 'react';
import TimeFormatter        from 'minutes-seconds-milliseconds';
import Controls             from './components/Controls';
import Laps                 from './components/Laps';
import Stopwatch            from './components/Stopwatch';

import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      startMainTime:   null,
      startLapTime:    null,
      elapsedMainTime: null,
      elapsedLapTime:  null,
      resumeLapTime:   null,
      isRunning:       false,
      lapTimes:        [],
    }

    this.interval = null;
  }


  timerStart = () => {
    let {isRunning, elapsedMainTime, elapsedLapTime} = this.state;

    // if Timer is running, stop
    if (isRunning) {
      clearInterval(this.interval);
      this.setState({
        isRunning:  false,
        resumeLapTime: elapsedLapTime,
      });
      return;
    }

    // run the Timer
    this.setState({
      isRunning:       true,
      startMainTime:   new Date(),
      startLapTime:    new Date(),
    },() => {
      this.interval = setInterval(() => {

        this.setState({
          elapsedMainTime:  new Date() - this.state.startMainTime + elapsedMainTime,
          elapsedLapTime:   new Date() - this.state.startLapTime + this.state.resumeLapTime,
        });

      });
    });
  };


  timerLap = () => {
    let {elapsedLapTime} = this.state;

    this.setState({
      startLapTime:   new Date(),
      resumeLapTime:  null,
      lapTimes:       this.state.lapTimes.concat(elapsedLapTime),
    });
  };


  timerReset = () => {
    this.setState({
      startMainTime:    null,
      startLapTime:     null,
      elapsedMainTime:  0,
      elapsedLapTime:   0,
      resumeLapTime:    null,
      lapTimes:         [],
    });
  };


  handleControls = (eventValue, runningBoolean, resetBoolean) => {
    switch(eventValue) {
      case 'start':
        this.timerStart();
        break;
      case 'lap':
        this.timerLap();
        break;
      case 'reset':
        this.timerReset();
        break;
      default:
        console.log('This should not be firing!');
        break;
    };
  };


  render() {

    return (
      <div className="App">
        <main className="App__content">
          <div className="App__panel App__panel--left">
            <Stopwatch mainTimer={TimeFormatter(this.state.elapsedMainTime)}
                       lapTimer={TimeFormatter(this.state.elapsedLapTime)}
            />

            <Controls stateRunning={this.state.isRunning}
                      timerProgress={this.state.startMainTime}
                      callback={this.handleControls} 
            />
          </div>
          <div className="App__panel App__panel--right">
            <Laps data={this.state.lapTimes} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
