import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
  Row,
  Table,
} from "react-bootstrap";

const BillingDashboard = () => {
  return (
    <div>
      <Container fluid>
        {" "}
        <h1 className="mt-5 mb-3">Billing/Collections dashboard.</h1>
        <hr></hr>
        <Row>
          <Col sm={9}>
            <Row>
              <Col sm={6}>
                <Navbar bg="light" expand="lg">
                  <Container>
                    <Navbar.Brand href="#home">
                      Pending Billing Stats
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                         */}
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
                <Row className="mt-3">
                  <Col sm={6}>
                    <Form
                    //   noValidate
                    //   validated={validated}
                    //   onSubmit={handleSubmit}
                    >
                      <Row className="mb-3">
                        <Form.Group
                          as={Col}
                          md="12"
                          controlId="validationCustom01"
                        >
                          <Form.Label>Loads Delivered - Not Billed</Form.Label>
                          <Form.Control
                            type="text"
                            disabled
                            placeholder="Loads Delivered - Not Billed"
                            defaultValue="0"
                          />
                          <Form.Control.Feedback>
                            Looks good!
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="12"
                          controlId="validationCustom01"
                          className="mt-3"
                        >
                          <Form.Label>
                            Loads Delivered, Docs Received - Not Billed(Locked)
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Loads Delivered, Docs Received - Not Billed(Locked)"
                            disabled
                            defaultValue="0"
                          />
                          <Form.Control.Feedback>
                            Looks good!
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="12"
                          controlId="validationCustom01"
                          className="mt-3"
                        >
                          <Form.Label>Waiting for Documents</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Waiting for Documents"
                            disabled
                            defaultValue="0"
                          />
                          <Form.Control.Feedback>
                            Looks good!
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="12"
                          controlId="validationCustom01"
                          className="mt-3"
                        >
                          <Form.Label>Queued FOr Print</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Queued FOr Print"
                            disabled
                            defaultValue="0"
                          />
                          <Form.Control.Feedback>
                            Looks good!
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="12"
                          controlId="validationCustom01"
                          className="mt-3"
                        >
                          <Form.Label>Active Customer</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Active Customer"
                            disabled
                            defaultValue="0"
                          />
                          <Form.Control.Feedback>
                            Looks good!
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="12"
                          controlId="validationCustom01"
                          className="mt-3"
                        >
                          <Form.Label>Customer Under Contact</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Customer Under Contact"
                            disabled
                            defaultValue="0"
                          />
                          <Form.Control.Feedback>
                            Looks good!
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>
                    </Form>
                  </Col>
                  <Col sm={6}>
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                      <Form.Label>
                        Loads Delivered, Docs Received - Not Billed(RTB)
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Loads Delivered - Not Billed(RTB)"
                        //defaultValue="Mark"
                        disabled
                        defaultValue="0"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="12"
                      controlId="validationCustom01"
                      className="mt-3"
                    >
                      <Form.Label>Loads w/ billing Lock</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Loads w/ billing Lock"
                        disabled
                        defaultValue="0"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="12"
                      controlId="validationCustom01"
                      className="mt-3"
                    >
                      <Form.Label>Pending Freight Bill</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Pending Freight Bill"
                        disabled
                        defaultValue="0"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="12"
                      controlId="validationCustom01"
                      className="mt-3"
                    >
                      <Form.Label>Load Queued For Rebill</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Load Queued For Rebill"
                        disabled
                        defaultValue="0"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="12"
                      controlId="validationCustom01"
                      className="mt-3"
                    >
                      <Form.Label>Suspended Customers</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Suspended Customers"
                        disabled
                        defaultValue="0"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col sm={6}>
                <Navbar bg="light" expand="lg">
                  <Container>
                    <Navbar.Brand href="">Revenue Stats</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                         */}
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
                <Row className="mt-3">
                  <Col sm={12}>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th></th>
                          <th>MTD</th>
                          <th>YTD</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Revenue</td>
                          <td>0.00</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>Load Revenue</td>
                          <td>0.00</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>Misc Revenue</td>
                          <td>0.00</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>Cash Receipt</td>
                          <td>0.00</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>Non A/R Cash Receipt</td>
                          <td>0.00</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>Customer Calls</td>
                          <td>0.00</td>
                          <td>0</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Col>
              <Row>
                <Col sm={12}>
                  <Navbar bg="light" expand="lg">
                    <Container>
                      <Navbar.Brand href="">Account Aging</Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                          {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                         */}
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>

                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Under 30 Days</th>
                        <th>30 - 59 Days</th>
                        <th>60 - 89 Days</th>
                        <th>90 - 120 Days</th>
                        <th>120+ Days</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$0.00(0.00%)</td>
                        <td>$0.00(0.00%)</td>
                        <td>$0.00(0.00%)</td>
                        <td>$0.00(0.00%)</td>
                        <td>$0.00(0.00%)</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>

              <Row>
                <Col sm={6}>
                  <Navbar bg="light" expand="lg">
                    <Container>
                      <Navbar.Brand href="">Imaging Statistics</Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                          {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                         */}
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Group</th>
                        <th>MTD</th>
                        <th>YTD</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Accounts Receivable - COLD </td>
                        <td>0.00</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>Billing - COLD </td>
                        <td>0.00</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>Misc Revenue</td>
                        <td>0.00</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>Cash Receipts </td>
                        <td>0.00</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>Customers</td>
                        <td>0.00</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>Loads</td>
                        <td>0.00</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>Misc Billing</td>
                        <td>0.00</td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>

                <Col sm={6}>
                  <Navbar bg="light" expand="lg">
                    <Container>
                      <Navbar.Brand href="#home">Imaging Queue</Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                          {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                         */}
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                  <p className="mt-3">TS-Transflo</p>
                  <Form.Control
                    type="text"
                    placeholder="TS-Transflo"
                    disabled
                    defaultValue="0"
                  />
                </Col>
              </Row>
            </Row>
          </Col>
          <Col sm={3}>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="">Billing Department Tools</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                         */}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <Row className="mt-3 mb-3">
              <Col>
                <Button variant="outline-primary">Add New Load</Button>{" "}
              </Col>
              <Col>
                <Button variant="outline-primary">Milage calculator</Button>{" "}
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="outline-primary">Find Freight Rates</Button>{" "}
              </Col>
            </Row>
            <Navbar bg="light" expand="lg" className="mt-5">
              <Container>
                <Navbar.Brand href="">Quick Launch</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                         */}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <Row>
              <Col sm={12}>
                <Form.Label className="mt-3">Load ID</Form.Label>
                <Form.Control type="text" placeholder="Load ID" />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Form.Label className="mt-3">Driver ID</Form.Label>
                <Form.Control type="text" placeholder="Driver ID" />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Form.Label className="mt-3">Owner Op ID</Form.Label>
                <Form.Control type="text" placeholder="Owner Op ID" />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Form.Label className="mt-3">Trailer ID</Form.Label>
                <Form.Control type="text" placeholder="Trailer ID" />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Form.Label className="mt-3">Tractor ID</Form.Label>
                <Form.Control type="text" placeholder="Tractor ID" />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Form.Label className="mt-3">Customer ID</Form.Label>
                <Form.Control type="text" placeholder="Customer ID" />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Form.Label className="mt-3">Settlement Account</Form.Label>
                <Form.Control type="text" placeholder="Settlement Account" />
              </Col>
            </Row>
            <Button variant="outline-success" className="mt-3">Search</Button>{" "}
          </Col>
        </Row>
        <div></div>
      </Container>
    </div>
  );
};

export default BillingDashboard;
