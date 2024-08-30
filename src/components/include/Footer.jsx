import React from "react";
import "../css/Footer.css"; // Import a CSS file for styling
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer id="footer-1147">
      <div className="cs-container">
        <div className="cs-top">
          <a aria-label="go back to home" className="cs-logo" href="/">
            <img
              className="cs-logo-img"
              loading="lazy"
              decoding="async"
              src={logo}
              alt="logo"
              width="168"
              height="48"
            />
          </a>
          <ul className="cs-ul">
            <li className="cs-li">
              <a href="/" className="cs-link">
                Home
              </a>
            </li>
            <li className="cs-li">
              <a href="/about" className="cs-link">
                About
              </a>
            </li>
            <li className="cs-li">
              <a href="/services" className="cs-link">
                Services
              </a>
            </li>
            <li className="cs-li">
              <a href="/donations" className="cs-link">
                Donations
              </a>
            </li>
            <li className="cs-li">
              <a href="/events" className="cs-link">
                Events
              </a>
            </li>
            <li className="cs-li">
              <a href="/blog" className="cs-link">
                Blog
              </a>
            </li>
            <li className="cs-li">
              <a href="/contact" className="cs-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="cs-bottom">
          {/* Social Media Icons */}
          <ul className="cs-social">
            <li className="cs-social-li">
              <a
                href="https://facebook.com"
                className="cs-social-link"
                aria-label="facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="cs-social-icon cs-default"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/facebook-white.svg"
                  alt="Facebook icon"
                  loading="lazy"
                  decoding="async"
                  width="12"
                  height="12"
                />
              </a>
            </li>
            <li className="cs-social-li">
              <a
                href="https://twitter.com"
                className="cs-social-link"
                aria-label="twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="cs-social-icon cs-default"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/twitter-white.svg"
                  alt="Twitter icon"
                  loading="lazy"
                  decoding="async"
                  width="12"
                  height="12"
                />
              </a>
            </li>
            <li className="cs-social-li">
              <a
                href="https://instagram.com"
                className="cs-social-link"
                aria-label="instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="cs-social-icon cs-default"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram-transparent.svg"
                  alt="Instagram icon"
                  loading="lazy"
                  decoding="async"
                  width="12"
                  height="12"
                />
              </a>
            </li>
            <li className="cs-social-li">
              <a
                href="https://youtube.com"
                className="cs-social-link"
                aria-label="youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="cs-social-icon cs-default"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/youtube-transparent2.svg"
                  alt="YouTube icon"
                  loading="lazy"
                  decoding="async"
                  width="12"
                  height="12"
                />
              </a>
            </li>
          </ul>
          <span className="cs-copyright">
            © Copyright 2023 -{" "}
            <a href="/" className="cs-copyright-link">
              Stitch Non-profit Charity
            </a>
          </span>
        </div>
      </div>
      {/* Background */}
      <picture className="cs-background">
        {/* Mobile Image */}
        <source
          media="(max-width: 600px)"
          srcSet={logo}
        />
        {/* Tablet and above Image */}
        <source
          media="(min-width: 601px)"
          srcSet={logo}
        />
        <img
          loading="lazy"
          decoding="async"
          src={logo}
          alt="kids"
          width="1280"
          height="568"
        />
      </picture>
    </footer>
  );
}

export default Footer;
