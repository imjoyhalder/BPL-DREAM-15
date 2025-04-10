import React from 'react';
import bgShadow from '../../assets/image/bg-shadow.png'
import banner from '../../assets/image/banner-main.png';

const Banner = ({handelCoins}) => {
    return (

        <div className='w-11/12 mx-auto rounded-2xl m-10 overflow-hidden relative'>
            <img
                className='w-full h-full bg-black object-cover absolute top-0 left-0 z-0'
                src={bgShadow} 
                alt="Background"
            />
            <div className='relative z-10 text-center text-white py-12 px-4   rounded-2xl'>
                <img src={banner} alt="Cricket Logo" className='mx-auto w-32 mb-6' />
                <h1 className='text-2xl md:text-4xl font-bold mb-4'>
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h1>

                <p className='text-lg mb-6 text-gray-300'>
                    Beyond Boundaries Beyond Limits
                </p>

                <button onClick={handelCoins} className='bg-yellow-300 text-black font-semibold py-2 px-4 rounded-xl hover:bg-yellow-400 transition'>
                    Claim Free Credit
                </button>
            </div>
        </div>

    );
};

export default Banner;