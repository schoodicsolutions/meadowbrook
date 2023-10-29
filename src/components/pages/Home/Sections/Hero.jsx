import React from 'react'
import { hero } from '../../../../assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Hero() {

    return (
        <>
            <section>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ transition: 0.1 }} className='px-4 md:px-12 min-h-[540px] lg:h-[720px] flex items-center justify-start' style={
                    {
                        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7) ), url(${hero})`,
                        backgroundPosition: 'center',
                        backgroundSize: "cover",
                        backgroundRepeat: 'no-repeat',
                    }
                }>
                    <div className='w-full max-w-[95rem] m-auto text-white'>
                        <div className='overflow-hidden mb-2'>
                            <h1 className='text-[34px] sm:text-[42px] lg:text-[64px] w-full sm:max-w-[40rem] lg:max-w-4xl font-bold'>Your Trusted Redi-Mix Concrete and Aggregate Supplier</h1>
                        </div>
                        <div className='overflow-hidden mb-4'>
                            <p className='text-base md:text-lg w-full max-w-xl pr-4 sm:pr-0 mb-2 sm:mb-4'>
                                <span className='font-bold pr-1' style={{ fontStyle: 'italic' }}>Excellence for Generations: </span>
                                Building Washington County with Superior Concrete and unparalleled service
                            </p>
                        </div>
                        <div className='flex justify-start w-full flex-wrap sm:flex-nowrap items-center gap-4 font-medium text-sm'>
                            <Link to='/' className='w-full sm:w-auto'>
                                <motion.button
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20, velocity: 2 }}
                                    className='bg-cred text-white border border-transparent px-4 py-4 sm:py-5 w-full sm:w-[220px] rounded-[56px]'>Contact Us
                                </motion.button>
                            </Link>
                            <Link to='/' className='w-full sm:w-auto'>
                                <button className='bg-transparent border hover:bg-white hover:text-black transition duration-200 ease-out border-white text-white w-full sm:w-[200px] px-4 py-4 sm:py-5 rounded-[56px]'>Learn More</button>
                            </Link>
                        </div>
                    </div>
                </motion.div >
            </section>
        </>
    )
}

export default Hero
