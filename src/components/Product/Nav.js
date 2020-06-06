import React, { useState } from "react";

const Nav = () => {
  const [drop, toggle] = useState(false);

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
        <span>
          <img src={require("../images/bag.svg")} alt="bag" className="bag" />
        </span>
        <span onClick={() => toggle(!drop)}>
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="photo"
          />
          <p className={`drop ${drop && "show"}`}>
            <span>
              {" "}
              <img src={require("../images/orders.svg")} alt="orders" />
              <span> My Orders</span>
            </span>
            <span>
              {" "}
              <img src={require("../images/profile.svg")} alt="profile" />{" "}
              <span>Profile</span>
            </span>
            <span>
              {" "}
              <img src={require("../images/signout.svg")} alt="signOut" />{" "}
              <span>Sign Out</span>
            </span>
          </p>
        </span>
      </div>
    </div>
  );
};

export default Nav;
