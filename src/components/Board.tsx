import React from 'react';
import '../styles/Board.css';
import Square from './Square';

const Board: React.FC = () => {
    
  return (
    <div className='Board'>
        <div className='board-row'>
            <Square />
            <Square />
            <Square />
        </div>
        <div className='board-row'>
            <Square />
            <Square />
            <Square />
        </div>
        <div className='board-row'>
            <Square />
            <Square />
            <Square />
        </div>
    </div>
  )
}

export default Board;