import React, { Component } from 'react';
import './Controls.css';


export default class Controls extends Component {
  /**
   * @function constructor
   */
  constructor() {
    super();
  };

  /**
   * @function render
   */
  render() {

    return(
      <div className="Controls">
        <p>
          Controls go here
        </p>
        <p>
          And here
        </p>
      </div>
    )
  }
}