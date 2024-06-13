import PropTypes from "prop-types";

export default function GameBoard({ onSelectSquare, board, children }) {    
    return (
        <div className="grid grid-cols-3 gap-2 p-4 max-w-[60%] m-auto relative">
            {board.map(
                (row, rowIndex) => row.map((playerSymbol, colIndex) =>
                <div className="w-40 h-40 bg-slate-200 m-auto" key={rowIndex + colIndex}>
                    <button className="w-40 h-40" onClick={()=>onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !==null}>
                        <span className="text-center text-6xl mx-10 my-20 text-sky-700 font-bold">{board[rowIndex][colIndex]}</span>
                    </button>
                </div>
            ))}
            {children}
        </div>
    )
}

GameBoard.propTypes = {
    onSelectSquare: PropTypes.func.isRequired,
    board: PropTypes.array.isRequired,
    children: PropTypes.node
};