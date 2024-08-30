import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel CSS
import { GraduationCap } from "lucide-react";

import "../../css/slider.css"

import osmAccounting from "../../../assets/sliders/hospital.png";
import omsCRM from "../../../assets/sliders/omscrmnew.png";
import omsFB from "../../../assets/sliders/OMS-FB.png";
import cldAcco from "../../../assets/sliders/OMS-Accounting.png";
import fxdAsse from "../../../assets/sliders/oms-fixedassetsnew.png";

const Sliders = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onChange = (index) => {
    setCurrentIndex(index);
  };

  const sliderContent = [
    {
      img: osmAccounting,
      txt: "OMS Accounting",
      desc: "The integrated system for hospital management efficiently stores and organizes patient data, appointments, billing information, and medical records comprehensively.",
    },
    {
      img: omsCRM,
      txt: "OMS CRM",
      desc: "A comprehensive accounting software solution for business managers that handles financial transactions, budgeting, reporting, and tax preparation seamlessly and efficiently.",
    },
    {
      img: omsFB,
      txt: "OMS F&B",
      desc: "Speed in order process and turnaround time.",
    },
    {
      img: cldAcco,
      txt: "OMS Cloud Computing",
      desc: "Nepal's first Cloud base Accounting software",
    },
    {
      img: fxdAsse,
      txt: "OMS Fixed Assets",
      desc: "Manage Your Fixed Assests.",
    },
  ];
  return (
 <div className="flex w-[100%] flex-col items-center rounded-md border md:flex-row">

      <div className="w-[50%] sliderdesc">
        {/* <p className="slider-text">{sliderContent[currentIndex]?.txt}</p> */}
        <div className="p-4">
          <h1 className="block text-center items-center text-lg font-semibold">
            {sliderContent[currentIndex]?.txt}
          </h1>
          <p className="mt-3 block text-center text-sm text-gray-600">
            {sliderContent[currentIndex]?.desc}
          </p>
          <div className="mt-3 flex items-center justify-center space-x-2">
            <button
              type="button"
              className="rounded-md flex gap-2 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Learn More
              <GraduationCap></GraduationCap>
            </button>
          </div>
        </div>
      </div>

      <div className="w-[50%] sliderimg">
        <Carousel
          showArrows={true}
          onChange={onChange}
          autoPlay={true} // Enable auto-play
          interval={3000} // Set the interval between slides in milliseconds (e.g., 3000ms = 3s)
          infiniteLoop={true} // Enable infinite loop
          swipeable={true} // Allow swipe actions
          transitionTime={500} // Time for slide transition (e.g., 500ms)
        >
          {sliderContent.map((elem, index) => (
            <div
              key={index}
              className="h-full w-full md:h-[200px] md:w-[300px]"
            >
              <img
                className="h-full w-full rounded-md object-cover"
                src={elem.img}
                alt={`Slide ${index + 1}`}
              />
              {/* <p className="legend">{elem.txt}</p> */}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Sliders;
