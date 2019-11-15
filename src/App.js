import React, { Component } from 'react'
import Board from './Board'
import SetupForm from './SetupForm'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      players: [
        {
          name: String,
          score: Number
        },
        {
          name: String,
          score: Number
        },
        {
          name: String,
          score: Number
        }
      ]
    }
  }
  render() {
    return (
      <div className="app">
        <Board/>
        {/* <SetupForm/> */}
      </div>
    )
  }
}

export default App;
