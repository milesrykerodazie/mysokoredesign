import React from "react";
import "../Styles/RightSidebar.css";

function RightSidebar() {
  return (
    <div className="rightSidebar">
      <div className="rightSidebar_header">
        <h3>Bag</h3>
        <p>0</p>
      </div>
      <div className="rightSidebar_emptyCart">
        <img
          src="https://image.freepik.com/free-vector/empty-shopping-bag-white-advertising-branding_1284-48173.jpg"
          alt="Empty Bag"
        />
        <div className="rightSidebar_emptyCartDescription">
          <h3>It's empty here</h3>
          <p>Start shopping to add items to your bag</p>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
