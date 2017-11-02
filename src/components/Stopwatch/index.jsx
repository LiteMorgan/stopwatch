import React, { Component } from 'react';
import './Stopwatch.css';


export default class Stopwatch extends Component {
  /**
   * @function constructor
   */
  constructor(props) {
    super(props);
  };

  /**
   * @function render
   */
  render() {

    return(
      <div className="Stopwatch">
        <p>Stopwatch goes here</p>
      </div>
    )
  }
}