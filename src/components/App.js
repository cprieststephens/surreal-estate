import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import "../styles/app.css";

const App = () => {
  const [userID, setUserID] = useState("");

  return (
    <div className="App">
      <Navbar userID={userID} setUserID={setUserID} />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="add-property" element={<AddProperty />} />;
        <Route path="sign-up" element={<SignUp />} />;
        <Route path="sign-in" element={<SignIn setUserID={setUserID} />} />;
      </Routes>
    </div>
  );
};

export default App;
