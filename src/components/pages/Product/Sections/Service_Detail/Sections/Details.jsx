import React from 'react';
import { useParams } from 'react-router-dom';
import SideForm from '../../../../../general/SideForm';
import Related_Service from './Related_Service';


function Details() {

    const { serviceDetail, serviceName } = useParams();

    const openedService = serviceDetail.replace(/-/g, ' ');

    return (
        <>
            <section className='2xl:flex justify-between px-4 md:px-10 2xl:px-12 mb-10 w-full max-w-[95rem] gap-14 mx-auto'>
                <div className='lg:flex-[1 auto]'>
                    <div>
                        <h1 className='bg-cred w-full text-center sm:text-left sm:w-fit pl-4 pr-10 md:pl-8 md:pr-14 py-[6px] lg:py-[5.5px] text-white font-semibold text-[22px] relative' >
                            <div className="h-0 w-0 absolute hidden md:block -right-10 top-0 rotate-180 border-white border-b-scarlet border-r-scarlet border-[22px]"></div>
                            Product Details
                        </h1>
                    </div>
                    <div className='border py-4 px-4 md:pl-8 md:pr-14 border-[#ACACAC] mt-5 mb-8 w-full 2xl:w-[980px]'>
                        <h1 className='text-xl font-bold capitalize text-black'>{openedService} Overview</h1>
                        <p className='text-base py-2'>
                            At meadowbrook,  we're dedicated to enhancing your outdoor space, and our specialized {openedService} services are designed to revitalize your landscape and make way for new possibilities. With our meticulous approach and state-of-the-art equipment, we eliminate unsightly stumps, ensuring your property is not only safe but exudes an air of pristine elegance.
                        </p>

                        <div>
                            <p className='text-base capitalize pt-5'>why choose our {openedService} service</p>
                        </div>
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
    )
}

export default Details;
