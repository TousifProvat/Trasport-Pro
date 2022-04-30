import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import "./searchDriver.css";
import useContext from "../Hooks/useContext";
import { Link } from "react-router-dom";
const SearchDrivers = () => {
  const { driverData, loading } = useContext();

  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    setDrivers(driverData);
  }, [driverData]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //filter
  const [filter, setFilter] = useState({
    driverId: "",
    status: "",
  });

  const onChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const onFilter = () => {
    let newDrivers = driverData;
    if (filter.driverId !== "") {
      newDrivers = driverData.filter(
        (driver) => driver._id === filter.driverId
      );
    }
    if (filter.status !== "") {
      newDrivers = newDrivers.filter(
        (driver) => driver.status === filter.status
      );
    }

    setDrivers(newDrivers);
  };
  const onReset = () => {
    setDrivers(driverData);
    setFilter({ driverId: "", status: "" });
  };
  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-3">Search Drivers</h3>
        <hr></hr>

        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Driver ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Driver ID"
                name="driverId"
                onChange={onChange}
                value={filter.driverId}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                onChange={onChange}
                value={filter.status}
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending Hire">Pending Hire</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Button
            variant="outline-primary"
            type="submit"
            className="mb-5 me-3"
            onClick={onFilter}
          >
            Filter
          </Button>
          <Button
            variant="outline-danger"
            className="mb-5 me-3"
            type="reset"
            onClick={onReset}
          >
            Reset
          </Button>
        </Form>
      </Container>

      <Container fluid>
        <h3>Search Results ({drivers.length})</h3>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th>Hire Date</th>
              <th>Termination Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/driver/${driver._id}`}>{driver._id}</Link>
                </td>
                <td>
                  {driver.firstName} {driver.lastName}
                </td>
                <td>{driver.primaryPhoneNumber}</td>
                <td>{driver.email}</td>
                <td>
                  {driver.address}, {driver.city}, {driver.zip}
                </td>
                <td>{driver.hireDate}</td>
                <td>{driver.terminationDate}</td>
                <td>{driver.status}</td>
              </tr>
            ))}
            {drivers.length < 1 && (
              <tr>
                <td
                  colSpan={8}
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

export default SearchDrivers;
