import React from "react";
import {
  Button,
  Container,
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
            <Navbar.Brand href="#home">
              <img
                src="https://www.transportpro.net/images/TransportProLogo.png"
                alt="logo-img"
              ></img>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
            <div>
              <Nav className="navbar-1">
                <h4 className="navbar-1-title text-nowrap">
                  Demo Company Inc.
                </h4>
              </Nav>
            </div>
            <div className="navLinks-shortLinks">
              <p className="text-nowrap fw-bold">Text Demo X</p>
              <div className="">
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="button-tooltip-2">Quick Launch</Tooltip>
                  }
                >
                  {({ ref, ...triggerHandler }) => (
                    <Button
                      variant="light"
                      {...triggerHandler}
                      className="d-inline-flex align-items-center"
                    >
                      <Image
                        ref={ref}
                        roundedCircle
                        src="https://demo.transportpro.net/images/icons/xsmall/quick.gif"
                      />
                      {/* <span className="ms-1">Hover to see</span> */}
                    </Button>
                  )}
                </OverlayTrigger>
              </div>
              <div className="">
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="button-tooltip-2">Save Searches</Tooltip>
                  }
                >
                  {({ ref, ...triggerHandler }) => (
                    <Button
                      variant="light"
                      {...triggerHandler}
                      className="d-inline-flex align-items-center"
                    >
                      <Image
                        ref={ref}
                        roundedCircle
                        src="https://demo.transportpro.net/images/icons/xsmall/search.png"
                      />
                      {/* <span className="ms-1">Hover to see</span> */}
                    </Button>
                  )}
                </OverlayTrigger>
              </div>
              <div className="">
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="button-tooltip-2">
                      Terminal Directories
                    </Tooltip>
                  }
                >
                  {({ ref, ...triggerHandler }) => (
                    <Button
                      variant="light"
                      {...triggerHandler}
                      className="d-inline-flex align-items-center"
                    >
                      <Image
                        ref={ref}
                        roundedCircle
                        src="https://demo.transportpro.net/images/icons/xsmall/users.png"
                      />
                      {/* <span className="ms-1">Hover to see</span> */}
                    </Button>
                  )}
                </OverlayTrigger>
              </div>
              <div className="">
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="button-tooltip-2">All Documents</Tooltip>
                  }
                >
                  {({ ref, ...triggerHandler }) => (
                    <Button
                      variant="light"
                      {...triggerHandler}
                      className="d-inline-flex align-items-center"
                    >
                      <Image
                        ref={ref}
                        roundedCircle
                        src="https://demo.transportpro.net/images/icons/small/mail_cropped.png"
                      />
                      {/* <span className="ms-1">Hover to see</span> */}
                    </Button>
                  )}
                </OverlayTrigger>
              </div>
              <div className="">
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="button-tooltip-2">Global positioning</Tooltip>
                  }
                >
                  {({ ref, ...triggerHandler }) => (
                    <Button
                      variant="light"
                      {...triggerHandler}
                      className="d-inline-flex align-items-center"
                    >
                      <Image
                        ref={ref}
                        roundedCircle
                        src="https://demo.transportpro.net/images/icons/small/globe.png"
                      />
                      {/* <span className="ms-1">Hover to see</span> */}
                    </Button>
                  )}
                </OverlayTrigger>
              </div>
              <div className="">
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="button-tooltip-2">Company Documents</Tooltip>
                  }
                >
                  {({ ref, ...triggerHandler }) => (
                    <Button
                      variant="light"
                      {...triggerHandler}
                      className="d-inline-flex align-items-center"
                    >
                      <Image
                        ref={ref}
                        roundedCircle
                        src="https://demo.transportpro.net/images/icons/small/folderOpen.png"
                      />
                      {/* <span className="ms-1">Hover to see</span> */}
                    </Button>
                  )}
                </OverlayTrigger>
              </div>
              <div className="">
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip id="button-tooltip-2">Prints</Tooltip>}
                >
                  {({ ref, ...triggerHandler }) => (
                    <Button
                      variant="light"
                      {...triggerHandler}
                      className="d-inline-flex align-items-center"
                    >
                      <Image
                        ref={ref}
                        roundedCircle
                        src="https://demo.transportpro.net/images/icons/xsmall/printer.png"
                      />
                      {/* <span className="ms-1">Hover to see</span> */}
                    </Button>
                  )}
                </OverlayTrigger>
              </div>
              <div className="">
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip id="button-tooltip-2">Log out</Tooltip>}
                >
                  {({ ref, ...triggerHandler }) => (
                    <Button
                      variant="light"
                      {...triggerHandler}
                      className="d-inline-flex align-items-center"
                    >
                      <Image
                        ref={ref}
                        roundedCircle
                        src="https://demo.transportpro.net/images/icons/xsmall/logout.png"
                      />
                      {/* <span className="ms-1">Hover to see</span> */}
                    </Button>
                  )}
                </OverlayTrigger>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
