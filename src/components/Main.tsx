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
      setActive('player1');
      currentValue = 'O';
      i++;
      addSymbol = values.indexOf(i-1);
  
      

     
    } else if (turn === true && player === 'Player 1') {
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
    
    setValues(values);
    console.log(values);
}

  return (
    <div className='Main'>
      <button onClick={startGame}>Play</button>
      <div className='player' id='player'><span className={active}>{player}</span></div>
      <div className='player' id='value'><span className={active}>{value}</span></div>
      <Board active={active} values={values} player={player} result={result} updatedValue={i => updatedValue(i)}/>
      <div className='results'>{result}</div>
    </div>
  )
};

export default Main;