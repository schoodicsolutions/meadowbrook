import React from 'react'
import { hero } from '../../../../assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Hero() {

    return (
        <>
            <motion.div initial={{ opacity: 0, scaleZ: 1.2 }} animate={{ opacity: 1, scaleZ: 1 }} transition={{ ease: "linear", duration: 0.5 }} className='px-4 md:px-12 h-[56vh] sm:h-[52vh] lg:h-[72vh] flex items-center justify-start' style={
                {
                    background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7) ), url(${hero})`,
                    backgroundPosition: 'center',
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat'
                }
            }>
                <div className='w-full max-w-[95rem] m-auto text-white'>
                    <motion.h1 initial={{ x: -900, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ease: "linear", duration: 0.6 }} className='text-[34px] sm:text-[42px] lg:text-[64px] w-full sm:max-w-[40rem] lg:max-w-4xl font-bold mb-2'>Your Trusted Redi-Mix Concrete and Aggregate Supplier</motion.h1>
                    <motion.p initial={{ x: -900, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ease: "linear", duration: 0.6 }} className='text-lg w-full max-w-xl mb-3'>
                        <span className='font-bold pr-1' style={{ fontStyle: 'italic' }}>Excellence for Generations: </span>
                        Building Washington County with Superior Concrete and unparalleled service
                    </motion.p>
                    <div className='flex justify-start w-full flex-wrap sm:flex-nowrap items-center gap-4 font-medium text-sm'>
                        <Link to='/' className='w-full sm:w-auto'>
                            <motion.button
                                whileHover={{ scale: 1.08 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20, velocity: 2 }}
                                className='bg-cred text-white border border-transparent px-4 py-5 w-full sm:w-[220px] rounded-[56px]'>Contact Us
                            </motion.button>
                        </Link>
                        <Link to='/' className='w-full sm:w-auto'>
                            <button className='bg-transparent border border-white text-white w-full sm:w-[200px] px-4 py-5 rounded-[56px]'>Learn More</button>
                        </Link>
                    </div>
                </div>
            </motion.div >
        </>
    )
}

export default Hero
