import React, { Component } from 'react'
import './Button.css'


export default class Button extends Component {

  /**
   * @function render
   */
  render() {
    return(
      <button 
        className={'Button' + (this.props.classes ? ' ' + this.props.classes : '')}
        onClick={this.props.handleClick}
        disabled={this.props.disabled}
      >
        {this.props.label || 'button'}
      </button>
    )
  }
}