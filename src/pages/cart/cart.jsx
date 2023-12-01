import React, { useContext, useState, useEffect } from "react";
import "./cart.css";
import { StoreContext } from "../../context/store-context";
import { Products } from "../../productList";

export const Cart = () => {
  const { cartItems, removeFromCart } = useContext(StoreContext);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const storedQuantities = localStorage.getItem("cartQuantities");
    if (storedQuantities) {
      setQuantities(JSON.parse(storedQuantities));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartQuantities", JSON.stringify(quantities));
  }, [quantities]);

  const increaseByOne = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 1) + 1,
    }));
  };

  const decreaseByOne = (id) => {
    if (quantities[id] > 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: prevQuantities[id] - 1,
      }));
    }
  };

  const buyButton = () => {
    for (let product of Products) {
      if (cartItems[product.id] !== 0) {
        return (
          <button className="buy">
            <b>Buy</b>
          </button>
        );
      }
    }

    return null;
  };

  const showPrice = () => {
    let totalSum = 0;

    for (let product of Products) {
      const quantity = quantities[product.id] || 0;

      if (cartItems[product.id] !== 0) {
        totalSum += quantity * product.price;
      }
    }

    if (totalSum > 0) {
      return (
        <p className="total-price">
          <b>Total Price: {totalSum}$</b>
        </p>
      );
    }
  };

  const emptyCart = () => {
    for (let product of Products) {
      if (cartItems[product.id] !== 0) {
        return (
          <h2 className="cart-title">
            <b>Your cart items</b>
          </h2>
        );
      }
    }
    return (
      <h2 className="cart-title">
        <b>Your cart is empty</b>
      </h2>
    );
  };

  return (
    <div className="cart-items-form">
      {emptyCart()}
      <div className="cart">
        {Products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <div className="justify" key={product.id}>
                <div>
                  <img
                    src={product.imageUrl}
                    className="cart-image"
                    alt={product.name}
                  />
                </div>
                <div>
                  <h3>Name: {product.name}</h3>
                  <h3>Price: {product.price}$</h3>

                  <div className="quantity">
                    <button
                      className="minus"
                      key={product.id}
                      onClick={() => decreaseByOne(product.id)}
                    >
                      <b>-</b>
                    </button>
                    <input
                      type="text"
                      key={product.id}
                      value={quantities[product.id] || 1}
                      className="input-quantity"
                    />
                    <button
                      className="plus"
                      key={product.id}
                      onClick={() => increaseByOne(product.id)}
                    >
                      <b> +</b>
                    </button>
                  </div>
                  <button
                    className="remove"
                    onClick={() => removeFromCart(product.id)}
                  >
                    <b>Remove</b>
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
      {showPrice()}
      {buyButton()}
    </div>
  );
};
