import React from "react";
import SvgLogo from "../../assets/thelogo.svg";

function Logo({ width = 48, height = 48, logoType, imageUrl }) {
  return (
    <div>
      {logoType !== "svg" ? (
        <div>
          <img
            src={imageUrl}
            alt=""
            style={{ width: `${width}px`, height: `${height}px` }}
          ></img>
        </div>
      ) : (
        <SvgLogo style={{ width: `${width}px`, height: `${height}px` }} />
      )}
    </div>
  );
}

export default Logo;
