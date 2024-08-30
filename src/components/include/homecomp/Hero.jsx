

import React from "react";
import { GraduationCap } from "lucide-react";
import { Play } from "lucide-react";

import '../../css/Hero.css'

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..




export function Hero() {
  AOS.init();
  
  return (
    <div className="relative w-full">
      <nav className="z-50">
        <div className="w-full bg-white"></div>
      </nav>
      <div className="relative isolate z-0 bg-white px-6 pt-[.5rem] lg:px-8">
        <div className="relative mx-auto max-w-2xl Hero1Child">
          <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".7"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-center">
            <h1
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl pt-[40px]"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="2000"
            >
              OUR IDEA YOUR SUCCESS
            </h1>
            <p
              className="mt-6 text-lg leading-8 text-gray-600"
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="2000"
            >
              Global-Tech is a team of experienced IT consultants that focus on
              providing the quality software solutions to the organization.
              Global-Tech has gained a vast experience in a decade, fulfilling
              the exact needs of the customer by providing the most recent and
              up-gradable technology for unified solution in IT sector across a
              wide spectrum.
            </p>
            <div
              className="mt-10 flex items-center justify-center gap-x-2"
              data-aos="fade-down"
              data-aos-duration="3000"
            >
              <button
                type="button"
                className="rounded-md flex gap-2 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Learn More
                <GraduationCap></GraduationCap>
              </button>
              <button
                type="button"
                className="rounded-md flex gap-2 border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Watch Video
                <Play></Play>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero