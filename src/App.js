import React, { Component } from 'react'
import List from './List'
import Input from './Input'
import logo from './logo.svg'

const TOKEN = "SOMETOKENHERE"

class App extends Component {

  constructor () {
    super()
    this.state = {
      listItems: []
    }
  }


  render () {
    return (
      <div className='App'>
        <header>
          <h1>One List</h1>
        </header>
        <main>
          <List
            items={this.state.listItems}
            completeItem={this.completeItem}
            removeItem={this.removeItem} />
          <Input onAddToList={this.addToList}/>
        </main>
        <footer>
          <p><img src={logo} height="42" alt="React"/></p>
          <p>&copy; IntermediateJS C/O 2017 </p>
        </footer>
      </div>
    )
  }
}

export default App
