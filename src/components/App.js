import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import "../styles/app.css";

const App = () => {
  const [userID, setUserID] = useState("");

  return (
    <div className="App">
      <Navbar onSetUserID={setUserID} />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="add-property" element={<AddProperty />} />;
      </Routes>
    </div>
  );
};

export default App;
