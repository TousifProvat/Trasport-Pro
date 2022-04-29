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
import InvoiceModal from "../InvoiceModal";

const Invoice = () => {
  const [lgShow, setLgShow] = useState(false);

  // const handleLargeModalShow = () => {
  //   setLgShow(true);
  // }
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
                        <InvoiceModal></InvoiceModal>
                      </Modal.Body>
                    </Modal>
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

export default Invoice;
