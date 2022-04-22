import React, { useState } from 'react';
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";

const SiteSettings = () => {
    const [allValues, setAllValues] = useState({});

    const changeHandler = (e) => {
      setAllValues({
        ...allValues,
        [e.target.name]: e.target.value,
      });
    };
    const handleUpdateBtn = (e) => {
        console.log(allValues);
    }
  return (
    <div>
      <Container>
        <Navbar bg="" expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="mt-5">
              <h1>Site Settings</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Button
                  variant="outline-primary"
                  className="mt-5"
                  onClick={handleUpdateBtn}
                >
                  Update
                </Button>{" "}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <hr></hr>
        <div>
          <Row>
            <Col sm={4}></Col>
            <Col sm={4} className="mt-5">
              <InputGroup className="mb-3">
                <InputGroup.Text>Name</InputGroup.Text>
                <FormControl
                  aria-label="First name"
                  name="firstName"
                  onChange={changeHandler}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>Street</InputGroup.Text>
                <FormControl
                  aria-label="Street name"
                  name="street"
                  onChange={changeHandler}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>City</InputGroup.Text>
                <FormControl
                  aria-label="City"
                  name="city"
                  onChange={changeHandler}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>Zip</InputGroup.Text>
                <FormControl
                  aria-label="Zip"
                  name="zip"
                  onChange={changeHandler}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>State</InputGroup.Text>
                <FormControl
                  aria-label="State"
                  name="state"
                  onChange={changeHandler}
                />
              </InputGroup>{" "}
            </Col>
            <Col sm={4}></Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default SiteSettings;
