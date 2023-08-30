import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserPlus,
  faRightToBracket,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import logo from "../img/logo.png";
import Alert from "./Alert";
import "../styles/navbar.css";

const Navbar = ({ setUserID, userID }) => {
  const [alert, setAlert] = useState({ message: "" });
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUserID(null);
        navigate("sign-in");
      })
      .catch(() => {
        setAlert({
          message: "Sign out unsuccessful. Please try again.",
        });
      });
  };

  return (
    <div className="navbar">
      <img className="navbar-logo" src={logo} alt="Surreal Estate logo" />
      <h2 className="navbar-title">Surreal Estate</h2>
      {!userID ? (
        <div className="navbar-container">
          <ul className="navbar-links">
            <li>
              <Link className="navbar-links-item" to="/">
                <FontAwesomeIcon className="navbar-icon" icon={faHouse} />
                <span className="navbar-text">View Properties</span>
              </Link>
            </li>
            <li>
              <Link className="navbar-links-item" to="sign-up">
                <FontAwesomeIcon className="navbar-icon" icon={faUserPlus} />
                <span className="navbar-text">Sign Up</span>
              </Link>
            </li>
            <li>
              <Link className="navbar-links-item" to="sign-in">
                <FontAwesomeIcon
                  className="navbar-icon"
                  icon={faRightToBracket}
                />
                <span className="navbar-text">Sign In</span>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-container">
          <ul className="navbar-links">
            <li>
              <Link className="navbar-links-item" to="/">
                <FontAwesomeIcon className="navbar-icon" icon={faHouse} />
                <span className="navbar-text">View Properties</span>
              </Link>
            </li>
            <li>
              <Link className="navbar-links-item" to="add-property">
                <FontAwesomeIcon className="navbar-icon" icon={faPlus} />
                <span className="navbar-text">Add a Property</span>
              </Link>
            </li>
            <li>
              <Link className="navbar-links-item" to="saved-properties">
                <FontAwesomeIcon className="navbar-icon" icon={faStar} />
                <span className="navbar-text">Saved Properties</span>
              </Link>
            </li>
          </ul>
          <button
            className="navbar-button"
            type="button"
            onClick={handleLogout}
          >
            Sign Out
          </button>
        </div>
      )}
      <div className="navbar__alert">
        <Alert message={alert.message} />
      </div>
    </div>
  );
};

export default Navbar;
