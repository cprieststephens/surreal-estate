import React from "react";
import "../styles/navbar.css";
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={logo} alt="Surreal Estate logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">View Properties</li>
        <li className="navbar-links-item">Add a Property</li>
      </ul>
    </div>
  );
};

export default Navbar;
