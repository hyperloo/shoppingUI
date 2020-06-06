import React, { useEffect, useState } from "react";

const InfoSec = ({ features, name, variant }) => {
  const [img, selImg] = useState(1);

  useEffect(() => {});

  const nameArr = name.split(")");
  return (
    <div className="keyInfo">
      <div className="key">
        <div className="inner">
          <p className="name">
            {nameArr[0]}
            {")"}
          </p>
          <ul className="features">
            {features.map((feat, i) => (
              <li key={i}>{feat}</li>
            ))}
          </ul>
        </div>
        <div className="middle">
          <div className="color">
            Color{" "}
            <span
              className={`${img === 1 && "thumbActive"}`}
              onClick={() => selImg(1)}
            >
              <img src={require("../images/1.jpg")} alt="1" />
            </span>{" "}
            <span
              className={`${img === 2 && "thumbActive"}`}
              onClick={() => selImg(2)}
            >
              <img src={require("../images/2.jpg")} alt="2" />
            </span>{" "}
          </div>{" "}
          <div className="quant">
            Quantity
            <input type="number" defaultValue={variant[0].quantity} />
          </div>
        </div>
        <div className="price">
          <div>
            <span>&#8377;{variant[0].elocalsPrice}</span>{" "}
            <del>&#8377;{variant[0].sellerPrice}</del>{" "}
            <span id="off">
              {Math.floor(
                (1 - variant[0].elocalsPrice / variant[0].sellerPrice) * 100
              )}
              % off
            </span>
          </div>
          <p>Inclusive of all taxes</p>
        </div>
        <div className="btns">
          <div className="orange">
            <span>Delivery in 24hrs</span>
            <span>EMI Options Available</span>
            <span>Pay Later</span>
          </div>
          <div className="blue">
            <button>
              <img src={require("../images/instant.svg")} alt="instant" /> Buy
              Now
            </button>
            <button>
              <img src={require("../images/cart.svg")} alt="cart" /> Add to Cart
            </button>
            <button>
              <img src={require("../images/pickup.svg")} alt="pickuo" /> Pickup
              from Store
            </button>
          </div>
        </div>
        <p className="calendar">
          <img src={require("../images/Calendar.svg")} alt="calendar" />{" "}
          <span>Calender Delivery</span>
        </p>
      </div>
    </div>
  );
};

export default InfoSec;
