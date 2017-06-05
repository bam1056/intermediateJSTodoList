import React, { Component } from 'react'

class Item extends Component {


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
