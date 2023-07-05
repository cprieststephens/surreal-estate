import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faSterlingSign,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/property-card.css";
import logo from "../img/logo.png";

const propertyCard = ({
  bathrooms,
  bedrooms,
  city,
  email,
  price,
  title,
  type,
}) => {
  return (
    <div className="property-card__container">
      <div className="property-card">
        <div className="property-card_logo-container">
          <img
            className="property-card__logo"
            src={logo}
            alt="Surreal Estate logo"
          />
        </div>
        <div className="property-card__item">
          <span className="property-card__bold">{title}</span>
        </div>
        <div className="property-card__item">
          <span className="property-card__italic">{type} - </span>
          <span className="property-card__italic">{city}</span>
        </div>
        <div className="property-card__item">
          <FontAwesomeIcon className="property-card__icon" icon={faBath} />
          <span> {bathrooms}</span>
        </div>
        <div className="property-card__item">
          <FontAwesomeIcon className="property-card__icon" icon={faBed} />
          <span> {bedrooms}</span>
        </div>
        <div className="property-card__item">
          <FontAwesomeIcon icon={faSterlingSign} />
          <span> {price}</span>
        </div>
        <div className="property-card__email">
          <a className="property-card__link" href={`mailto:${email}`}>
            <FontAwesomeIcon icon={faEnvelope} />
            <span> Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default propertyCard;
