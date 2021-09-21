import React from "react";
import HeroBanner from "../../components/herobanner/herobanner.components";
import FeatureSection from "../../components/featureSection/featureSection-component";

import "./unauthenticatedhome.styles.css";

function UnAuthenticatedHome() {
  return (
    <div>
      <HeroBanner imageUrl="frontimage2.jpg" />
      <FeatureSection image="section-image.jpg" />
    </div>
  );
}

export default UnAuthenticatedHome;
