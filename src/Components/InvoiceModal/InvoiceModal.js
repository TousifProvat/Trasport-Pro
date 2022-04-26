import React, { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Modal, Nav, Navbar, OverlayTrigger, Row, Table, Tooltip } from 'react-bootstrap';

const InvoiceModal = ( ) => {
    
    return (
      <div>
        <Container>
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
              <FloatingLabel controlId="floatingTextarea2" label="Notes">
                <Form.Control
                  as="textarea"
                  placeholder="Notes"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </Col>
            <Col sm={6}>
              <Navbar bg="light" expand="lg">
                <Container>
                  <Navbar.Brand href="#home">Other Charges</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      {/* <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link> */}
                      <OverlayTrigger
                        overlay={
                          <Tooltip id="tooltip-disabled">Add Charge</Tooltip>
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
                        overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}
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
        </Container>
      </div>
    );
};

export default InvoiceModal;
