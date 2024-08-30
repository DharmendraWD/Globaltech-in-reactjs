import React from "react";
import "../../css/ServicesList.css"; // Assuming you have a CSS file for styling
import { NavLink } from "react-router-dom";
import Card2 from "../Card.jsx/Card2";

// import erp from "../../../assets/sliders/omserp.png";
// import accounting from "../../../assets/sliders/OMS-Accounting.png";
// import cloud from "../../../assets/sliders/cloudlogo.png";
// import payroll from "../../../assets/sliders/omspayroll.png";
// import fb from "../../../assets/sliders/OMS-FB.png";
// import hsptl from "../../../assets/sliders/hospital.png";
// import crm from "../../../assets/sliders/omscrmnew.png";
// import sale from "../../../assets/sliders/mobileappicon.png";
// import unifield from "../../../assets/sliders/unified-communicationcp.png";



let productsData = [
  [
    {
      img: "https://media.licdn.com/dms/image/v2/D4D12AQEZtPCuttD_iQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1697453573297?e=2147483647&v=beta&t=C8ZqgMEYiC1QXlEpXf-8AarpVF48qhR7lAd0ZgrbQ7M",
      heading: "Web Solution",
      txt: "Portal and web app development, CMS, API integration, and e-commerce solutions for comprehensive digital success.",
      icon: "https://cdn-icons-png.flaticon.com/128/11524/11524065.png",
      lnk: "",
    },
    {
      img: "https://cdn.dribbble.com/users/1912990/screenshots/6129020/cloud_computing.gif",
      heading: "Cloud Computing",
      txt: "Cloud computing is a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources.",
      icon: "https://cdn-icons-png.flaticon.com/128/17461/17461749.png",
      lnk: "",
    },
    {
      img: "https://stemettes.org/zine/wp-content/uploads/sites/3/2021/12/custom-erp-software-development.gif",
      heading: "Software Development",
      txt: "Global-Tech strives to provide our custom software solutions that will keep you a step ahead in competition by continuously improving your IT based business solutions.",
      icon: "https://cdn-icons-png.flaticon.com/128/2828/2828879.png",
      lnk: "",
    },
  ],
  [
    {
      img: "https://i.pinimg.com/originals/cb/e4/75/cbe475340003f5c756d659d1303afb0d.gif",
      heading: "Web Hosting",
      txt: "Domain registration, website and email hosting, SSL certification, Linux and Windows VPS hosting for secure and reliable online presence.",
      icon: "https://cdn-icons-png.flaticon.com/128/1373/1373110.png",
      lnk: "",
    },
    {
      img: "https://miro.medium.com/v2/resize:fit:1400/1*tONKgJWg5CQanDxs4a36-w.gif",
      heading: "API Development & Integration",
      txt: "We offer expert API development and integration services, ensuring seamless connectivity and functionality between your applications and third-party systems.",
      icon: "https://cdn-icons-png.flaticon.com/128/17580/17580405.png",
      lnk: "",
    },
    {
      img: "https://cdn.dribbble.com/users/76761/screenshots/827372/time-and-money.gif",
      heading: "We Value Your Time",
      txt: "Apart from these, We prioritize timely delivery and authentic, high-quality work, ensuring that every project meets our rigorous standards and client expectations.",
      icon: "https://cdn-icons-png.flaticon.com/128/3967/3967518.png",
      lnk: "",
    },
  ],
];





const ServicesList = () => {
  return (
    <section id="services-448">
      <div className="cs-container">
        <div className="cs-content">
        <Card2 heading={"GlobalTeach Provides"} desc={""}></Card2>
        </div>
        <ul className="cs-card-group">
          {productsData[0].map((elem, index) => {
            return (
              <li className="cs-item">
                <div className="cs-flex">
                  <picture className="cs-wrapper overflow-hidden">
                    <img
                      className="cs-icon w-[100%] h-[100%]"
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      src={elem.icon}
                      alt="icon"
                      width="70"
                      height="70"
                    />
                  </picture>
                  <h3 className="cs-h3">{elem.heading}</h3>
                  <p className="cs-item-text">{elem.txt}</p>
                  <NavLink className="cs-link">Read More</NavLink>
                </div>
                <picture className="cs-picture">
                  <source media="(max-width: 600px)" srcSet={elem.img} />
                  <source media="(min-width: 601px)" srcSet={elem.img} />
                  <img
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    src={elem.img}
                    alt="leaf"
                    width="345"
                    height="428"
                  />
                </picture>
              </li>
            );
          })}
        </ul>
        <ul className="cs-card-group">
          {productsData[1].map((elem, index) => {
            return (
              <li className="cs-item">
                <div className="cs-flex">
                  <picture className="cs-wrapper overflow-hidden">
                    <img
                      className="cs-icon w-[100%] h-[100%]"
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      src={elem.icon}
                      alt="icon"
                      width="70"
                      height="70"
                    />
                  </picture>
                  <h3 className="cs-h3">{elem.heading}</h3>
                  <p className="cs-item-text">{elem.txt}</p>
                  <NavLink className="cs-link">Read More</NavLink>
                </div>
                <picture className="cs-picture">
                  <source media="(max-width: 600px)" srcSet={elem.img} />
                  <source media="(min-width: 601px)" srcSet={elem.img} />
                  <img
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    src={elem.img}
                    alt="leaf"
                    width="345"
                    height="428"
                  />
                </picture>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ServicesList;
