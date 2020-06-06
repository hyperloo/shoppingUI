import React from "react";

const IconLine = ({ name }) => {
  return (
    <div className="iconLine">
      <div className="sellerIcon">
        <div className="sellerBox">
          <img src={require("../images/store.png")} alt={name} />
          <p>
            <span>Seller</span>
            <br />
            {name}
          </p>
        </div>
        <p></p>
        <p className="moreBox">
          View more sellers (7){" "}
          <img src={require("../images/Seller.svg")} alt="seller more" />
        </p>
      </div>
      <div className="optionIcon">
        <div className="sellerBox">
          <img src={require("../images/truck1.png")} alt={name} />
          <p>
            <span>Shipping Fee</span>
            <br />
            Free
          </p>
        </div>
        <div className="sellerBox">
          <img src={require("../images/badge1.png")} alt={name} />
          <p>
            <span>Best Price</span>
            <br />
            Always
          </p>
        </div>
        <div className="sellerBox">
          <img src={require("../images/box1.png")} alt={name} />
          <p>
            <span>Pickup Service</span>
            <br />
            One Hour
          </p>
        </div>
        <div className="sellerBox">
          <img src={require("../images/cart1.png")} alt={name} />
          <p>
            <span>Request Your Product</span>
            <br />
            Get Anything
          </p>
        </div>
      </div>
    </div>
  );
};

export default IconLine;
