import React from 'react';
import '../styles/Board.css';
import Square from './Square';

interface BoardProps {
    value: 'X' | 'O' | null;
}

const Board: React.FC<BoardProps> = () => {
    
  return (
    <div className='Board'>
        <div className='board-row'>
            <Square value = {null}/>
            <Square value = {null}/>
            <Square value = {null}/>
        </div>
        <div className='board-row'>
            <Square value = {null}/>
            <Square value = {null}/>
            <Square value = {null}/>
        </div>
        <div className='board-row'>
            <Square value = {null}/>
            <Square value = {null}/>
            <Square value = {null}/>
        </div>
    </div>
  )
}

export default Board;