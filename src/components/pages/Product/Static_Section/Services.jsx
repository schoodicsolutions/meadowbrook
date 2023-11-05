import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import serviceData from '../../../../Data/products/index.js'; // Update the path accordingly

function Services() {
    const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);
    const [selectedServiceType, setSelectedServiceType] = useState('All Products');
    const [servicesArray, setServicesArray] = useState([]);
    const [page, setPage] = useState(1);

    const itemsPerPage = 6;

    const GetProducts = "All_Products"

    const SubServices = GetProducts.replace(/_/g, ' ');

    const serviceTypes = [SubServices, 'landscaping', 'construction', 'stones', 'soil', 'gravel'];

    useEffect(() => {
        // Check if the selected service type is "show_all"
        if (selectedServiceType.replace(/_/g, ' ') === SubServices) {
            // Combine all services
            const allServices = [].concat(
                serviceData.landscaping,
                serviceData.construction,
                serviceData.stones,
                serviceData.gravel,
                serviceData.soil
            );

            // Randomize the order
            const randomizedServices = shuffleArray(allServices);

            setServicesArray(randomizedServices);
        } else {
            import(`../../../../Data/products/index.js`)
                .then((module) => {
                    if (module.default) {
                        const subServiceData = module.default;
                        const Services = subServiceData[selectedServiceType];

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
        }
    }, [selectedServiceType]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    // Randomize array order using the Fisher-Yates shuffle algorithm
    function shuffleArray(array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedServices = servicesArray.slice(startIndex, endIndex);

    return (
        <>
            <section className="relative flex justify-between px-4 md:px-16 2xl:px-0 mb-10 w-full max-w-custom mx-auto">
                <div className="w-full">
                    <div className="relative lg:pt-0 pt-8 mb-0 2xl:mb-5">
                        <h1 className=" text-2xl md:text-3xl lg:text-5xl mb-1 capitalize">
                            Products
                        </h1>
                        <span className="w-28 h-[2px] bg-cred block"></span>
                        <p className="w-full 2xl:w-auto text-base md:text-lg pt-4">
                            At Meadowbrook, we cover all your landscaping, construction, and material needs. Simplify your projects with us.
                        </p>
                    </div>
                    <div className="mb-8 2xl:pt-0 pt-6">
                        <p className="text-base font-bold mb-2">Browse By Category:</p>
                        <select
                            value={selectedServiceType}
                            onChange={(e) => setSelectedServiceType(e.target.value)}
                            className="w-full pr-12 cursor-pointer py-3 pl-2 text-base sm:w-[260px] bg-transparent border border-[#9a9a9a]"
                        >
                            {serviceTypes.map((serviceType) => (
                                <option key={serviceType} value={serviceType} className="bg-white">
                                    {serviceType}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="grid md:grid-cols-[repeat(2,minmax(0,auto))] lg:grid-cols-[repeat(3,minmax(0,auto))] gap-4 lg:gap-6 justify-items-start items-center w-fit">
                        {paginatedServices.map((Service) => (
                            <Link to={`/products/${Service.root}/${Service.id}`} key={Service.id}>
                                <div className="relative overflow-hidden cursor-pointer w-fit">
                                    <div
                                        className={`${hoveredServiceIndex === Service.id ? 'scale-hover-in' : 'scale-hover-out'} overflow-hidden object-cover h-full`}
                                        onMouseEnter={() => {
                                            setHoveredServiceIndex(Service.id);
                                        }}
                                        onMouseLeave={() => {
                                            setHoveredServiceIndex(null);
                                        }}
                                    >
                                        <img src={Service.image} alt="" />
                                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                                        {hoveredServiceIndex === Service.id && (
                                            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                                        )}
                                    </div>
                                    <div className='absolute bottom-0 left-0 w-full text-white'>
                                        <p className="text-center left-0 py-1 md:py-2 bg-cred capitalize text-base font-bold w-full">
                                            {Service.root}
                                        </p>
                                    </div>
                                    <div
                                        className="absolute w-full bottom-8 text-center py-8 lg:py-10 text-white"
                                        onMouseEnter={() => {
                                            setHoveredServiceIndex(Service.id);
                                        }}
                                        onMouseLeave={() => {
                                            setHoveredServiceIndex(null);
                                        }}
                                    >
                                        <h1 className="text-[20px] capitalize lg:text-[24px]">
                                            {Service.title}
                                        </h1>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination */}
                    {servicesArray.length > itemsPerPage && (
                        <div className="flex justify-center items-center mt-8">
                            {page > 1 && (
                                <button onClick={() => handlePageChange(page - 1)} className="mx-2 py-3 px-20 bg-cred text-white rounded-sm">
                                    Previous
                                </button>
                            )}
                            {endIndex < servicesArray.length && (
                                <button onClick={() => handlePageChange(page + 1)} className="mx-2 py-3 px-20 bg-cred text-white rounded-sm">
                                    Next
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Services;
