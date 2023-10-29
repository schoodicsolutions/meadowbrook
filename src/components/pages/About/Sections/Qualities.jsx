import React from 'react'
import { AboutCards } from '../../../../constants/About'
import { Icon } from '@iconify/react';

function Qualities() {
    return (
        <>
            <section className='w-full h-full bg-[#13171B]'>
                <div className='px-6 md:px-12 2xl:px-0 my-12 w-full max-w-[84rem] mx-auto pt-0 md:pt-5 text-white'>
                    <div className='text-center relative flex flex-col justify-center items-center py-2'>
                        <span className='h-[54px] w-[1px] block mt-4 bg-[#ccc]'></span>
                        <h1 className='font-black text-[30px] md:text-[36px] 2xl:text-[40px] py-2'>Why Choose Us ?</h1>
                        <p className='text-sm sm:text-lg'>Your Trusted Partner for Quality and Innovation</p>
                    </div>
                    <div className='grid grid-cols-[repeat(1,_minmax(0,_auto))] sm:grid-cols-[repeat(2,_minmax(0,_auto))] lg:flex justify-between items-start pt-8 pb-16 gap-4'>
                        {AboutCards.map((cards) => (
                            <div key={cards.id} className='bg-[#212529] flex-1 pb-4 sm:pb-0 sm:h-[320px] lg:h-[380px] 2xl:h-[350px] overflow-hidden px-3 md:px-4 xl:px-8 border border-r-0 border-l-0 border-b-0 border-t-2 border-white'>
                                <div className='flex flex-col pt-4 md:pt-8 justify-center items-center'>
                                    <Icon icon={cards.icon} className='text-4xl' />
                                    <div className='py-2 text-center'>
                                        <h1 className='capitalize font-semibold text-lg md:text-xl pt-2 md:pt-4'>{cards.title}</h1>
                                        <p className='text-sm sm:text-base pt-2 md:pt-4 font-normal text-[#eee]'>{cards.detail}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Qualities
