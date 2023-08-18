import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
          <Link className="navbar-links-item" to="saved-properties">
            Saved Properties
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
      <div className="navbar__alert">
        <Alert message={alert.message} />
      </div>
    </div>
  );
};

export default Navbar;
