import React, { Component } from 'react';
import './Stopwatch.css';


export default class Stopwatch extends Component {
  /**
   * @function constructor
   */
  // constructor(props) {
  //   super(props);
  // };

  /**
   * @function render
   */
  render() {

    return(
      <div className="Stopwatch">
        <div>
          <div className="Stopwatch__main">
            {this.props.mainTimer}
          </div>
          <div className="Stopwatch__lap">
            {this.props.lapTimer}
          </div>
        </div>
      </div>
    )
  }
}