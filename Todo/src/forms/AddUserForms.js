import React, { useState } from "react";

const AddUserForm = (props) => {
  const initUser = { id: null, name: "", description: "" };

  const [user, setUser] = useState(initUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.description) {
      handleChange(e, props.addUser(user));
    }
  };

  return (
    <form>
      <label>Name</label>
      <input
        className="u-full-width"
        type="text"
        value={user.name}
        name="name"
        onChange={handleChange}
      />
      <label>Description</label>
      <input
        className="u-full-width"
        type="text"
        value={user.description}
        name="description"
        onChange={handleChange}
      />
      <button className="button-primary" type="submit" onClick={handleSubmit}>
        Add user
      </button>
    </form>
  );
};

export default AddUserForm;
