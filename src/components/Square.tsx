import React from 'react';
import '../styles/Square.css';

interface SquareProps {
    value: string | number;
    player: string;
    result: string;
    active: string;
    updatedValue(): void;
  }

const Square: React.FC<SquareProps> = (props) => {

  return (
    <div className='Square' onClick={props.updatedValue}>
        <span className={props.active}>{props.value}</span></div>
    
  )
}

export default Square;