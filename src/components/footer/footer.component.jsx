import React from "react";

import "./footer.styles.css";
import CustomButton from "../custom-button/cutom-button.component";
import Contact from "../contact/contact.component";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <ul className="foot-menu">
              <li>orders@grillsnchops.com</li>
              <br></br>

              <li>+1 778-239-1234</li>
              <br></br>
              <li>Campaigns</li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="custom-paragraph">
              <p>
                If you have any inquiries,
                <br></br>
                <br></br>
                Please Contact us{" "}
              </p> <br></br>
              <CustomButton type="contact">
                <Link to="/contact" className="footer-button">
                  {" "}
                  Contact
                </Link>
              </CustomButton>
            </div>
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
