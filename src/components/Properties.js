import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing`)
      .then(({ data }) => setProperties(data))
      .catch(() =>
        setAlert({
          message: "Server error. Please try again later.",
        })
      );
  }, []);

  return (
    <div>
      {properties.map((property) => (
        <PropertyCard key={property._id} {...property} />
      ))}
      <div className="alert-container">
        <Alert message={alert.message} />
      </div>
    </div>
  );
};

export default Properties;
