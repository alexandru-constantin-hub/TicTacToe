import PropTypes from 'prop-types';

export default function Log({turns}) {
    return (
        <div className='border-t-4 border-sky-500'>
        <h1 className="text-center text-2xl text-sky-700 font-bold">Log</h1>
        <ul className="p-2">
            {turns.map(turn => (
                <li key={`${turn.square.row}${turn.square.col}`}>Player {turn.player} played in row {turn.square.row + 1}, column {turn.square.col + 1}</li> 
            ))}
               
        </ul>
        </div>
    );
}

Log.propTypes = {
    turns: PropTypes.array.isRequired
};