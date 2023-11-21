import React from "react";
import { MapPin, EnvelopeOpen, Phone } from "phosphor-react";
import "./contact.css";

export const Contact = () => {
  return (
    <div className="contact-all">
      <div className="contact-one">
        <p className="contact-title">
          <b>Contact Us</b>
        </p>
        <h1>Get In Touch With Us</h1>
        <p>
          You can contact us through the following ways and if you have any
          comment or message, we are welcome to recieve it{" "}
        </p>
        <h5 className="contact-way">
          <MapPin size={32} className="contact-icons" /> Our location
        </h5>
        <h5 className="contact-way">
          <Phone size={32} className="contact-icons" /> Phone number
        </h5>
        <h5 className="contact-way">
          <EnvelopeOpen size={32} className="contact-icons" />
          Email address
        </h5>
      </div>
      <div className="contact-two">
        <form>
          <input
            type="text"
            placeholder="Your name"
            className="contact-input same"
          />
          <input
            type="email"
            placeholder="Your email"
            className="contact-input same"
          />
          <input
            type="password"
            placeholder="Your password"
            className="contact-input same"
          />
          <textarea
            placeholder="Your message"
            className="contact-input text-area"
          />
          <button className="contact-input contact-button">
            <b>Send message</b>
          </button>
        </form>
      </div>
    </div>
  );
};
