import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Players = ({ handleAvailablePlayers, availablePlayer , handleSelectedPlayers }) => {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('cricketer-data.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    

    //console.log(players)
    return (
        <div className='w-11/12 mx-auto mb-10'>
            <div className='mt-6 mb-10 flex justify-between items-center'>
                <h1 className='text-lg md:text-2xl font-bold'>Available Players</h1>
                <div>
                    <button onClick={handleAvailablePlayers} className='border-2 p-2 md:p-4 font font-bold rounded-l-xl'>Available</button>
                    <button className='border-2 p-2 md:p-4 font font-bold rounded-r-xl'>Selected()</button>
                </div>
            </div>
            {   
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                    {
                        players.map((player) => <Player 
                            key={player.playerId}
                            player={player} 
                            handleSelectedPlayers= {handleSelectedPlayers}
                            ></Player>)
                    }
                </div>
            }

        </div>
    );
};

export default Players;