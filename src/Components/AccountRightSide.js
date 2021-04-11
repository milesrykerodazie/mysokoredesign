import React from "react";
import "../Styles/AccountRightSide.css";
import FilterListIcon from "@material-ui/icons/FilterList";
import AccountPageShipping from "./AccountPageShipping";
import AccountPageDelivered from "./AccountPageDelivered";

function AccountRightSide() {
  return (
    <div className="accountRightSide">
      <div className="accountRightSide_container">
        <div className="accountRightSide_header">
          <h3>Showing all orders</h3>
          <div className="accountRightSide_headerRight">
            <FilterListIcon />
            <p>Filters</p>
          </div>
        </div>
        <div className="accountRightSide_bodyContainer">
          <div className="accountRightSide_body">
            <AccountPageShipping
              id="Shipped"
              label="Shipped"
              title="Target"
              icon="https://symbols.getvecta.com/stencil_97/9_target-icon.fd28e4f990.png"
              orderNum="#1233341"
              price="UGX 12,700"
              itemCount="3 items"
              date="25/02/2021, 01:55 PM"
            />
            <AccountPageDelivered
              id="Delivered"
              label="Delivered"
              title="Abhi's Juke Store"
              icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTfqTVnsdqIQ1p5y4G6aqHT5RQX6kIlnXS6Q&usqp=CAU"
              orderNum="#1213396"
              price="UGX 5,400"
              itemCount="1 items"
              date="26/02/2021, 01:55 PM"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountRightSide;
