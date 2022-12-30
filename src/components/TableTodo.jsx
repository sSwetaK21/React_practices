import React, { useState } from "react";
import data from "./data.json";
import { nanoid } from "nanoid";

import "./TableTodo.css";

function TableTodo() {
  const [contactInfo, setContactInfo] = useState(data);
  const [search, setSearchBar] = useState("");
  const [addBtn, setAddBtn] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  const handleAddButton = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newAddData = { ...addBtn };
    newAddData[fieldName] = fieldValue;
    setAddBtn(newAddData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addBtn.fullName,
      phoneNumber: addBtn.phoneNumber,
      email: addBtn.email,
    };

    const newContacts = [...contactInfo, newContact];
    setContactInfo(newContacts);
  };

  const handleDelete = (id) => {
    const delRow = contactInfo.filter(list => list.id !== id);
    setContactInfo(delRow);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="search..."
          className="searchBar"
          onChange={(e) => {
            setSearchBar(e.target.value);
          }}
        ></input>
      </form>
      <table className="tableTodo">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Mail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactInfo
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (val.fullName) {
                return val.fullName
                  .toLowerCase()
                  .includes(search.toLowerCase());
              }
            })
            .map((cont) => (
              <tr key={cont.id}>
                <td>{cont.fullName}</td>
                <td>{cont.phoneNumber}</td>
                <td>{cont.email}</td>
                <td>
                  <button
                    type="button"
                    className="delete"
                    onClick={() => handleDelete(cont.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddButton}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter Phonemumber..."
          onChange={handleAddButton}
        />
        <input
          type="text"
          name="email"
          required="required"
          placeholder="Enter mail id..."
          onChange={handleAddButton}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default TableTodo;
