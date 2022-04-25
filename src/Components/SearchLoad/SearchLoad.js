import React, { useEffect, useState } from "react";
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
import useContext from "../Hooks/useContext";

const SearchLoad = () => {
  const { load, loading } = useContext();

  const [loads, setLoads] = useState([]);

  useEffect(() => {
    setLoads(load);
  }, [load]);

  const [status, setStatus] = useState("");

  const handleFilter = () => {
    let newLoads;
    if (status === "") {
      return;
    }
    newLoads = load.filter((load) => load.status === status);
    setLoads(newLoads);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilter();
  };

  const handleReset = (e) => {
    setLoads(load);
    setStatus("");
  };

  const onChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <Container fluid className="mt-5 mb-3">
        <h2>Search Loads And Dispatches</h2>
        <hr></hr>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home">Search Loads</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Button variant="outline-primary">Print Results</Button>{" "}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Load</th>
              <th>Dispatch Status</th>
              <th>Bill To</th>
              <th>Shipper</th>
              <th>Origin</th>
              <th>Consignee</th>
              <th>Destination</th>
              <th>BOL</th>
              <th>Terminal</th>
              <th>Drivers</th>
              <th>Order Taken</th>
              <th>Pickup Date</th>
              <th>Delivery Date</th>
              <th>Billing Date</th>
              <th>Total Bill</th>
              <th>Date Created</th>
              <th>BOL Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1001</td>
              <td>Dispatched</td>
              <td>sass</td>
              <td>sass</td>
              <td>stre, Al</td>
              <td>sass</td>
              <td>stre, Al</td>
              <td></td>
              <td>EG</td>
              <td>Jhone Clerk</td>
              <td>abcd</td>
              <td>4/25/2022</td>
              <td>4/25/2022</td>
              <td></td>
              <td>171.76</td>
              <td>4/25/2022</td>
              <td></td>
            </tr>
            <tr>
              <td>Current</td>

              <td colSpan={13}></td>
              <td>171.76</td>
              <td colSpan={2}></td>
            </tr>
            <tr>
              <td>Page</td>

              <td colSpan={13}></td>
              <td></td>
              <td colSpan={2}></td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <td>Total</td>

              <td colSpan={13}></td>
              <td>171.76</td>
              <td colSpan={2}></td>
            </tr>
          </thead>
        </Table>
      </Container>
    </div>
  );
};

export default SearchLoad;
