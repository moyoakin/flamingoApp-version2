import React from "react";

import "./herobanner.styles.css";

function HeroBanner({ imageUrl, text}) {
  return (
    <div className="hero-container">
      <div className="control-center">
        <div
          className="front-page-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>

        <div>
          <h2 className="text-on-page">{text}</h2>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
