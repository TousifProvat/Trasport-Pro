import React from 'react';
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
                <Button variant="outline-primary" className="mt-5">
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
                <FormControl aria-label="First name" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>Street</InputGroup.Text>
                <FormControl aria-label="Street name" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>City</InputGroup.Text>
                <FormControl aria-label="City" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>Zip</InputGroup.Text>
                <FormControl aria-label="Zip" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>State</InputGroup.Text>
                <FormControl aria-label="State" />
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
