import React from "react";

import "./footer.styles.css";
import Logo from "../logo/logo.component";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="page-footer">
      <div className="foot-logo">
        <Link to="/home">
          {" "}
          <Logo
            width="55"
            height="55"
            logoType="png"
            imageUrl="grillslogo.png"
          />{" "}
        </Link>
      </div>

      <div className="foot-info1">
        <h4 className="head-line">Company</h4>
        <ul>
          <Link className="foot-menu">
            <li>About US</li>
          </Link>
          <Link className="foot-menu">
            <li>Our Services</li>
          </Link>
          <Link className="foot-menu">
            <li>Privacy Policy</li>
          </Link>
        </ul>
      </div>

      <div className="foot-info2">
        <h4 className="head-line1">Get Help</h4>
        <ul>
          <Link className="foot-menu">
            {" "}
            <li>FAQ</li>{" "}
          </Link>
          <Link className="foot-menu">
            {" "}
            <li>Order Status</li>{" "}
          </Link>
          <Link className="foot-menu">
            <li>Payment Options</li>{" "}
          </Link>
        </ul>
      </div>

      <div className="foot-info3">
        <h4>Follow Us</h4>
      </div>
    </footer>
  );
}
export default Footer;
