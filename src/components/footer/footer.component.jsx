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
          <li className="footer-li">
            <Link className="foot-menu">About US</Link>
          </li>

          <li className="footer-li">
            <Link className="foot-menu">Our Services</Link>
          </li>
          <li className="footer-li">
            <Link className="foot-menu">Privacy Policy</Link>
          </li>
        </ul>
      </div>

      <div className="foot-info2">
        <h4 className="head-line1">Get Help</h4>
        <ul>
          <li className="footer-li">
            <Link className="foot-menu">FAQ</Link>
          </li>
          <li className="footer-li">
            <Link className="foot-menu">Order Status</Link>
          </li>
          <li className="footer-li">
            <Link className="foot-menu">Payment Options</Link>
          </li>
        </ul>
      </div>

      <div className="foot-info3">
        <h4>Follow Us</h4>
      </div>

      <div className="subcription-sec">
        <div className="sub-elements">
          <h4 className="sub-header">Subscribe to Our Newsletter</h4>
          <p className="sub-para">
            Get notified when we have our annual and monthly food tasting events
            and other specials.
          </p>

          <br />
          <div className="subcribe">
            <form className="sub-form">
              <input
                className="sub-input"
                type="email"
                placeholder="Your email"
              ></input>
              <button className="sub-button" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
