import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { landScapingServices, constructionServices } from '../../../../../../constants/products';

function shuffleArray(array) {
    // Create a copy of the array to avoid modifying the original
    const shuffledArray = [...array];

    // Perform Fisher-Yates (Knuth) shuffle
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

function Related_Service() {

    const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);

    const { serviceDetail, serviceName } = useParams();

    const openedService = serviceDetail.replace(/-/g, ' ');

    // Create a state variable to store the related services
    const [relatedServices, setRelatedServices] = useState([]);

    // Determine the list of services based on the service name
    const serviceType = serviceName === 'landscaping' ? 'landscaping' : 'construction';
    const services = serviceType === 'landscaping' ? landScapingServices : constructionServices;

    useEffect(() => {
        // Filter the services to exclude the currently opened service
        const filteredServices = services.filter(service => service.title !== openedService);

        // Shuffle the order of related services
        const shuffledRelatedServices = shuffleArray(filteredServices);

        setRelatedServices(shuffledRelatedServices);
    }, [serviceDetail, serviceName, openedService, services]);

    return (
        <>
            <div>
                <div className='relative mb-3 sm:mb-5'>
                    <h1 className='text-xl sm:text-2xl'>Related Services</h1>
                    <span className='w-24 h-[2px] bg-cred hidden sm:block'></span>
                </div>
                <div className='grid md:grid-cols-[repeat(2,_minmax(0,_auto))] gap-4 lg:gap-6 justify-items-start items-center w-fit'>
                    {relatedServices.map((service, index) => (
                        <Link to={`/products/${serviceName}/${service.id}`} key={service.id}>
                            <div className='relative overflow-hidden cursor-pointer w-fit'>
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
                                    <img src={service.image} alt='' />
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
    )
}

export default Related_Service
