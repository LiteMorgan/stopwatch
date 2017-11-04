import React, { Component } from 'react';
import TimeFormatter        from 'minutes-seconds-milliseconds';

import './Laps.css';


export default class Laps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayOrder: [],
    }
  }


  /**
   * @function render
   */
  render() {

    return(
      <div className="Laps">
        <ol>
          {
            this.props.data.map((lap, key) => {
              return (
                <li key={key}>
                  <span className="Laps__number">Lap {key + 1}</span>
                  <span className="Laps__time">{TimeFormatter(lap)}</span>
                </li>
              )
            })
          }
        </ol>    
      </div>
    )
  }
}