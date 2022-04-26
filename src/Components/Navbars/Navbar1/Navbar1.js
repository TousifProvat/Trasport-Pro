import React from "react";
import {
  Button,
  Container,
  Dropdown,
  Image,
  Nav,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import "./navbar1.css";
const Navbar1 = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <div>
            <Navbar.Brand href="/">LOGO</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
            <div>
              <Nav className="navbar-1">
                <h4 className="navbar-1-title text-nowrap">Eagels LLC Inc.</h4>
              </Nav>
            </div>
            <div className="navLinks-shortLinks">
              <Dropdown drop="start">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <i className="fa-solid fa-gear"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Demo X</Dropdown.Item>
                  <Dropdown.Item>
                    <i className="fa-solid fa-right-from-bracket me-2"></i>
                    SignOut
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
