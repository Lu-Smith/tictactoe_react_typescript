import React, {useState} from 'react';


import '../styles/Square.css';

interface SquareProps {
    value: string | null;
    player: string;
    result: string;
  }



const Square: React.FC<SquareProps> = (props) => {

    const [value, setValue] = useState(props.value);

    const updateValue = () => {
        if (value === null) {
            setValue('X')
            console.log('ok');
        } else {
            return null;
        }
    }

  return (
    <div className='Square' onClick={updateValue}>{value}</div>
  )
}

export default Square;