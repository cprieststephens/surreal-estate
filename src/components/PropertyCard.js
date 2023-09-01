import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faEnvelope,
  faStar,
  faSterlingSign,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/property-card.css";
import logo from "../img/logo.png";

const propertyCard = ({
  bathrooms,
  bedrooms,
  city,
  email,
  _id,
  onSaveProperty,
  price,
  title,
  type,
  userID,
}) => {
  return (
    <div className="property-card__container">
      <div className="property-card">
        <div className="property-card__logo-container">
          <img
            className="property-card__logo"
            src={logo}
            alt="Surreal Estate logo"
          />
        </div>
        <div className="property-card__text-field">
          <p className="property-card__text">{title}</p>
          <p className="property-card__text">{type}</p>
          <p className="property-card__text">{city}</p>
        </div>
        <div className="property-card__icon-field">
          <FontAwesomeIcon className="property-card__icon" icon={faBath} />
          <span> {bathrooms}</span>
        </div>
        <div className="property-card__icon-field">
          <FontAwesomeIcon className="property-card__icon" icon={faBed} />
          <span> {bedrooms}</span>
        </div>
        <div className="property-card__icon-field">
          <FontAwesomeIcon icon={faSterlingSign} />
          <span> {price}</span>
        </div>
        <div className="property-card__email">
          <Link className="property-card__link" to={`mailto:${email}`}>
            <FontAwesomeIcon icon={faEnvelope} />
            <span> Email</span>
          </Link>
        </div>
        {userID && (
          <button
            className="property-card__save"
            type="button"
            onClick={() => onSaveProperty(_id)}
          >
            <FontAwesomeIcon icon={faStar} />
            <span> Save</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default propertyCard;
