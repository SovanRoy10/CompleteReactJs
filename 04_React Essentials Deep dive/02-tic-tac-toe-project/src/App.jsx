import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";

import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winning-combination";
import GameOver from "./components/GameOver";

function derivedActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
function App() {

  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  const [playerNames, setPlayerNames] = useState({
    X: 'Player 1',
    O: 'Player 2'
  })

  const activePlayer = derivedActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((array) => [...array])];

  for (const turn of gameTurns) {

    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;

  }

  let winner = undefined;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol)
      winner = playerNames[firstSymbol];
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquares = (rowIndex, colIndex) => {
    // setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X');


    setGameTurns((prevTurns) => {
      //   let currentPlayer = 'X';
      //   if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
      //     currentPlayer = 'O';
      //   }

      const currentPlayer = derivedActivePlayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];

      return updatedTurns;
    });

  }

  function handleRestart() {
    setGameTurns([]);
  }

  const handlePlayerNameChange = ((symbol, newName) => {
    setPlayerNames((prevNames) => {
      return {
        ...prevNames,
        [symbol]: newName
      }
    })
  })


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange} />
        </ol>

        {/* <GameBoard onSelectSquare={handleSelectSquares} activePlayerSymbol={activePlayer} /> */}
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquares} board={gameBoard} />
      </div>

      <Log turns={gameTurns} />
    </main>
  )
}

export default App
