import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Store1 from "./Components/Store1/Store1";
import Why_Pintola from "./Components/Why_Pintola/Why_Pintola";
import Recipes from "./Components/Recipes/Recipes";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import TrackYourOrder from "./Components/TrackYourOrder/TrackYourOrder";
import Login from "./Components/Login/Login";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import { Provider } from "react-redux";
import Store from "./Components/Store/Store";

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Store1" element={<Store1 />} />
            <Route path="/Why_Pintola" element={<Why_Pintola />} />
            <Route path="/Recipes" element={<Recipes />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/TrackYourOrder" element={<TrackYourOrder />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
