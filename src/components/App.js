import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import BurgerNav from "./BurgerNav";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import SavedProperties from "./SavedProperties";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const App = () => {
  const [userID, setUserID] = useState("");

  return (
    <div className="App">
      <Navbar userID={userID} setUserID={setUserID} />
      <BurgerNav userID={userID} setUserID={setUserID} />
      <Routes>
        <Route path="/" element={<Properties userID={userID} />} />
        <Route path="add-property" element={<AddProperty />} />
        <Route path="saved-properties" element={<SavedProperties />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn setUserID={setUserID} />} />
      </Routes>
    </div>
  );
};

export default App;
