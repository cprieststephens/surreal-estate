import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "../styles/navbar.css";

const Navbar = ({ onSetUserID }) => {
  const handleLogin = () => {};
  const handleLogout = () => {};

  return (
    <div className="navbar">
      <img className="navbar-logo" src={logo} alt="Surreal Estate logo" />
      <h2 className="navbar-title">Surreal Estate</h2>
      <div className="navbar-links">
        <Link className="navbar-links-item" to="/">
          View Properties
        </Link>
        <Link className="navbar-links-item" to="add-property">
          Add a Property
        </Link>
        <Link className="navbar-links-item" to="sign-up">
          Sign Up
        </Link>
      </div>
      {onSetUserID ? (
        <button className="navbar-button" type="button" onClick={handleLogout}>
          Sign Out
        </button>
      ) : (
        <button className="navbar-button" type="button" onClick={handleLogin}>
          Sign In
        </button>
      )}
    </div>
  );
};

export default Navbar;
