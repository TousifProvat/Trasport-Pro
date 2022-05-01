import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import "./searchDriver.css";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import { message } from "antd";
const SearchDrivers = () => {
  const [allDrivers, setAllDrivers] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDrivers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/driver");
      setAllDrivers(data.drivers);
      setDrivers(data.drivers);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };

  useEffect(() => {
    getDrivers();
  }, []);

  //filter
  const [filter, setFilter] = useState({
    driverId: "",
    status: "",
  });

  const onChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const onFilter = () => {
    let newDrivers = allDrivers;
    if (filter.driverId !== "") {
      newDrivers = newDrivers.filter(
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
    setDrivers(allDrivers);
    setFilter({ driverId: "", status: "" });
  };
  return (
    <>
      <Container>
        <h3 className="mt-5 mb-3">Search Drivers</h3>
        <hr></hr>

        <Form>
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
            className="mb-5 me-3"
            onClick={onFilter}
          >
            Filter
          </Button>
          <Button
            variant="outline-danger"
            className="mb-5 me-3"
            onClick={onReset}
          >
            Reset
          </Button>
        </Form>
      </Container>
      <Container>
        <h3>Search Results ({drivers.length})</h3>

        <Table striped bordered hover responsive>
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
            {loading && (
              <tr>
                <td
                  colSpan={8}
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Spinner animation="border" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </td>
              </tr>
            )}
            {!loading &&
              drivers.map((driver, index) => (
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
            {!loading && drivers.length < 1 && (
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
    </>
  );
};

export default SearchDrivers;
