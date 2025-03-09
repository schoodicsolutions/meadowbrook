import Hero from './Sections/Hero'
import Services from './Sections/Services'
import Materials from './Sections/Materials'
import Experience from './Sections/Experience'
import Gallery from './Sections/Gallery'
import Contact_Form_Container from '../../general/Contact_Form_Container'
import Concrete from './Sections/Concrete'

function Home() {
    return (
        <>
            <Hero />
            <Concrete />
            <Services />
            <Materials />
            <Experience />
            <Gallery />
            <Contact_Form_Container />
        </>
    )
}

export default Home
