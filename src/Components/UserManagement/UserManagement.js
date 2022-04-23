import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Nav,
  Navbar,
  OverlayTrigger,
  Row,
  Table,
  Tooltip,
} from "react-bootstrap";
import "./userManagement.css";

const UserManagement = () => {
  const [lgShow, setLgShow] = useState(false);
  const [enable, setEnable] = useState(true);
  const handleAddNew = (enable) => {
    setEnable(false);
    setLgShow(true);
  };

  const handleUpdate = () => {
    setEnable(true);
      setLgShow(true);
      
  };

  return (
    <div>
      <Container>
        <Navbar bg="" expand="lg" className="mt-5">
          <Container>
            <Navbar.Brand href="#home">
              <h1>Add User</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Button variant="outline-primary" onClick={handleAddNew}>
                  Add User
                </Button>{" "}
                {enable ? (
                  <div>
                    <Modal
                      size="lg"
                      show={lgShow}
                      onHide={() => setLgShow(false)}
                      aria-labelledby="example-modal-sizes-title-lg"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                          Edit User
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Row>
                          <Col>
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="First name"
                            />
                          </Col>
                          <Col>
                            <Form.Label>Middle name</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Middle name"
                            />
                          </Col>
                          <Col>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Last name"
                            />
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Phone Number"
                            />
                          </Col>
                          <Col>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              required
                              type="email"
                              placeholder="Email"
                            />
                          </Col>
                          <Col>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              required
                              type="password"
                              placeholder="Password"
                            />
                          </Col>
                        </Row>
                        <h3 className="mt-3 mb-1">Permissions</h3>
                        <Row className="mt-3">
                          <Col>
                            <Form.Check
                              required
                              label="Accounting"
                              feedback="You must ensure"
                              feedbackType="invalid"
                            />
                          </Col>
                          <Col>
                            <Form.Check
                              required
                              label="Billing"
                              feedback="You must ensure"
                              feedbackType="invalid"
                            />
                          </Col>
                          <Col>
                            <Form.Check
                              required
                              label="System Admin"
                              feedback="You must ensure"
                              feedbackType="invalid"
                            />
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col>
                            <Form.Check
                              required
                              label="Settlement"
                              feedback="You must ensure"
                              feedbackType="invalid"
                            />
                          </Col>
                          <Col>
                            <Form.Check
                              required
                              label="Freight Operations"
                              feedback="You must ensure"
                              feedbackType="invalid"
                            />
                          </Col>
                          <Col></Col>
                        </Row>
                        <Button variant="outline-primary" className="mt-3">
                          Suspend
                        </Button>{" "}
                        {"   "}
                        <Button variant="outline-primary" className="mt-3">
                          Cancel
                        </Button>{" "}
                        {"   "}
                        <Button variant="outline-primary" className="mt-3">
                          Update
                        </Button>{" "}
                        {"   "}
                      </Modal.Body>
                    </Modal>
                  </div>
                ) : (
                  <div>
                    <Modal
                      size="lg"
                      show={lgShow}
                      onHide={() => setLgShow(false)}
                      aria-labelledby="example-modal-sizes-title-lg"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                          Add User
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Row>
                          <Col>
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="First name"
                            />
                          </Col>
                          <Col>
                            <Form.Label>Middle name</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Middle name"
                            />
                          </Col>
                          <Col>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Last name"
                            />
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Phone Number"
                            />
                          </Col>
                          <Col>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              required
                              type="email"
                              placeholder="Email"
                            />
                          </Col>
                          <Col>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              required
                              type="password"
                              placeholder="Password"
                            />
                          </Col>
                        </Row>
                        <h3 className="mt-3 mb-1">Permissions</h3>
                        <Row className="mt-3">
                          <Col>
                            <Form.Check
                              required
                              label="Accounting"
                              feedback="You must ensure"
                              feedbackType="invalid"
                            />
                          </Col>
                          <Col>
                            <Form.Check
                              required
                              label="Billing"
                              feedback="You must ensure"
                              feedbackType="invalid"
                            />
                          </Col>
                          <Col>
                            <Form.Check
                              required
                              label="System Admin"
                              feedback="You must ensure"
                              feedbackType="invalid"
                            />
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col>
                            <Form.Check
                              required
                              label="Settlement"
                              feedback="You must ensure"
                              feedbackType="invalid"
                            />
                          </Col>
                          <Col>
                            <Form.Check
                              required
                              label="Freight Operations"
                              feedback="You must ensure"
                              feedbackType="invalid"
                            />
                          </Col>
                          <Col></Col>
                        </Row>
                        <Button variant="outline-primary" className="mt-3">
                          Save
                        </Button>{" "}
                        {"   "}
                        <Button variant="outline-primary" className="mt-3">
                          Cancel
                        </Button>{" "}
                        {"   "}
                        <Button variant="outline-primary" className="mt-3">
                          Update
                        </Button>{" "}
                        {"   "}
                        {"   "}
                      </Modal.Body>
                    </Modal>
                  </div>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <hr></hr>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>UserName</th>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>jhon</td>
              <td>Mr. Jhon Doe</td>
              <td>9090909090</td>
              <td>jhonDoe@789</td>
              <td>Active</td>
              <td>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}
                >
                  <span className="d-inline-block">
                    <Button variant="outline-success" onClick={handleUpdate}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>{" "}
                  </span>
                </OverlayTrigger>{" "}
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Delete</Tooltip>}
                >
                  <span className="d-inline-block">
                    <Button variant="outline-danger">
                      <i className="fa-solid fa-scissors"></i>
                    </Button>{" "}
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default UserManagement;
