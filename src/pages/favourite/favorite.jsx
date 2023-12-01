import React, { useContext, useState } from "react";
import "./favourite.css";
import { StoreContext } from "../../context/store-context";
import { Products } from "../../productList";
import { ProductItems } from "../../components/productItems";
import { X } from "phosphor-react";

export const Favourite = () => {
  const { favItems, removeFromFav } = useContext(StoreContext);
  const [isVisible, setIsVisible] = useState("");

  const showExit = (id) => {
    setIsVisible(id);
  };
  const unShowExit = () => {
    setIsVisible("");
  };

  const emptyFav = () => {
    for (let product of Products) {
      if (favItems[product.id] !== 0) {
        return (
          <h2 className="cart-title">
            <b>Your Favourite items</b>
          </h2>
        );
      }
    }
    return (
      <h2 className="cart-title">
        <b>No favourite items are selected</b>
      </h2>
    );
  };

  return (
    <div className="favourite-page">
      {emptyFav()}
      <div className="fav">
        {Products.map((product) => {
          if (favItems[product.id] !== 0) {
            return (
              <div
                className="edit"
                onMouseEnter={() => showExit(product.id)}
                onMouseLeave={() => unShowExit(product.id)}
              >
                <img className="fav-image" src={product.imageUrl} />
                <h4>{product.name}</h4>
                {isVisible === product.id && (
                  <button
                    className="remove-fav"
                    onClick={() => removeFromFav(product.id)}
                  >
                    <X size={32} />
                  </button>
                )}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
