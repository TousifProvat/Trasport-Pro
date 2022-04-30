import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import "./addNewLoad.css";
import useContext from "../../Hooks/useContext";
import axios from "../../../utils/axios";

const AddNewLoad = () => {
  const { auth, commodity, customerData, loading, addLoad, user } =
    useContext();
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    addLoad(allValues);
  };

  const colors = ["#fff", "#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const initValue = {
    // NumberOfLoads: 1,
    loadNumber: 1,
    color: "#fff",
    customer: "",
    pickupAddress: "",
    pickupCity: "",
    pickupState: "",
    pickupZip: "",
    deliveryAddress: "",
    deliveryCity: "",
    deliveryState: "",
    deliveryZip: "",
    pickupDate: "",
    pickupTime: "",
    deliveryDate: "",
    deliveryTime: "",
    loadEnteredBy: "",
    internalComments: "",
    externalComments: "",
    commodityType: "",
    commodityValue: "",
    loadRate: "",
  };
  const [allValues, setAllValues] = useState(initValue);

  useEffect(() => {
    setAllValues({
      ...allValues,
      loadEnteredBy: auth.user._id,
    });
  }, [auth.user]);

  const changeHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Container>
        <Navbar bg="" expand="lg">
          <Container>
            <Navbar.Brand>
              <h3 className="mt-5 mb-3">New Load</h3>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <hr></hr>
        {loading && <h2>Loading...</h2>}
        {!loading && (
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col sm={6}>
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Label>Color</Form.Label>
                  <Form.Select
                    name="color"
                    onChange={changeHandler}
                    style={{
                      backgroundColor: allValues.color,
                    }}
                    value={allValues.color}
                  >
                    {colors.map((color, index) => (
                      <option
                        value={color}
                        key={index}
                        style={{
                          backgroundColor: color,
                        }}
                      >
                        {color}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Label>Customer</Form.Label>
                <Form.Select
                  required
                  name="customer"
                  onChange={changeHandler}
                  value={allValues.customer}
                >
                  <option value="">Select Customer</option>
                  {customerData.map((customer, index) => (
                    <option value={customer._id} key={index}>
                      {customer.name} - {customer.email}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={6}>
                <Navbar bg="light" expand="lg">
                  <Container>
                    <Navbar.Brand href="#home">Pickup Location</Navbar.Brand>
                  </Container>
                </Navbar>
              </Col>
              <Col sm={6}>
                <Navbar bg="light" expand="lg">
                  <Container>
                    <Navbar.Brand href="#home">Delivery Location</Navbar.Brand>
                  </Container>
                </Navbar>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={6}>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Address"
                  name="pickupAddress"
                  onChange={changeHandler}
                />
              </Col>
              <Col sm={6}>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Address"
                  name="deliveryAddress"
                  onChange={changeHandler}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={6}>
                <Form.Label>State</Form.Label>
                <Form.Select
                  required
                  name="pickupState"
                  onChange={changeHandler}
                >
                  <option value="">Select State</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Canada">Canada</option>
                </Form.Select>
              </Col>
              <Col sm={6}>
                <Form.Label>State</Form.Label>
                <Form.Select
                  required
                  name="deliveryState"
                  onChange={changeHandler}
                >
                  <option value="">Select State</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Canada">Canada</option>
                </Form.Select>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={6}>
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="City Name"
                  name="pickupCity"
                  onChange={changeHandler}
                />
              </Col>
              <Col sm={6}>
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="City Name"
                  name="deliveryCity"
                  onChange={changeHandler}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={6}>
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="City Name"
                  name="pickupZip"
                  onChange={changeHandler}
                />
              </Col>
              <Col sm={6}>
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="City Name"
                  name="deliveryZip"
                  onChange={changeHandler}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={12}>
                <Navbar bg="light" expand="lg">
                  <Container>
                    <Navbar.Brand>Load Information</Navbar.Brand>
                  </Container>
                </Navbar>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={6}>
                <Form.Label>Load Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Load Number"
                  name="loadNumber"
                  onChange={changeHandler}
                  value={allValues.loadNumber}
                />
              </Col>
              <Col sm={6}>
                <Form.Label>Load Rate</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Load Rate"
                  name="loadRate"
                  onChange={changeHandler}
                  value={allValues.loadRate}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={6}>
                <Form.Label>Pickup date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="pickup Date"
                  name="pickupDate"
                  onChange={changeHandler}
                />
              </Col>
              <Col sm={6}>
                <Form.Label>Delivery Date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="Delivery Date"
                  name="deliveryDate"
                  onChange={changeHandler}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={6}>
                <Form.Label>Pickup Time</Form.Label>
                <Form.Control
                  required
                  type="time"
                  placeholder="pickup Time"
                  name="pickupTime"
                  onChange={changeHandler}
                />
              </Col>
              <Col sm={6}>
                <Form.Label>Delivery Time</Form.Label>
                <Form.Control
                  required
                  type="time"
                  placeholder="Delivery Time"
                  name="deliveryTime"
                  onChange={changeHandler}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              {/*  */}
              <Col sm={6}>
                <Form.Label>Commodity Type</Form.Label>
                <Form.Select
                  required
                  name="commodityType"
                  onChange={changeHandler}
                >
                  <option value="">Select Type</option>
                  {commodity.map((commodity, index) => (
                    <option value={commodity._id} key={index}>
                      {commodity.name}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col sm={6}>
                <Form.Label>Commodity Value</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Commodity Value"
                  name="commodityValue"
                  onChange={changeHandler}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={6}>
                <Form.Label>Load Entered By</Form.Label>
                <Form.Select
                  required
                  name="loadEnteredBy"
                  onChange={changeHandler}
                  value={allValues.loadEnteredBy}
                >
                  {user.map((user, index) => (
                    <option key={index} value={user._id}>
                      {user.firstName} {user.lastName}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col sm={6}>
                <Form.Label>Internal Comment</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Internal Comment"
                  rows={3}
                  name="internalComments"
                  onChange={changeHandler}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={6}>
                <Form.Label>External Comment</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="External Comment"
                  rows={3}
                  name="externalComments"
                  onChange={changeHandler}
                />
              </Col>
              <Col sm={6}></Col>
            </Row>
            <Button
              type="submit"
              variant="outline-primary"
              className="mt-5 mb-5 "
            >
              Add Load
            </Button>
            <Button
              variant="outline-danger"
              className="mt-5 mb-5 m-2"
              href="/search-load"
            >
              Cancel
            </Button>
          </Form>
        )}
      </Container>
    </div>
  );
};

export default AddNewLoad;
