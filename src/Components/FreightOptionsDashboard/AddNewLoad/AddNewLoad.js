import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../../utils/axios";
//
import { Button, Col, Container, Form, Navbar, Row } from "react-bootstrap";
import { notification } from "antd";
//css
import "./addNewLoad.css";
const AddNewLoad = () => {
  //state
  const { auth } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const { commodities } = useSelector((state) => state.commodity);
  const { customers } = useSelector((state) => state.customer);
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
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const colors = ["#fff", "#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  //hooks
  useEffect(() => {
    setAllValues({
      ...allValues,
      loadEnteredBy: auth.user._id,
    });
  }, [auth.user]);

  //func
  const addLoad = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post("/load", values);
      if (res.status === 201) {
        notification.success({ message: res.data.message });
        setValidated(false);
        setAllValues(initValue);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };
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
  const onChange = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Row className="mt-5">
        <Navbar.Brand>
          <h3>New Load</h3>
        </Navbar.Brand>
      </Row>
      <hr></hr>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col sm={6}>
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>Color</Form.Label>
              <Form.Select
                name="color"
                onChange={onChange}
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
              onChange={onChange}
              value={allValues.customer}
            >
              <option value="">Select Customer</option>
              {customers.map((customer, index) => (
                <option value={customer._id} key={index}>
                  {customer.name} - {customer.email}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
        <Row>
          {/* pickup location */}
          <Col sm={6}>
            <Row className="mt-5">
              <Container>
                <Navbar.Brand>Pickup Location</Navbar.Brand>
              </Container>
            </Row>
            <hr></hr>
            <Row className="mt-3">
              <Col>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Address"
                  name="pickupAddress"
                  onChange={onChange}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Form.Label>State</Form.Label>
                <Form.Select required name="pickupState" onChange={onChange}>
                  <option value="">Select State</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Canada">Canada</option>
                </Form.Select>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="City Name"
                  name="pickupCity"
                  onChange={onChange}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Zip Code"
                  name="pickupZip"
                  onChange={onChange}
                />
              </Col>
            </Row>
          </Col>
          <Col sm={6}>
            <Row className="mt-5">
              <Container>
                <Navbar.Brand>Delivery Location</Navbar.Brand>
              </Container>
            </Row>
            <hr></hr>
            <Row className="mt-3">
              <Col>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Address"
                  name="deliveryAddress"
                  onChange={onChange}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Form.Label>State</Form.Label>
                <Form.Select required name="deliveryState" onChange={onChange}>
                  <option value="">Select State</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Canada">Canada</option>
                </Form.Select>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Zip Code"
                  name="deliveryCity"
                  onChange={onChange}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="City Name"
                  name="deliveryZip"
                  onChange={onChange}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        {/* load Information */}
        <Row className="mt-5">
          <Container>
            <Navbar.Brand>Load Information</Navbar.Brand>
          </Container>
        </Row>
        <hr></hr>
        <Row className="mt-3">
          <Col sm={6}>
            <Form.Label>Load Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Load Number"
              name="loadNumber"
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
            />
          </Col>
          <Col sm={6}>
            <Form.Label>Delivery Date</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Delivery Date"
              name="deliveryDate"
              onChange={onChange}
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
              onChange={onChange}
            />
          </Col>
          <Col sm={6}>
            <Form.Label>Delivery Time</Form.Label>
            <Form.Control
              required
              type="time"
              placeholder="Delivery Time"
              name="deliveryTime"
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row className="mt-3">
          {/*  */}
          <Col sm={6}>
            <Form.Label>Commodity Type</Form.Label>
            <Form.Select required name="commodityType" onChange={onChange}>
              <option value="">Select Type</option>
              {commodities.map((commodity, index) => (
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
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={6}>
            <Form.Label>Load Entered By</Form.Label>
            <Form.Select
              required
              name="loadEnteredBy"
              onChange={onChange}
              value={allValues.loadEnteredBy}
            >
              {users.map((user, index) => (
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
              onChange={onChange}
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
              onChange={onChange}
            />
          </Col>
          <Col sm={6}></Col>
        </Row>
        <Button
          type="submit"
          variant="outline-primary"
          className="mt-5 mb-5 "
          disabled={loading}
        >
          Add Load
        </Button>
        <Button
          variant="outline-danger"
          className="mt-5 mb-5 m-2"
          href="/search-load"
          disabled={loading}
        >
          Cancel
        </Button>
      </Form>
    </Container>
  );
};

export default AddNewLoad;
