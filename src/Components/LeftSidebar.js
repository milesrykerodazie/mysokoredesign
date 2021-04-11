import React from "react";
import "../Styles/LeftSidebar.css";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Data from "../category.json";

function LeftSidebar() {
  return (
    <div className="leftSidebar">
      <div className="leftSidebar_marginTop"></div>
      {Data.map((category) => {
        return (
          <div key={category.id} className="leftSidebar_items">
            <div key={category.id} className="leftSidebar_item">
              <h4>{category.title}</h4>
              <p>({category.quantity})</p>
            </div>
          </div>
        );
      })}
      <div className="leftSidebar_moreCategories">
        <p>View all categories</p>
        <NavigateNextIcon />
      </div>
    </div>
  );
}

export default LeftSidebar;
