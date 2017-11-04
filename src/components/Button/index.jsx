import React, { Component } from 'react';
//import classNames           from 'classnames';
import './Button.css';


export default class Button extends Component {

  handleClick = event => {
    this.props.clickEvent(event);
  }


  /**
   * @function render
   */
  render() {

    return(
      <button className={'Button' + (this.props.classes ? ' ' + this.props.classes : '')}
              value={this.props.value}
              disabled={this.props.disabled}
              onClick={this.handleClick}
      >
        {this.props.label || 'button'}
      </button>
    )
  }
}