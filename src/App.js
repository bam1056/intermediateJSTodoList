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

  componentWillMount () {
    fetch(`https://one-list-api.herokuapp.com/items?access_token=${TOKEN}`)
      .then((resp) => { return resp.json() })
      .then((data) => {
        this.setState({ listItems: data })
      })
  }

  addToList = (newListText) => {
    const newListItems = this.state.listItems
    fetch(`https://one-list-api.herokuapp.com/items?access_token=${TOKEN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item: {
          text: newListText
        }
      })
    })
    .then((response) => { return response.json() })
    .then((data) => {
      newListItems.push(data)
      this.setState({
        listItems: newListItems
      })
    })
  }

  completeItem = (index) => {
  const newListItems = this.state.listItems
  const item = newListItems[index]
  fetch(`https://one-list-api.herokuapp.com/items/${item.id}?access_token=${TOKEN}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item: {
        complete: `${!item.complete}`
      }
    })
  })
  .then((response) => { return response.json() })
  .then((data) => {
    newListItems[index] = data
    this.setState({
      listItems: newListItems
    })
  })
}

removeItem = (index) => {
  const newListItems = this.state.listItems
  const item = newListItems[index]
  fetch(`https://one-list-api.herokuapp.com/items/${item.id}?access_token=${TOKEN}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(() => {
    newListItems.splice(index, 1)
    this.setState({
      listItems: newListItems
    })
  })
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
