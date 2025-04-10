import React from 'react';
import logo from '../../assets/image/logo.png';
import coin from '../../assets/image/icons8-coin.gif';

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-between m-10 items-center static'>
            <div>
                <img className='w-20' src={logo} alt="" />
            </div>
            <div className='flex gap-12 items-center'>  
                <a className=' text-gray-600' href="">Home</a>
                <a className=' text-gray-600' href="">Fixture</a>
                <a className=' text-gray-600' href="">Teams</a>
                <a className=' text-gray-600' href="">Schedules</a>
                <div className='border-2 font-bold bg-yellow-50 rounded-xl p-2 flex gap-1'>
                    <p>0</p>
                    <p>Coin</p>
                    <img className='w-6' src={coin} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;