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

const Invoice = () => {
  const [lgShow, setLgShow] = useState(false);
  return (
    <div>
      <Container>
        <Navbar bg="" expand="lg" className="mt-5">
          <Container>
            <Navbar.Brand>
              <h1>Invoice</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <hr></hr>
        <Row>
          <Col sm={6}>
            <Form.Label>Invoice Status</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select Invoice Status</option>
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
            </Form.Select>
          </Col>
          <Col sm={6}>
            <Form.Label>BOL</Form.Label>
            <Form.Check
              required
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Col>
        </Row>
        <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>Load No.</th>
              <th>Invoice No.</th>
              <th>Customers</th>
              <th>Load Rate</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>0001</td>
              <td>Tousif</td>
              <td>200</td>
              <td>Unpaid</td>
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
                </OverlayTrigger>
                <Modal
                  size="lg"
                  show={lgShow}
                  onHide={() => setLgShow(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                      Invoice
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Row>
                      <Col sm={6}>
                        <h3>LOGO</h3>
                      </Col>
                      <Col sm={6}>
                        <strong>Company Info</strong>
                      </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                      <Col sm={12}>
                        <h3>Bill To:</h3>
                        <p>Customers Info.</p>
                      </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                      <Col sm={12}>
                        <h3>Bill of Lading:</h3>
                        <Form.Control type="file" />
                      </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                      <Col sm={6}>
                        <h3>Notes: </h3>
                        <Form.Control type="file" />
                      </Col>
                      <Col sm={6}>
                        <Navbar bg="light" expand="lg">
                          <Container>
                            <Navbar.Brand href="#home">
                              Other Charges
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="ms-auto">
                                {/* <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link> */}
                                <OverlayTrigger
                                  overlay={
                                    <Tooltip id="tooltip-disabled">
                                      Add Charge
                                    </Tooltip>
                                  }
                                >
                                  <span className="d-inline-block">
                                    <Button variant="outline-primary">
                                      <i className="fa-solid fa-plus"></i>
                                    </Button>{" "}
                                  </span>
                                </OverlayTrigger>
                              </Nav>
                            </Navbar.Collapse>
                          </Container>
                        </Navbar>
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>Charges</th>
                              <th>Amount</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>1209</td>
                              <td>
                                <OverlayTrigger
                                  overlay={
                                    <Tooltip id="tooltip-disabled">
                                      Edit
                                    </Tooltip>
                                  }
                                >
                                  <span className="d-inline-block">
                                    <Button variant="outline-success">
                                      <i className="fa-solid fa-pen-to-square"></i>
                                    </Button>{" "}
                                  </span>
                                </OverlayTrigger>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                      <Col sm={12}>
                        <strong>Sub-Total: </strong>
                        <span>100</span>
                        <br></br>
                        <strong>Other Charges: </strong>
                        <span>100</span>
                        <br></br>
                        <strong>Total: </strong>
                        <span>100</span>
                      </Col>
                    </Row>
                  </Modal.Body>
                </Modal>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Invoice;
