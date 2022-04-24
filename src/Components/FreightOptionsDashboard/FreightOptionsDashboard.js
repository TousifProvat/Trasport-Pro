import React, { useState } from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  Modal,
  Nav,
  Navbar,
  NavDropdown,
  OverlayTrigger,
  Row,
  Table,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./freightOptionsDashboard.css";
import Select from "react-select";
import useContext from "../Hooks/useContext";
const FreightOptionsDashboard = () => {
  const [lgShow, setLgShow] = useState(false);
  const [largeShow, setLargeShow] = useState(false);
  const [large2Show, setLarge2Show] = useState(false);

  const handleClose = () => setLargeShow(false);
  const handleClose2 = () => setLarge2Show(false);

const [allValues, setAllValues] = useState({
  loadId: "",
  status: "",
  dispatcher: "",
  driver: "",
  tractor: "",
  trailer: "",
  loadBy: "",
});
const changeHandler = (e) => {
  setAllValues({
    ...allValues,
    [e.target.name]: e.target.value,
  });
};

  const handleUpdateStatus = () => {
    console.log(allValues);
  };
  const handleDispatcher = () => {
    console.log(allValues);
  };
  

  const { value } = useContext();
  const options = [
    { value: "ABC - ABC Terminal", label: "ABC - ABC Terminal" },
    { value: "ADT - Carrier Jhonson", label: "ADT - Carrier Jhonson" },
    { value: "B1 - Broker 1", label: "B1 - Broker 1" },
    { value: "RFT - Rob Finney", label: "RFT - Rob Finney" },
    { value: "CK - C & K Trucking Inc.", label: "CK - C & K Trucking Inc." },
    { value: "DT - DT", label: "DT - DT" },
    { value: "ERT - ERT Logistics Inc.", label: "ERT - ERT Logistics Inc." },
    { value: "1 - Headquarter", label: "1 - Headquarter" },
    { value: "Shop - Kamps", label: "Shop - Kamps" },
    { value: "KK - Kenneth Kloeppel", label: "KK - Kenneth Kloeppel" },
    { value: "MD1 - Medal 1", label: "MD1 - Medal 1" },
    { value: "MD2 - Medal 2", label: "MD2 - Medal 2" },
    {
      value: "KDC - Kings Drayage Company",
      label: "KDC - Kings Drayage Company",
    },
    { value: "MD3 - Medal 3", label: "MD3 - Medal 3" },
    { value: "MD4 - Medal 4", label: "MD4 - Medal 4" },
    { value: "EGT - Mount Juliet", label: "EGT - Mount Juliet" },
    { value: "NAGH - Nashville Terminal", label: "NAGH - Nashville Terminal" },
    {
      value: "PSNPR - North Pole Terminal",
      label: "PSNPR - North Pole Terminal",
    },
    { value: "102 - Agent 102", label: "102 - Agent 102" },
    { value: "88 - JJ Trucking Terminal", label: "88 - JJ Trucking Terminal" },
    { value: "ETTY -East TN Drop Yard", label: "ETTY -East TN Drop Yard" },
    { value: "A-1 - Orbit Station", label: "A-1 - Orbit Station" },
    {
      value: "1012 - PB02 Transport Inc.",
      label: "1012 - PB02 Transport Inc.",
    },
    { value: "PFT - PFT Transportation", label: "PFT - PFT Transportation" },
    { value: "WASH - Washington", label: "WASH - Washington" },
    {
      value: "COM-TH - THron Logistics Inc.",
      label: "COM-TH - THron Logistics Inc.",
    },
    { value: "412 - THT", label: "412 - THT" },
    { value: "088 - Wade", label: "088 - Wade" },
    { value: "BON - Woerner TURF", label: "BON - Woerner TURF" },
    { value: "alfen - yard", label: "alfen - yard" },
  ];
  return (
    <>
      <div className="frt-header">
        <p className="lead mt-3 ms-3">
          <span className="me-auto">Freight Options</span>
        </p>

        <Select options={options} className="mt-3 w-25" title="Title" />

        <Dropdown className="frt-drop mt-3 me-3">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Show Freight Options Tools
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <p className="ms-3">Freight options</p>
            <hr></hr>
            <Dropdown.Item href="#/action-1">
              <Link to="/addNewLoad">Add New Load</Link>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Add Express Load</Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Add Carrier Capacity
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">Carrier Lane Search</Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Dispatch Multiple Loads
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">EOBR Messaging</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Find Freight Rates</Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Find Driver/Load/Broker
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Loads Delivered - Not Billed
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">Loads/Drivers Map</Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Load Tendering Queue
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">Mileage Calculator.</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Post Driver Call-in</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Add Empty Movement</Dropdown.Item>
            <hr></hr>
            <p className="ms-3">Freight options Homepage</p>

            <Form.Group className="ms-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Show Available Loads" />
            </Form.Group>
            <Form.Group className="ms-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Show Available Drivers" />
            </Form.Group>
            <Form.Group className="ms-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Show Planned Loads" />
            </Form.Group>
            <Form.Group className="ms-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Show Dispatched Loads" />
            </Form.Group>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <hr></hr>

      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            Available Loads <Badge bg="success">{value}</Badge>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Button variant="outline-info" className="ms-3">
                Filter Results
              </Button>{" "}
              <Button variant="outline-info" className="ms-3">
                Show All Results
              </Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Load</th>
            <th>Age</th>
            <th>Capacity Tools</th>
            <th>Shipper</th>
            <th>Origin</th>
            <th>Destinations</th>
            <th>Terminals</th>
            <th>Agent Rep.</th>
            <th>Pickup Date</th>
            <th>Delivery Date</th>
            <th>Miles</th>
            <th>Weight</th>
            <th>Freight</th>
            <th>Fuel</th>
            <th>Others</th>
            <th>Exp Owner Pay</th>
            <th>Exp Broker Pay</th>
            <th>Commodity</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Manage
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Button variant="outline-primary">Invoice</Button>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Button
                      variant="outline-primary"
                      onClick={() => setLargeShow(true)}
                    >
                      Update Status
                    </Button>

                    <Modal
                      size="lg"
                      show={largeShow}
                      onHide={() => setLargeShow(false)}
                      aria-labelledby="example-modal-sizes-title-lg"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                          Update Status
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Row>
                          <Col sm={6}>
                            <Form.Label>Load Id</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Load Id"
                              defaultValue="1219"
                              name="loadId"
                              onChange={changeHandler}
                            />
                          </Col>
                          <Col sm={6}>
                            <Form.Label>Load Status</Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              name="status"
                              onChange={changeHandler}
                            >
                              <option>Select Load Status</option>
                              <option value="Active">ActiveOne</option>
                              <option value="Inactive">Inactive</option>
                            </Form.Select>
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col sm={6}>
                            <Form.Label>Load Entered By</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Load Entered By"
                              name="loadBy"
                              onChange={changeHandler}
                              // defaultValue="1219"
                            />
                          </Col>
                          <Col sm={6}>
                            <Form.Label>Dispatcher</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Dispatcher"
                              name="dispatcher"
                              onChange={changeHandler}

                              // defaultValue="1219"
                            />
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col sm={6}>
                            <Form.Label>Drivers</Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              name="driver"
                              onChange={changeHandler}
                            >
                              <option>Select Drivers</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                            </Form.Select>
                          </Col>
                          <Col sm={6}>
                            <Form.Label>Tractors</Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              name="tractor"
                              onChange={changeHandler}
                            >
                              <option>Select Tractors</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                            </Form.Select>
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col sm={6}>
                            <Form.Label>Trailers</Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              name="trailer"
                              onChange={changeHandler}
                            >
                              <option>Select Trailers</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                            </Form.Select>
                          </Col>
                          <Col sm={6}>
                            {/* <Form.Label>Tractors</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>Select Tractors</option>
                              <option value="1">1</option>
                              <option value="2">1</option>
                            </Form.Select> */}
                          </Col>
                        </Row>
                        <Button
                          variant="outline-danger"
                          className="mt-5 mb-5"
                          onClick={handleClose}
                        >
                          cancel
                        </Button>{" "}
                        <Button
                          variant="outline-primary"
                          className="mt-5 mb-5"
                          onClick={handleUpdateStatus}
                        >
                          Update Status
                        </Button>{" "}
                      </Modal.Body>
                    </Modal>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        </tbody>
      </Table>

      {/* active driver */}
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            Active Drivers
            <Badge bg="warning" text="dark" className="ms-3">
              22
            </Badge>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Button variant="outline-primary" onClick={() => setLgShow(true)}>
                Filter Result
              </Button>{" "}
              <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Filter Avilable Drivers
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Row>
                    <strong className="mb-3">Pickup Locaion</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Pickup Location Name"
                        // defaultValue="Mark"
                      />
                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select State</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="California">California</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select Radius Length</option>
                        <option value="0 mile">0 mile</option>
                        <option value="100 mile">100 mile</option>
                        <option value="250 Mile">250 Mile</option>
                        <option value="500 Mile">500 Mile</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select Zone</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Delivery Location</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Pickup Location Name"
                        // defaultValue="Mark"
                      />
                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select State</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="California">California</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select Radius Length</option>
                        <option value="0 mile">0 mile</option>
                        <option value="100 mile">100 mile</option>
                        <option value="250 Mile">250 Mile</option>
                        <option value="500 Mile">500 Mile</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select Zone</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Driver</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Driver Name"
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">First Name</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Last Name</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Tractor</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Tractor"
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Trailer</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Trailer"
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Trailer</strong>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select Trailer Type</option>
                        <option value="Dropdeck">Dropdeck</option>
                        <option value="Flatbed">Flatbed</option>
                        <option value="Power Only">Power Only</option>
                        <option value="RGN">RGN</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Trailer Length</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder=""
                        // defaultValue="Mark"
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder=""
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Trailer Length</strong>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select EOBR Type</option>
                        <option value="Has EOBR">Has EOBR</option>
                        <option value="No EOBR">No EOBR</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Tracking Enable</strong>
                    <Col>
                      <Form.Check
                        required
                        label="Yes"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                      />
                    </Col>
                    <strong className="mt-3 mb-2">Dispatcher</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Dispatcher Name"
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Dispatch Group</strong>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select dispatch group</option>
                        {/* <option value="Has EOBR">Has EOBR</option>
                        <option value="No EOBR">No EOBR</option> */}
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Empty Status</strong>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select Empty Status</option>
                        <option value="Empty">Empty</option>
                        <option value="Loaded">Loaded</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Terminal Name"
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Result Per Page</strong>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select Result Per Page</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Button variant="outline-primary" className="mt-5">
                    Filter
                  </Button>{" "}
                  <Button variant="outline-secondary" className="mt-5">
                    Clear Filter
                  </Button>{" "}
                </Modal.Body>
              </Modal>
              <Button
                variant="outline-secondary"
                className="ms-3"
                onClick={() => setLgShow(true)}
              >
                Show All
              </Button>{" "}
              <Button variant="outline-secondary" className="ms-3">
                Print Result
              </Button>{" "}
              <Button variant="outline-secondary" className="ms-3">
                <a href="https://goo.gl/maps/zx1A8CXFmURmqmxx9">Driver Map</a>
              </Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Driver Name</th>
            <th>Trailer</th>
            <th>Tractor</th>
            <th>Cell Phone</th>
            <th>Dispatcher</th>
            <th>Status</th>
            <th>Load ID</th>
            <th>Load Status</th>
            <th>Per Plan</th>
            <th>Pickup Date</th>
            <th>Delivery Date</th>
            <th>Last Location</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1000</td>
            <td>Mark</td>
            <td>1</td>
            <td>1</td>
            <td>33333</td>
            <td>EG</td>
            <td></td>
            <td>Available</td>
            <td>Dispatched</td>
            <td>10000</td>
            <td>10/04/2022</td>
            <td>30/05/2022</td>
            <td>Note Dam - De</td>
            <td>
              <Button variant="outline-success">Manage</Button>
            </td>
          </tr>
        </tbody>
      </Table>

      {/* Planned Load */}

      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            Planned Load
            <Badge bg="info" text="dark" className="ms-3">
              20
            </Badge>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Button variant="outline-primary" onClick={() => setLgShow(true)}>
                Filter Result
              </Button>{" "}
              <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Filter Avilable Drivers
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Row>
                    <strong className="mb-3">Pickup Locaion</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Pickup Location Name"
                        // defaultValue="Mark"
                      />
                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select State</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="California">California</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select Radius Length</option>
                        <option value="0 mile">0 mile</option>
                        <option value="100 mile">100 mile</option>
                        <option value="250 Mile">250 Mile</option>
                        <option value="500 Mile">500 Mile</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select Zone</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Delivery Location</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Pickup Location Name"
                        // defaultValue="Mark"
                      />
                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select State</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="California">California</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select Radius Length</option>
                        <option value="0 mile">0 mile</option>
                        <option value="100 mile">100 mile</option>
                        <option value="250 Mile">250 Mile</option>
                        <option value="500 Mile">500 Mile</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select Zone</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Driver</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Driver Name"
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">First Name</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Last Name</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Tractor</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Tractor"
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Trailer</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Trailer"
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Trailer</strong>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select Trailer Type</option>
                        <option value="Dropdeck">Dropdeck</option>
                        <option value="Flatbed">Flatbed</option>
                        <option value="Power Only">Power Only</option>
                        <option value="RGN">RGN</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Trailer Length</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder=""
                        // defaultValue="Mark"
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder=""
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Trailer Length</strong>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select EOBR Type</option>
                        <option value="Has EOBR">Has EOBR</option>
                        <option value="No EOBR">No EOBR</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Tracking Enable</strong>
                    <Col>
                      <Form.Check
                        required
                        label="Yes"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                      />
                    </Col>
                    <strong className="mt-3 mb-2">Dispatcher</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Dispatcher Name"
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Dispatch Group</strong>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select dispatch group</option>
                        {/* <option value="Has EOBR">Has EOBR</option>
                        <option value="No EOBR">No EOBR</option> */}
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Empty Status</strong>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select Empty Status</option>
                        <option value="Empty">Empty</option>
                        <option value="Loaded">Loaded</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Terminal Name"
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Result Per Page</strong>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select Result Per Page</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Button variant="outline-primary" className="mt-5">
                    Filter
                  </Button>{" "}
                  <Button variant="outline-secondary" className="mt-5">
                    Clear Filter
                  </Button>{" "}
                </Modal.Body>
              </Modal>
              <Button
                variant="outline-secondary"
                className="ms-3"
                onClick={() => setLgShow(true)}
              >
                Show All
              </Button>{" "}
              <Button variant="outline-secondary" className="ms-3">
                Print Result
              </Button>{" "}
              {/* <Button variant="outline-secondary" className="ms-3">
                <a href="https://goo.gl/maps/zx1A8CXFmURmqmxx9">Driver Map</a>
              </Button>{" "} */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Load</th>
            <th>Status</th>
            <th>Planned</th>
            <th>Tractor</th>
            <th>Trailer</th>
            <th>Shipper</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Terminal</th>
            <th>Pickup Date</th>
            <th>Delivery Date</th>
            <th>Check Date</th>
            <th>Miles</th>
            <th>Commodity</th>
            <th>Last Location</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10000</td>
            <td>Planned</td>
            <td>Jhon Clerk</td>
            <td>1</td>
            <td>3</td>
            <td>sass</td>
            <td>srtl, Al</td>
            <td>srtl, Al</td>
            <td>EG</td>
            <td>10/04/2022</td>
            <td>30/05/2022</td>
            <td>25/04/2022</td>
            <td>13</td>
            <td></td>

            <td>Note Dam - De</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Manage
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Button variant="outline-primary">Invoice</Button>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Button
                      variant="outline-primary"
                      onClick={() => setLarge2Show(true)}
                    >
                      Dispatch
                    </Button>

                    <Modal
                      size="lg"
                      show={large2Show}
                      onHide={() => setLarge2Show(false)}
                      aria-labelledby="example-modal-sizes-title-lg"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                          Dispatch
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Row>
                          <Col sm={6}>
                            <Form.Label>Load Id</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Load Id"
                              defaultValue="1219"
                              name="loadId"
                              onChange={changeHandler}
                            />
                          </Col>
                          <Col sm={6}>
                            <Form.Label>Load Status</Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              name="status"
                              onChange={changeHandler}
                            >
                              <option>Select Load Status</option>
                              <option value="Active">ActiveOne</option>
                              <option value="Inactive">Inactive</option>
                            </Form.Select>
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col sm={6}>
                            <Form.Label>Load Entered By</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Load Entered By"
                              name="loadBy"
                              onChange={changeHandler}
                              // defaultValue="1219"
                            />
                          </Col>
                          <Col sm={6}>
                            <Form.Label>Dispatcher</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Dispatcher"
                              name="dispatcher"
                              onChange={changeHandler}
                              // defaultValue="1219"
                            />
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col sm={6}>
                            <Form.Label>Drivers</Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              name="driver"
                              onChange={changeHandler}
                            >
                              <option>Select Drivers</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                            </Form.Select>
                          </Col>
                          <Col sm={6}>
                            <Form.Label>Tractors</Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              name="tractor"
                              onChange={changeHandler}
                            >
                              <option>Select Tractors</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                            </Form.Select>
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col sm={6}>
                            <Form.Label>Trailers</Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              name="trailer"
                              onChange={changeHandler}
                            >
                              <option>Select Trailers</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                            </Form.Select>
                          </Col>
                          <Col sm={6}>
                            {/* <Form.Label>Tractors</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>Select Tractors</option>
                              <option value="1">1</option>
                              <option value="2">1</option>
                            </Form.Select> */}
                          </Col>
                        </Row>
                        <Button
                          variant="outline-danger"
                          className="mt-5 mb-5"
                          onClick={handleClose2}
                        >
                          cancel
                        </Button>{" "}
                        <Button variant="outline-primary" className="mt-5 mb-5" onClick={handleDispatcher}>
                          Dispatch
                        </Button>{" "}
                      </Modal.Body>
                    </Modal>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        </tbody>
      </Table>

      {/* Dispatched Load */}

      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            Planned Load
            <Badge bg="danger" text="dark" className="ms-3">
              11
            </Badge>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Button variant="outline-primary" onClick={() => setLgShow(true)}>
                Filter Result
              </Button>{" "}
              <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Filter Avilable Drivers
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Row>
                    <strong className="mb-3">Pickup Locaion</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Pickup Location Name"
                        // defaultValue="Mark"
                      />
                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select State</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="California">California</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select Radius Length</option>
                        <option value="0 mile">0 mile</option>
                        <option value="100 mile">100 mile</option>
                        <option value="250 Mile">250 Mile</option>
                        <option value="500 Mile">500 Mile</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select Zone</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Delivery Location</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Pickup Location Name"
                        // defaultValue="Mark"
                      />
                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select State</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="California">California</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select Radius Length</option>
                        <option value="0 mile">0 mile</option>
                        <option value="100 mile">100 mile</option>
                        <option value="250 Mile">250 Mile</option>
                        <option value="500 Mile">500 Mile</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select Zone</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Driver</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Driver Name"
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">First Name</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Last Name</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Tractor</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Tractor"
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Trailer</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Trailer"
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Trailer</strong>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select Trailer Type</option>
                        <option value="Dropdeck">Dropdeck</option>
                        <option value="Flatbed">Flatbed</option>
                        <option value="Power Only">Power Only</option>
                        <option value="RGN">RGN</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Trailer Length</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder=""
                        // defaultValue="Mark"
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder=""
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Trailer Length</strong>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select EOBR Type</option>
                        <option value="Has EOBR">Has EOBR</option>
                        <option value="No EOBR">No EOBR</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Tracking Enable</strong>
                    <Col>
                      <Form.Check
                        required
                        label="Yes"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                      />
                    </Col>
                    <strong className="mt-3 mb-2">Dispatcher</strong>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Dispatcher Name"
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Dispatch Group</strong>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select dispatch group</option>
                        {/* <option value="Has EOBR">Has EOBR</option>
                        <option value="No EOBR">No EOBR</option> */}
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Empty Status</strong>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select Empty Status</option>
                        <option value="Empty">Empty</option>
                        <option value="Loaded">Loaded</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Terminal Name"
                        // defaultValue="Mark"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <strong className="mt-3 mb-2">Result Per Page</strong>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Select Result Per Page</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Button variant="outline-primary" className="mt-5">
                    Filter
                  </Button>{" "}
                  <Button variant="outline-secondary" className="mt-5">
                    Clear Filter
                  </Button>{" "}
                </Modal.Body>
              </Modal>
              <Button
                variant="outline-secondary"
                className="ms-3"
                onClick={() => setLgShow(true)}
              >
                Show All
              </Button>{" "}
              <Button variant="outline-secondary" className="ms-3">
                Print Result
              </Button>{" "}
              <Button variant="outline-secondary" className="ms-3">
                <a href="https://goo.gl/maps/zx1A8CXFmURmqmxx9">
                  View Freight Map
                </a>
              </Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Load</th>
            <th>Status</th>
            <th>Dispatched</th>
            <th>Tractor</th>
            <th>Trailer</th>
            <th>Shipper</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Terminal</th>
            <th>Pickup Date</th>
            <th>Delivery Date</th>
            <th>Next Action Date</th>
            <th>Check Date</th>
            <th>Miles</th>
            <th>Commodity</th>
            <th>Last Location</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10000</td>
            <td>Planned</td>
            <td>Jhon Clerk</td>
            <td>1</td>
            <td>3</td>
            <td>sass</td>
            <td>srtl, Al</td>
            <td>srtl, Al</td>
            <td>EG</td>
            <td>10/04/2022</td>
            <td>30/05/2022</td>
            <td>25/04/2022</td>
            <td>20/04/2022</td>
            <td>13</td>
            <td></td>

            <td>Note Dam - De</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Manage
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Button variant="outline-primary">Invoice</Button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default FreightOptionsDashboard;
