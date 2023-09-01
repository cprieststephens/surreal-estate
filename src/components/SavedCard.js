import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faEnvelope,
  faStar,
  faSterlingSign,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/saved-card.css";

const SavedCard = ({ _id, propertyListing }) => {
  const { bathrooms, bedrooms, city, email, price, title, type } =
    propertyListing;
  const propertyId = _id;

  const handleRemoveProperty = () => {
    axios.delete(`http://localhost:3000/api/v1/Favourite/${propertyId}`);
  };

  return (
    <div className="saved-card__container">
      <div className="saved-card">
        <div className="saved-card__icon-container">
          <FontAwesomeIcon icon={faStar} className="saved-card__star" />
        </div>
        <div className="saved-card__text-field">
          <p className="saved-card__text">{title}</p>
          <p className="saved-card__text">{type}</p>
          <p className="saved-card__text">{city}</p>
        </div>
        <div className="saved-card__icon-field">
          <FontAwesomeIcon className="saved-card__icon" icon={faBath} />
          <span> {bathrooms}</span>
        </div>
        <div className="saved-card__icon-field">
          <FontAwesomeIcon className="saved-card__icon" icon={faBed} />
          <span> {bedrooms}</span>
        </div>
        <div className="saved-card__icon-field">
          <FontAwesomeIcon icon={faSterlingSign} />
          <span> {price}</span>
        </div>
        <div className="saved-card__email">
          <Link className="property-card__link" to={`mailto:${email}`}>
            <FontAwesomeIcon icon={faEnvelope} />
            <span> Email</span>
          </Link>
        </div>
        <button
          className="saved-card__remove"
          type="button"
          onClick={() => handleRemoveProperty(_id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default SavedCard;
