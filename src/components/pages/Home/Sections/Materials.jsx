import React, { useEffect, useState } from 'react'
import { materials } from '../../../../constants/home'

function Materials() {
    const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);

    return (
        <>
            <section>
                <div className='px-4 md:px-12 2xl:px-0 my-10 w-full max-w-[95rem] mx-auto pt-0 md:pt-5'>
                    <div className='relative mb-5'>
                        <h1 className='text-[26px] md:text-[28px] lg:text-[38px] font-bold'>Materials we provide</h1>
                        <span className='w-28 h-[2px] bg-cred block'></span>
                    </div>
                    <div>
                        <p className='text-sm sm:text-base font-normal w-full max-w-4xl capitalize'>
                            we take great pride in being your premier supplier of high-quality construction materials, offering an extensive range of stone, gravel, and soil products to cater to all your project needs.
                        </p>
                    </div>

                    <div className='flex justify-start flex-wrap md:flex-nowrap items-start gap-6 lg:gap-12 mt-6 image overflow-hidden'>
                        {materials.map((service, index) => (
                            <div key={service.id} className='relative overflow-hidden cursor-pointer transition-all ease-linear'>
                                <div
                                    className={`${hoveredServiceIndex === index ? 'scale-hover-in' : 'scale-hover-out'
                                        } overflow-hidden object-cover h-full transition-all ease-in duration-200`}
                                    onMouseEnter={() => {
                                        setHoveredServiceIndex(index);
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredServiceIndex(null);
                                    }}>

                                    <img src={service.image} alt="" />
                                    {hoveredServiceIndex === index && (
                                        <div className='absolute inset-0 bg-black bg-opacity-30 transition-all '></div>
                                    )}
                                </div>
                                <div className='absolute bottom-0 px-4 sm:px-8 lg:px-12 py-6 sm:py-10 lg:py-14 text-white'
                                    onMouseEnter={() => {
                                        setHoveredServiceIndex(index);
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredServiceIndex(null);
                                    }}>
                                    <h1 className='text-[18px] sm:text-[20px] lg:text-[24px] pb-0 md:pb-1'>{service.title} <span className='pl-2'>&rarr;</span></h1>
                                    <p className='text-sm line-clamp-2 lg:line-clamp-none lg:text-base w-full max-w-full sm:max-w-md lg:max-w-xs'>{service.paragraph}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Materials
