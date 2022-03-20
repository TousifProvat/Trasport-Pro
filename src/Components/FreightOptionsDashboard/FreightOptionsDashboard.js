import React from "react";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  Form,
  Nav,
  Navbar,
  Table,
} from "react-bootstrap";
import {Link} from "react-router-dom"
import "./freightOptionsDashboard.css";
import Select from "react-select";
import useContext from "../Hooks/useContext";
const FreightOptionsDashboard = () => {
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
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          
        </tbody>
      </Table>
    </>
  );
};

export default FreightOptionsDashboard;
