import React from "react";
import { Link } from "react-router-dom";
import "./featureSection.styles.css";

function FeatureSection({ image }) {
  return (
    <div className="feature-container">
      <div className="feature-control">
        <div
          className="feature-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="feature-text">
          <div className="feature-elements">
            <h1 className="feature-head">
              A glimpse of our luxirious dinning room
            </h1>
            <h3 className="bold-sec">We have the perfect Ambience</h3>
            <pre className="section-pre">
              Have a quick look at our luxirious{" "}
              <Link to="/menu" className="section-pre-link">
                Menu
              </Link>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
