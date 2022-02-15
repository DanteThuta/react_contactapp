import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const renderedContact = props.contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact.name} />;
  });
  return <div className="ui celled list">{renderedContact}</div>;
};

export default ContactList;
