import React from "react";

const SubNav = () => {
  return (
    <div className="subNav">
      <div>
        <span>Home</span> ><span>Mobiles</span> >
      </div>
      <div>
        <input type="checkbox" id="check" name="check" value="true" />
        <label htmlFor="check">Add to Compare</label>
      </div>
    </div>
  );
};

export default SubNav;
