import React from "react";
import "../Styles/ApForm.css";
import { Button } from "@material-ui/core";

function ApForm() {
  return (
    <div className="apForm">
      <div className="apForm__body">
        <form action="POST">
          <div className="apForm__name">
            <label>Name</label>
            <div className="apForm__nameInputs">
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="apForm__email">
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="apForm__tel">
            <label>Contact</label>
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Enter contact number"
            />
          </div>
          <div className="apForm__button">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApForm;
