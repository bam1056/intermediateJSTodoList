import React, { Component } from 'react'

class Input extends Component {

  constructor () {
    super()
    this.state = {
      text: ''
    }
  }



  render () {
    return <form onSubmit={this.submitHandler}>
      <input type='text' value={this.state.text}
       onChange={this.handleChange} />
    </form>
  }
}
export default Input
