import React from "react";
import Card from "./Card";

const SimilarProducts = () => {
  const name =
    "OnePlus 7 Pro (Almond, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4000mAH Battery)";
  const price = 23500;

  const createCards = () => {
    let list = [];
    for (let i = 1; i <= 7; i++) {
      list.push(
        <Card
          key={i}
          name={name}
          price={price + Math.floor(Math.random() * 1000)}
          i={i}
        />
      );
    }

    return list;
  };
  return (
    <div className="similar">
      <h2>Similar Products</h2>
      <div className="CardBox">{createCards()}</div>
    </div>
  );
};

export default SimilarProducts;
