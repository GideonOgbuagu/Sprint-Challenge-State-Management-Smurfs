import React, { useState } from "react";
import "./SmurfsForm.css";

const SmurfsForm = () => {
  // set the default state to empty form inputs
  // local state vs app state
  // the form's state is local to the form. no other component needs it as it is updating
  const [state, setState] = useState({ name: "", age: null, height: null });

  return (
    <div className="form-container">
      <form className="form">
        <label>
          Enter Name:
          <input
            type="type"
            name="name"
            value=""
            onChange
            placeholder="Enter name"
          />
        </label>
        <label>
          Enter Age:
          <input
            type="type"
            name="age"
            value=""
            onChange
            placeholder="Enter age"
          />
        </label>
        <label>
          Enter Height:
          <input
            type="type"
            name="height"
            value=""
            onChange
            placeholder="Enter height"
          />
        </label>
        {/* You need a button here with an onClick. When someone submits, the function inside of the onClick, should trigger the post action  */}
      </form>
    </div>
  );
};

export default SmurfsForm;
