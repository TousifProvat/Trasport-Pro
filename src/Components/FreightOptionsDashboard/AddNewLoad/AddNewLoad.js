import React, { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Nav, Navbar, Row } from 'react-bootstrap';
import "./addNewLoad.css"

const AddNewLoad = () => {
  const data1 = [
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
    { name: "5" },
  ];
  const colors = ["#fff", "#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  
  const [allValues, setAllValues] = useState({
    loadNumber: "",
    color: "",
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
  });

  const changeHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveButton = (e) => {
    console.log(allValues)
  }
  return (
    <div>
      <Container>
        <Navbar bg="" expand="lg">
          <Container>
            <Navbar.Brand>
              <h1 className="mt-5 mb-3">Add New Load</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto"></Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <hr></hr>
        <Row>
          <Col sm={6}>
            <Form.Label>Number of Loads</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="loadNumber"
              onChange={changeHandler}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </Col>
          <Col sm={6}>
            <p>Colors</p>
            <div className="all_colors">
              {data1.map((a, i) => (
                <Button
                  style={{ color: colors[i], backgroundColor: colors[i] }}
                  key={i}
                  className="color_p"
                  name="color"
                  onChange={changeHandler}
                >
                  {a.name}
                </Button>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Form.Label>Customer Name</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="Name">Name</option>
              {/* <option value="2">2</option>
              <option value="3">3</option> */}
            </Form.Select>
          </Col>
          <Col sm={6}>
            {/* <p>Colors</p>
            <div className="all_colors">
              {data1.map((a, i) => (
                <Button style={{ color: colors[i], backgroundColor: colors[i] }} key={i} className="color_p">
                  {a.name}
                </Button>
              ))}
            </div> */}
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={6}>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#home">Pickup Location</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto"></Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
          <Col sm={6}>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#home">Destination Location</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto"></Nav>
                </Navbar.Collapse>
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
              aria-label="Default select example"
              name="pickupState"
              onChange={changeHandler}
            >
              <option>Select State</option>
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="Canada">Canada</option>
            </Form.Select>
          </Col>
          <Col sm={6}>
            <Form.Label>State</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="deliveryState"
              onChange={changeHandler}
            >
              <option>Select State</option>
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
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={6}>
            <Form.Label>Load Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Load Number"
              // name="deliveryZip"
              // onChange={changeHandler}
            />
          </Col>
          <Col sm={6}>
            <Form.Label>Load Rate</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Load Rate"
              name="loadRate"
              onChange={changeHandler}
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
              type="date"
              placeholder="pickup Time"
              name="pickupTime"
              onChange={changeHandler}
            />
          </Col>
          <Col sm={6}>
            <Form.Label>Delivery Time</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Delivery Time"
              name="deliveryTime"
              onChange={changeHandler}
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={6}>
            <Form.Label>Load Entered By</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Load Entered By"
              name="loadEnteredBy"
              onChange={changeHandler}
            />
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
            <Form.Label>Commodity Type</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Commodity Type"
              name="commodityType"
              onChange={changeHandler}
            />
          </Col>
          <Col sm={6}>
            <Form.Label>Internal Comment</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Internal Comment"
                style={{ height: "100px" }}
                name="internalComments"
                onChange={changeHandler}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={6}>
            <Form.Label>External Comment</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="External Comment"
                style={{ height: "100px" }}
                name="externalComments"
                onChange={changeHandler}
              />
            </FloatingLabel>
          </Col>
          <Col sm={6}>
            {/* <Form.Label>Internal Comment</Form.Label>
            <Form.Control required type="text" placeholder="Internal Comment" /> */}
          </Col>
        </Row>
        <Button
          variant="outline-primary"
          className="mt-5 mb-5"
          onClick={handleSaveButton}
        >
          Add Load
        </Button>{" "}
        <Button variant="outline-danger" className="mt-5 mb-5">
          Cancel
        </Button>{" "}
      </Container>
    </div>
  );
};

export default AddNewLoad;
