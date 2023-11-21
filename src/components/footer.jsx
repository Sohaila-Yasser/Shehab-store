import React from "react";
import "./footer.css";
import { PaperPlaneTilt, AppleLogo } from "phosphor-react";

export const Footer = () => {
  return (
    <div className="all">
      <div className="upper-footer">
        <h3>
          <PaperPlaneTilt size={32} className="sign" />
          Sign up for newsletter
        </h3>
        <input placeholder="Enter your E-mail" type="email" className="news" />
        <button className="subscribe">
          <b>Subscribe</b>
        </button>
      </div>
      <div className="footer-elements">
        <div>
          <p>
            <b>Contact Us</b>
          </p>
          <a>Demo store</a>
          <a></a>
          <a></a>
          <a></a>
          <a></a>
        </div>
        <div>
          <p>
            <b>Information</b>
          </p>
          <a href="#">Privacy policy</a>
          <a href="#">Retuned policy</a>
          <a href="#">Shopping policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Blogs</a>
        </div>
        <div>
          <p>
            <b>Account</b>
          </p>
          <a href="#">Search</a>
          <a href="#">About Us</a>
          <a href="#">Faq</a>
          <a href="#">Contact</a>
          <a href="#">See Chart</a>
        </div>
        <div>
          <p>
            <b>Quick Links</b>
          </p>
          <a href="#">Furnitures</a>
          <a href="#">Dercorative items</a>
          <a href="#">Carpets</a>
          <a href="#">Kitchen utensils</a>
          <a href="#"></a>
        </div>
        <div>
          <p>
            <b>Our App</b>
          </p>
          <p>Download our app and get 10% discount on your first order</p>
          <button className="google-play">
            <img
              src="https://developer.android.com/static/distribute/images/heroes/google-play-hero.svg"
              className="google-image"
            />{" "}
            <b>Google play</b>
          </button>
          <button className="app-store">
            <AppleLogo size={32} />
            <b>App store</b>
          </button>
        </div>
      </div>
      <div className="lower-footer">
        <p>© All rights preserved 2023</p>
      </div>
    </div>
  );
};
