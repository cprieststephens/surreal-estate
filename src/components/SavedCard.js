import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faEnvelope,
  faStar,
  faSterlingSign,
} from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon icon={faStar} />
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
          <a className="saved-card__link" href={`mailto:${email}`}>
            <FontAwesomeIcon icon={faEnvelope} />
            <span> Email</span>
          </a>
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
