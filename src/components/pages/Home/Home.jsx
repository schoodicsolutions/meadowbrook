import Hero from './Sections/Hero'
import Services from './Sections/Services'
import Materials from './Sections/Materials'
import Experience from './Sections/Experience'
import Gallery from './Sections/Gallery'
import Brands from './Sections/Brands'
import Contact_Form from '../../general/Contact_Form'

function Home() {
    return (
        <>
            <Hero />
            <>
                <div className="w-full h-72 border-b border-slate-300 flex items-center justify-center">
                    Redi-Mix Concrete Blurb Goes Here
                </div>
            </>
            <Materials />
            <Services />
            <Experience />
            <Gallery />
            <Contact_Form />
        </>
    )
}

export default Home
