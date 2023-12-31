import React, { useState } from 'react'
import Card from '../Cards/Card';
import './Grid.css'
import Checkwinner from '../Helper/Checkwinner';

function Grid({numberOfCards}) {
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn , setTurn] = useState(true);
    const [winner, setWinner] = useState(null);

   function play(index){
        if(turn == true){
            board[index] = 'O';
        }else{
            board[index] = 'X';
        }
    const win = Checkwinner(board , turn ? 'O' : 'X');
    if(win){
        setWinner(win);
    }
    setBoard([...board]);
    setTurn(!turn);

   } 

   function reset(){
    setBoard(Array(numberOfCards).fill(""));
    setTurn(true);
    setWinner(null);

   }
  return (
    <div className='Grid-wrapper'> 
    {
        winner &&
        <>
            <h1 className='Turn-Highlight'> Winner is {winner}</h1>
            <button onClick={reset}>Reset</button>
        </>
    }
    <h1 className='Turn-Highlight'>Current turn : {(turn)? 'O':'X'}</h1>
    <div className='Grid'>
        {console.log(board.el)}
        {board.map((el, idx) => <Card gameEnd = {winner ? true : false} key = {idx} onPlay = {play} player={el} index={idx}/> )}
    </div>
    </div>
    
  )
}

export default Grid