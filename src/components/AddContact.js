import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { browserHistory } from "react-router-dom";

export class AddContact extends Component {
  state = {
    id: "",
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All inputs must be filled");
      return;
    }

    // for id
    // const newid = Math.floor(Math.random() * 100);
    // this.setState({ ...this.state, id: newid });

    this.props.addContactHandler(this.state);

    this.setState({ name: "", email: "" });
    // this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2> Add Contact</h2>

        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Add Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            ></input>
          </div>
          <div className="field">
            <label>Email:</label>
            <input
              type="text"
              placeholder="Add Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            ></input>
          </div>

          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
