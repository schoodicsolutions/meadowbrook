import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { headlines } from '../../../../../Data/headlines';


function Breadcrumbs({ serviceName, serviceDetail }) {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: serviceName, link: `/products/${serviceName}` },
        { label: serviceDetail, link: null },
    ];

    return (
        <div className="text-white capitalize pt-2">
            <div className="text-lg">
                {breadcrumbs.map((item, index) => (
                    <span key={index}>
                        {item.link ? (
                            <Link className="font-bold" to={item.link}>
                                {item.label}
                            </Link>
                        ) : (
                            <span>{item.label}</span>
                        )}
                        {index < breadcrumbs.length - 1 && ' / '}
                    </span>
                ))}
            </div>
        </div>
    );
}

function Hero() {
    const { serviceDetail } = useParams();
    const { serviceName } = useParams();

    // Replace hyphens with spaces
    const ServiceDetailName = serviceDetail.replace(/-/g, ' ');

    const [serviceImage, setServiceImage] = useState(null);

    useEffect(() => {

        import(`../../../../../assets/product_assets/service_hero/${serviceName}/${serviceDetail}-hero.jpg`).then((image) => {
            setServiceImage(image.default);
        }).catch((error) => {
            console.log(error)
        });

        window.scrollTo(0, 0);
    }, [serviceName, serviceDetail]);



    const selectedHeadline = headlines.find(head => head.id === serviceDetail);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceDetail]);

    return (
        <>
            <section className='bg-[#05011C] relative lg:flex mb-10 flex-wrap lg:flex-nowrap'>
                <div className='px-6 md:px-16 2xl:px-12 pb-8 lg:pb-28 2xl:pb-0 w-full lg:max-w-[47rem] ml-auto pt-5 md:pt-5'>
                    {/* BreadCrumbs */}
                    <Breadcrumbs serviceName={serviceName} serviceDetail={ServiceDetailName} />
                    <div className='text-white h-auto mt-8 md:mt-12 2xl:mt-16'>
                        <h1 className='leading-normal text-[28px] sm:text-[36px] lg:text-[38px] 2xl:text-[46px] font-black w-full max-w-md sm:max-w-lg lg:max-w-full capitalize'>
                            {selectedHeadline ? selectedHeadline.heading : "Default Headline"}
                        </h1>
                        <p className='text-lg pt-1'>A Service from meadowbrook</p>
                    </div>
                </div>
                <div className='relative h-auto'>
                    <div className='relative h-full object-cover'>
                        <svg className="absolute lg:block hidden h-full top-0 left-0 -ml-6 fill-scarlet"><path d="M185.261 0H1018V407H0L185.261 0Z"></path></svg>
                        <img src={serviceImage}  className='relative hidden lg:block h-full object-cover' style={
                            {
                                clipPath: 'path("M 159.668 0 H 995 V 407 H 0 L 159.668 0 Z")',

                            }
                        } />
                        <img src={serviceImage} className='lg:hidden w-full' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero

