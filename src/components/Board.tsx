import React, {ReactNode} from 'react';
import '../styles/Board.css';
import Square from './Square';

interface BoardProps {
    values: (string | number)[];
    player: string;
    result: string;
    active: string;
    updatedValue(i: number): void;
}

const Board: React.FC<BoardProps> = (props) => {
    const renderSquare = (i: number): ReactNode => {
       return <Square active={props.active} value={props.values[i]} player={props.player} result={props.result} updatedValue={() => props.updatedValue(i)} />
    }
    
  return (
    <div className='Board'>
        <div className='board-row'>
            {renderSquare(1)}
            {renderSquare(2)}
            {renderSquare(3)}
        </div>
        <div className='board-row'>
            {renderSquare(4)}
            {renderSquare(5)}
            {renderSquare(6)}
        </div>
        <div className='board-row'>
            {renderSquare(7)}
            {renderSquare(8)}
            {renderSquare(9)}
        </div>
    </div>
  )
}

export default Board;