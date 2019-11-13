import React, { Component } from 'react'
import Player from './Player'

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
        <Player/>
        <Player/>
        <Player/>
      </div>
    )
  }

}

export default App;
