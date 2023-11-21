import React from "react";
import "./homeUpper.css";
export const HomeUpper = () => {
  return (
    <div className="upper-home">
      <div className="upperhome-title">
        <h1 className="title-upper">
          <b>
            DISCOVER <span className="the-best">THE BEST</span>
          </b>
        </h1>
        <p>A store for your dreamed home</p>
        <button className="upperhome-button">Shop now</button>
      </div>

      <div className="upperhome-zone">
        <img
          src="https://m.media-amazon.com/images/I/81qOqWDhkHL._AA360_AC_QL70_.jpg"
          className="upperhome-image"
        />
        <div className="circle">
          <b>15% Discount</b>
        </div>
      </div>
    </div>
  );
};
