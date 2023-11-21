import React, { createContext, useState, useEffect } from "react";
import { Products } from "../productList";

export const StoreContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < Products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const getFav = () => {
  let fav = {};
  for (let x = 1; x < Products.length + 1; x++) {
    fav[x] = 0;
  }
  return fav;
};

export const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const [favItems, setFavItems] = useState(getFav());
  const addToFav = (favId) => {
    setFavItems((previous) => ({ ...previous, [favId]: previous[favId] + 1 }));
  };
  const removeFromFav = (favId) => {
    setFavItems((previous) => ({ ...previous, [favId]: previous[favId] - 1 }));
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("favItems");
    if (storedCartItems) {
      setFavItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favItems", JSON.stringify(favItems));
  }, [favItems]);

  const contextValue = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    addToFav,
    removeFromFav,
    favItems,
    setFavItems,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
