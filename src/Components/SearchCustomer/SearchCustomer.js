import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import "./searchCustomer.css";
import useContext from "../Hooks/useContext";
import { Link } from "react-router-dom";

const SearchCustomer = () => {

  const initValue = {
    name: "",
    phoneNumber: "",
    fax: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    billName: "",
    billAddress: "",
    billZip: "",
    billCity: "",
    billState: "",
    billPrimaryPhoneNumber: "",
    billSecondaryPhoneNumber: "",
    billFaxNumber: "",
    billHardCopy: false,
    billSoftCopy: false,
    billEmail: "",
    billSSN: "",
  };


  const [allValues, setAllValues] = useState(initValue);

  const changeHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };
  
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
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Customer Name"
                name="name"
                onChange={changeHandler}
                value={allValues.name}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                onChange={changeHandler}
                value={allValues.phoneNumber}
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
            {customerData.map((customer) => (
              <tr>
                <td>{customer._id}</td>
                <td>{customer.customerCode}</td>
                <td>{customer.type}</td>
                <td>{customer.company}</td>
                <td>{customer.creditStatus}</td>
                <td>{customer.city}</td>
                <td>{customer.state}</td>
                <td>{customer.terminal}</td>
                <td>{customer.SalesRep}</td>
                <td>{customer.lastServRep}</td>
                <td>{customer.collector}</td>
                <td>{customer.officePhone}</td>
                <td>{customer.email}</td>
                <td>{customer.dateAddress}</td>
                <td>{customer.totalRevenue}</td>
                <td>{customer.totalLoad}</td>
                <td>{customer.lastLoad}</td>
                <td>{customer.balance}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default SearchCustomer;
