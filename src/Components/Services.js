import React from "react";
import "../Styles/Services.css";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import HistoryOutlinedIcon from "@material-ui/icons/HistoryOutlined";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";

function Services() {
  return (
    <div className="services">
      <div className="services_attributes">
        <div className="services_options">
          <LocalShippingOutlinedIcon />
          <p>Fast Delivery</p>
        </div>
        <div className="services_options">
          <SpellcheckIcon />
          <p>Buyer Protection</p>
        </div>
        <div className="services_options">
          <HistoryOutlinedIcon />
          <p>Customer Support</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
