import React from "react";
import "../Styles/Bag.css";
import { useHistory } from "react-router-dom";

function Bag() {
  const history = useHistory();

  // push to home
  const goToHome = () => {
    history.push("/");
  };
  return (
    <div className="bag">
      <div className="bag_attrib">
        <img
          src="https://image.freepik.com/free-vector/empty-shopping-bag-white-advertising-branding_1284-48173.jpg"
          alt="Empty Bag"
        />
        <h3>It's empty here</h3>
        <p>Start shopping to add items to your bag</p>
        <button onClick={goToHome}>Back to homepage</button>
      </div>
    </div>
  );
}

export default Bag;
