import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import Alert from "./Alert";
import "../styles/sign-up.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ message: "" });
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/sign-in");
      })
      .catch(() => {
        setAlert({
          message: "Sign up unsuccessful. Please try again.",
        });
      });
  };

  return (
    <div className="sign-up">
      <form className="sign-up__form">
        <div className="sign-up__item">
          <label htmlFor="sign-up__email">
            Email:
            <input
              className="sign-up__input"
              type="email"
              id="sign-up__email"
              value={email}
              onChange={handleEmail}
              required
            />
          </label>
        </div>
        <div className="sign-up__item">
          <label htmlFor="sign-up__password">
            Password:
            <input
              className="sign-up__input"
              type="password"
              id="sign-up__password"
              value={password}
              onChange={handlePassword}
              required
            />
          </label>
        </div>
        <button className="sign-up__button" type="submit" onClick={onSubmit}>
          Sign Up
        </button>
        <p className="sign-up__text">
          Already have an account?
          <span> </span>
          <NavLink className="sign-up__link" to="/sign-in">
            Sign In
          </NavLink>
        </p>
      </form>
      <div className="sign-up__alert">
        <Alert message={alert.message} />
      </div>
    </div>
  );
};

export default SignUp;
