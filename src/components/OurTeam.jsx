// src/components/OurTeam.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES, fetchTeams } from "../redux/ourTeamslice";
import { Facebook, Twitter, Instagram } from "lucide-react"; // Import social media icons
import "./css/OurTeam.css";
import { NavLink } from "react-router-dom";
import Card2 from "./include/Card.jsx/Card2";



const OurTeam = () => {
  const dispatch = useDispatch();
  const { products = [], status } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  if (status === STATUSES.LOADING) {
    return (
      <div style={{ position: "absolute", top: "50%", left: "50%" }}>
        Loading...
      </div>
    );
  }

  if (status === STATUSES.ERROR) {
    return <div>Error loading Team Members</div>;
  }

  return (
    <>
      <section id="meet-team-977" className="pt-[40px]">
        <div className="cs-container">
          <div className="cs-content">
            {/* <span className="cs-topper">Our Team</span> */}
            <Card2
              heading={"Our Team"}
              desc={
                "Our team is dedicated, skilled, and passionate about delivering excellence."
              }
            ></Card2>
            <h2 className="cs-title">Our Expert Team Members</h2>
            <p className="cs-text">
              At Stitch Salon Service, we strive to give the best experience and
              service to every client that walks in the door. Meet the team
              members that make it all possible.
            </p>
          </div>
          <ul className="cs-card-group">
            {products.data &&
              products.data.map((member, index) => (
                <li className="cs-item" key={index}>
                  <picture className="cs-picture">
                    <source
                      media="(max-width: 600px)"
                      // srcSet={
                      //   "https://cdn.pixabay.com/photo/2023/07/20/05/32/grass-8138399_1280.jpg"
                      // } // Use member's image source
                      src={member.image}
                    />
                    <source
                      media="(min-width: 601px)"
                      // srcSet={
                      //   "https://cdn.pixabay.com/photo/2023/07/20/05/32/grass-8138399_1280.jpg"
                      // } // Use member's image source

                      src={member.image}
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      src={member.image} // Use member's image source
                      // src={
                      //   "https://cdn.pixabay.com/photo/2023/07/20/05/32/grass-8138399_1280.jpg"
                      // } // Use member's image source
                      alt="stylist"
                      width="320"
                      height="400"
                    />
                  </picture>
                  <div className="cs-info">
                    <span className="cs-name">{member.name}</span>
                    <span className="cs-job">{member.position}</span>
                    <div className="cs-social-group">
                      <NavLink className="cs-link">
                        <Twitter />
                      </NavLink>
                      <NavLink className="cs-link">
                        <Instagram></Instagram>
                      </NavLink>
                      <NavLink className="cs-link">
                        <Facebook></Facebook>
                      </NavLink>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
