import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faFilter } from "@fortawesome/free-solid-svg-icons";
import "../styles/sidebar.css";

const buildQueryString = (operation, valueObj) => {
  const { search } = useLocation();
  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify(valueObj),
  };
  return qs.stringify(newQueryParams, {
    addQueryPrefix: true,
    encode: false,
  });
};

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <FontAwesomeIcon className="sidebar-icon" icon={faFilter} />
        <p className="sidebar-text">Filter by city:</p>
      </div>
      <ul className="sidebar-links">
        <Link
          className="sidebar-links-item"
          to={buildQueryString("query", { city: "Manchester" })}
        >
          Manchester
        </Link>
        <Link
          className="sidebar-links-item"
          to={buildQueryString("query", { city: "Leeds" })}
        >
          Leeds
        </Link>
        <Link
          className="sidebar-links-item"
          to={buildQueryString("query", { city: "Sheffield" })}
        >
          Sheffield
        </Link>
        <Link
          className="sidebar-links-item"
          to={buildQueryString("query", { city: "Liverpool" })}
        >
          Liverpool
        </Link>
      </ul>
      <div className="sidebar-title">
        <FontAwesomeIcon className="sidebar-icon" icon={faSort} />
        <p className="sidebar-text">Sort by price:</p>
      </div>
      <ul className="sidebar-links">
        <Link
          className="sidebar-links-item"
          to={buildQueryString("sort", { price: 1 })}
        >
          Ascending
        </Link>
        <Link
          className="sidebar-links-item"
          to={buildQueryString("sort", { price: -1 })}
        >
          Descending
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
