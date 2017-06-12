import React, { Component } from 'react'

class Item extends Component {

  doubleClicking = false

  clickHandler = () => {
    setTimeout(() => {
      if (!this.doubleClicking) {
        this.props.completeItem(this.props.index)
      }
    }, 200)
  }

  doubleClickHandler = () => {
    this.doubleClicking = true
    this.props.removeItem(this.props.index)
  }

  render () {
    const cx = this.props.complete ? 'completed' : ''
    return <li
      className={cx}
      onClick={this.clickHandler}
      onDoubleClick={this.doubleClickHandler}>
      {this.props.text}
    </li>
  }
}

export default Item
