import React from 'react';
import logo from '../../assets/image/logo-footer.png'

const Footer = () => {
    return (
        <div>
            <div className=''>
                <div className='mx-auto border-2 bg-black pt-40 pb-10'>
                    <div className='w-11/12 mx-auto grid '>
                        <div className='flex justify-center items-center'>
                            <img className='w-30 md:w-36' src={logo} alt="" />
                        </div>
                        <div className='pt-20 grid md:grid-cols-2 lg:grid-cols-3 justify-between items-center space-y-9'>
                            <div className='space-y-4'>
                                <h1 className='font-bold text-white'>About Us</h1>
                                <p className='text-gray-500'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                            </div>
                            <div className='space-y-4'>
                                <h1 className='font-bold text-white'>Quick Links</h1>
                                <div className='text-gray-500 space-y-2 grid'>
                                    <a href="">Home</a>
                                    <a href="">Services</a>
                                    <a href="">About</a>
                                    <a href="">Contact</a>
                                </div>
                            </div>
                            <div className='space-y-4'>
                                <h1 className='font-bold text-white'>Subscribe</h1>
                                <p className='text-gray-500'>Subscribe to our newsletter for <br /> the latest updates.</p>
                                <div className='flex'>
                                    <input placeholder='Email' className=' pl-8 h-10 w-40 md:w-52 rounded-l-xl' type="text" />
                                    <button className='text-white h-10 pl-4 pr-4 rounded-r-xl bg-gradient-to-r from-pink-400 via-yellow-400 to-orange-400'>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border mt-24 md:mt-32 border-gray-500'></div>
                    <div className='text-center text-gray-500 pt-10'>
                        <p>@2024 Your Company All Rights Reserved.</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;