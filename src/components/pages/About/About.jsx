import React from 'react'
import Hero from './Sections/Hero'
import Statements from './Sections/Statements'
import Qualities from './Sections/Qualities'
import Brands from '../Home/Sections/Brands'
import Contact_Form from '../../general/Contact_Form'

function About() {
    return (
        <>
            <Hero />
            <Statements />
            <Qualities />
            <Brands />
            <Contact_Form />
        </>
    )
}

export default About
