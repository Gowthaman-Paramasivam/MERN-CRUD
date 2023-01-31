// import the dependencies module
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// create a CreateMachine class
export const CreateMachine = () => {

  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    type: "",
    status: "",
  })

  // onSubmit function collect all field values and send it to sever
  function onSubmit(e) {
    e.preventDefault();

    // collect all field values and combined into one object
    const machineObject = {
      name: state.name,
      type: state.type,
      status: state.status,
    };

    // send the form data to server
    axios
      .post("http://localhost:4000/machines/add-machine", machineObject)
      .then((res) => {
        alert("Machine details successfully added!");
      });

    navigate("/list-machine")
  } // end of onSubmit function

  return (
    <div className="component-margin-top">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Machine Name*</Form.Label>
          <Form.Control
            type="text"
            value={state.name}
            onChange={(e) => {
              setState({ ...state, name: e.target.value })
            }}
            required
          />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Machine Type*</Form.Label>
          <Form.Select
            id="selectList"
            onChange={(e) => {
              setState({ ...state, type: e.target.value })
            }}
            value={state.type}
            required
          >
            <option value="">Select</option>
            <option value="Manual">Manual</option>
            <option value="Automated">Automated</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Machine Status*</Form.Label>
          <Form.Control
            type="text"
            value={state.status}
            onChange={(e) => {
              setState({ ...state, status: e.target.value })
            }}
            required
          />
        </Form.Group>

        <div className="display-create-button component-margin-top">
          <Button
            variant="success"
            size="md"
            type="submit"
          >
            Add machine
          </Button>
        </div>
      </Form>
    </div>
  );

} // end of the createMachine class

export default CreateMachine
