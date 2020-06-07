import React from "react";

const SubNav = ({ history, name, photo }) => {
  return (
    <div className="subNav">
      <div>
        {"<"}{" "}
        <span
          style={{ color: "rgba(0,0,0,0.6)" }}
          onClick={() => history.push("/product")}
        >
          Return to product
        </span>
      </div>
      <div>
        <span>
          <img src={photo} alt="img" />
        </span>
        <span>{name.split("-")[0]}</span>
      </div>
    </div>
  );
};

export default SubNav;
