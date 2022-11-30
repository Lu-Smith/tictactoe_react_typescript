import React, {useState} from 'react';
import '../styles/Main.css';
import Board from './Board';



const Main: React.FC = () => {

  const [player, setPlayer] = useState<string>('Player 1');
  const [value, setValue] = useState<string | null>(null);
  const [values, setValues] = useState<(string | number)[]>(['', 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
  const [result, setResult] = useState<string>('');
  const [turn, setTurn] = useState<boolean>(true);
  const playerDisplay: HTMLElement | null = document.getElementById('player');
  const valueDisplay: HTMLElement | null = document.getElementById('value');

  

  const startGame = () => {
     setPlayer('Player 1')
     setValue(null)
     setResult('Your move player 1')
  };

  let currentValue: (string | null);


  const updatedValue = (i:number) : void => {

    let addSymbol;
    if (turn === false && player === 'Player 2') {
      
      setValue('X');
      setPlayer('Player 1');
      setResult('Your move player 1');
      setTurn(true);
      currentValue = 'O';
      i++;
      addSymbol = values.indexOf(i-1);
      playerDisplay?.classList.remove('active');
      valueDisplay?.classList.remove('active');

     
    } else if (turn === true && player === 'Player 1') {
      setValue('0');
      setPlayer('Player 2');
      setResult('Your move player 2');
      setTurn(false);
      currentValue = 'X';
      i++;
      addSymbol = values.indexOf(i-1);
      playerDisplay?.classList.add('active');
      valueDisplay?.classList.add('active');
    } else {
      return;
    }
     
    if (values[i-1] !== 'X' && values[i-1] !== 'O') {
      values[addSymbol] = currentValue;
    }
    
    setValues(values);
    console.log(i-1);
}

  return (
    <div className='Main'>
      <button onClick={startGame}>Play</button>
      <div className="player active" id='player'>{player}</div>
      <div className='player active' id='value'>{value}</div>
      <Board values={values} player={player} result={result} updatedValue={i => updatedValue(i)}/>
      <div className='results'>{result}</div>
    </div>
  )
};

export default Main;