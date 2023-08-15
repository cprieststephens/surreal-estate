import { React, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import "../styles/sign-up.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      .then((userCredential) => {
        const userID = userCredential.user;
        console.log(userID);
        navigate("/sign-in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="sign-up">
      <form>
        <label htmlFor="sign-up__email">
          Email:
          <input
            type="email"
            id="sign-up__email"
            value={email}
            onChange={handleEmail}
            required
          />
        </label>
        <label htmlFor="sign-up__password">
          Password:
          <input
            type="password"
            id="sign-up__password"
            value={password}
            onChange={handlePassword}
            required
          />
        </label>
        <button type="submit" onClick={onSubmit}>
          Sign Up
        </button>
        <p>
          Already have an account?
          <NavLink to="/sign-in">Sign In</NavLink>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
