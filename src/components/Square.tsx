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
        <span className={(props.value === 'X' || props.value === 'O') ? props.active : 'transparent'}>{props.value}</span></div>
    
  )
}

export default Square;