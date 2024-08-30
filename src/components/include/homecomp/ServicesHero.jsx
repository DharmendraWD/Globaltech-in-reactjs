import React from "react";
import "../../css/ServiceHero.css"; // Assuming you have a CSS file for styles
import bg8 from "../../../assets/bg8.jpg";
import { NavLink } from "react-router-dom";

const ServiceHero = () => {
  return (
    <section id="services-502">
      <div className="cs-container">
        <div className="cs-content">
          <span className="cs-topper">Products |</span>
          <h2 className="csttls">Our Products</h2>
        </div>
        <ul className="cs-card-group">
          <li className="cs-item">
            <img
              className="cs-icon"
              aria-hidden="true"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/cube.svg"
              decoding="async"
              alt="cube icon"
              width="60"
              height="60"
            />
            <div className="cs-flex-group">
              <h3 className="cs-h3">Unmatched Quality: A True Game-Changer</h3>
              <p className="cs-item-text">
                Our product delivers superior performance and reliability,
                setting new standards in excellence and innovation.
              </p>
            </div>
          </li>
          <li className="cs-item">
            <img
              className="cs-icon"
              aria-hidden="true"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/cube.svg"
              decoding="async"
              alt="cube icon"
              width="60"
              height="60"
            />
            <div className="cs-flex-group">
              <h3 className="cs-h3">
                Exceptional Design: A Perfect Blend of Function and Style
              </h3>
              <p className="cs-item-text">
                Our product combines cutting-edge design with practical
                features, enhancing both aesthetics and usability seamlessly.
              </p>
            </div>
          </li>
        </ul>
        <NavLink to={"/products"} className="cs-button-solid">View Products</NavLink>
      </div>
      <picture className="cs-background">
        <source media="(max-width: 767px)" srcSet={bg8} />
        <source media="(min-width: 768px)" srcSet={bg8} />
        <img
          loading="lazy"
          decoding="async"
          src={bg8}
          alt="people"
          width="275"
          height="132"
          aria-hidden="true"
        />
      </picture>
    </section>
  );
};

export default ServiceHero;
