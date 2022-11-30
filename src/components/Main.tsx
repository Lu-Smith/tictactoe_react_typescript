import React from 'react';
import '../styles/Main.css';
import Board from './Board';

const Main = () => {
  return (
    <div className='Main'>
      <button>Play</button>
      <div className="player active">Player1</div>
      <Board />
      <div className='results'>Results</div>
    </div>
  )
}

export default Main;