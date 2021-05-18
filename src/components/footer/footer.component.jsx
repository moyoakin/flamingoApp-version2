import React from "react";

import "./footer.styles.css";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <Link className="foot-menu">
                <li>Branding</li>
              </Link>
              <Link className="foot-menu">
                <li>Marketing</li>
              </Link>
              <Link className="foot-menu">
                <li>Campaigns</li>
              </Link>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Socials</h4>
            <ul>
              <Link className="foot-menu">
                <li>Facebook</li>
              </Link>
              <Link className="foot-menu">
                <li>Twitter</li>
              </Link>
              <Link className="foot-menu">
                <li>Instagram</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="reservation">
        <p> &copy; 2021, Grill 'n' Chops All Rights Reserved </p>
      </div>
    </footer>
  );
}
export default Footer;
