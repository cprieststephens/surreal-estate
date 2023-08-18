import React from "react";
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
          <span className="property-card__bold">{title}</span>
        </div>
        <div className="property-card__text-field">
          <span className="property-card__italic">{type} - </span>
          <span className="property-card__italic">{city}</span>
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
          <a className="property-card__link" href={`mailto:${email}`}>
            <FontAwesomeIcon icon={faEnvelope} />
            <span> Email</span>
          </a>
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
