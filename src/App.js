import React, { useState, useEffect } from "react";
// import { uuid } from "uuid";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";

import { v4 } from "uuid";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);

    setContacts([...contacts, { ...contact, id: v4() }]);
  };

  const deleteContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retrievedContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrievedContacts) setContacts(retrievedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ContactList contacts={contacts} toGetId={deleteContactHandler} />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>
        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} toGetId={deleteContactHandler} /> */}
      </Router>
    </div>
  );
}

export default App;
