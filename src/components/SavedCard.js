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
        <FontAwesomeIcon icon={faStar} className="saved-card__star" />
        <div className="saved-card__text-field">
          <span className="saved-card__bold">{title}</span>
        </div>
        <div className="saved-card__text-field">
          <span className="saved-card__italic">{type} - </span>
          <span className="saved-card__italic">{city}</span>
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
