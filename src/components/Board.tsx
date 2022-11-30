import React from 'react';
import '../styles/Board.css';
import Square from './Square';

interface BoardProps {
    value: string | null;
    player: string;
    result: string;
    updatedValue(): void;
}

const Board: React.FC<BoardProps> = (props) => {
    
  return (
    <div className='Board'>
        <div className='board-row'>
            <Square value={props.value} player={props.player} result={props.result} updatedValue={props.updatedValue}/>
            <Square value={props.value} player={props.player} result={props.result} updatedValue={props.updatedValue}/>
            <Square value={props.value} player={props.player} result={props.result} updatedValue={props.updatedValue}/>
        </div>
        <div className='board-row'>
            <Square value={props.value} player={props.player} result={props.result} updatedValue={props.updatedValue}/>
            <Square value={props.value} player={props.player} result={props.result} updatedValue={props.updatedValue}/>
            <Square value={props.value} player={props.player} result={props.result} updatedValue={props.updatedValue}/>
        </div>
        <div className='board-row'>
            <Square value={props.value} player={props.player} result={props.result} updatedValue={props.updatedValue}/>
            <Square value={props.value} player={props.player} result={props.result} updatedValue={props.updatedValue}/>
            <Square value={props.value} player={props.player} result={props.result} updatedValue={props.updatedValue}/>
        </div>
    </div>
  )
}

export default Board;