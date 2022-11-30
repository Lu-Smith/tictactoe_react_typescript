import React, {useState} from 'react';
import '../styles/Main.css';
import Board from './Board';

interface MainProps {
  value: 'X' | 'O' | null;
  player: 'Player 1' | 'Player 2';
  result: string;
}


const Main: React.FC<MainProps> = () => {

  const [player, setPlayer] = useState('Player 1');
  const [value, setValue] = useState(null);
  const [result, setResult] = useState('');
  const startGame = () => {
     setPlayer('Player 1')
     setValue(null)
     setResult('Your move ' + player)
  };

  return (
    <div className='Main'>
      <button onClick={startGame}>Play</button>
      <div className="player active">{player}</div>
      <Board value={value}/>
      <div className='results'>{result}</div>
    </div>
  )
};

export default Main;