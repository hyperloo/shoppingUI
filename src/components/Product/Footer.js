import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer clearfix">
        <div className="add">
          <img src={require("../images/3.png")} alt="pocket" />
          <p>Cities we are in</p>
          <img src={require("../images/Pune.svg")} alt="pune" />
          <p style={{ color: "#0F5EEA", marginBottom: "0px" }}>Pune</p>
        </div>
        <div className="follow">
          <div className="us">
            <p>Follow Us</p>

            <p>
              We are driven by the excitement of building technologies,
              inventing products, and providing services that change our local
              shopping experience.
            </p>
            <div className="ico">
              <img src={require("../images/facebook.svg")} alt="ico" />
              <img src={require("../images/twitter.svg")} alt="ico" />
              <img src={require("../images/Instagram.svg")} alt="ico" />
              <img src={require("../images/youtube.svg")} alt="ico" />
              <img src={require("../images/linkedin.svg")} alt="ico" />
              <img src={require("../images/tumblr.svg")} alt="ico" />
              <img
                src={require("../images/google-my-business.svg")}
                alt="ico"
              />
            </div>
          </div>
          <div className="links">
            <div>
              <p>Useful Links</p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Sitemap</p>
            </div>
            <div>
              <div>
                <p>Services</p>
                <p>Payment</p>
                <p>Shipping</p>
                <p>Cancellation</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="exact">
            <p>Contact Us</p>
            <p>
              Location:&nbsp; Pune, Maharashtra <br />
              Phone:&nbsp;&nbsp; +91 7004831994 <br />
              Email:&nbsp; digitalservices@elocals.in
            </p>
          </div>
          <div className="infoTag">
            <div className="links">
              <p>Information</p>
              <p>FAQ</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
      <div className="smallFooter">
        <p className="reserved">
          &#xA9; Locals Digital Services Pvt. Ltd. | ALL RIGHTS RESERVED
        </p>
      </div>
    </>
  );
};

export default Footer;
