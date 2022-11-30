import React from 'react';


import '../styles/Square.css';

interface SquareProps {
    value: string | number;
    player: string;
    result: string;
    updatedValue(): void;
  }

const Square: React.FC<SquareProps> = (props) => {
  return (
    <div className='Square' onClick={props.updatedValue}>{props.value}</div>
    
  )
}

export default Square;