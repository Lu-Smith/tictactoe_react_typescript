import React, {useState} from 'react';
import { isFunctionExpression } from 'typescript';
import '../styles/Square.css';

interface SquareProps {
    value: 'X' | 'O' | null;
}

const Square: React.FC<SquareProps> = () => {

    const [value, setValue] = useState('');

    const updateValue = () => {
       setValue('X');
    }
  return (
    <div className='Square' onClick={updateValue}>{value}</div>
  )
}

export default Square;