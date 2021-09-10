import React from "react";
import "./herobanner.styles.css";
import { Link } from "react-router-dom";

function HeroBanner({ imageUrl, text }) {
  return (
    <div className="hero-container">
      <div className="control-center">
        <div className="text-box1">
          <div className="all_elements">
            <h1 className="content-head"> Coming Soon </h1>
            <h3 className="bold-text">We make luxury Meals</h3>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt .
            </p>

            <div className="buttons">
              <Link id="browse-aux" className="browse">Menu</Link>
              <Link id="tell-aux" className="tell">Tell us</Link>
            </div>
            <div className="navigation-text">
            <pre className="the-pre">Already have an account?</pre>
            <Link to="/login" className="hero-sign">Sign in</Link>
            </div>
          </div>
        </div>

        <div
          className="front-page-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
    </div>
  );
}

export default HeroBanner;
