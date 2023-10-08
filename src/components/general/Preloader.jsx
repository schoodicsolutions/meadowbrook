import React from 'react'
import logo from '../../assets/meadow.svg';
import { motion } from 'framer-motion';
function Preloader() {
    return (
        <>
            <div>
                <div className='bg-black w-full h-screen flex justify-center items-center btslideout z-10 absolute bottom-0 left-0'>
                </div>
                {/* <div className='bg-cred w-full h-screen flex justify-center items-center btslide2out z-9 absolute bottom-0 left-0'>
                </div> */}
                <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} src={logo} alt="Preloader Image" className='w-[90%] md:w-[25%] FadeOut absolute top-1/2 left-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[11]' />
            </div>
        </>
    )
}

export default Preloader
