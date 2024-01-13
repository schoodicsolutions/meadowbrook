import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import SideForm from '../../../general/SideForm';

function Services() {
    const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);
    const { serviceName, serviceDetail } = useParams();
    const [servicesArray, setServicesArray] = useState(null);

    useEffect(() => {

        import(`../../../../Data/products/index.js`)
            .then((module) => {
                if (module.default) {
                    const subServiceData = module.default;
                    const Services = subServiceData[serviceName];

                    if (Services) {
                        setServicesArray(Services);
                    } else {
                        console.error('Sub-service not found.');
                    }
                } else {
                    console.error('Main service data is not properly structured.');
                }
            })
            .catch((error) => {

                console.error('Error loading module:', error);
            });

    }, [serviceName]);


    if (!servicesArray) {
        return <div className='text-center mb-10 w-full text-cred text-white'>
            <h1 className='text-4xl py-3'>No Data Found Related to this Field</h1>
        </div>;
    }

    const location = useLocation();
    const { pathname } = location;

    // if (pathname.startsWith("/materials")) {
    //     console.log("Yes");
    // } else {
    //     console.log("NO");
    // }

    return (
        <>
            <section className='relative flex justify-between px-4 pt-6  md:px-16 lg:pt-0 2xl:px-0 mb-10 w-full max-w-custom mx-auto'>
                <div className='flex-[1 auto]'>
                    <div className='relative mb-6 2xl:mb-8'>
                        <h1 className='text-[24px] lg:text-[28px] capitalize'>
                            {`${pathname.startsWith(`/materials/${serviceName}`) ? `Materials / ${serviceName}` : `Our ${serviceName}`}`}
                        </h1>

                        <span className='w-28 h-[2px] bg-cred block'></span>
                    </div>

                    <div className='grid md:grid-cols-[repeat(2,_minmax(0,_auto))] gap-4 lg:gap-6 justify-items-start items-center w-fit'>
                        {servicesArray.map((Service, index) => (
                            <Link to={pathname.startsWith("/materials") ? `/materials/${serviceName}/${Service.id}` : `/${serviceName}/${Service.id}`} key={Service.id}>
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
