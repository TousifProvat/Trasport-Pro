import React, { useState } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useContext from "../../Hooks/useContext";
import "./navbar1.css";
const Navbar1 = () => {
  const { settings, authSignOut } = useContext();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const onSignOut = () => {
    navigate("/login");
    authSignOut();
    setTimeout(() => {
      setShow(false);
    }, 500);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <div>
            <Navbar.Brand href="/">LOGO</Navbar.Brand>
          </div>

          <div>
            <Nav className="navbar-1">
              <h4 className="navbar-1-title text-nowrap">{settings.name}</h4>
            </Nav>
          </div>
          <div className="navLinks-shortLinks">
            <Button variant="primary" onClick={handleShow} className="me-2">
              <i className="fa-solid fa-gear"></i>
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Account</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="users">
                  <i className="fa-solid fa-user-tie me-3"></i>
                  <p className="mt-2 fw-bold">Demo X</p>
                </div>
                <Button
                  variant="outline-danger"
                  className="mt-5"
                  onClick={onSignOut}
                >
                  Sign Out
                </Button>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
