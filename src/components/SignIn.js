import { React, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import "../styles/sign-in.css";

const SignIn = ({ setUserID }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePasssword = (event) => {
    setPassword(event.target.value);
  };

  const onLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        navigate("/");
        setUserID(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
  };

  return (
    <div className="sign-in">
      <form className="sign-in__form">
        <div className="sign-in__item">
          <label htmlFor="sign-in__email">
            Email:
            <input
              type="email"
              id="sign-in__email"
              required
              onChange={handleEmail}
            />
          </label>
        </div>
        <div className="sign-in__item">
          <label htmlFor="sign-in__password">
            Password:
            <input
              type="password"
              id="sign-in__password"
              required
              onChange={handlePasssword}
            />
          </label>
        </div>
        <button className="sign-in__button" type="button" onClick={onLogin}>
          Sign In
        </button>
        <p className="sign-in__text">
          Need to create an account?
          <span> </span>
          <NavLink className="sign-in__link" to="/sign-up">
            Sign Up
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
