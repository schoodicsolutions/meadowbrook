import React, { useState } from 'react';
import { landscaping, construction, stones } from '../../../../Data/products';
import { Link, useParams } from 'react-router-dom';
import SideForm from '../../../general/SideForm';

function Services() {
    const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);
    const { serviceName } = useParams(); // Get the serviceName from the URL

    // Determine the array of services based on the selected serviceName
    let servicesArray = [];
    if (serviceName === 'landscaping') {
        servicesArray = landscaping;
    } else if (serviceName === 'construction') {
        servicesArray = construction;
    } else if (serviceName === 'stones') {
        servicesArray = stones;
    }

    return (
        <>
            <section className='relative flex justify-between px-4 md:px-16 2xl:px-0 mb-10 w-full max-w-custom mx-auto'>
                <div className='flex-[1 auto]'>
                    <div className='relative mb-4 2xl:mb-8'>
                        <h1 className='text-[22px] lg:text-[28px] capitalize'>{serviceName} services</h1>
                        <span className='w-28 h-[2px] bg-cred block'></span>
                    </div>

                    <div className='grid md:grid-cols-[repeat(2,_minmax(0,_auto))] gap-4 lg:gap-6 justify-items-start items-center w-fit'>
                        {servicesArray.map((Service, index) => (
                            <Link to={`/products/${serviceName}/${Service.id}`} key={Service.id}>
                                <div className='relative overflow-hidden cursor-pointer w-fit'>
                                    <div
                                        className={`${hoveredServiceIndex === index ? 'scale-hover-in' : 'scale-hover-out'} overflow-hidden object-cover h-full`}
                                        onMouseEnter={() => {
                                            setHoveredServiceIndex(index);
                                        }}
                                        onMouseLeave={() => {
                                            setHoveredServiceIndex(null);
                                        }}
                                    >
                                        <img src={Service.image} alt='' />
                                        <div className='absolute inset-0 bg-black bg-opacity-40'></div>
                                        {hoveredServiceIndex === index && (
                                            <div className='absolute inset-0 bg-black bg-opacity-20'></div>
                                        )}
                                    </div>
                                    <div
                                        className='absolute bottom-0 px-8 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 text-white'
                                        onMouseEnter={() => {
                                            setHoveredServiceIndex(index);
                                        }}
                                        onMouseLeave={() => {
                                            setHoveredServiceIndex(null);
                                        }}
                                    >
                                        <p className='uppercase text-xs w-full max-w-full mb-2'>{Service.root}</p>
                                        <h1 className='text-[18px] capitalize sm:text-[20px] lg:text-[24px] pb-0 md:pb-1'>{Service.title}</h1>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='flex-auto'>
                    <SideForm />
                </div>
            </section>
        </>
    );
}

export default Services;
