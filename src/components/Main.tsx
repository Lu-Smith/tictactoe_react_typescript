import React, {useState} from 'react';
import '../styles/Main.css';
import Board from './Board';



const Main: React.FC = () => {

  const [player, setPlayer] = useState<string>('Player 1');
  const [value, setValue] = useState<string | null>(null);
  const [values, setValues] = useState<(string | null)[]>([]);
  const [result, setResult] = useState<string>('');
  const [turn, setTurn] = useState<boolean>(true);

  const startGame = () => {
     setPlayer('Player 1')
     setValue(null)
     setResult('Your move player 1')
  };
  let currentValue: (string | null);
  let currentScore: (string | null )[] = ['', '', '','', '', '','', '', '', '', '' ];





  const updatedValue = (i:number) : void => {
    if (turn === false && player === 'Player 2') {
      setValue('O');
      setPlayer('Player 1');
      setResult('Your move player 1');
      setTurn(true);
      currentValue = 'O';
      i++;
    } else if (turn === true && player === 'Player 1') {
      setValue('X');
      setPlayer('Player 2');
      setResult('Your move player 2');
      setTurn(false);
      currentValue = 'X';
      i++;
    } else {
      return;
    }
    currentScore[i - 1] = currentValue;
    console.log(i);
    console.log(currentScore);
    setValues(currentScore);
    console.log(values);
}

  return (
    <div className='Main'>
      <button onClick={startGame}>Play</button>
      <div className="player active">{player}</div>
      <div>{value}</div>
      <Board values={values} player={player} result={result} updatedValue={i => updatedValue(i)}/>
      <div className='results'>{result}</div>
    </div>
  )
};

export default Main;