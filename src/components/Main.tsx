import React, {useState} from 'react';
import '../styles/Main.css';
import Board from './Board';

const Main: React.FC = () => {

  const [player, setPlayer] = useState<string>('Player 1');
  const [value, setValue] = useState<string | null>(null);
  const [values, setValues] = useState<(string | number)[]>([0,1,2,3,4,5,6,7,8,9]);
  const [result, setResult] = useState<string>('');
  const [turn, setTurn] = useState<boolean>(true);
  const [active, setActive] = useState<string>('transparent');

  const startGame = () => {
    window.location.reload(); 
     setResult('Your move player 1');
  };

  let currentValue: (string | null);

  const updatedValue = (i:number) : void => {
    let addSymbol;
    if (turn === false && player === 'Player 2' && values[i] !== 'X' && values[i] !== 'O') {
      setValue('X');
      setPlayer('Player 1');
      setResult('Your move player 1');
      setTurn(true);
      setActive('player1');
      currentValue = 'O';
      i++;
      addSymbol = values.indexOf(i-1);
    } else if (turn === true && player === 'Player 1' && values[i] !== 'X' && values[i] !== 'O') {
      setValue('0');
      setPlayer('Player 2');
      setResult('Your move player 2');
      setTurn(false);
      setActive('player2');
      currentValue = 'X';
      i++;
      addSymbol = values.indexOf(i-1);
    } else {
      return;
    }
     
    if (values[i-1] !== 'X' && values[i-1] !== 'O') {
      values[addSymbol] = currentValue;
    }

   for (i = 0; i < values.length; i++) {
    if (values[1] === 'X' && values[2] === 'X' && values[3] === 'X') {
      setResult('Game Over');
      setActive('player1');
      setPlayer('Player 1');
      setValue('won');
    } else if (values[4] === 'X' && values[5] === 'X' && values[6] === 'X') {
      setResult('Game Over');
      setActive('player1');
      setPlayer('Player 1');
      setValue('won');
    } else if (values[7] === 'X' && values[8] === 'X' && values[9] === 'X') {
      setResult('Game Over');
      setActive('player1');
      setPlayer('Player 1');
      setValue('won');
    } else if (values[1] === 'X' && values[4] === 'X' && values[7] === 'X') {
      setResult('Game Over');
      setActive('player1');
      setPlayer('Player 1');
      setValue('won');
    } else if (values[2] === 'X' && values[5] === 'X' && values[8] === 'X') {
      setResult('Game Over');
      setActive('player1');
      setPlayer('Player 1');
      setValue('won');
    } else if (values[3] === 'X' && values[6] === 'X' && values[9] === 'X') {
      setResult('Game Over');
      setActive('player1');
      setPlayer('Player 1');
      setValue('won');
    } else if (values[1] === 'X' && values[5] === 'X' && values[9] === 'X') {
      setResult('Game Over');
      setActive('player1');
      setPlayer('Player 1');
      setValue('won');
    } else if (values[3] === 'X' && values[5] === 'X' && values[7] === 'X') {
      setResult('Game Over');
      setActive('player1');
      setPlayer('Player 1');
      setValue('won');
    } else if (values[1] === 'O' && values[2] === 'O' && values[3] === 'O') {
      setResult('Game Over');
      setActive('player2');
      setPlayer('Player 2');
    } else if (values[4] === 'O' && values[5] === 'O' && values[6] === 'O') {
      setResult('Game Over');
      setActive('player2');
      setPlayer('Player 2');
      setValue('won');
    } else if (values[7] === 'O' && values[8] === 'O' && values[9] === 'O') {
      setResult('Game Over');
      setActive('player2');
      setPlayer('Player 2');
      setValue('won');
    } else if (values[1] === 'O' && values[4] === 'O' && values[7] === 'O') {
      setResult('Game Over');
      setActive('player2');
      setPlayer('Player 2');
      setValue('won');
    } else if (values[2] === 'O' && values[5] === 'O' && values[8] === 'O') {
      setResult('Game Over');
      setActive('player2');
      setPlayer('Player 2');
      setValue('won');
    } else if (values[3] === 'O' && values[6] === 'O' && values[9] === 'O') {
      setResult('Game Over');
      setActive('player2');
      setPlayer('Player 2');
      setValue('won');
    } else if (values[1] === 'O' && values[5] === 'O' && values[9] === 'O') {
      setResult('Game Over');
      setActive('player2');
      setPlayer('Player 2');
      setValue('won');
    } else if (values[3] === 'O' && values[5] === 'O' && values[7] === 'O') {
      setResult('Game Over');
      setActive('player2');
      setPlayer('Player 2');
      setValue('won');
    } else if (values[1] !== 1 && values[2] !== 2 && values[3] !== 23 && values[4] !== 4 && values[5] !== 5 && values[6] !== 6 && values[7] !== 7 && values[8] !== 8 && values[9] !== 9) {
      setResult('Draw');
    }
      }
    setValues(values);
}

  return (
    <div className='Main'>
      <button onClick={startGame}>Play</button>
      <div className='player-headline'>
        <div className='player' id='player'><span className={active}>{player}</span></div>
        <div className='player' id='value'><span className={active}>{value}</span></div>
      </div>
      <Board active={active} values={values} player={player} result={result} updatedValue={i => updatedValue(i)}/>
      <div className='results'>{result}</div>
    </div>
  )
};

export default Main;