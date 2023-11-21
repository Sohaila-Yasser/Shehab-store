import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { User } from "phosphor-react";
import { ShoppingCart } from "phosphor-react";
import { Heart } from "phosphor-react";
import { StoreContext } from "./../context/store-context";

export const Header = () => {
  const { cartItems } = useContext(StoreContext);

  const totalItemsInCart = Object.values(cartItems).reduce(
    (acc, quantity) => acc + quantity,
    0,
  );

  return (
    <div className="header-items">
      <div className="upper-header">
        <p>
          Get offer on buying more than{" "}
          <span className="part">three pieces 15%</span>
        </p>
      </div>
      <div className="lower-header">
        <div className="header-title">
          <h1>
            Sheh<span className="half-title">ab</span>.
          </h1>
        </div>
        <div className="links">
          <NavLink to="/" className="each-link">
            <b>Home</b>
          </NavLink>
          <NavLink to="/contact" className="each-link">
            <b>Contact</b>
          </NavLink>
          <NavLink to="/login" className="each-link">
            <User size={32} />
          </NavLink>
          <NavLink to="/cart" className="each-link">
            <ShoppingCart size={32} className="cart" />
            <div className="cart-badge">
              <p class="number">
                <b>{totalItemsInCart}</b>
              </p>
            </div>
          </NavLink>
          <NavLink to="/fav" className="each-link">
            <Heart size={32} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
