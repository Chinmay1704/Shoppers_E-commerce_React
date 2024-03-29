import React from "react";
import "../Pages/CSS/Loginsignup.css";

const LoginSignUp = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>

        <div className="loginsignup-fields">
          <input type="text" placeholder="Add Your name" />
          <input type="email" name="" id="" placeholder="Email Adress" />
          <input type="password" name="" id="" placeholder="Password" />
        </div>

        <button>Continue</button>

        <p className="loginsignup-login">
          Already have an account ? <span>Login Here</span>
        </p>

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
