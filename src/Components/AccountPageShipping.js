import React from "react";
import "../Styles/AccountPageShipping.css";

function AccountPageShipping({
  id,
  label,
  title,
  icon,
  price,
  date,
  itemCount,
  orderNum,
}) {
  return (
    <div className="accountPageShipping">
      <div className="accountPageShipping_header">
        <img src={icon} alt={title} />
        <p>{title}</p>
      </div>
      <div className="accountPageShipping_description">
        <div className="accountPageShipping_order">
          <h4>Order {orderNum}</h4>
          <p>{itemCount}</p>
        </div>
        <div className="accountPageShipping_price">
          <h4>{price}</h4>
          <p>{date}</p>
        </div>
      </div>
      <div className="accountPageShipping_label">
        <h3>.</h3>
        <p>{label}</p>
      </div>
    </div>
  );
}

export default AccountPageShipping;
