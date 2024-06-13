import PropTypes from 'prop-types';

export default function GameOver({ winner, onRestart }) {
    return (
        <div className='text-2xl text-center p-5 absolute z-2 inset-0'>
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
                {winner && <p>{winner} is the winner</p>}
                {!winner && <p>It&apos;s a draw</p>}
                <div className="items-center px-4 py-3">
                    <button onClick={onRestart}
                        className="px-4 py-2 bg-red-500 text-white
                            text-base font-medium rounded-md w-full
                            shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">
                        Restart
                    </button>
                </div>
            </div>
        </div>

            
        </div>
    );
}

GameOver.propTypes = {
    winner: PropTypes.string.isRequired,
    onRestart: PropTypes.func.isRequired
};