import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import SignUp from "./SignUp";
import "../styles/app.css";

const App = () => {
  const [userID, setUserID] = useState("");

  return (
    <div className="App">
      <Navbar onSetUserID={setUserID} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="add-property" element={<AddProperty />} />;
        <Route path="sign-up" element={<SignUp />} />;
      </Routes>
    </div>
  );
};

export default App;
