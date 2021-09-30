import React from "react";
import { Link } from "react-router-dom";
import "./featureSection.styles.css";

// function Fsection({ imageUrl, header, text, imagePosition }) {
//   return (
//     <div className="feature-container">
//       <div className="feature-control">
//         <div className="feature1">
//           <div
//             className="first-feature-image"
//             style={{ backgroundImage: `url(${imageUrl})` }}
//           ></div>
//           <div className="second-feature-text">
//             <h2 className="feature-head1">{header}</h2>
//             <p>{text}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function FeatureSection({ image1, image2 }) {
  return (
    <div className="feature-container">
      <div className="feature-control">
        <div className="feature1">
          <div
            className="first-feature-image"
            style={{ backgroundImage: `url(${image1})` }}
          ></div>

          <div className="second-feature-text">
            <h2 className="feature-head1">Our Sleek Outdoor Dinning</h2>
            <p>
              We are previlleged to have a patio space with a great and relaxing
              ambience to make your visit worth your time and money spent. Rhis
              space consist of cozy relaxing dining chairs and warm lightning.
              We promise a memorable experience if you choose to visit us.
            </p>

            <div className="reserve-buttons">
              <Link to="/home" id="browse-aux" className="browse">
                Reserve this Space
              </Link>
            </div>
          </div>
        </div>

        <div className="feature2">
          <div className="first-feature-text">
            <h2 className="feature-head1">Our Patio Dining</h2>
            <p className="feature-para">
              We are previlleged to have a patio space with a great and relaxing
              ambience to make your visit worth your time and money spent. Rhis
              space consist of cozy relaxing dining chairs and warm lightning.
              We promise a memorable experience if you choose to visit us.
            </p>
          </div>

          <div
            className="second-feature-image"
            style={{ backgroundImage: `url(${image2})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
