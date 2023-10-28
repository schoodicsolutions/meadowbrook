import React from 'react'
import { AboutHero } from '../../../../assets'
import { motion } from 'framer-motion';

function Hero() {
    return (
        <>
            <section>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ transition: 0.1 }} className='px-4 md:px-12 min-h-[42vh] md:min-h-[46vh] flex items-center justify-center mb-10' style={
                    {
                        background: `linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.11) ), url(${AboutHero})`,
                        backgroundPosition: 'center',
                        backgroundSize: "cover",
                    }
                }>
                    <div className='text-center text-white'>
                        <span className='uppercase text-base sm:text-lg md:text-xl'>story of our business</span>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold capitalize pt-2'>Meadowbrook at Your Service</h1>
                    </div>
                </motion.div >
            </section>

        </>
    )
}

export default Hero
