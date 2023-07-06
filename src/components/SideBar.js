import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-links">
        <Link
          className="sidebar-links-item"
          to={`/?query={"city": "Manchester"}`}
        >
          Manchester
        </Link>
        <Link className="sidebar-links-item" to={`/?query={"city": "Leeds"}`}>
          Leeds
        </Link>
        <Link
          className="sidebar-links-item"
          to={`/?query={"city": "Sheffield"}`}
        >
          Sheffield
        </Link>
        <Link
          className="sidebar-links-item"
          to={`/?query={"city": "Liverpool"}`}
        >
          Liverpool
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
