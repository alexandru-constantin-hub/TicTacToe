import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEdit() {
    setIsEditing((editing) => !editing);
    isEditing && onChangeName(symbol, playerName);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }
    
  
  return (
        <div className={(isActive ? 'border-2 border-red-500': '') + " " + 'flex p-2 w-80 no-wrap justify-between'}>
          <div className='text-center'>
            <div>{symbol}</div>
            {isEditing ? <input type='text' required value={playerName} onChange={handleChange}/> :  <div>{playerName}</div> }          
          </div>
          <button onClick={handleEdit} className="py-2 px-1 border-2 border-sky-800 w-20">{ isEditing ? 'Save' : 'Edit' }</button>
        </div>
    );
}

Player.propTypes = {
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onChangeName: PropTypes.func.isRequired
};