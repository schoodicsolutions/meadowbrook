import React from 'react'
import { benefits } from '../../../../constants'

function Benefits() {
    return (
        <>
            <div className='px-4 md:px-12 2xl:px-0 my-10 w-full max-w-[95rem] mx-auto'>
                <div className='pb-2'>
                    <h1 className='text-[22px] md:text-[26px] lg:text-[32px]'>Check out the list of Benefits we offer to our clients</h1>
                </div>
                <div>
                    <p className='text-base font-normal'>Explore a Bounty of Exclusive Benefits Tailored to Elevate Your Journey with Us</p>
                </div>

                <div className='grid grid-cols-[repeat(1,_minmax(0,_auto))] sm:grid-cols-[repeat(2,_minmax(0,_auto))] lg:flex justify-around items-start sm:gap-3 gap-y-5 sm:gap-y-6 lg:gap-2 mt-9'>
                    {benefits.map((link) => (
                        <>
                            <div className='flex justify-start sm:justify-center items-start sm:gap-1 md:gap-2 w-full'>
                                <div className='sm:pl-5 w-fit'>
                                    <img src={link.image} alt={link.alt} className='max-w-[32px] sm:max-w-[40px] lg:w-full mr-4 2xl:mr-10' />
                                </div>
                                <div>
                                    <h1 className='text-base pb-1 font-bold'>{link.title}</h1>
                                    <p className='text-sm font-normal sm:pr-0'>{link.paragraph}</p>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Benefits
