import React from "react";
import "../styles/sign-up.css";

const Register = () => {
  return (
    <div className="sign-up">
      <form>
        <label htmlFor="sign-up__email">
          Email: <input type="email" id="sign-up__email" />
        </label>
        <label htmlFor="sign-up__password">
          Password: <input type="password" id="sign-up__password" />
        </label>
      </form>
      <button type="button">Sign Up</button>
    </div>
  );
};

export default Register;
