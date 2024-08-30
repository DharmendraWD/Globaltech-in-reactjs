import React from "react";
import "./css/Sidebyside.css";
import Card2 from "./include/Card.jsx/Card2";

const Sidebyside1 = () => {
  return (
    <section id="RPsbs-1445" className="pt-[40px]">
      <Card2 heading={"Our Services"} desc={""}></Card2>
      <div className="cs-container items-center">
        <picture className="cs-picture ">
          <source
            media="(max-width: 600px)"
            srcSet="https://cdn.dribbble.com/users/1233499/screenshots/3850691/web-development.gif"
          />
          <source
            media="(min-width: 601px)"
            srcSet="https://cdn.dribbble.com/users/1233499/screenshots/3850691/web-development.gif"
          />
          <img
            loading="lazy"
            decoding="async"
            src="https://cdn.dribbble.com/users/1233499/screenshots/3850691/web-development.gif"
            alt="volunteers"
            width="650"
            height="600"
            aria-hidden="true"
          />
        </picture>
        <div className="cs-content">
          <span className="cs-topper">Giving Back</span>
          <p className="cs-text">
            Our impact is about more than moving money to where it’s needed most
            it’s also about helping nonprofits access information and ideas that
            will help them listen, learn, and grow. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quas laborum hic consequuntur porro
            repudiandae officiis, necessitatibus vero natus nihil suscipit.
          </p>
          <ul className="cs-card-group">
            <li className="cs-li">
              <picture className="cs-li-picture">
                <img
                  className="cs-li-icon"
                  aria-hidden="true"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/volunteer1.svg"
                  decoding="async"
                  alt="icon"
                  width="32"
                  height="32"
                  loading="lazy"
                />
              </picture>
              <div className="cs-flex">
                <h3 className="cs-h3">Become a Volunteer</h3>
                <p className="cs-li-text">
                  It’s no secret that one person alone cannot overcome the
                  greatest humanitarian crises. It truly takes all of us.
                </p>
              </div>
            </li>
            <li className="cs-li">
              <picture className="cs-li-picture">
                <img
                  className="cs-li-icon"
                  aria-hidden="true"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/volunteer2.svg"
                  decoding="async"
                  alt="icon"
                  width="32"
                  height="32"
                  loading="lazy"
                />
              </picture>
              <div className="cs-flex">
                <h3 className="cs-h3">Quick Fundraise</h3>
                <p className="cs-li-text">
                  It’s no secret that one person alone cannot overcome the
                  greatest humanitarian crises. It truly takes all of us.
                </p>
              </div>
            </li>
            <li className="cs-li">
              <picture className="cs-li-picture">
                <img
                  className="cs-li-icon"
                  aria-hidden="true"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/volunteer3.svg"
                  decoding="async"
                  alt="icon"
                  width="32"
                  height="32"
                  loading="lazy"
                />
              </picture>
              <div className="cs-flex">
                <h3 className="cs-h3">Start Donating</h3>
                <p className="cs-li-text">
                  It’s no secret that one person alone cannot overcome the
                  greatest humanitarian crises. It truly takes all of us.
                </p>
              </div>
            </li>
          </ul>
          <a href="" className="cs-button-solid">
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sidebyside1;
