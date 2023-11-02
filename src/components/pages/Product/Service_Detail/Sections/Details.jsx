import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SideForm from '../../../../general/SideForm';
import Related_Service from './Related_Service';

function Details() {
    const { serviceDetail, serviceName } = useParams();

    const openedService = serviceDetail.replace(/-/g, ' ');

    const SubServices = serviceDetail.replace(/-/g, '_');

    const [serviceData, setServiceData] = useState(null);

    useEffect(() => {

        import(`../../../../../Data/products/${serviceName}/index.js`)
            .then((module) => {
                if (module.default) {
                    const subServiceData = module.default;
                    const Services = subServiceData[SubServices];

                    if (Services) {
                        setServiceData(Services);
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

    }, [serviceName, SubServices]);


    if (!serviceData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <section className='2xl:flex justify-between px-4 md:px-10 2xl:px-12 mb-10 w-full max-w-custom gap-14 mx-auto'>
                <div className='lg:flex-[1 auto]'>
                    <div>
                        <h1 className='bg-cred w-full text-center sm:text-left sm:w-fit pl-4 pr-10 md:pl-8 md:pr-14 py-[6px] lg:py-[5.5px] text-white font-semibold text-[22px] relative'>
                            <div className="h-0 w-0 absolute hidden md:block -right-10 top-0 rotate-180 border-white border-b-scarlet border-r-scarlet border-[22px]"></div>
                            Product Details
                        </h1>
                    </div>
                    <div className='border py-4 px-4 md:pl-8 md:pr-14 border-[#ACACAC] mt-5 mb-8 w-full 2xl:w-[980px]'>
                        <h1 className='text-2xl font-bold capitalize text-black'>{openedService} Overview</h1>
                        {serviceData.map((item, index) => (
                            <div key={item.id}>
                                <h1 className='text-lg font-bold capitalize text-black'>{item.head}</h1>
                                <p className='text-base pt-3 pb-5'>{item.para}</p>
                                {item.list1 && (
                                    <ul className='text-base marker:text-red-600 -mt-10 pb-5 custom-list pl-4'>
                                        <>
                                            <li dangerouslySetInnerHTML={{ __html: item.list1.replace(/\*(\w+)\*/g, '<span style="font-weight: 700">$1</span>') }} />
                                            <li className='pt-2' dangerouslySetInnerHTML={{ __html: item.list2.replace(/\*(\w+)\*/g, '<span style="font-weight: 700">$1</span>') }} />
                                            <li className='pt-2' dangerouslySetInnerHTML={{ __html: item.list3.replace(/\*(\w+)\*/g, '<span style="font-weight: 700">$1</span>') }} />
                                        </>
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Related Services Section */}
                    <div>
                        <Related_Service />
                    </div>
                </div>
                <div className='lg:flex-auto'>
                    <SideForm />
                </div>
            </section>
        </>
    );
}

export default Details;
