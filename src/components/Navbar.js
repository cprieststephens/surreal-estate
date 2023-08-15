import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import logo from "../img/logo.png";
import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("sign-in");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <Link className="navbar-links-item" to="sign-in">
          Sign In
        </Link>
        <button className="navbar-button" type="button" onClick={handleLogout}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
