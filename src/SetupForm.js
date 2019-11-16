import React, { Component } from 'react';
import PlayerInput from './PlayerInput';


class SetupForm extends Component {
  constructor() {
    super();
    this.state = {
      p1: '',
      p2: '',
      p3: ''
    }
  }
  
  render() {
    const {p1, p2, p3} = this.state;
    const buttonDisabled = !(p1 && p2 && p3);

    return (
      <div className="setup-form">
        <h1>Welcome to Jeopardy!</h1>
        <div className="player-input-list">
          <PlayerInput playerNumber={1} onChange={this.onChange}/>
          <PlayerInput playerNumber={2} onChange={this.onChange}/>
          <PlayerInput playerNumber={3} onChange={this.onChange}/>
        </div>
        <button disabled={buttonDisabled}>Start Game!</button>
      </div>
    )
  }

  onChange = (event, playerNumber) => {
    this.setState({[`p${playerNumber}`]: event.target.value})
  }
}

export default SetupForm;


/**
 *
 *

category (column)
- title
- 5 questions

board (row)
- 6 caetgories

[
  {
    category: 'cats',
    questions: [
      {
        value: 100,
        question: '',
        answer: '',
        asked: false
      },
      ...more questions
    ]
  },
  ...more categories
]


 */
