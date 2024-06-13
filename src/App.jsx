import { useState } from 'react'

import './App.css'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import GameOver from './components/GameOver'
import { WINNING_COMBINATIONS } from './winning-combinations';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = '0';
  }

  return currentPlayer;
}


function App() {
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2'
  });
  const [gameTurns, setGameTurns] = useState([])

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((array) => [...array])];

  let winner = null;

  gameTurns.forEach((turn) => {
       const { square, player } = turn;
       const { row, col } = square;

       gameBoard[row][col] = player;
    })

  WINNING_COMBINATIONS.forEach((combination) => {
    const [firstSquareSymbol, secondSqureSymbol, thirdSquareSymbol] =
    [
      gameBoard[combination[0].row][combination[0].column],
      gameBoard[combination[1].row][combination[1].column],
      gameBoard[combination[2].row][combination[2].column]
    ];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSqureSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }

  });

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => {
      
      const currentPlayer = deriveActivePlayer(prevGameTurns);

      const updatedTurns = [
        {square: {row: rowIndex, col: colIndex}, player: currentPlayer},
        ...prevGameTurns
      ];

      return updatedTurns;
  })}

  function handleEditPlayerName(playerSymbol, newName) {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [playerSymbol]: newName
    }))
  }

  return (
    <div className="border border-4 border-sky-500 max-w-[75%] m-auto">
      <div className='border-b-4 border-sky-500 flex justify-between p-5 bg-slate-200'>
        <Player name={players.X} symbol='X' isActive={activePlayer === 'X'} onChangeName={handleEditPlayerName} />
        <Player name={players.O} symbol='0' isActive={activePlayer === '0'} onChangeName={handleEditPlayerName} />
      </div>
     
      <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}>
      {(winner || hasDraw) && <GameOver winner={winner} onRestart={() => setGameTurns([])} />}
      </GameBoard>
      <Log turns={gameTurns}  />
    </div>
  )
}

export default App
