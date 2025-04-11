import React from 'react';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const SelectedPlayers = ({ selectedPlayers }) => {
    //console.log(selectedPlayers)
    return (
        <div className='w-11/12 mx-auto mb-24 space-y-4'>{
            selectedPlayers.map((selectedPlayer,idx) => <SelectedPlayer key={idx} selectedPlayer={selectedPlayer}></SelectedPlayer>)
        }
        </div>
    );
};

export default SelectedPlayers;