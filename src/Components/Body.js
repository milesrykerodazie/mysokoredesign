import React from "react";
import "../Styles/Body.css";
import LeftSidebar from "./LeftSidebar";
import Products from "./Products";
import RightSidebar from "./RightSidebar";

function Body() {
  return (
    <div className="body">
      {/* <LeftSidebar /> */}
      <Products />
      <RightSidebar />
    </div>
  );
}

export default Body;
