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

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (loader) {
      setTimeout(() => {
        setLoader(false);
      }, 2500);
    }
  }, [])



  return (
    <>
      {loader ?
        (<Preloader />) :
        (
          <>
            <Navbar />
            <Popup_Form />
            <Routes>
              <Route exact path='' element={<Home />} />
              <Route path="/products/:serviceName" element={<Products />} />
              <Route path="/products/:serviceName/:serviceDetail" element={<ServiceDetails />} />
              <Route exact path="/products" element={<Product_Static />} />
              <Route exact path="/about-us" element={<About />} />
            </Routes>
            < Footer />
          </>
        )}
    </>
  )
}

export default App
