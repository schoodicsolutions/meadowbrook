import React from 'react'
import Hero from './Sections/Hero'

function Careers() {
    return (
        <>
            <Hero />
            <>
                <div className='text-center my-16 md:my-24 text-[#040508]'>
                    <h1 className='text-3xl md:text-4xl'>Current Openings</h1>
                    <p className='text-[#858585] text-base px-4 sm:text-lg w-full max-w-[850px] m-auto pt-2'>
                        We're sorry, but there are no open positions at the moment. However, we are constantly growing and evolving. Stay tuned for future opportunities that match your skills and aspirations
                    </p>
                </div>
            </>
        </>
    )
}

export default Careers
