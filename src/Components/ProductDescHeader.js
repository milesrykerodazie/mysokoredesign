import React from "react";
import "../Styles/ProductDescHeader.css";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import { useHistory } from "react-router-dom";

function ProductDescHeader() {
  const history = useHistory();

  // push to home
  const goToHome = () => {
    history.push("/");
  };
  return (
    <>
      <div className="productDescHeaderTop">
        <h3>Store made with </h3>
        <p>
          S
          <span>
            <LocalMallOutlinedIcon />
          </span>
          KO
        </p>
      </div>
      <div className="productDescHeader">
        <div className="productDescHeaderLeft">
          <div className="productDescHeaderLeft_icon">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTfqTVnsdqIQ1p5y4G6aqHT5RQX6kIlnXS6Q&usqp=CAU"
              alt="HeaderIcon"
              onClick={goToHome}
            />
          </div>
          <div className="productDescHeaderLeft_description">
            <h3>Target</h3>
            <p>Cham Towers, Plot 12 Nkruma Rd,Kampala,Ug</p>
          </div>
        </div>
        <div className="productDescHeaderRight">
          <div className="productDescHeaderRight_icon">
            <div className="productDescHeaderRight_bagIcon">
              <LocalMallOutlinedIcon />
              <span>2</span>
            </div>
            <p>Bag</p>
          </div>
          <div className="productDescHeaderRight_icon">
            <PersonOutlineOutlinedIcon />
            <p>Account</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDescHeader;
