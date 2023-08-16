import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import logo from "../img/logo.png";
import "../styles/navbar.css";

const Navbar = ({ setUserID, userID }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUserID(null);
        navigate("sign-in");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="navbar">
      <img className="navbar-logo" src={logo} alt="Surreal Estate logo" />
      <h2 className="navbar-title">Surreal Estate</h2>
      {!userID ? (
        <div className="navbar-links">
          <Link className="navbar-links-item" to="/">
            View Properties
          </Link>
          <Link className="navbar-links-item" to="sign-up">
            Sign Up
          </Link>
          <Link className="navbar-links-item" to="sign-in">
            Sign In
          </Link>
        </div>
      ) : (
        <div className="navbar-links">
          <Link className="navbar-links-item" to="/">
            View Properties
          </Link>
          <Link className="navbar-links-item" to="add-property">
            Add a Property
          </Link>
          <button
            className="navbar-button"
            type="button"
            onClick={handleLogout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
