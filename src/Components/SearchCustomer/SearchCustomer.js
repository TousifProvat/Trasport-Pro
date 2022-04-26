import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import "./searchCustomer.css";
import useContext from "../Hooks/useContext";
import { Link } from "react-router-dom";

const SearchCustomer = () => {
  const { customerData, loading } = useContext();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setCustomers(customerData);
  }, [customerData]);

  //filter
  const [filter, setFilter] = useState({
    status: "",
    customerId: "",
  });

  const onChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const onFilter = (e) => {
    let newCustomers = customerData;
    if (filter.status !== "") {
      newCustomers = customerData.filter(
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
    setCustomers(customerData);
    setFilter({ status: "", customerId: "" });
  };

  return (
    <div>
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

      <Container fluid>
        <h3 className="mt-5">Search Results ({customers.length})</h3>
        <hr></hr>
        <Table striped bordered hover className="mt-3 mb-5">
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
            {customers.map((customer) => (
              <tr>
                {/* <td>{i._id}</td>
                <td>{i.customerCode}</td>
                <td>{i.type}</td>
                <td>{i.company}</td>
                <td>{i.creditStatus}</td>
                <td>{i.city}</td>
                <td>{i.state}</td>
                <td>{i.terminal}</td>
                <td>{i.SalesRep}</td>
                <td>{i.lastServRep}</td>
                <td>{i.collector}</td>
                <td>{i.officePhone}</td>
                <td>{i.email}</td>
                <td>{i.dateAddress}</td>
                <td>{i.totalRevenue}</td>
                <td>{i.totalLoad}</td>
                <td>{i.lastLoad}</td>
                <td>{i.balance}</td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default SearchCustomer;
