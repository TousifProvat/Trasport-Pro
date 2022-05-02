import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Spinner,
} from "react-bootstrap";
import "./navbar1.css";
//
import { authSignOut } from "../../../features/auth/action";
//
import { ReactComponent as Avatar } from "../../../assets/avatar.svg";

//
const Navbar1 = () => {
  const { settings } = useSelector((state) => state.settings);
  const { auth, loading } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSignOut = () => {
    navigate("/login");
    dispatch(authSignOut());
    setShow(false);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <div>
          <Navbar.Brand href="/">LOGO</Navbar.Brand>
        </div>

        <div>
          <Nav className="navbar-1">
            <h4 className="navbar-1-title text-nowrap">
              {loading ? (
                <div>
                  <Spinner animation="border" variant="primary"></Spinner>
                </div>
              ) : (
                settings.name
              )}
            </h4>
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
                <Avatar
                  style={{
                    fill: "#e4e4e4",
                    width: "40px",
                    height: "40px",
                    marginRight: ".5rem",
                  }}
                />
                <p className="mt-2 fw-bold">
                  {auth.user?.firstName} {auth.user?.lastName}
                </p>
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
  );
};

export default Navbar1;
