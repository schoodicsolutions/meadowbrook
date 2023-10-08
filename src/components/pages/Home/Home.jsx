import React from 'react'
import Hero from './Sections/Hero'
import Navbar from '../../general/Navbar'
import Benefits from './Sections/Benefits'
import Services from './Sections/Services'
import Materials from './Sections/Materials'
import Experience from './Sections/Experience'
import Gallery from './Sections/Gallery'
import Brands from './Sections/Brands'
import Contact_Form from '../../general/Contact_Form'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Benefits />
            <Services />
            <Materials />
            <Experience />
            <Gallery />
            <Brands />
            <Contact_Form />
        </>
    )
}

export default Home
