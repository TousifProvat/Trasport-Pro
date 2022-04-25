import React, { useState } from 'react';
import { Button, Col, Container, Form, Modal, Nav, Navbar, OverlayTrigger, Row, Table, Tooltip } from 'react-bootstrap';

const AccidentLog = () => {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    return (
      <div>
        <Container>
          <Navbar bg="" expand="lg">
            <Container>
              <Navbar.Brand>
                <h1 className="mt-5 mb-3">Accident Log</h1>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Button
                    variant="outline-primary"
                    className="mt-4"
                    onClick={() => setLgShow(true)}
                  >
                    Add Accident Record
                  </Button>{" "}
                  <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-modal-sizes-title-lg">
                        Add Accident Record
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Row>
                        <Col sm={4}>
                          <Form.Label>Tractor</Form.Label>
                          <Form.Select aria-label="Default select example">
                            <option>Select Tractor</option>
                            <option value="Tractor1">Tractor1</option>
                            <option value="Tractor2">Tractor2</option>
                            <option value="Tractor3">Tractor3</option>
                          </Form.Select>
                        </Col>
                        <Col sm={4}>
                          <Form.Label>Date Occured</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Date Occured"
                          />
                        </Col>
                        <Col sm={4}>
                          <Form.Label>Time</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Time"
                          />
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col sm={4}>
                          <Form.Label>Street</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Street"
                          />
                        </Col>
                        <Col sm={4}>
                          <Form.Label>City</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="City"
                          />
                        </Col>
                        <Col sm={4}>
                          <Form.Label>State</Form.Label>
                          <Form.Select aria-label="Default select example">
                            <option>Select State</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Alabama">Alabama</option>
                            <option value="Canada">Canada</option>
                          </Form.Select>
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col sm={4}>
                          <Form.Label>Drivers</Form.Label>
                          <Form.Select aria-label="Default select example">
                            <option>Select Driver</option>
                            <option value="Driver1">Driver1</option>
                            <option value="Driver2">Driver2</option>
                            <option value="Driver3">Driver3</option>
                          </Form.Select>
                        </Col>
                        <Col sm={4}>
                          <Form.Label>Note</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Note"
                          />
                        </Col>
                        <Col sm={4}></Col>
                      </Row>
                      <Row className="mt-3">
                        <Col sm={12}>
                          <Form.Label>Accident Document</Form.Label>
                          <Form.Control
                            required
                            type="file"
                            placeholder="Note"
                          />
                        </Col>
                      </Row>
                      <Button
                        variant="outline-danger"
                        className="mt-5 mb-5"
                        onClick={handleClose}
                      >
                        Cancel
                      </Button>{" "}
                      <Button variant="outline-primary" className="mt-5 mb-5">
                        Save
                      </Button>{" "}
                    </Modal.Body>
                  </Modal>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <hr></hr>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Truck</th>
                <th>Drivers</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location of A.</th>
                <th>Facilities</th>
                <th>Injuries</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12/14/2022</td>
                <td>22</td>
                <td>20</td>
                <td>12/05/2022</td>
                <td>10:28 AM</td>
                <td>Alaska</td>
                <td>Good</td>
                <td>No</td>
                <td>
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}
                  >
                    <span className="d-inline-block">
                      <Button
                        variant="outline-success"
                        onClick={() => setLgShow(true)}
                      >
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

export default AccidentLog;
