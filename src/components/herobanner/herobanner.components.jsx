import React from "react";
import "./herobanner.styles.css";
import { Link } from "react-router-dom";

function HeroBanner({ imageUrl, text }) {
  return (
    <div className="hero-container">
      <div className="control-center">
        <div
          className="front-page-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>

        <div className="text-box">
          <h2 className="content"> Coming Soon </h2>

          <div className="buttons">
          <Link className="browse">Menu</Link>
          <Link className="browse">Tell us</Link>
          </div>
         

        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
