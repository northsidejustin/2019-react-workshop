import React from 'react';

const PlayerInput = ({ name, score, setName, setScore }) => {
  const onChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div className="player-input">
      <input
        type="text"
        value={name}
        onChange={onChange}
      />
      <div className="player-score">
        <button onClick={() => {setScore('sub')}}> - </button>
        <label>{score}</label>
        <button onClick={() => {setScore('add')}}> + </button>
      </div>
    </div>
  )
};

export default PlayerInput;
