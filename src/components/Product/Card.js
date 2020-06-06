import React from "react";

const Card = ({ name, price, i }) => {
  return (
    <div className="card">
      <p className="img">
        <img src={require(`../images/${i}.jpg`)} alt={i} />
      </p>
      <p className="name">{name}</p>
      <p className="price">₹{price}</p>
      <p className="sel">Seller</p>
      <p className="seller">Rajdeep Telecom</p>
    </div>
  );
};

export default Card;
