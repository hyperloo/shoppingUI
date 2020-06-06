import React from "react";

const Couldnot = () => {
  const icons = () => {
    var list = [];
    for (let i = 1; i <= 5; i++) {
      list.push(
        <img src={require(`../images/icon${i}.svg`)} alt={i} key={i} />
      );
    }
    return list;
  };

  return (
    <>
      <div className="couldnot">
        <div>
          <h2>Couldn't found what you are looking for?</h2>

          <div className="icons">{icons()}</div>
          <button>Request Product</button>
        </div>
      </div>
      <div className="mind">
        <h2>Any question in mind ?</h2>
        <h5>Click here for quick support</h5>
        <div>
          <img src={require("../images/whatsapp.svg")} alt="whts" />
        </div>
      </div>
    </>
  );
};

export default Couldnot;
