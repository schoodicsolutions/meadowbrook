import React from 'react'
import Hero from '../Product/Sections/Hero'
import { useParams } from 'react-router-dom';
import Services from './Sections/Services';
import Side_Form from './Sections/Side_Form';

function Products() {

    const { serviceName } = useParams(); // Get the serviceName from the URL

    return (
        <>
            <Hero headline={serviceName || "Landscaping / Construction"} />
            <div className='relative flex justify-between items-center gap-24 w-full max-w-[95rem] mx-auto'>
                <Services serviceName={serviceName || "Landscaping / Construction"} />
                <Side_Form />
            </div>
        </>
    )
}

export default Products
