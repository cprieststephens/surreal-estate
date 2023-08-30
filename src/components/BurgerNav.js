import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import Alert from "./Alert";
import "../styles/burger-nav.css";

const BurgerNav = ({ setUserID, userID }) => {
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
    <Menu>
      {!userID ? (
        <ul>
          <li className="bm-list-item">
            <Link className="bm-link-item" to="/">
              View Properties
            </Link>
          </li>
          <li className="bm-list-item">
            <Link className="bm-link-item" to="sign-up">
              Sign Up
            </Link>
          </li>
          <li className="bm-list-item">
            <Link className="bm-link-item" to="sign-in">
              Sign In
            </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li className="bm-list-item">
            <Link className="bm-link-item" to="/">
              View Properties
            </Link>
          </li>
          <li className="bm-list-item">
            <Link className="bm-link-item" to="add-property">
              Add a Property
            </Link>
          </li>
          <li className="bm-list-item">
            <Link className="bm-link-item" to="saved-properties">
              Saved Properties
            </Link>
          </li>
        </ul>
      )}
      <button className="bm-button" type="button" onClick={handleLogout}>
        Sign Out
      </button>
      <div className="bm__alert">
        <Alert message={alert.message} />
      </div>
    </Menu>
  );
};

export default BurgerNav;
