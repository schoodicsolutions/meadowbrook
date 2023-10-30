import React, { useEffect } from 'react'
import Hero from '../Product/Sections/Hero'
import { useParams } from 'react-router-dom';
import Services from './Sections/Services';
import Side_Form from './Sections/Side_Form';

function Products() {

    const { serviceName } = useParams(); // Get the serviceName from the URL

    useEffect(() => {
        // Scroll to the top when the page loads
        window.scrollTo(0, 0);
    }, [serviceName]);

    return (
        <>
            <Hero headline={serviceName || "Landscaping / Construction"} />
            <Services serviceName={serviceName || "Landscaping / Construction"} />
        </>
    )
}

export default Products
