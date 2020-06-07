import React, { useState, useEffect } from "react";

const Nav = () => {
  const [btn, toggle] = useState(3);

  return (
    <div className="nav">
      <img alt="logo" src={require("../images/logo1.png")} />
      <div className="info">
        <span>
          {" "}
          <img
            src={require("../images/pin1.svg")}
            alt="location"
            className="loc"
          />{" "}
          Banglore
        </span>
        <span
          onClick={() => toggle(1)}
          className={`btns ${btn === 1 && "activeBtn"} `}
        >
          Become Seller
        </span>
        <span
          onClick={() => toggle(2)}
          className={`btns ${btn === 2 && "activeBtn"} `}
        >
          Login
        </span>
        <span
          onClick={() => toggle(3)}
          className={`btns ${btn === 3 && "activeBtn"} `}
        >
          Sign Up
        </span>
      </div>
    </div>
  );
};

export default Nav;
