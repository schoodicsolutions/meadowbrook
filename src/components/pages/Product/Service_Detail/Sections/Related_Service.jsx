import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import serviceData from '../../../../../Data/products/serviceDataLoader.js';

function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function Related_Service() {
    const { serviceName, serviceDetail } = useParams();
    const openedService = serviceDetail.replace(/-/g, ' ');

    const [relatedServices, setRelatedServices] = useState([]);
    const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);

    let contentToRender = null;

    useEffect(() => {
        if (serviceData[serviceName]) {
            const currentServiceData = serviceData[serviceName];
            // Filter the services to exclude the currently opened service
            const filteredServices = currentServiceData.filter(
                (service) => service.title.toLowerCase() !== openedService.toLowerCase()
            );

            const shuffledRelatedServices = shuffleArray(filteredServices);
            const firstThreeRelatedServices = shuffledRelatedServices.slice(0, 3);
            setRelatedServices(firstThreeRelatedServices);
        }
    }, [serviceName, serviceDetail, openedService]);




    return (
        <>
            <div>
                <div className="relative mb-3 sm:mb-5">
                    <h1 className="text-xl sm:text-2xl capitalize">Related {serviceName}</h1>
                    <span className="w-24 h-[2px] bg-cred hidden sm:block"></span>
                </div>
                <div className="grid md:grid-cols-[repeat(2,_minmax(0,_auto))] gap-4 lg:gap-6 justify-items-start items-center w-fit">
                    {relatedServices.map((service, index) => (
                        <Link to={`/${serviceName}/${service.id}`} key={service.id}>
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
                                    <img src={service.image} alt='' />
                                    <div className='absolute inset-0 bg-black bg-opacity-30'></div>
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
                                    <p className='uppercase text-xs w-full max-w-full mb-2'>{service.root}</p>
                                    <h1 className='text-[18px] capitalize sm:text-[20px] lg:text-[24px] pb-0 md:pb-1'>{service.title}</h1>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Related_Service;
