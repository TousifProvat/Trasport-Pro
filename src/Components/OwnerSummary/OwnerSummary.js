import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  Navbar,
  OverlayTrigger,
  Row,
  Table,
  Tooltip,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useContext from "../Hooks/useContext";
import "./ownerSummary.css";

const OwnerSummary = () => {
  const [smShow, setSmShow] = useState(false);
  const newData = [];
  const { ownerId } = useParams();
  const [summaryData, setSummaryDate] = useState([]);
  const [updateTime, setUpdateTime] = useState({});

  useEffect(() => {
    fetch(
      `https://transport-test-server.herokuapp.com/api/v1/owner/summary/${ownerId}`
    )
      .then((response) => response.json())
      .then((data) => setSummaryDate(data.ownerOperatorInfo));
  }, [ownerId]);

  // console.log(summaryData);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  //modal functionality

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //form validation functionality

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  //delete driver functionality

  const handleDeleteDriver = (event) => {
    window.confirm("Are you sure you want to delete this driver?");
  };

  return (
    <div className="mb-5">
      <Container className="mb-5">
        <h1 className="mt-5 mb-3">Owner summary</h1>
        <hr></hr>
        <div className="operator-info">
          <h5 className="mt-5 mb-3">Owner Operator Information</h5>
          <Button variant="outline-primary" onClick={() => setSmShow(true)}>
            Change Log
          </Button>{" "}
          <Button variant="outline-primary" onClick={() => setSmShow(true)}>
            Edit Information
          </Button>
          {"   "}
          <Modal
            size="lg"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Body id="example-modal-sizes-title-sm">
                <Row>
                  <Col>Transport Pro Administrator</Col>
                  <Col>{date}</Col>
                </Row>
              </Modal.Body>
            </Modal.Header>
            {/* <Modal.Body>...</Modal.Body> */}
          </Modal>
          <hr></hr>
        </div>
        <Row>
          <Col>
            <Form.Label>Id</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Id"
              defaultValue={summaryData._id}
            />
          </Col>
          <Col>
            <Form.Label>Home Terminal</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Home Terminal"
              defaultValue={summaryData.terminal}
            />
          </Col>
          <Col>
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Status"
              defaultValue={summaryData.status}
            />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Email"
              defaultValue={summaryData.email}
            />
          </Col>
          <Col>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Name"
              defaultValue={summaryData.firstName}
            />
          </Col>
          <Col>
            <Form.Label>Main Phone Number</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Status"
              defaultValue={summaryData.primaryPhoneNumber}
            />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Email"
              defaultValue={summaryData.address1}
            />
          </Col>
          <Col>
            <Form.Label>Cell Phone Number</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Cell Phone Number"
              defaultValue={summaryData.cellPhoneNumber}
            />
          </Col>
          <Col>
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="City"
              defaultValue={summaryData.city}
            />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Zip"
              defaultValue={summaryData.zip}
            />
          </Col>
          <Col>
            <Form.Label>Fax Phone Number</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Fax Phone Number"
              defaultValue={summaryData.faxPhoneNumber}
            />
          </Col>
          <Col>
            <Form.Label>Group</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Group"
              defaultValue={summaryData.group}
            />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Form.Label>Trailer Rent Percent</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Trailer Rent Percent"
              defaultValue={summaryData.trailerRentPercent}
            />
          </Col>
          <Col>
            <Form.Label>Preferred Settlement Day</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Preferred Settlement Day"
              defaultValue={summaryData.settlementDay}
            />
          </Col>
          <Col>
            <Form.Label>Factor Payments</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Factor Payments"
              defaultValue={summaryData.factorPayments}
            />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Form.Label>Print 1099</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Print 1099"
              defaultValue={summaryData.print1099}
            />
          </Col>
          <Col>
            {/* <Form.Label>Preferred Settlement Day</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Preferred Settlement Day"
              defaultValue={summaryData.settlementDay}
            /> */}
          </Col>
          <Col>
            {/* <Form.Label>Factor Payments</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Factor Payments"
              defaultValue={summaryData.factorPayments}
            /> */}
          </Col>
        </Row>

        <Navbar bg="light" expand="lg" className="mt-5">
          <Container>
            <Navbar.Brand href="#home">
              <h1>Payment Information</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
            {/* <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
              </Navbar.Text>
            </Navbar.Collapse> */}
          </Container>
        </Navbar>
        <Row className="mt-4">
          <Col>
            <Form.Label>Pay/Bill Name</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Pay/Bill Name"
              defaultValue="Eagles Eagles"
            />
          </Col>
          <Col>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Preferred Settlement Day"
              defaultValue={summaryData.address2}
            />
          </Col>
          <Col>
            <Form.Label>SSN or Federal ID</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="SSN or Federal ID"
              // defaultValue={summaryData.factorPayments}
            />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Form.Label>Default Tractor Pay Pct.</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Default Tractor Pay Pct."
              // defaultValue="Eagles Eagles"
            />
          </Col>
          <Col>
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Zip"
              defaultValue={summaryData.zip}
            />
          </Col>
          <Col>
            <Form.Label>Pay Per Mile</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Pay Per Mile"
              // defaultValue={summaryData.factorPayments}
            />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="City"
              defaultValue={summaryData.city}
            />
          </Col>
          <Col>
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="State"
              defaultValue={summaryData.state}
            />
          </Col>
          <Col>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Phone Number"
              // defaultValue={summaryData.factorPayments}
            />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Form.Label>Alt Phone Number</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Alt Phone Number"
              // defaultValue={summaryData.city}
            />
          </Col>
          <Col>
            <Form.Label>Fax Number</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Fax Number"
              // defaultValue={summaryData.state}
            />
          </Col>
          <Col>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Email"
              // defaultValue={summaryData.factorPayments}
            />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Form.Label>Settlement Receipt</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Settlement Receipt"
              // defaultValue={summaryData.city}
            />
          </Col>
          <Col>
            <Form.Label>Settlement Category</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Settlement Category"
              // defaultValue={summaryData.state}
            />
          </Col>
          <Col>
            {/* <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="Email"
              // defaultValue={summaryData.factorPayments}
            /> */}
          </Col>
        </Row>

        <Navbar bg="light" expand="lg" className="mt-5">
          <Container>
            <Navbar.Brand href="#home">
              <h1>Assigned Drivers</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <OverlayTrigger
                overlay={<Tooltip id="tooltip-disabled">Add Drivers</Tooltip>}
              >
                <span className="d-inline-block">
                  <Button variant="outline-primary" onClick={handleShow}>
                    <i className="fa-solid fa-plus"></i>
                  </Button>{" "}
                </span>
              </OverlayTrigger>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Button variant="outline-primary">
                    <Link to="/addDriver">Add New Driver</Link>
                  </Button>{" "}
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                    className="mt-4"
                  >
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Driver</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Driver"
                          // defaultValue="Mark"
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Driver Assigned</Form.Label>
                        <Form.Control
                          required
                          type="date"
                          placeholder="Driver"
                          // defaultValue="Mark"
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Driver Removed</Form.Label>
                        <Form.Control
                          required
                          type="date"
                          placeholder="Driver"
                          // defaultValue="Mark"
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Comment (Internal)</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Comment (Internal)"
                          // defaultValue="Mark"
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                      />
                    </Form.Group>
                    <Button type="submit">Save Recode</Button>{" "}
                    <Button variant="danger" onClick={handleClose}>
                      Close
                    </Button>
                  </Form>
                </Modal.Body>
                {/* <Modal.Footer>
                  <Button variant="primary" type="submit">
                    Save Recode
                  </Button>
                </Modal.Footer> */}
              </Modal>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Table striped bordered hover className="mb-5">
          <thead>
            <tr>
              <th>Driver</th>
              <th>Date Assigned </th>
              <th>Date Removed </th>
              <th>Comments (Internal)</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jhone Clerk</td>
              <td>03/20/2022</td>
              <td></td>
              <td></td>
              <td>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-disabled">Edit Drivers</Tooltip>
                  }
                >
                  <span className="d-inline-block">
                    <Button variant="outline-primary" onClick={handleShow}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>{" "}
                  </span>
                </OverlayTrigger>{" "}
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-disabled">Delete Drivers</Tooltip>
                  }
                >
                  <span className="d-inline-block">
                    <Button
                      variant="outline-danger"
                      onClick={handleDeleteDriver}
                    >
                      <i className="fa-solid fa-trash-can"></i>
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

export default OwnerSummary;
