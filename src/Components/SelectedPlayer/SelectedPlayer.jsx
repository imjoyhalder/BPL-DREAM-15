import React from 'react';
import deleteIcon from '../../assets/image/icons8-delete-64.png'

const SelectedPlayer = ({ selectedPlayer }) => {
    const { name, image, role } = selectedPlayer;
    return (
        <div className='border-4 p-4 rounded-xl flex justify-between items-center'>
            <div className='flex gap-3'>
                <div className=' w-20 overflow-hidden'>
                    <img className='object-cover  ' src={image} alt="" />
                </div>
                <div className='space-y-1'>
                    <h1 className='text-xl font-bold'>{name}</h1>
                    <p className='text-gray-400'>{role}</p>
                </div>
            </div>
            <div>
                <button><img className='h-10' src={deleteIcon} alt="" /></button>
            </div>
        </div>
    );
};

export default SelectedPlayer;