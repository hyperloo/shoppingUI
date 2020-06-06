import React, { useState, useEffect } from "react";

const DescBox = ({ specs, desc }) => {
  const [tab, changeTab] = useState("specs");
  const [more, seeMore] = useState(false);

  useEffect(() => {});

  function List() {
    var list = [];
    for (let spec in specs) {
      list.push(
        <div key={spec}>
          <div className="props">{spec}</div>
          <div className="val">{specs[spec]}</div>
        </div>
      );
    }
    return list;
  }

  return (
    <div className="descBox">
      <div className="bar">
        <button
          className={`${tab === "specs" && "tabActive"}`}
          onClick={() => changeTab("specs")}
        >
          Specifications
        </button>
        <button
          className={`${tab === "desc" && "tabActive"}`}
          onClick={() => {
            seeMore(false);
            changeTab("desc");
          }}
        >
          Description
        </button>
      </div>

      <div className="contentDiv">
        {tab === "specs" ? (
          <>
            <div className={`specs ${more && "scroll"}`}>{List()}</div>
            <button
              onClick={() => seeMore(true)}
              className={`see ${more && "none"}`}
            >
              see more...
            </button>
          </>
        ) : (
          <div className="desc">{desc}</div>
        )}
      </div>
    </div>
  );
};

export default DescBox;
