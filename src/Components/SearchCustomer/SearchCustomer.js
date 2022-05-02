import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import "./searchCustomer.css";
import useContext from "../Hooks/useContext";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import { message } from "antd";

const SearchCustomer = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCustomers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/customer");
      setCustomers(data.customers);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };

  useEffect(() => {
    getCustomers();
  }, []);

  //filter
  const [filter, setFilter] = useState({
    status: "",
    customerId: "",
  });

  const onChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const onFilter = (e) => {
    let newCustomers = customers;
    if (filter.status !== "") {
      newCustomers = customers.filter(
        (customer) => customer.status === filter.status
      );
    }
    if (filter.customerId !== "") {
      newCustomers = newCustomers.filter(
        (customer) => customer._id === filter.customerId
      );
    }

    setCustomers(newCustomers);
  };

  const onReset = () => {
    getCustomers();
    setFilter({ status: "", customerId: "" });
  };

  return (
    <>
      <Container>
        <h3 className="mt-5 mb-3">Search Customers</h3>
        <hr></hr>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Customer ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Customer ID"
                name="customerId"
                onChange={onChange}
                value={filter.customerId}
              />
            </Form.Group>
          </Row>

          <Button variant="outline-primary" className="me-3" onClick={onFilter}>
            Filter
          </Button>
          <Button variant="outline-danger" className="me-3" onClick={onReset}>
            Reset
          </Button>
        </Form>
      </Container>
      <Container>
        <h3 className="mt-5">Search Results ({customers.length})</h3>
        <hr></hr>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Phone No</th>
              <th>Email</th>
              <th>Address</th>
              <th>Fax</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td
                  colSpan={6}
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
              customers.map((customer, index) => (
                <tr key={index}>
                  <td>
                    <Link to={`/customer/${customer._id}`}>{customer._id}</Link>
                  </td>
                  <td>{customer.name}</td>
                  <td>{customer.phoneNumber}</td>
                  <td>{customer.email}</td>
                  <td>
                    {customer.street},{customer.city},{customer.state},
                    {customer.zip}
                  </td>
                  <td>{customer.fax}</td>
                </tr>
              ))}
            {!loading && customers.length < 1 && (
              <tr>
                <td
                  colSpan={10}
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

export default SearchCustomer;
