import React, { useState } from "react";
import "../styles/add-property.css";
import postProperty from "../requests/postProperty";
import Alert from "./Alert";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      type: "Flat",
      bedrooms: 1,
      bathrooms: 1,
      price: 0,
      city: "Manchester",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    postProperty(fields, setAlert);
  };

  return (
    <div className="add-property">
      <Alert message={alert.message} success={alert.isSuccess} />
      <form onSubmit={handleAddProperty} className="add-property__form">
        <div className="add-property__form-item">
          <label htmlFor="title">
            <span>Title: </span>
            <input
              className="add-property__free-text"
              type="text"
              placeholder="Flat available"
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="add-property__form-item">
          <label htmlFor="type">
            <span>Type: </span>
            <select
              className="add-property__dropdown"
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <div className="add-property__form-item">
          <label htmlFor="bedrooms">
            <span>Bedrooms: </span>
            <input
              className="add-property__number"
              type="number"
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="add-property__form-item">
          <label htmlFor="bathrooms">
            <span>Bathrooms: </span>
            <input
              className="add-property__number"
              type="number"
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="add-property__form-item">
          <label htmlFor="price">
            <span>Price: £ </span>
            <input
              className="add-property__price"
              type="number"
              id="price"
              name="price"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="add-property__form-item">
          <label htmlFor="city">
            <span>City: </span>
            <select
              className="add-property__dropdown"
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
        </div>
        <div className="add-property__form-item">
          <label htmlFor="email">
            <span>Email: </span>
            <input
              className="add-property__free-text"
              type="email"
              placeholder="jane.doe@email.co.uk"
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <button type="submit" className="add-property__button">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
