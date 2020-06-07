import React, { useState, useEffect } from "react";

import SellerBox from "./SellerBox";

const SellerList = ({ sellers }) => {
  const [item, select] = useState(1);
  const [btn, selBtn] = useState(1);

  const createList = () => {
    let list = [];
    sellers.map((seller, i) =>
      list.push(
        <SellerBox key={i} seller={seller} click={click} i={i} item={item} />
      )
    );
    return list;
  };

  const click = (i) => {
    select(i);
  };

  return (
    <>
      <div className="sellerList">
        <div className="bar">
          <span>Seller Information</span>
          <span>Price</span>
        </div>
        <div className="sellerDiv">{createList()}</div>
      </div>
      <div className="btnBox">
        <span
          className={`btns ${btn === 1 && "activeBtn"} `}
          onClick={() => selBtn(1)}
        >
          <img src={require("../images/instant.svg")} alt="instant" /> Buy Now
        </span>
        <span
          className={`btns ${btn === 2 && "activeBtn"} `}
          onClick={() => selBtn(2)}
        >
          <img src={require("../images/cart.svg")} alt="cart" /> Add to Cart
        </span>
        <span
          className={`btns ${btn === 3 && "activeBtn"} `}
          onClick={() => selBtn(3)}
        >
          <img src={require("../images/pickup.svg")} alt="pickuo" /> Pickup from
          Store
        </span>
        <span
          className={`calendar btns ${btn === 4 && "activeBtn"} `}
          onClick={() => selBtn(4)}
        >
          <img src={require("../images/Calendar.svg")} alt="calendar" />{" "}
          <span>Calender Delivery</span>
        </span>
      </div>
    </>
  );
};

export default SellerList;
