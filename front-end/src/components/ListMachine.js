// import the dependencies module
import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

// create a ListMachine class
export const ListMachine = () => {

  const navigate = useNavigate();

  const [state, setState] = useState({
    machines: []
  })

  // This method fetch the data from External Api
  useEffect(() => {
    axios
      .get("http://localhost:4000/machines/")
      .then((res) => {
        setState({
          machines: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  })

  function deleteMachine(id) {

    // Send a request with corresponding id
    axios.delete(
      "http://localhost:4000/machines/delete-machine/" + id
    )
      .then((res) => {
        alert("Machine successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Datatable method display all value the present in the database using table format
  const DataTable = () => {
    return state.machines.map((res, i) => {
      return (
        <tr key={res._id}>
          <td>{res.name}</td>
          <td>{res.type}</td>
          <td>{res.status}</td>
          <td>
            <div className="display-action-button">
              <Button
                size="sm"
                onClick={() => {
                  navigate("/edit-machine/" + res._id)
                }}
              >
                Edit
              </Button>
              <Button onClick={() => deleteMachine(res._id)} size="sm" variant="danger">
                Delete
              </Button>
            </div>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="component-margin-top">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Machine Name</th>
            <th>machine Type</th>
            <th>Machine Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
}

export default ListMachine;