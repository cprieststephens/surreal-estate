import React from "react";
import "../styles/sign-in.css";

const SignIn = ({ setuserID }) => {
  const handleLogin = () => {};

  return (
    <div className="sign-in">
      <form>
        <label htmlFor="sign-in__email">
          Email: <input type="email" id="sign-in__email" />
        </label>
        <label htmlFor="sign-in__password">
          Password: <input type="password" id="sign-in__password" />
        </label>
      </form>
      <button type="button" onClick={handleLogin}>
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
