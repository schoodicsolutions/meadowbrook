import { Route, Routes } from "react-router";
import Home from "./components/pages/Home/Home";
import { useEffect, useState } from "react";
import Preloader from "./components/general/Preloader";
// import { Sugar } from 'react-preloaders';
import Products from "./components/pages/Product/Products";
import Navbar from "./components/general/Navbar";
import Footer from "./components/general/Footer";

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
              <Route exact path='/' element={<Home />} />
              <Route exact path="/products/:serviceName" element={<Products />} />
              <Route exact path="/products" element={<Products />} />
            </Routes>
            < Footer />
          </>
        )}
    </>
  )
}

export default App
