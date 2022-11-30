import React from 'react';
import '../styles/Main.css';
import Board from './Board';

const Main: React.FC = () => {
  const status = 'Player 1';

  return (
    <div className='Main'>
      <button>Play</button>
      <div className="player active">{status}</div>
      <Board />
      <div className='results'>Results</div>
    </div>
  )
}

export default Main;