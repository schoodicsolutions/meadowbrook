import React from 'react'
import CareerHero from '../../../../assets/Careers/careers-hero.jpg'
import { motion } from 'framer-motion';

function Hero() {
    return (
        <>
            <section>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ transition: 0.1 }} className='px-4 md:px-12 min-h-[300px] sm:min-h-[400px] sm:max-h-[500px] 2xl:min-h-[400px] 2xl:h-[500px] flex items-center justify-center mb-10' style={
                    {
                        background: `linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.11) ), url(${CareerHero})`,
                        backgroundPosition: 'center',
                        backgroundSize: "cover",
                    }
                }>
                    <div className='text-center text-white'>
                        <h1 className='text-[32px] sm:text-5xl md:text-6xl font-bold capitalize pt-4'>Join Us in Shaping the Future</h1>
                        <p className='text-base md:text-lg font-medium capitalize pt-2 sm:pt-4 w-full max-w-[700px] m-auto'>
                            Join our dynamic team of forward-thinkers, where your skills will be celebrated,
                            and your ideas will shape the future.
                        </p>
                    </div>
                </motion.div >
            </section>

        </>
    )
}

export default Hero
