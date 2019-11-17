import React, { Component } from 'react'
import { get } from 'lodash';
import Board from './Board'
import Modal from "./Modal"
import PlayerInput from "./PlayerInput";
import './App.css'

class App extends Component { 
  constructor() {
    super()
    this.state = {
      displayModal: false,
      players: [
        {name: 'player 1', score: 0},
        {name: 'player 2', score: 0},
        {name: 'player 3', score: 0}
      ]
    }
  }

  setModal = (question) => {
    this.setState({modalData: {...question}})
    this.openModal()
  }

  openModal = ()=>{
    this.setState({
      displayModal: true
    })
  }

  closeModal = ()=>{
    this.setState({
      displayModal: false
    })
  }

  setPlayerName = (index, name) => {
    this.setState(prevState => {
      let players = prevState.players;
      players[index].name = name;
      return({players})
    })
  }

  setPlayerScore = (index, operation) => {
    const currValue = get(this.state, `modalData.value`, 0);
    const scoreChange = operation === 'add' ? currValue : (-1 * currValue);

    this.setState(prevState => {
      let players = prevState.players;
      players[index].score += scoreChange;
      return({players})
    })
  }

  render() {
    const { displayModal, modalData, players } = this.state

    const playerList = players.map((player, index) => {
      return (
        <PlayerInput
          key={index}
          name={player.name}
          score={player.score}
          setName={(name) => this.setPlayerName(index, name)}
          setScore={(operation) => this.setPlayerScore(index, operation)}
        />
      )
    })

    return (
      <div className="app">
        <Board setModal={this.setModal}/>
        <Modal modalData={modalData} displayModal={displayModal} onClose={this.closeModal}/>
        <div className="player-list">
          {playerList}
        </div>
      </div>
    )
  }
}

export default App
