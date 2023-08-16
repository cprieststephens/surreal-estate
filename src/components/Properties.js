import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
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

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((error) => console.error(error));
  }, [search]);

  return (
    <div className="properties">
      <SideBar />
      <div className="properties__cards">
        {properties.map((property) => (
          <PropertyCard key={property._id} {...property} />
        ))}
      </div>
      <div className="properties__alert">
        <Alert message={alert.message} />
      </div>
    </div>
  );
};

export default Properties;
