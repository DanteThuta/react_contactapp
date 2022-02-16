import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <>
      <div className="item">
        <div className="contact">
          <img className="ui avatar image" src={user} alt="User"></img>
          <div className="header">{name}</div>
          <div>{email}</div>
        </div>
        <i
          className="trash alternate outline icon"
          onClick={() => props.clickHandler(id)}
        ></i>
      </div>
    </>
  );
};

export default ContactCard;
