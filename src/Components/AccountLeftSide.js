import React from "react";
import "../Styles/AccountLeftSide.css";
import EventNoteOutlinedIcon from "@material-ui/icons/EventNoteOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

function AccountLeftSide() {
  return (
    <div className="accountLeftSide">
      <div className="accountLeftSide_attrib accountLeftSide_orderIcon">
        <EventNoteOutlinedIcon />
        <h4>My order</h4>
      </div>
      <div className="accountLeftSide_attrib">
        <LocationOnOutlinedIcon />
        <h4>My addresses</h4>
      </div>
    </div>
  );
}

export default AccountLeftSide;
