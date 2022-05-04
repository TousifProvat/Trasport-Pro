import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
//
import Loader from "../../Loader";
//assets
import { ReactComponent as Avatar } from "../../../assets/avatar.svg";
//actions
import { authSignOut } from "../../../features/auth/action";
//css
import "./navbar1.css";

const TopNav = () => {
  //state
  const { settings, loading } = useSelector((state) => state.settings);
  const { auth } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);

  //hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //func
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
              {loading ? <Loader /> : settings.name}
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

export default TopNav;
