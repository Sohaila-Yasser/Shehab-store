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

  return (
    <div className="favourite-page">
      <h2><b>Your favorites</b></h2>
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
