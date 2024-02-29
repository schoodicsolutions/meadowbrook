import { Route, Routes } from "react-router";
import Home from "./components/pages/Home/Home";
import { useEffect, useState } from "react";
import Preloader from "./components/general/Preloader";
// import { Sugar } from 'react-preloaders';
import Products from "./components/pages/Product/Products";
import Navbar from "./components/general/Navbar";
import Footer from "./components/general/Footer";
import About from "./components/pages/About/About";
import ServiceDetails from "./components/pages/Product/Service_Detail/ServiceDetails";
import Product_Static from "./components/pages/Product/Product_Static";
import Popup_Form from "./components/general/Popup_Form";
import Careers from "./components/pages/Careers/Careers";
import Contact from "./components/pages/Contact/Contact";
import Lenis from '@studio-freight/lenis'
import Privacy_Policy from "./components/Privacy/Privacy_Policy";
import Terms from "./components/Terms/Terms";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (loader) {
      setTimeout(() => {
        setLoader(false);
      }, 2500);
    }

    window.scrollTo(0, 0);
  }, [])

  // const lenis = new Lenis()

  // function raf(time) {
  //   lenis.raf(time)
  //   requestAnimationFrame(raf)
  // }

  // requestAnimationFrame(raf)

  return (
    <>
      {loader ?
        (<Preloader />) :
        (
          <>
            <Navbar />
            <Popup_Form />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about-us" element={<About />} />
              <Route exact path="/careers" element={<Careers />} />
              <Route exact path="/contact-us" element={<Contact />} />
              <Route exact path="/products" element={<Product_Static />} />
              <Route exact path="/materials/:serviceName" element={<Products />} />
              <Route exact path="/materials/:serviceName/:serviceDetail" element={<ServiceDetails />} />
              <Route exact path="/:serviceName" element={<Products />} />
              <Route exact path="/:serviceName/:serviceDetail" element={<ServiceDetails />} />
              <Route exact path="/privacy-policy" element={<Privacy_Policy />} />
              <Route exact path="/terms-and-conditions" element={<Terms />} />
            </Routes>
            < Footer />
          </>
        )}
    </>
  )
}

export default App
