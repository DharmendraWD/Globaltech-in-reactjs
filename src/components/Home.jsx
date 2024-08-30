import React from 'react'
import Hero from "./include/homecomp/Hero.jsx";
import Hero2 from "./include/homecomp/Hero2.jsx"
import Slider from "./include/homecomp/Sliders.jsx"
import WhyChooseUS from './include/homecomp/whychooseus/WhyChooseUS.jsx'
import OurServices from "./include/homecomp/OurServices.jsx";


function Home() {
  return (
    <>
      <Hero></Hero>
      <Hero2></Hero2>
      <Slider></Slider>
      <OurServices></OurServices>

      {/* <Sidebyside1></Sidebyside1> */}
      <WhyChooseUS></WhyChooseUS>
    </>
  );
}

export default Home