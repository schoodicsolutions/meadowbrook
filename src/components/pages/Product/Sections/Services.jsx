import React, { useState } from 'react'
import { landScapingServices, constructionServices } from '../../../../constants/products'
import { Link } from 'react-router-dom';

function Services(props) {
    const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);

    return (
        <>
            <section>
                <div className='px-4 md:px-12 2xl:px-0 my-10 w-full max-w-[95rem] mx-auto pt-0 md:pt-5'>
                    <div className='relative mb-8 2xl:mb-12'>
                        <h1 className='text-[22px] lg:text-[28px]'>The {props.serviceName} service includes</h1>
                        <span className='w-28 h-[2px] bg-cred block'></span>
                    </div>

                    <div className='grid md:grid-cols-[repeat(2,_minmax(0,_auto))] gap-4 lg:gap-6 justify-items-start items-center w-fit'>
                        {(props.serviceName === "landscaping" ? landScapingServices : constructionServices).map((Service, index) => (
                            <Link to={`/products/${props.serviceName}/${Service.id}`}>
                                <div key={Service.id} className='relative overflow-hidden cursor-pointer w-fit'
                                >
                                    <div
                                        className={`${hoveredServiceIndex === index ? 'scale-hover-in' : 'scale-hover-out'
                                            } overflow-hidden object-cover h-full`}
                                        onMouseEnter={() => {
                                            setHoveredServiceIndex(index);
                                        }}
                                        onMouseLeave={() => {
                                            setHoveredServiceIndex(null);
                                        }}

                                    >
                                        <img src={Service.image} alt='' />
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
            </section>
        </>
    )
}

export default Services
