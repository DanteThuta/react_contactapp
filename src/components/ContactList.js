import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteHandler = (id) => {
    props.toGetId(id);
  };

  const renderedContact = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.name}
        clickHandler={deleteHandler}
      />
    );
  });
  return (
    <>
      <div className="main">
        <h2> Contact List</h2>
        <Link to="/add">
          <button className="ui button blue right"> Add</button>
        </Link>
      </div>
      <div div className="ui celled list">
        {" "}
        {renderedContact}
      </div>
    </>
  );
};

export default ContactList;
