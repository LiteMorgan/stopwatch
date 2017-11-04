import React, { Component } from 'react';
import classNames           from 'classnames';
import Button               from './../Button';
import './Controls.css';


export default class Controls extends Component {
  /**
   * @function constructor
   */
  constructor() {
    super();

    this.state = {
      active: false,
      timer:  false,
    }
  };


  /**
   * @function clickCallback
   * @param (obj) event:
   */
  clickCallback = event => {
    this.props.callback(event.target.value);
  };


  /**
   * @function render
   */
  render() {
    const startStopClasses = classNames('Button--startstop', {
      'Button--start': !this.props.stateRunning,
      'Button--stop':  this.props.stateRunning,
    });

    return(
      <div className="Controls">
        <Button label={this.props.stateRunning ? 'Stop' : 'Start'}
                classes={startStopClasses}
                value="start"
                clickEvent={this.clickCallback}
        />
        <Button label={this.props.stateRunning ? 'Lap' : 'Reset'}
                classes="Button--reset"
                value={this.props.stateRunning ? 'lap' : 'reset'}
                clickEvent={this.clickCallback}
                disabled={!this.props.timerProgress && !this.props.stateRunning}
        />
      </div>
    )
  }
}