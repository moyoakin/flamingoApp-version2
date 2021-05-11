import React from "react";
import Logo from "../logo/logo.component";
import "./header.styles.css";
import { Link } from "react-router-dom";
import { useRestApi } from "../../context/restApiContext";

function Header() {
  const { user } = useRestApi();

  return (
    <div className="header-container">
      <Logo width="120" height="120" logoType="png" imageUrl="grillslogo.png" />
      <div className="all-items">
        <Link to="/" className="nav-menu">
          Home
        </Link>

        <Link to="/login" className="nav-menu">
          Our Menu
        </Link>

        <Link to="/" className="nav-menu">
          Contact
        </Link>

        {user ? (
          <Link to="/home" className="nav-menu" >
            Sign Out <p>Welcome {user.firstName}</p>
          </Link>
        ) : (
          <Link to="/login" className="nav-menu">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
