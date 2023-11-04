import React, { useEffect } from 'react'
import Hero from '../Product/Sections/Hero'
import { useParams } from 'react-router-dom';
import Services from './Static_Section/Services';
function Product_Static() {

    const { serviceName } = useParams(); // Get the serviceName from the URL

    useEffect(() => {
        // Scroll to the top when the page loads
        window.scrollTo(0, 0);
    }, [serviceName]);

    return (
        <>
            <Hero headline="Our Services" />
            <Services />
        </>
    )

}

export default Product_Static
