import React, { Component } from 'react';
//import classNames           from 'classnames';
import './Button.css';


export default class Button extends Component {
  /**
   * @function constructor
   */
  constructor(props) {
    super(props);

    this.classes    = this.props.classes;
    this.disabled   = this.props.disabled;
  };


  handleClick = event => {
    this.props.clickEvent(event);
  }

  /**
   * @function render
   */
  render() {
    return(
      <button className={'Button ' + this.classes}
              value={this.props.value}
              disabled={this.props.disabled}
              onClick={this.handleClick}
      >
        {this.props.label || 'button'}
      </button>
    )
  }
}