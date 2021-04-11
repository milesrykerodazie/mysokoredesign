import React from "react";
import "../Styles/Header.css";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  //push to bag page
  const goToBag = () => {
    history.push("/bagPage");
  };

  //push to account page
  const goToAccount = () => {
    history.push("/accountPage");
  };
  // push to home
  const goToHome = () => {
    history.push("/");
  };

  return (
    <>
      <div className="headerTop">
        <h3>Store made with </h3>
        <p>
          S
          <span>
            <LocalMallOutlinedIcon />
          </span>
          KO
        </p>
      </div>
      <div className="header">
        <div className="headerLeft">
          <div className="headerLeft_icon">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTfqTVnsdqIQ1p5y4G6aqHT5RQX6kIlnXS6Q&usqp=CAU"
              alt="HeaderIcon"
              onClick={goToHome}
            />
          </div>
          <div className="headerLeft_description">
            <h3>Target</h3>
            <p>Cham Towers, Plot 12 Nkruma Rd,Kampala,Ug</p>
          </div>
        </div>
        <div className="headerRight">
          <div className="headerRight_icon" onClick={goToBag}>
            <LocalMallOutlinedIcon />
            <p>Bag</p>
          </div>
          <div className="headerRight_icon" onClick={goToAccount}>
            <PersonOutlineOutlinedIcon />
            <p>Account</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
