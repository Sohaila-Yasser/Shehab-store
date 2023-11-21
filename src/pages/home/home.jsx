import React, { useState, useContext } from "react";
import { StoreContext } from "../../context/store-context";
import "./home.css";
import { Products } from "../../productList";
import { ProductItems } from "../../components/productItems";
import { HomeUpper } from "../../components/homeUpper";
import { Slider } from "../../components/carousel";
import { Features } from "../../components/features";
import { ShoppingCart } from "phosphor-react";
import { Heart } from "phosphor-react";




export const Home = () => {
  const [isShown, setIsShown] = useState("");
  const { addToCart, addToFav} = useContext(StoreContext);

  
  
 const handleClick = (id) => {
  setIsShown(id)
};

const handleClose = () => {
  setIsShown("")
}; 

  return (
    <div>
      <HomeUpper />
      <h1 className="main-title">Our Products</h1>
      <div className="home-products">
        {Products.map((product) => (
          <div key={product.id} className="all-products" onMouseEnter={() => handleClick(product.id)} onMouseLeave={() => handleClose(product.id)}>
            <ProductItems  data={product} />
            {isShown === product.id && (
        <button
          class="shopping-cart"
          onClick={() => {
            addToCart(product.id);
          }}
        >
          <ShoppingCart size={50} />
        </button>
      )}
      {isShown === product.id && (
        <button
          className="heart"
    onClick={() => addToFav(product.id)}
        >
          <Heart size={50} />
        </button>
      )}
          </div>
        ))}
      </div>
      <div className="carousel-zone">
        <h2>Special offers %</h2>
        <Slider />
      </div>
      <Features className="feature-zone" />
    </div>
  );
};
