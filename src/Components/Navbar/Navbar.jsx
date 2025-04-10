import React, { useState } from 'react';
import logo from '../../assets/image/logo.png';
import coin from '../../assets/image/icons8-coin.gif';
import menu from '../../assets/image/icons8-menu-48.png'

const Navbar = ({ coins }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='backdrop-blur-md shadow-md sticky top-0 z-10 rounded-b-2xl'>
            <div className='w-11/12 mx-auto flex justify-between items-center py-4 px-6'>
                {/* Logo */}
                <div>
                    <img className='w-20' src={logo} alt="Logo" />
                </div>

                {/* Desktop Nav */}
                <div className='hidden md:flex gap-12 items-center'>
                    {/* Navigation Links */}
                    <div className='space-x-8'>
                        {['Home', 'Fixture', 'Teams', 'Schedules'].map((item, index) => (
                            <a key={index} href="#" className='relative group text-gray-700 hover:text-black font-medium'>
                                {item}
                                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Coin Section */}
                    <div className='border-2 font-bold bg-yellow-50 rounded-xl px-4 py-2 flex gap-2 items-center text-sm'>
                        <p>{coins}</p>
                        <p>Coin</p>
                        <img className='w-5' src={coin} alt="Coin" />
                    </div>
                </div>

                {/* Mobile Hamburger Icon */}
                <div className='md:hidden'>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
                        <img src={menu} alt="" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='md:hidden px-6 pb-4 space-y-4'>
                    {['Home', 'Fixture', 'Teams', 'Schedules'].map((item, index) => (
                        <a key={index} href="#" className='block text-gray-700 hover:text-black font-medium'>
                            {item}
                        </a>
                    ))}

                    <div className='border-2 font-bold bg-yellow-50 rounded-xl px-4 py-2 flex gap-2 items-center text-sm w-fit'>
                        <p>{coins}</p>
                        <p>Coin</p>
                        <img className='w-5' src={coin} alt="Coin" />
                    </div>
                </div>
            )}
        </div>

    );
};

export default Navbar;