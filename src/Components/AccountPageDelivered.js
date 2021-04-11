import React from "react";
import "../Styles/AccountPageDelivered.css";

function AccountPageDelivered({
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
    <div className="accountPageDelivered">
      <div className="accountPageDelivered_header">
        <img src={icon} alt={title} />
        <p>{title}</p>
      </div>
      <div className="accountPageDelivered_description">
        <div className="accountPageDelivered_order">
          <h4>Order {orderNum}</h4>
          <p>{itemCount}</p>
        </div>
        <div className="accountPageDelivered_price">
          <h4>{price}</h4>
          <p>{date}</p>
        </div>
      </div>
      <div className="accountPageDelivered_label">
        <h3>.</h3>
        <p>{label}</p>
      </div>
    </div>
  );
}

export default AccountPageDelivered;
