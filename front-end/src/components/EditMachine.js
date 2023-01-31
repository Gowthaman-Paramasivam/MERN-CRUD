// import the dependencies module
import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

// create a EditMachine class
export const EditMachine = () => {

  const params = useParams();

  const navigate = useNavigate();

  // Setting up state
  const [state, setState] = useState({
    name: '',
    type: '',
    status: ''
  })

  // This method fetch the data from External Api
  useEffect(() => {
    if (state.name === "" && state.status === "" && state.type === "") {
      // collect the particular data based on the id
      axios.get(`http://localhost:4000/machines/edit-machine/${params.id}`)
        .then(res => {
          // response value is set into state
          setState({
            name: res.data.name,
            type: res.data.type,
            status: res.data.status
          });
        })
        .catch((error) => {
          console.log(error);
        })
    }
  })

  // onSubmit function collect all field values and send it to sever
  function onSubmit(e) {
    e.preventDefault()

    // collect all field values and combined into one object
    const machineObject = {
      name: state.name,
      type: state.type,
      status: state.status
    };

    // send the update data to server with id
    axios.put('http://localhost:4000/machines/update-machine/' + params.id, machineObject)
      .then((res) => {
        alert("Machine successfully updated!");
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Machine List 
    navigate('/list-machine')
  }

  return <div className="component-margin-top">
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="Name">
        <Form.Label>Machine Name</Form.Label>
        <Form.Control
          type="text"
          value={state.name}
          onChange={(e) => {
            setState({ ...state, status: e.target.value })
          }}
        />
      </Form.Group>

      <Form.Group controlId="Name">
        <Form.Label>Machine Type</Form.Label>
        <Form.Control
          type="text"
          value={state.type}
          onChange={(e) => {
            setState({ ...state, type: e.target.value })
          }}
        />
      </Form.Group>

      <Form.Group controlId="Name">
        <Form.Label>Machine status</Form.Label>
        <Form.Control
          type="text"
          value={state.status}
          onChange={(e) => {
            setState({ ...state, status: e.target.value })
          }}
        />
      </Form.Group>

      <Button variant="success" size="md" block="block" type="submit">
        Update Machine
      </Button>
    </Form>
  </div>
}

export default EditMachine;