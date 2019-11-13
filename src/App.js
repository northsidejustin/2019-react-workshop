import React, { Component } from 'react'
import Player from './Player'
import Board from './Board'

class App extends Component {
  constructor(){
    super()
    this.state = {
      players:[
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
  render(){
    return(
      <div className="app">
        {/* <Player/>
        <Player/>
        <Player/> */}

        <Board/>
      </div>
    )
  }
}

export default App;
