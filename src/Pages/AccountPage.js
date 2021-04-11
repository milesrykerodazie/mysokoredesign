import React from "react";
import "../Styles/AccountPage.css";
import ProductDescHeader from "../Components/ProductDescHeader";
import AccountLeftSide from "../Components/AccountLeftSide";
import AccountRightSide from "../Components/AccountRightSide";

function AccountPage() {
  return (
    <div className="accountPage">
      <ProductDescHeader />
      <div className="accountPage_subHeader">
        <h2>+91-8080021387</h2>
        <button>Log Out</button>
      </div>
      <div className="accountPage_container">
        <div className="accountPage_attribContainer">
          <AccountLeftSide />
          <AccountRightSide />
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
