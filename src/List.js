import React, { Component } from 'react'
import Item from './Item'

class List extends Component {

  render () {
    const items = this.props.items.map((item, index) => {
      return <Item
        text={item.text}
        complete={item.complete}
        completeItem={this.props.completeItem}
        removeItem={this.props.removeItem}
        index={index}
        key={index} />
    })
    return <ul className='one-list'>
      {items}
    </ul>
  }
}
export default List
