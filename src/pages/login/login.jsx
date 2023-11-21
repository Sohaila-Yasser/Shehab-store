import React from "react";
import "./login.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export const Login = () => {
  const mystyle = {
    color: "blue",
    backgroundColor: "white"
  };
  const twitterColor = {
    color: "#9fe4e8"
  };
  const googleColor = {
    color: "red"
  };

  return (
    <div id="login-items">
      <div className="image-part">
        <img
          src="https://media.istockphoto.com/id/1346006057/photo/digital-marketing.jpg?s=612x612&w=0&k=20&c=XnRma4NVQc4hfI_LrG6r70hUbscc7c3R8fClQzR_rzo="
          className="login-image"
        />
      </div>
      <div className="form-elements">
        <h3>
          <b>Shehab</b>
        </h3>
        <h5>Welcome to shehab store!</h5>
        <p>Please sign in your account and start purchase</p>
        <div className="inputContainer">
          <input type="text" className="input" required />
          <label for="" className="label">
            Email
          </label>
        </div>
        <div className="inputContainer">
          <input type="text" className="input" required />
          <label for="" className="label">
            Password
          </label>
        </div>
        <p>Forget your password?</p>
        <button className="login-button">
          <b>SIGN IN</b>
        </button>
        <div className="new-person">
          <p>New to our platform?</p>
          <p style={{ color: "blue" }}>Create an account</p>
        </div>
        <p className="options">or</p>
        <div className="social-media">
          <a>
            <FaFacebook style={mystyle} size={20} />
          </a>
          <a>
            <FaTwitter style={twitterColor} size={20} />
          </a>
          <a>
            <FaGoogle style={googleColor} size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
