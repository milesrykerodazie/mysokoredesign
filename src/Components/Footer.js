import React from "react";
import "../Styles/Footer.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_description">
        <h4>Store details</h4>
        <h3>Target</h3>
        <p>Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</p>
      </div>
      <div className="footer_chatButton">
        <WhatsAppIcon />
        <h3>Chat with us</h3>
      </div>
    </div>
  );
}

export default Footer;
