import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faFilter,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/sidebar.css";

const SideBar = () => {
  const [query, setQuery] = useState("");
  const { search } = useLocation();
  const navigate = useNavigate();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    navigate(newQueryString);
  };

  return (
    <div className="sidebar">
      <form className="sidebar-form" onSubmit={handleSearch}>
        <label htmlFor="query">
          <span className="sidebar-text">Search by title:</span>
          <input
            className="sidebar-search"
            type="search"
            placeholder="flat"
            id="query"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <button className="sidebar-button" type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <div className="sidebar-container">
        <div className="sidebar-filter">
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
        </div>
        <div className="sidebar-sort">
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
      </div>
    </div>
  );
};

export default SideBar;
