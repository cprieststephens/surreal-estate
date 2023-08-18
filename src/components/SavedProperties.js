import React, { useState, useEffect } from "react";
import axios from "axios";
import SavedCard from "./SavedCard";
import Alert from "./Alert";
import "../styles/saved-properties.css";

const SavedProperties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/Favourite?populate=propertyListing`)
      .then(({ data }) => setProperties(data))
      .catch(() =>
        setAlert({
          message: "Server error. Please try again later.",
        })
      );
  }, [properties]);

  return (
    <div className="saved-properties">
      <div className="saved-properties__cards">
        {properties.map((property) => (
          <SavedCard
            key={property._id}
            {...property}
            setProperties={setProperties}
          />
        ))}
      </div>
      <div className="properties__alert">
        <Alert message={alert.message} />
      </div>
    </div>
  );
};

export default SavedProperties;
