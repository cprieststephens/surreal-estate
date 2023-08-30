import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "../styles/burger-nav.css";

const BurgerNav = () => {
  return (
    <Menu>
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
    </Menu>
  );
};

export default BurgerNav;
