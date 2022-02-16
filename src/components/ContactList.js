import React from "react";
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
  return <div className="ui celled list">{renderedContact}</div>;
};

export default ContactList;
