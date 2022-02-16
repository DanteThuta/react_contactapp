import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  console.log(props.contact);
  return (
    <>
      <div className="item">
        <div className="contact">
          <img className="ui avatar image" src={user} alt="User"></img>
          <Link
            to={{
              pathname: `/contact/${id}`,
              state: { contact: props.contact },
            }}
          >
            <div className="header">{name}</div>
            <div>{email}</div>
          </Link>
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
