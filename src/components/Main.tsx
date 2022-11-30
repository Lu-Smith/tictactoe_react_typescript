import React, {useState} from 'react';
import '../styles/Main.css';
import Board from './Board';



const Main: React.FC = () => {

  const [player, setPlayer] = useState<string>('Player 1');
  const [value, setValue] = useState<string | null>(null);
  const [result, setResult] = useState<string>('');

  const startGame = () => {
     setPlayer('Player 1')
     setValue(null)
     setResult('Your move ' + player)
  };

  const updatedValue = () => {
    if (value === null && player === 'Player 1') {
        setValue('X');
        setPlayer('Player 2');
        setResult('Your move Player 2');
    } else if (value === null && player === 'Player 2') {
      setValue('0');
      setPlayer('Player 1'); 
      setResult('Your move Player 1');
    } else {
        return null;
    }
}

  return (
    <div className='Main'>
      <button onClick={startGame}>Play</button>
      <div className="player active">{player}</div>
      <Board value={value} player={player} result={result} updatedValue={updatedValue}/>
      <div className='results'>{result}</div>
    </div>
  )
};

export default Main;