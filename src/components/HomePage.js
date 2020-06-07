import React, { Component } from "react";

import "./Home.scss";

class HomePage extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="home">
        <img src={require("./images/logo1.png")} alt="logo" className="logo" />
        <p className="design">Design</p>
        <div className="buttons">
          <button onClick={() => history.push("/product")}>
            Product Details
          </button>
          <button onClick={() => history.push("/sellers")}>Seller</button>
        </div>
        <p className="note">
          <span>Guidelines:</span> &nbsp;&nbsp; Please goto the top left corner
          of top searchbar and click on "Lock"/"security" icons and click
          "Secure Connection" then click "Disable Protection for now"
        </p>
      </div>
    );
  }
}

export default HomePage;
