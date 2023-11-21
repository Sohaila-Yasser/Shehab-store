import React from "react";


export const ProductItems = (props) => {
  const { id, name, imageUrl, price} = props.data; 
 
  return (
    <div
      key={id}
      id={id}
    >
      <img src={imageUrl} className="productImage" alt={name} />
      <h4>{name}</h4>
      <p className="price">
        <b>{price}$</b>
      </p>
     
    </div>
  );
};
