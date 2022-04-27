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
import useContext from "../Hooks/useContext";
import "./userManagement.css";

const UserManagement = () => {
  const { loading, user } = useContext();

  const [lgShow, setLgShow] = useState(false);
  const [enable, setEnable] = useState(true);

  const [allValues, setAllValues] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    accounting: false,
    billing: false,
    systemAdmin: true,
    settlements: false,
    freightOperation: false,
  });

  const changeHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddNew = (enable) => {
    setEnable(false);
    setLgShow(true);
    console.log(allValues);
  };

  const handleEdit = () => {
    setEnable(true);
    setLgShow(true);
  };

  const handleSaveBtn = () => {
    console.log(allValues);
  };
  const handleUpdateBtn = () => {
    console.log(allValues);
  };

  const handleClose = () => setLgShow(false);

  return (
    <div>
      <Container>
        <Navbar bg="" expand="lg" className="mt-5">
          <Container>
            <Navbar.Brand>User Management</Navbar.Brand>

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
                            name="firstName"
                            onChange={changeHandler}
                            type="text"
                            placeholder="First name"
                          />
                        </Col>
                        <Col>
                          <Form.Label>Middle name</Form.Label>
                          <Form.Control
                            name="middleName"
                            onChange={changeHandler}
                            type="text"
                            placeholder="Middle name"
                          />
                        </Col>
                        <Col>
                          <Form.Label>Last name</Form.Label>
                          <Form.Control
                            name="lastName"
                            onChange={changeHandler}
                            type="text"
                            placeholder="Last name"
                          />
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col>
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            name="phoneNumber"
                            onChange={changeHandler}
                            type="text"
                            placeholder="Phone Number"
                          />
                        </Col>
                        <Col>
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            name="email"
                            onChange={changeHandler}
                            type="email"
                            placeholder="Email"
                          />
                        </Col>
                        <Col>
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            name="password"
                            onChange={changeHandler}
                            type="password"
                            placeholder="Password"
                          />
                        </Col>
                      </Row>
                      <h3 className="mt-3 mb-1">Permissions</h3>
                      <Row className="mt-3">
                        <Col>
                          <Form.Check
                            name="accounting"
                            onChange={changeHandler}
                            label="Accounting"
                            feedback="You must ensure"
                            feedbackType="invalid"
                          />
                        </Col>
                        <Col>
                          <Form.Check
                            name="billing"
                            onChange={changeHandler}
                            label="Billing"
                            feedback="You must ensure"
                            feedbackType="invalid"
                          />
                        </Col>
                        <Col>
                          <Form.Check
                            name="systemAdmin"
                            onChange={changeHandler}
                            label="System Admin"
                            feedback="You must ensure"
                            feedbackType="invalid"
                          />
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col>
                          <Form.Check
                            name="settlement"
                            onChange={changeHandler}
                            label="Settlement"
                            feedback="You must ensure"
                            feedbackType="invalid"
                          />
                        </Col>
                        <Col>
                          <Form.Check
                            name="freight Operations"
                            onChange={changeHandler}
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
                      <Button
                        variant="outline-primary"
                        className="mt-3"
                        onClick={handleClose}
                      >
                        Cancel
                      </Button>{" "}
                      {"   "}
                      <Button
                        variant="outline-primary"
                        className="mt-3"
                        onClick={handleUpdateBtn}
                      >
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
                            name="firstName"
                            onChange={changeHandler}
                            type="text"
                            placeholder="First name"
                          />
                        </Col>
                        <Col>
                          <Form.Label>Middle name</Form.Label>
                          <Form.Control
                            name="middleName"
                            onChange={changeHandler}
                            type="text"
                            placeholder="Middle name"
                          />
                        </Col>
                        <Col>
                          <Form.Label>Last name</Form.Label>
                          <Form.Control
                            name="lastName"
                            onChange={changeHandler}
                            type="text"
                            placeholder="Last name"
                          />
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col>
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            name="phoneNumber"
                            onChange={changeHandler}
                            type="text"
                            placeholder="Phone Number"
                          />
                        </Col>
                        <Col>
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            name="email"
                            onChange={changeHandler}
                            type="email"
                            placeholder="Email"
                          />
                        </Col>
                        <Col>
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            name="password"
                            onChange={changeHandler}
                            type="password"
                            placeholder="Password"
                          />
                        </Col>
                      </Row>
                      <h3 className="mt-3 mb-1">Permissions</h3>
                      <Row className="mt-3">
                        <Col>
                          <Form.Check
                            name="accounting"
                            onChange={changeHandler}
                            label="Accounting"
                            feedback="You must ensure"
                            feedbackType="invalid"
                          />
                        </Col>
                        <Col>
                          <Form.Check
                            name="billing"
                            onChange={changeHandler}
                            label="Billing"
                            feedback="You must ensure"
                            feedbackType="invalid"
                          />
                        </Col>
                        <Col>
                          <Form.Check
                            name="systemAdmin"
                            onChange={changeHandler}
                            label="System Admin"
                            feedback="You must ensure"
                            feedbackType="invalid"
                          />
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col>
                          <Form.Check
                            name="settlement"
                            onChange={changeHandler}
                            label="Settlement"
                            feedback="You must ensure"
                            feedbackType="invalid"
                          />
                        </Col>
                        <Col>
                          <Form.Check
                            name="freight Operations"
                            onChange={changeHandler}
                            label="Freight Operations"
                            feedback="You must ensure"
                            feedbackType="invalid"
                          />
                        </Col>
                        <Col></Col>
                      </Row>
                      <Button
                        variant="outline-primary"
                        className="mt-3"
                        onClick={handleSaveBtn}
                      >
                        Save
                      </Button>{" "}
                      {"   "}
                      <Button
                        variant="outline-primary"
                        className="mt-3"
                        onClick={handleClose}
                      >
                        Cancel
                      </Button>{" "}
                      {"   "}
                      {"   "}
                      {"   "}
                    </Modal.Body>
                  </Modal>
                </div>
              )}
            </Nav>
          </Container>
        </Navbar>
        <hr></hr>
      </Container>
      <Container fluid>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr key={index}>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.phoneNumber}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td></td>
              </tr>
            ))}
            {user.length < 1 && (
              <tr>
                <td
                  colSpan={5}
                  style={{
                    textAlign: "center",
                  }}
                >
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default UserManagement;
