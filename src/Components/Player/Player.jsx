import React from 'react';
import user from '../../assets/image/user.svg'
import flag from '../../assets/image/icons8-flag-24.png'

const Player = ({ player, handleSelectedPlayers }) => {
    const { battingStyle, name, country, image, role, biddingPrice } = player
    return (
        <div className=" border mx-auto rounded-xl p-4 shadow-md m-4">
            <img
                src={image}
                alt={name}
                className="rounded-xl  h-72 object-cover"
            />
            <div className='pt-3 flex items-center gap-1'>
                <img className='w-6' src={user} alt="" />
                <h1 className='text-md font-bold pt-2'>{name}</h1>
            </div>
            <div className='flex justify-between items-center  mb-4'>
                <div className='flex pt-3 gap-1'>
                    <img className='w-5' src={flag} alt="" />
                    <h1 className='text-gray-500'>{country}</h1>
                </div>
                <div className='border-2 p-2 rounded-xl bg-slate-200'>
                    <p>{role}</p>
                </div>
            </div>
            <div className='border-b-2 mb-4'></div>
            <div className='space-y-2'>
                <h1 className='font-bold'>Rating</h1>
                <div className='flex justify-between items-center'>
                    <h1 className=''>{battingStyle}</h1>
                    <h1 className='text-gray-500'>{battingStyle}</h1>
                </div>
                <div className='flex justify-between items-center'>
                    <h1 className='font-bold'>Price: ${biddingPrice}</h1>
                    <button onClick={()=>handleSelectedPlayers(player)} className='border-2 bg-green-500 font-bold p-2 rounded-xl hover:bg-white hover:text-green-500 transition-all duration-300'>Chose Player</button>
                </div>
            </div>
        </div>
    );
};

export default Player;