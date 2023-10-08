import { Route, Routes } from "react-router";
import Home from "./components/pages/Home/Home";
import { useEffect, useState } from "react";
import Preloader from "./components/general/Preloader";
import { Sugar } from 'react-preloaders';

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
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
        )}
    </>
  )
}

export default App
