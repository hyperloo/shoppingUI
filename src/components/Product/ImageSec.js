import React, { useEffect, useState } from "react";

const ImageSec = ({ image }) => {
  const images = [
    image,
    require("../images/1.jpg"),
    require("../images/2.jpg"),
    require("../images/3.jpg"),
    require("../images/4.jpg"),
  ];

  const [curImg, changeCurImage] = useState(1);

  useEffect(() => {});

  const ImgList = images.map((image, i) => (
    <span key={i} className={`thumbnail ${curImg === i + 1 && "activeImg"}`}>
      <img src={image} alt={i} onClick={() => changeCurImage(i + 1)} />
    </span>
  ));

  return (
    <div className="imageDiv">
      <div className="smallDiv">
        {ImgList}
        <span className="thumbnail">
          <h2>5+</h2> <span>more</span>
        </span>
      </div>
      <div className="largeDiv">
        <div className="icons">
          <img src={require("../images/share.svg")} alt="share" />
          <img src={require("../images/wishlist.svg")} alt="wish" />
        </div>
        <div className="imgDiv">
          <img src={images[curImg - 1]} alt={curImg} />
        </div>
      </div>
    </div>
  );
};

export default ImageSec;
