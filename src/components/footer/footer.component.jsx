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
              <li>Branding</li>
              <li>Marketing</li>
              <li>Campaigns</li>
            </ul>
          </div>

            <div className="footer-col">
              <h4>Socials</h4>
              <ul>
                <Link><li>Facebook</li></Link>
                <Link><li>Twitter</li></Link>
                <Link><li>Instagram</li></Link>

              </ul>
              
            
            </div>



        </div>

        
      </div>
      <hr />
    </footer>
    
  );
}
export default Footer;
