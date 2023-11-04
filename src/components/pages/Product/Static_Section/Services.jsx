import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideForm from '../../../general/SideForm';

function Services() {
    const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);
    const [selectedServiceType, setSelectedServiceType] = useState('landscaping');
    const [servicesArray, setServicesArray] = useState([]);

    // Define an array of service types
    const serviceTypes = ['landscaping', 'construction', 'stones', 'soil', 'gravel'];

    useEffect(() => {
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
    }, [selectedServiceType]);

    const Styles = ['px-6 py-2 rounded-md m-2 w-1/2 sm:w-auto'];
    const NotActiveStyles = ['bg-gray-300 text-gray-700'];
    const ActiveStyles = ['bg-cred text-white'];

    return (
        <>
            <section className="relative flex justify between px-4 md:px-16 2xl:px-0 mb-10 w-full max-w-custom mx-auto">
                <div className="flex-auto">
                    <div className="mb-4 md:pt-0 pt-6">
                        {serviceTypes.map((serviceType) => (
                            <button
                                key={serviceType}
                                onClick={() => setSelectedServiceType(serviceType)}
                                className={`${selectedServiceType === serviceType ? ActiveStyles : NotActiveStyles} ${Styles}`}
                            >
                                {serviceType}
                            </button>
                        ))}
                    </div>
                    <div className="relative mb-8 2xl:mb-12">
                        <h1 className="text-[22px] lg:text-[28px] capitalize">
                            {selectedServiceType} services
                        </h1>
                        <span className="w-28 h-[2px] bg-cred block"></span>
                    </div>
                    <div className="grid md:grid-cols-[repeat(2,minmax(0,auto))] gap-4 lg:gap-6 justify-items-start items-center w-fit">
                        {servicesArray.map((Service) => (
                            <Link to={`/products/${selectedServiceType}/${Service.id}`} key={Service.id}>
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
                                    <div
                                        className="absolute bottom-0 px-8 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 text-white"
                                        onMouseEnter={() => {
                                            setHoveredServiceIndex(Service.id);
                                        }}
                                        onMouseLeave={() => {
                                            setHoveredServiceIndex(null);
                                        }}
                                    >
                                        <p className="uppercase text-xs w-full max-w-full mb-2">
                                            {Service.root}
                                        </p>
                                        <h1 className="text-[18px] capitalize sm:text-[20px] lg:text-[24px] pb-0 md:pb-1">
                                            {Service.title}
                                        </h1>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex-auto">
                    <SideForm />
                </div>
            </section>
        </>
    );
}

export default Services;
