// import { useState } from "react"



export default function GameBoard({ onSelectSquare, board }) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // const handleSelectSquare = (rowIndex, colIndex) => {
    //     setGameBoard((prevGameBoard) => {
    //         const updateBoard = [...prevGameBoard.map(innerArrays => [...innerArrays])];
    //         updateBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updateBoard;
    //     });
    //     onSelectSquare()
    // }

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => {
                return <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => {
                            return <li key={colIndex}>
                                {/* <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button> */}
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                            </li>
                        })}
                    </ol>
                </li>
            })}
        </ol>
    )
}
