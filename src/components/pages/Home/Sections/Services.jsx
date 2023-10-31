import React, { useState } from 'react';
import { services } from '../../../../Data/home';
import { Link } from 'react-router-dom';

function Services() {
    const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);

    return (
        <>
            <section>
                <div className='px-4 md:px-12 2xl:px-0 my-10 w-full max-w-custom mx-auto pt-0 md:pt-5'>
                    <div className='relative mb-2 sm:mb-5'>
                        <h1 className='text-[26px] md:text-[28px] lg:text-[38px]'>Our Services</h1>
                        <span className='w-28 h-[2px] bg-cred hidden sm:block'></span>
                    </div>
                    <div>
                        <p className='text-sm sm:text-lg font-normal w-full max-w-5xl capitalize'>
                            we take pride in offering a comprehensive range of premium landscaping and construction services that elevate the aesthetics and functionality of your outdoor spaces and construction projects.
                        </p>
                    </div>

                    <div className='flex justify-start flex-wrap md:flex-nowrap items-start gap-6 lg:gap-12 mt-6 image overflow-hidden'>
                        {services.map((service, index) => (
                            <Link
                                to={`/products/${service.title.toLowerCase()}`}
                                key={service.id} className='relative overflow-hidden cursor-pointer'

                            >
                                <div
                                    className={`${hoveredServiceIndex === index ? 'scale-hover-in' : 'scale-hover-out'
                                        } overflow-hidden object-cover h-full w-[130%] md:w-[120%] lg:w-full`}
                                    onMouseEnter={() => {
                                        setHoveredServiceIndex(index);
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredServiceIndex(null);
                                    }}

                                >
                                    <img src={service.image} alt='' />
                                    {hoveredServiceIndex === index && (
                                        <div className='absolute inset-0 bg-black bg-opacity-20'></div>
                                    )}
                                </div>
                                <div
                                    className='
                                    absolute bottom-0 px-4 sm:px-8 lg:px-12 py-3 sm:py-10 lg:py-14 text-white
                                    bg-red-600 w-full text-center sm:bg-transparent sm:text-left
                                    '
                                    onMouseEnter={() => {
                                        setHoveredServiceIndex(index);
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredServiceIndex(null);
                                    }}
                                >
                                    <h1 className='text-[20px] flex sm:block justify-center items-center lg:text-[24px] pb-0 md:pb-1'>{service.title} 
                                    <span className='pl-2 sm:hidden block'>&rarr;</span></h1>
                                    <p className='text-sm hidden sm:block line-clamp-2 lg:line-clamp-none lg:text-base w-full max-w-full sm:max-w-md lg:max-w-md'>{service.paragraph}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
