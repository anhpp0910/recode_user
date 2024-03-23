import React from "react";
import List from "./List";
import Form from "./Form";
import "./index.css";

export default function UserManagement() {
  return (
    <div className="wrapper">
      <h2 className="my-3">User Management</h2>
      <div className="row ">
        <List />
        <Form />
      </div>
    </div>
  );
}
