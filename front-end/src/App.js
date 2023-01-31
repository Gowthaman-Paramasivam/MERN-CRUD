//import the dependencies module
import React from 'react'
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap'
import './App.css'

import { Routes, Route, Link } from 'react-router-dom'

import CreateMachine from './components/CreateMachine'
import EditMachine from './components/EditMachine'
import ListMachine from './components/ListMachine'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to={'/create-machine'} className="nav-link">
              Smart Factory
            </Link>
          </Navbar.Brand>

          <Nav className="justify-content-end">
            <Nav>
              <Link to={'/create-machine'} className="nav-link">
                Create machine
              </Link>
            </Nav>

            <Nav>
              <Link to={'/list-machine'} className="nav-link">
                List Machine
              </Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Routes>
                <Route
                  path="/"
                  element={<CreateMachine />}
                />
                <Route
                  path="/create-machine"
                  element={<CreateMachine />}
                />
                <Route
                  path="/edit-machine/:id"
                  element={<EditMachine />}
                />
                <Route
                  path="/list-machine"
                  element={<ListMachine />}
                />
              </Routes>

            </div>
          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default App