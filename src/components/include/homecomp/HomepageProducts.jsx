import React, { useEffect } from "react";
import "../../css/HomepageProducts.css";
import Heading from "../../include/Heading";

import erp from "../../../assets/sliders/omserp.png";
import accounting from "../../../assets/sliders/OMS-Accounting.png";
import cloud from "../../../assets/sliders/cloudlogo.png";
import payroll from "../../../assets/sliders/omspayroll.png";
import fb from "../../../assets/sliders/OMS-FB.png";
import hsptl from "../../../assets/sliders/hospital.png";
import crm from "../../../assets/sliders/omscrmnew.png";
import sale from "../../../assets/sliders/mobileappicon.png";
import unifield from "../../../assets/sliders/unified-communicationcp.png";

import AOS from "aos";
import "aos/dist/aos.css";

function HomepageProducts() {


  const omsProductParent = [
    [
      { img: erp, txt: "OMS | ERP" },
      { img: accounting, txt: "OMS Accounting" },
      { img: cloud, txt: "OMS Cloud Accounting" },
    ],
    [
      { img: payroll, txt: "OMS Payroll" },
      { img: fb, txt: "OMS F&B" },
      { img: hsptl, txt: "Hospital Manager" },
    ],
    [
      { img: crm, txt: "OMS CRM" },
      { img: sale, txt: "Smart Salesmen" },
      { img: unifield, txt: "Unified Communication" },
    ],
  ];

  return (
    <div className="parentScroll w-full">
      <Heading label={"Our Products"} />
      {omsProductParent.map((elem, index) => (
        <div
         
          key={index}
          className="bg-red-300 flex justify-center items-center h-screen gap-[60px] childScroll"
        >
          {elem.map((item, index2) => (
            <div key={index2} className="w-[300px] rounded-md border">
              <img
                src={item.img}
                alt={item.txt}
                className="h-[200px] prdctImage rounded-md object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold">{item.txt}</h1>
                <p className="mt-3 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, debitis?
                </p>
                <button
                  type="button"
                  className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Read
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default HomepageProducts;
