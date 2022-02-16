import React from "react";

import { Link } from "react-router-dom";
import userprofile from "../images/user.png";

const ContactDetail = (props) => {
  // const { name, email } = props.contact;
  console.log(props);
  return (
    <>
      <div className="main">
        <div className="ui card centered">
          <div className="image">
            <img src={userprofile} alt="image"></img>
          </div>
          <div className="content">
            <div className="header">header</div>
            <div className="description">desc</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetail;
