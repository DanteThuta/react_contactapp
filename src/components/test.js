import React, { useState } from "react";

const AddContact = () => {
  const [state, setState] = useState({ id: "", name: "", email: "" });

  const addContact = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <div className="ui main">
        <h2> Add Contact</h2>
        <form className="ui form" onSubmit={addContact}>
          <div className="field">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Add Name"
              value={state.name}
              onChange={(e) => setState({ name: e.target.value })}
            ></input>
          </div>
          <div className="field">
            <label>Email:</label>
            <input
              type="text"
              placeholder="Add Email"
              value={state.email}
              onChange={(e) => setState({ email: e.target.value })}
            ></input>
          </div>

          <button className="ui button blue">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
