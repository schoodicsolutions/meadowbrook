import React, { useEffect } from 'react'
import Hero from '../Product/Sections/Hero'
import { Link, useParams } from 'react-router-dom';
import Services from './Static_Section/Services';
function Product_Static() {

    const { serviceName } = useParams(); // Get the serviceName from the URL

    useEffect(() => {
        // Scroll to the top when the page loads
        window.scrollTo(0, 0);
    }, [serviceName]);

    return (
        <>
            <section className='bg-[#05011C] relative lg:flex mb-0 lg:mb-10 flex-wrap lg:flex-nowrap'>
                <h1 className='text-white lg:px-2 px-4 text-left max-w-[95rem] mx-auto  w-full md:text-lg cursor-pointer lg:text-xl py-4'>
                    <Link to="/" className='underline'>Home</Link> / Products
                </h1>
            </section>
            <Services />
        </>
    )

}

export default Product_Static
