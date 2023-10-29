import { Route, Routes } from "react-router";
import Home from "./components/pages/Home/Home";
import { useEffect, useState } from "react";
import Preloader from "./components/general/Preloader";
// import { Sugar } from 'react-preloaders';
import Products from "./components/pages/Product/Products";
import Navbar from "./components/general/Navbar";
import Footer from "./components/general/Footer";
import About from "./components/pages/About/About";
import ServiceDetails from "./components/pages/Product/Sections/ServiceDetails";

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
            <Routes>
              <Route exact path='' element={<Home />} />
              <Route path="/products/:serviceName" element={<Products />} />
              <Route path="/products/:serviceName/:serviceDetail" element={<ServiceDetails />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/about-us" element={<About />} />
            </Routes>
            < Footer />
          </>
        )}
    </>
  )
}

export default App
