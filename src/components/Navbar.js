import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={logo} alt="Surreal Estate logo" />
      <h2 className="navbar-title">Surreal Estate</h2>
      <ul className="navbar-links">
        <Link className="navbar-links-item" to="/">
          View Properties
        </Link>
        <Link className="navbar-links-item" to="add-property">
          Add a Property
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
