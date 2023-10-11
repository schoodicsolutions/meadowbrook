import React from 'react'
import { motion } from 'framer-motion';
import { HeroImage } from '../../../../assets';

function Hero(props) {


    return (
        <>
            <section>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ transition: 0.1 }} className='px-4 md:px-12 min-h-[42vh] md:min-h-[46vh] flex items-center justify-center mb-10' style={
                    {
                        background: `linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.11) ), url(${HeroImage})`,
                        backgroundPosition: 'center',
                        backgroundSize: "cover",
                        backgroundRepeat: 'no-repeat'
                    }
                }>
                    <h1 className='text-4xl md:text-5xl text-white font-bold capitalize'>{props.headline} Service</h1>
                </motion.div >
            </section>

        </>
    )
}

export default Hero
