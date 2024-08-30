import React, { useEffect } from 'react'
import NavBar from './components/include/NavBar'
import { Suspense, lazy } from "react";

// import {Link, Routes, Route} from "react-router-dom";
const Home = lazy(() => import("./components/Home"));
const Products = lazy(() => import("./components/Products"));
const Services = lazy(() => import("./components/Services"));
const OurTeam = lazy(() => import("./components/OurTeam"));
const ProductDetails = lazy(() => import("./components/ProductDetails"));
const Client = lazy(() => import("./components/Client"));

import Footer from './components/include/Footer'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './components/Products';





function App() {
 const currentUrl = window.location.href;

  // Change BG color on scroll 
  // useEffect(() => {
  //   // Function to change background color based on scroll position
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;

  //     // Determine the background color based on scroll position
  //     let backgroundColor = '#ffffff'; // Default color

  //     if (scrollPosition < 300) {
  //       backgroundColor = '#ff9999'; // Example color
  //     } else if (scrollPosition >= 300 && scrollPosition < 600) {
  //       backgroundColor = '#99ff99'; // Example color
  //     } else if (scrollPosition >= 600) {
  //       backgroundColor = '#9999ff'; // Example color
  //     }

  //     // Apply the background color to the body
  //     document.body.style.backgroundColor = backgroundColor;
  //   };

  //   // Add scroll event listener
  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup function to remove the event listener
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);






  return (
    <div>
      <NavBar></NavBar>

      {/* <Map></Map> */}

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/service" element={<Services />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/product" element={<Product />} />
          <Route path="/client" element={<Client />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Suspense>
      {/* <Route path={`/product-details/${contextData.btnId}`} element={<ProductDetails></ProductDetails>}></Route> */}
      {/* <Route path={`/product-details`} element={<ProductDetails></ProductDetails>}></Route> */}
      <Footer></Footer>
    </div>
  );
}

export default App




