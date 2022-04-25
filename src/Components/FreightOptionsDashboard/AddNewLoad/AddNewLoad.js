import React, { useState } from "react";
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
  const [validated, setValidated] = useState(false);
const handleSubmit = (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

  setValidated(true);
};
  const { customerData, commodity, loading, addLoad } = useContext();

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

  const changeHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveButton = (e) => {
    e.preventDefault();
    addLoad(allValues);
    // setAllValues(initValue);
  };

  return (
    <div>
      <Container>
        <Navbar bg="" expand="lg">
          <Container>
            <Navbar.Brand>
              <h3 className="mt-5 mb-3">Add New Load</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto"></Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <hr></hr>
        {loading && <h2>Loading...</h2>}
        {!loading && (
          // <>

          //     <Row>
          //       <Col sm={6}>
          //         <Form.Group as={Col} md="12" controlId="validationCustom01">
          //           <Form.Label>Color</Form.Label>
          //           <Form.Select
          //             name="color"
          //             onChange={changeHandler}
          //             style={{
          //               backgroundColor: allValues.color,
          //             }}
          //             value={allValues.color}
          //           >
          //             {colors.map((color, index) => (
          //               <option
          //                 value={color}
          //                 key={index}
          //                 style={{
          //                   backgroundColor: color,
          //                 }}
          //               >
          //                 {color}
          //               </option>
          //             ))}
          //           </Form.Select>
          //           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          //         </Form.Group>
          //       </Col>
          //     </Row>
          //     <Row>
          //       <Col sm={6}>
          //         <Form.Label>Customer</Form.Label>
          //         <Form.Select
          //           aria-label="Default select example"
          //           name="customer"
          //           onChange={changeHandler}
          //         >
          //           <option value="">Select Customer</option>
          //           {customerData.map((customer, index) => (
          //             <option value={customer._id} key={index}>
          //               {customer.name} - {customer.email}
          //             </option>
          //           ))}
          //         </Form.Select>
          //       </Col>
          //     </Row>
          //     <Row className="mt-3">
          //       <Col sm={6}>
          //         <Navbar bg="light" expand="lg">
          //           <Container>
          //             <Navbar.Brand href="#home">Pickup Location</Navbar.Brand>
          //           </Container>
          //         </Navbar>
          //       </Col>
          //       <Col sm={6}>
          //         <Navbar bg="light" expand="lg">
          //           <Container>
          //             <Navbar.Brand href="#home">
          //               Delivery Location
          //             </Navbar.Brand>
          //           </Container>
          //         </Navbar>
          //       </Col>
          //     </Row>
          //     <Row className="mt-3">
          //       <Col sm={6}>
          //         <Form.Label>Address</Form.Label>
          //         <Form.Control
          //           required
          //           type="text"
          //           placeholder="Address"
          //           name="pickupAddress"
          //           onChange={changeHandler}
          //         />
          //       </Col>
          //       <Col sm={6}>
          //         <Form.Label>Address</Form.Label>
          //         <Form.Control
          //           required
          //           type="text"
          //           placeholder="Address"
          //           name="deliveryAddress"
          //           onChange={changeHandler}
          //         />
          //       </Col>
          //     </Row>
          //     <Row className="mt-3">
          //       <Col sm={6}>
          //         <Form.Label>State</Form.Label>
          //         <Form.Select
          //           aria-label="Default select example"
          //           name="pickupState"
          //           onChange={changeHandler}
          //         >
          //           <option>Select State</option>
          //           <option value="Alabama">Alabama</option>
          //           <option value="Alaska">Alaska</option>
          //           <option value="Canada">Canada</option>
          //         </Form.Select>
          //       </Col>
          //       <Col sm={6}>
          //         <Form.Label>State</Form.Label>
          //         <Form.Select
          //           aria-label="Default select example"
          //           name="deliveryState"
          //           onChange={changeHandler}
          //         >
          //           <option>Select State</option>
          //           <option value="Alabama">Alabama</option>
          //           <option value="Alaska">Alaska</option>
          //           <option value="Canada">Canada</option>
          //         </Form.Select>
          //       </Col>
          //     </Row>
          //     <Row className="mt-3">
          //       <Col sm={6}>
          //         <Form.Label>City</Form.Label>
          //         <Form.Control
          //           required
          //           type="text"
          //           placeholder="City Name"
          //           name="pickupCity"
          //           onChange={changeHandler}
          //         />
          //       </Col>
          //       <Col sm={6}>
          //         <Form.Label>City</Form.Label>
          //         <Form.Control
          //           required
          //           type="text"
          //           placeholder="City Name"
          //           name="deliveryCity"
          //           onChange={changeHandler}
          //         />
          //       </Col>
          //     </Row>
          //     <Row className="mt-3">
          //       <Col sm={6}>
          //         <Form.Label>Zip</Form.Label>
          //         <Form.Control
          //           required
          //           type="text"
          //           placeholder="City Name"
          //           name="pickupZip"
          //           onChange={changeHandler}
          //         />
          //       </Col>
          //       <Col sm={6}>
          //         <Form.Label>Zip</Form.Label>
          //         <Form.Control
          //           required
          //           type="text"
          //           placeholder="City Name"
          //           name="deliveryZip"
          //           onChange={changeHandler}
          //         />
          //       </Col>
          //     </Row>
          //     <Row className="mt-3">
          //       <Col sm={12}>
          //         <Navbar bg="light" expand="lg">
          //           <Container>
          //             <Navbar.Brand>Load Information</Navbar.Brand>
          //           </Container>
          //         </Navbar>
          //       </Col>
          //     </Row>
          //     <Row className="mt-3">
          //       <Col sm={6}>
          //         <Form.Label>Load Number</Form.Label>
          //         <Form.Control
          //           type="number"
          //           placeholder="Load Number"
          //           name="loadNumber"
          //           onChange={changeHandler}
          //           value={allValues.loadNumber}
          //         />
          //       </Col>
          //       <Col sm={6}>
          //         <Form.Label>Load Rate</Form.Label>
          //         <Form.Control
          //           required
          //           type="number"
          //           placeholder="Load Rate"
          //           name="loadRate"
          //           onChange={changeHandler}
          //           value={allValues.loadRate}
          //         />
          //       </Col>
          //     </Row>
          //     <Row className="mt-3">
          //       <Col sm={6}>
          //         <Form.Label>Pickup date</Form.Label>
          //         <Form.Control
          //           required
          //           type="date"
          //           placeholder="pickup Date"
          //           name="pickupDate"
          //           onChange={changeHandler}
          //         />
          //       </Col>
          //       <Col sm={6}>
          //         <Form.Label>Delivery Date</Form.Label>
          //         <Form.Control
          //           required
          //           type="date"
          //           placeholder="Delivery Date"
          //           name="deliveryDate"
          //           onChange={changeHandler}
          //         />
          //       </Col>
          //     </Row>
          //     <Row className="mt-3">
          //       <Col sm={6}>
          //         <Form.Label>Pickup Time</Form.Label>
          //         <Form.Control
          //           required
          //           type="time"
          //           placeholder="pickup Time"
          //           name="pickupTime"
          //           onChange={changeHandler}
          //         />
          //       </Col>
          //       <Col sm={6}>
          //         <Form.Label>Delivery Time</Form.Label>
          //         <Form.Control
          //           required
          //           type="time"
          //           placeholder="Delivery Time"
          //           name="deliveryTime"
          //           onChange={changeHandler}
          //         />
          //       </Col>
          //     </Row>
          //     <Row className="mt-3">
          //       {/*  */}
          //       <Col sm={6}>
          //         <Form.Label>Commodity Type</Form.Label>
          //         <Form.Select
          //           required
          //           name="commodityType"
          //           onChange={changeHandler}
          //         >
          //           <option value="">Select Type</option>
          //           {commodity.map((commodity, index) => (
          //             <option value={commodity._id} key={index}>
          //               {commodity.name}
          //             </option>
          //           ))}
          //         </Form.Select>
          //       </Col>
          //       <Col sm={6}>
          //         <Form.Label>Commodity Value</Form.Label>
          //         <Form.Control
          //           required
          //           type="text"
          //           placeholder="Commodity Value"
          //           name="commodityValue"
          //           onChange={changeHandler}
          //         />
          //       </Col>
          //     </Row>
          //     <Row className="mt-3">
          //       <Col sm={6}>
          //         <Form.Label>Load Entered By</Form.Label>
          //         <Form.Control
          //           required
          //           type="text"
          //           placeholder="Load Entered By"
          //           name="loadEnteredBy"
          //           onChange={changeHandler}
          //         />
          //       </Col>
          //       <Col sm={6}>
          //         <Form.Label>Internal Comment</Form.Label>
          //         <FloatingLabel controlId="floatingTextarea2" label="Comments">
          //           <Form.Control
          //             as="textarea"
          //             placeholder="Internal Comment"
          //             style={{ height: "100px" }}
          //             name="internalComments"
          //             onChange={changeHandler}
          //           />
          //         </FloatingLabel>
          //       </Col>
          //     </Row>
          //     <Row className="mt-3">
          //       <Col sm={6}>
          //         <Form.Label>External Comment</Form.Label>
          //         <FloatingLabel controlId="floatingTextarea2" label="Comments">
          //           <Form.Control
          //             as="textarea"
          //             placeholder="External Comment"
          //             style={{ height: "100px" }}
          //             name="externalComments"
          //             onChange={changeHandler}
          //           />
          //         </FloatingLabel>
          //       </Col>
          //       <Col sm={6}></Col>
          //     </Row>
          //     <Button
          //       variant="outline-primary"
          //       className="mt-5 mb-5"
          //       onClick={handleSaveButton}
          //       type="submit"
          //     >
          //       Add Load
          //     </Button>{" "}
          //     <Button variant="outline-danger" className="mt-5 mb-5">
          //       Cancel
          //     </Button>{" "}

          // </>
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
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Label>Customer</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="customer"
                  onChange={changeHandler}
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
                <Form.Control
                  required
                  type="text"
                  placeholder="Load Entered By"
                  name="loadEnteredBy"
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
              <Col sm={6}></Col>
            </Row>
            <Button
              variant="outline-primary"
              className="mt-5 mb-5"
              onClick={handleSaveButton}
              type="submit"
            >
              Add Load
            </Button>{" "}
            <Button variant="outline-danger" className="mt-5 mb-5">
              Cancel
            </Button>{" "}
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        )}
      </Container>
    </div>
  );
};

export default AddNewLoad;
