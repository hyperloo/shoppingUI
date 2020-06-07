import React from "react";

const SellerBox = ({ seller, item, i, click }) => {
  const { elocalsPrice, sellerPrice, mrp, sellerDetails } = seller;
  const { name, area, city, sellerResources } = sellerDetails;
  return (
    <div className="sellerBox">
      <div className="seller">
        <button
          className={`radio ${item === i && "radioActive"} `}
          onClick={() => click(i)}
        >
          <div></div>
        </button>
        <span>
          <img src={sellerResources[0].resourceURL} alt="seller" />
        </span>
        <div>
          <span>
            {name} <span className="stars">4.5 &#9733;</span>
          </span>
          <span>
            {area}, {city}
          </span>
          <span>0.1KM</span>
        </div>
      </div>
      <div className="price">
        <div>
          <span>&#8377;{elocalsPrice}</span> <del>&#8377;{sellerPrice}</del>{" "}
          <span id="off">
            {Math.floor((1 - elocalsPrice / sellerPrice) * 100)}% off
          </span>
        </div>
      </div>
    </div>
  );
};

export default SellerBox;
