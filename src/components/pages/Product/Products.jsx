import React, { useEffect } from 'react'
import Hero from '../Product/Sections/Hero'
import { useParams } from 'react-router-dom';
import Services from './Sections/Services';

function Products() {

    const { serviceName, serviceDetail } = useParams(); // Get both serviceName and serviceDetail from the URL

    useEffect(() => {
        // Scroll to the top when the page loads
        window.scrollTo(0, 0);
    }, [serviceName, serviceDetail]);

    return (
        <>
            <Hero headline={`${serviceName}` || "Our Services"} />
            <Services serviceName={serviceName || "Landscaping / Construction"} subService={serviceDetail} />
        </>
    )
}

export default Products;
