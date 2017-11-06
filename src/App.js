import React, { Component } from 'react'
import classNames           from 'classnames'
import TimeFormatter        from 'minutes-seconds-milliseconds'
import Button               from './components/Button'
import List                 from './components/List'
import TimeDisplay          from './components/TimeDisplay'

import './App.css'
import GitHub from './github.svg'


class App extends Component {
  /**
   * @function constructor
   */
  constructor() {
    super()

    this.state = {
      startMainTime:   null,
      startLapTime:    null,
      elapsedMainTime: null,
      elapsedLapTime:  null,
      resumeLapTime:   null,
      isRunning:       false,
      lapTimes:        [],
    }

    this.interval = null
  }

  /**
   * @function timerStartStop
   * - Start/Stop the Timer
   */
  timerStartStop = () => {
    let {isRunning, elapsedMainTime, elapsedLapTime} = this.state

    // if Timer is running, stop
    if (isRunning) {
      clearInterval(this.interval)
      this.setState({
        isRunning:  false,
        resumeLapTime: elapsedLapTime,
      })
      return
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
        })

      }, 1)
    })
  }


  /**
   * @function timerLap
   * - Logs the currently elapsed time for display
   */
  timerLap = () => {
    let {elapsedLapTime} = this.state

    this.setState({
      startLapTime:   new Date(),
      resumeLapTime:  null,
      lapTimes:       this.state.lapTimes.concat(elapsedLapTime),
    })
  }


  /**
   * @function timerReset
   * - Resets all states back to default, empty settings
   */
  timerReset = () => {
    this.setState({
      startMainTime:    null,
      startLapTime:     null,
      elapsedMainTime:  0,
      elapsedLapTime:   0,
      resumeLapTime:    null,
      lapTimes:         [],
    })
  }


  /**
   * @function render
   */
  render() {
    let startStopLabel  = this.state.isRunning ? 'Stop' : 'Start'
    let lapResetLabel   = this.state.isRunning ? 'Lap' : 'Reset'
    let lapResetClick   = this.state.isRunning ? this.timerLap : this.timerReset

    const startStopClasses = classNames('Button--startstop', {
      'Button--start': !this.state.isRunning,
      'Button--stop':  this.state.isRunning,
    })


    return (
      <div className="App">
        <main className="App__content f--column">

          <div className="panel panel--timer">
            <div className="panel__inner panel__inner--static f--justify-center">
              <TimeDisplay 
                mainTimer={TimeFormatter(this.state.elapsedMainTime)}
                lapTimer={TimeFormatter(this.state.elapsedLapTime)}
              />
            </div>
          </div>

          <div className="panel panel--controls">
            <div className="panel__inner panel__inner--static f--align-items-start f--justify-evenly">
              <Button 
                label={startStopLabel}
                classes={startStopClasses}
                handleClick={this.timerStartStop}
              />
              <Button 
                label={lapResetLabel}
                classes="Button--reset"
                handleClick={lapResetClick}
                disabled={!this.state.startMainTime && !this.state.isRunning}
              />
            </div>
          </div>

          <div className="panel panel--laps">
            <div className="panel__inner panel__inner--scrolling f--align-items-start f--justify-center">
              <List data={this.state.lapTimes} />
            </div>
          </div>
        </main>

        <footer className="footer f--align-items-center f--justify-space-between">
          <span>Built with ♥ by <a href="http//getignited.co.uk">getignited</a>.</span>
          <span>
            <a
              href="https://github.com/getignited/stopwatch"
              className="footer__github"
              title="View on GitHub"
            >
              <img
                src={GitHub}
                alt="View on GitHub"
              />
            </a>
          </span>
        </footer>
      </div>
    )
  }
}


export default App
