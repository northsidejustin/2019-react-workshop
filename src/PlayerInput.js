import React from 'react';

const PlayerInput = ({ playerNumber, onChange, value }) => (
  <div className="player-input">
    <input
      type="text"
      name="player-name"
      placeholder={`Player ${playerNumber} name`}
      onChange={event => onChange(event, playerNumber)}
      value={value}
    />
  </div>
);

export default PlayerInput;
