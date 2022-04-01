import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import "./addCustomer.css";
import { DatePicker, Space } from "antd";
const AddCustomer = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  // date picker functionality

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <div>
      <Container fluid>
        <h3 className="mt-5 mb-3">Customer Information</h3>
        <hr></hr>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Customer Type</Form.Label>
              {/* <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
              /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Customer Type</option>
                <option value="3PL">3PL</option>
                <option value="Broker">Broker</option>
                <option value="Misc">Misc</option>
                <option value="Shipper">Shipper</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Terminal</Form.Label>
              {/* <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Terminal</option>
                <option value="EG - Egales">EG - Egales</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Customer Code</Form.Label>

              <Form.Control
                type="text"
                placeholder="Customer Code"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Sales Representative</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sales Representative"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" placeholder="Company Name" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Customer Service Representative</Form.Label>
              <Form.Control
                type="text"
                placeholder="Customer Service Representative"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Address</Form.Label>
              {/* <Form.Control type="text" placeholder="Sales Representative" required /> */}
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Collections Representative</Form.Label>
              <Form.Control
                type="text"
                placeholder="Collections Representative"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Collections Group</Form.Label>
              {/* <Form.Control type="text" placeholder="Sales Representative" required /> */}
              {/* <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel> */}

              <Form.Select aria-label="Default select example">
                <option>Select Collections Group</option>
                <option value="Group - A">Group - A</option>
                <option value="Group - B">Group - B</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>State</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="Zip"
                required
              /> */}
              <Form.Select aria-label="Default select example">
                <option>Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Canada">Canada</option>
                <option value="Quebec">Quebec</option>
                <option value="california">california</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Toll-free Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Toll-free Phone Number"
                required
              />
              {/* <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel> */}

              {/* <Form.Select aria-label="Default select example">
                <option>Select Collections Group</option>
                <option value="Group - A">Group - A</option>
                <option value="Group - B">Group - B</option>
              </Form.Select> */}

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>CityContract Date</Form.Label>
              {/* <Form.Control type="text" placeholder="City" required /> */}
              <DatePicker onChange={onChange} style={{ width: "100%" }} />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Phone Number" required />
              {/* <Form.Select aria-label="Default select example">
                <option>Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Canada">Canada</option>
                <option value="Quebec">Quebec</option>
                <option value="california">california</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Fuel Surcharge</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="Toll-free Phone Number"
                required
              /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Fuel Surcharge</option>
                <option value="Per Mile">Per Mile</option>
                <option value="Percent Per Load">Percent Per Load</option>
              </Form.Select>
              {/* <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel> */}

              {/* <Form.Select aria-label="Default select example">
                <option>Select Collections Group</option>
                <option value="Group - A">Group - A</option>
                <option value="Group - B">Group - B</option>
              </Form.Select> */}

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Fax Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Fax Phone Number"
                required
              />
              {/* <DatePicker onChange={onChange} style={{ width: "100%" }} /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Phone Number" required />
              {/* <Form.Select aria-label="Default select example">
                <option>Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Canada">Canada</option>
                <option value="Quebec">Quebec</option>
                <option value="california">california</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Fuel Surcharge Region</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="Toll-free Phone Number"
                required
              /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Fuel Fuel Surcharge Region</option>
                <option value="California">California</option>
                <option value="East Coast">East Coast</option>
                <option value="Gulf Coast">Gulf Coast</option>
                <option value="US Average">US Average</option>
              </Form.Select>
              {/* <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel> */}

              {/* <Form.Select aria-label="Default select example">
                <option>Select Collections Group</option>
                <option value="Group - A">Group - A</option>
                <option value="Group - B">Group - B</option>
              </Form.Select> */}

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Company Email</Form.Label>
              <Form.Control type="text" placeholder="Company Email" required />
              {/* <DatePicker onChange={onChange} style={{ width: "100%" }} /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Factor Payments</Form.Label>
              {/* <Form.Control type="text" placeholder="Phone Number" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Factor Payments</option>
                <option value="Non Factored">Non Factored</option>
                <option value="Apex">Apex</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Website</Form.Label>
              <Form.Control type="text" placeholder="Website" required />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Fuel Fuel Surcharge Region</option>
                <option value="California">California</option>
                <option value="East Coast">East Coast</option>
                <option value="Gulf Coast">Gulf Coast</option>
                <option value="US Average">US Average</option>
              </Form.Select> */}
              {/* <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel> */}

              {/* <Form.Select aria-label="Default select example">
                <option>Select Collections Group</option>
                <option value="Group - A">Group - A</option>
                <option value="Group - B">Group - B</option>
              </Form.Select> */}

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Payment Method</Form.Label>
              {/* <Form.Control type="text" placeholder="Company Email" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Payment Method</option>
                <option value="Check">Check</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Wire">Wire</option>
              </Form.Select>
              {/* <DatePicker onChange={onChange} style={{ width: "100%" }} /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Business Hours</Form.Label>
              <Form.Control type="text" placeholder="Business Hours" required />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Factor Payments</option>
                <option value="Non Factored">Non Factored</option>
                <option value="Apex">Apex</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Report Credit Data?</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="Website"
                required
              /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Report Credit Data</option>
                <option value="Yes, Send Report">Yes, Send Report</option>
                <option value="Don't Send Report">Don't Send Report</option>
              </Form.Select>
              {/* <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel> */}

              {/* <Form.Select aria-label="Default select example">
                <option>Select Collections Group</option>
                <option value="Group - A">Group - A</option>
                <option value="Group - B">Group - B</option>
              </Form.Select> */}

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Dispatch Notes</Form.Label>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              {/* <Form.Select aria-label="Default select example">
                <option>Select Payment Method</option>
                <option value="Check">Check</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Wire">Wire</option>
              </Form.Select> */}
              {/* <DatePicker onChange={onChange} style={{ width: "100%" }} /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Deliverable Receipt Options</Form.Label>
              {/* <Form.Control type="text" placeholder="Business Hours" required /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Factor Payments</option>
                <option value="Non Factored">Non Factored</option>
                <option value="Apex">Apex</option>
              </Form.Select> */}
              <Row>
                <Col>
                  <Form.Check
                    required
                    label="Hard Copy"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Col>
                <Col>
                  <Form.Check
                    required
                    label="Email"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Col>
                <Col>
                  <Form.Check
                    required
                    label="EDI"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Col>
                <Col>
                  <Form.Check
                    required
                    label="FTP"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Dispatcher Notice</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="Website"
                required
              /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Report Credit Data</option>
                <option value="Yes, Send Report">Yes, Send Report</option>
                <option value="Don't Send Report">Don't Send Report</option>
              </Form.Select> */}
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Dispatcher Notice"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>

              {/* <Form.Select aria-label="Default select example">
                <option>Select Collections Group</option>
                <option value="Group - A">Group - A</option>
                <option value="Group - B">Group - B</option>
              </Form.Select> */}

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              {/* <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel> */}
              <Row>
                <Col>
                  <Form.Label>Combine Billing</Form.Label>
                  <Form.Check
                    required
                    label="Yes"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Col>
                <Col>
                  <Form.Label>Specialty Billing</Form.Label>
                  <Form.Check
                    required
                    label="Yes"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Col>
                <Col>
                  <Form.Label>
                    Sister Company (no terminal commission)
                  </Form.Label>
                  <Form.Check
                    required
                    label="Yes"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Col>
              </Row>

              {/* <Form.Select aria-label="Default select example">
                <option>Select Payment Method</option>
                <option value="Check">Check</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Wire">Wire</option>
              </Form.Select> */}
              {/* <DatePicker onChange={onChange} style={{ width: "100%" }} /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Tracking Requirements</Form.Label>
              {/* <Form.Control type="text" placeholder="Business Hours" required /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Factor Payments</option>
                <option value="Non Factored">Non Factored</option>
                <option value="Apex">Apex</option>
              </Form.Select> */}
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Tracking Requirements"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Tracking Requirements"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>EDI Billing Map</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="Website"
                required
              /> */}
              <Form.Select aria-label="Default select example">
                <option>Select EDI Billing Map</option>
                {/* <option value="Yes, Send Report">Yes, Send Report</option>
                <option value="Don't Send Report">Don't Send Report</option> */}
              </Form.Select>
              {/* <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Dispatcher Notice"
                  style={{ height: "100px" }}
                />
              </FloatingLabel> */}

              {/* <Form.Select aria-label="Default select example">
                <option>Select Collections Group</option>
                <option value="Group - A">Group - A</option>
                <option value="Group - B">Group - B</option>
              </Form.Select> */}

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>EDI Billing Map</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="Website"
                required
              /> */}
              <Form.Select aria-label="Default select example">
                <option>Select EDI Billing Map</option>
                {/* <option value="Yes, Send Report">Yes, Send Report</option>
                <option value="Don't Send Report">Don't Send Report</option> */}
              </Form.Select>
              {/* <DatePicker onChange={onChange} style={{ width: "100%" }} /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Pay Gross Reduction</Form.Label>
              {/* <Form.Control type="text" placeholder="Business Hours" required /> */}
              <Row>
                <Col>
                  <Form.Control type="text" placeholder="Flat Rate" required />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Percentage" required />
                </Col>
              </Row>
              {/* <Form.Select aria-label="Default select example">
                <option>Select Factor Payments</option>
                <option value="Non Factored">Non Factored</option>
                <option value="Apex">Apex</option>
              </Form.Select> */}
              {/* <FloatingLabel controlId="floatingTextarea2" label="Tracking Requirements">
                <Form.Control
                  as="textarea"
                  placeholder="Tracking Requirements"
                  style={{ height: "100px" }}
                />
              </FloatingLabel> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Load Notification</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="Website"
                required
              /> */}
              <Form.Select aria-label="Default select example">
                <option>Select EDI Billing Map</option>
                <option value="1 Hour">1 Hour</option>
                <option value="2 Hour">2 Hour</option>
                <option value="3 Hour">3 Hour</option>
                <option value="4 Hour">4 Hour</option>
                <option value="5 Hour">5 Hour</option>
                <option value="6 Hour">6 Hour</option>
              </Form.Select>
              {/* <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Dispatcher Notice"
                  style={{ height: "100px" }}
                />
              </FloatingLabel> */}

              {/* <Form.Select aria-label="Default select example">
                <option>Select Collections Group</option>
                <option value="Group - A">Group - A</option>
                <option value="Group - B">Group - B</option>
              </Form.Select> */}

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>EDI Update Frequency </Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="Website"
                required
              /> */}
              <Form.Select aria-label="Default select example">
                <option>Select EDI Billing Map</option>
                <option value="1 Hour">1 Hour</option>
                <option value="2 Hour">2 Hour</option>
                <option value="3 Hour">3 Hour</option>
                <option value="4 Hour">4 Hour</option>
                <option value="5 Hour">5 Hour</option>
                <option value="6 Hour">6 Hour</option>
              </Form.Select>
              {/* <DatePicker onChange={onChange} style={{ width: "100%" }} /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Can broker loads?</Form.Label>
              <Form.Check
                required
                label="Do not allow brokerage"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Factor Payments</option>
                <option value="Non Factored">Non Factored</option>
                <option value="Apex">Apex</option>
              </Form.Select> */}
              {/* <FloatingLabel controlId="floatingTextarea2" label="Tracking Requirements">
                <Form.Control
                  as="textarea"
                  placeholder="Tracking Requirements"
                  style={{ height: "100px" }}
                />
              </FloatingLabel> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Can post loads to external board?</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="Website"
                required
              /> */}
              {/* <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Dispatcher Notice"
                  style={{ height: "100px" }}
                />
              </FloatingLabel> */}
              <Form.Check
                required
                label="Do not allow brokerage"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Collections Group</option>
                <option value="Group - A">Group - A</option>
                <option value="Group - B">Group - B</option>
              </Form.Select> */}

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Special Billing Instructions</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="Website"
                required
              /> */}
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Special Billing Instructions"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Dispatcher Notice"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              {/* <Form.Select aria-label="Default select example">
                <option>Select EDI Billing Map</option>
                <option value="1 Hour">1 Hour</option>
                <option value="2 Hour">2 Hour</option>
                <option value="3 Hour">3 Hour</option>
                <option value="4 Hour">4 Hour</option>
                <option value="5 Hour">5 Hour</option>
                <option value="6 Hour">6 Hour</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>External Billing Notes</Form.Label>
              {/* <Form.Check
              required
              label="Do not allow brokerage"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            /> */}
              <FloatingLabel
                controlId="floatingTextarea2"
                label="External Billing Notes"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Dispatcher Notice"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              {/* <Form.Select aria-label="Default select example">
                <option>Select Factor Payments</option>
                <option value="Non Factored">Non Factored</option>
                <option value="Apex">Apex</option>
              </Form.Select> */}
              {/* <FloatingLabel controlId="floatingTextarea2" label="Tracking Requirements">
                <Form.Control
                  as="textarea"
                  placeholder="Tracking Requirements"
                  style={{ height: "100px" }}
                />
              </FloatingLabel> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Form>
      </Container>

      <Container fluid>
        <h3 className="mt-5 mb-3">Insurance Information</h3>
        <hr></hr>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Customer Contract Validated</Form.Label>
              {/* <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
              /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Customer Contract Validated</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>COI Sent</Form.Label>
              {/* <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              /> */}
              <Form.Select aria-label="Default select example">
                <option>Select COI Sent</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Surety Bond Company</Form.Label>

              <Form.Control
                type="text"
                placeholder="Surety Bond Company"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Cargo Addendum (Max Liability)</Form.Label>
              {/* <Form.Control type="text" placeholder="City" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select COI Sent</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>COI Address</Form.Label>
              <Form.Control type="text" placeholder="COI Address" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Bond Number</Form.Label>
              <Form.Control type="text" placeholder="Bond Number" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Customer AL Required</Form.Label>
              <Form.Control
                type="text"
                placeholder="Customer AL Required"
                required
              />
              {/* <Form.Select aria-label="Default select example">
                <option>Select COI Sent</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>COI Zip</Form.Label>
              <Form.Control type="text" placeholder="COI Zip" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Bond Contact</Form.Label>
              <Form.Control type="text" placeholder="Bond Contact" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Customer GL Required</Form.Label>
              <Form.Control
                type="text"
                placeholder="Customer GL Required"
                required
              />
              {/* <Form.Select aria-label="Default select example">
                <option>Select COI Sent</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>COI City</Form.Label>
              <Form.Control type="text" placeholder="COI City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Bond Contact Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Bond Contact Phone"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Customer Cargo Required</Form.Label>
              <Form.Control
                type="text"
                placeholder="Customer Cargo Required"
                required
              />
              {/* <Form.Select aria-label="Default select example">
                <option>Select COI Sent</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>COI State</Form.Label>
              {/* <Form.Control type="text" placeholder="COI City" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select COI State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Canada">Canada</option>
                <option value="California">California</option>
                <option value="Quebec">Quebec</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Bond Contact Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Bond Contact Email"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Customer Waiver of Subrogation</Form.Label>
              {/* <Form.Control type="text" placeholder="Customer Cargo Required" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select COI Sent</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>COI Email</Form.Label>
              <Form.Control type="text" placeholder="COI Email" required />
              {/* <Form.Select aria-label="Default select example">
                <option>Select COI State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Canada">Canada</option>
                <option value="California">California</option>
                <option value="Quebec">Quebec</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Cargo Max Liability Capped</Form.Label>
              {/* <Form.Control type="text" placeholder="Bond Contact Email" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select COI Sent</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>COI Fax </Form.Label>
              <Form.Control type="text" placeholder="COI Fax" required />
              {/* <Form.Select aria-label="Default select example">
                <option>Select COI Sent</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>COI Email</Form.Label>
              <Form.Control type="text" placeholder="COI Email" required />
              {/* <Form.Select aria-label="Default select example">
                <option>Select COI State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Canada">Canada</option>
                <option value="California">California</option>
                <option value="Quebec">Quebec</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Special Cert Language</Form.Label>
              {/* <Form.Control type="text" placeholder="Bond Contact Email" required /> */}
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              {/* <Form.Select aria-label="Default select example">
                <option>Select COI Sent</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>







          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Special Requirements</Form.Label>
              {/* <Form.Control type="text" placeholder="COI Fax" required /> */}
              <FloatingLabel controlId="floatingTextarea2" label="Special Requirements">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              {/* <Form.Select aria-label="Default select example">
                <option>Select COI Sent</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>C-TPAT</Form.Label>
              {/* <Form.Control type="text" placeholder="COI Email" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select C-TPAT</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>C-TPAT SVI Number</Form.Label>
              <Form.Control type="text" placeholder="C-TPAT SVI Number" required />
              {/* <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select COI Sent</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Form>
      </Container>

      <Container fluid>
        <h3 className="mt-5 mb-3">Customer Credit Information</h3>
        <hr></hr>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Federal ID</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Federal ID"
                // defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Credit App</Form.Label>
              {/* <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Credit App</option>
                <option value="Pending">Pending</option>
                <option value="Received">Received</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>SIC Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="SIC Code"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Credit Check Rec'd Date</Form.Label>
              {/* <Form.Control type="text" placeholder="City" required /> */}
              <DatePicker onChange={onChange} style={{ width: "100%" }} />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>MC Code</Form.Label>
              <Form.Control type="text" placeholder="MC Code" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Credit Status</Form.Label>
              {/* <Form.Control type="text" placeholder="Zip" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Credit Status</option>
                <option value="Active - COD">Active - COD</option>
                <option value="Active - Credit Approved">
                  Active - Credit Approved
                </option>
                <option value="Active - TBD">Active - TBD</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>DUNS Number</Form.Label>
              <Form.Control type="text" placeholder="DUNS Number" required />
              {/* <DatePicker onChange={onChange} style={{ width: "100%" }}/> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Credit Status Change Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Credit Status Change Date"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>DUNS Exp Date</Form.Label>
              {/* <Form.Control type="text" placeholder="Zip" required /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Credit Status</option>
                <option value="Active - COD">Active - COD</option>
                <option value="Active - Credit Approved">Active - Credit Approved</option>
                <option value="Active - TBD">Active - TBD</option>
              </Form.Select> */}
              <DatePicker onChange={onChange} style={{ width: "100%" }} />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Credit Rating</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Credit Rating</option>
                <option value="Average">Average</option>
                <option value="Bad">Bad</option>
                <option value="Good">Good</option>
              </Form.Select>
              {/* <Form.Control type="text" placeholder="DUNS Number" required /> */}
              {/* <DatePicker onChange={onChange} style={{ width: "100%" }}/> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Billing Fax Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Billing Fax Number"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Credit Limit</Form.Label>
              <Form.Control type="text" placeholder="Credit Limit" required />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Credit Status</option>
                <option value="Active - COD">Active - COD</option>
                <option value="Active - Credit Approved">Active - Credit Approved</option>
                <option value="Active - TBD">Active - TBD</option>
              </Form.Select> */}
              {/* <DatePicker onChange={onChange} style={{ width: "100%" }}/> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Billing Email</Form.Label>
              {/* <Form.Select aria-label="Default select example">
                <option>Select Credit Rating</option>
                <option value="Average">Average</option>
                <option value="Bad">Bad</option>
                <option value="Good">Good</option>
              </Form.Select> */}
              <Form.Control type="text" placeholder="Billing Email" required />
              {/* <DatePicker onChange={onChange} style={{ width: "100%" }}/> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Credit Warning</Form.Label>
              <Form.Control type="text" placeholder="Credit Warning" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Open Load Balance</Form.Label>
              <Form.Control
                type="text"
                placeholder="Open Load Balance"
                required
              />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Credit Status</option>
                <option value="Active - COD">Active - COD</option>
                <option value="Active - Credit Approved">Active - Credit Approved</option>
                <option value="Active - TBD">Active - TBD</option>
              </Form.Select> */}
              {/* <DatePicker onChange={onChange} style={{ width: "100%" }}/> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Credit Warning</Form.Label>
              {/* <Form.Select aria-label="Default select example">
                <option>Select Credit Rating</option>
                <option value="Average">Average</option>
                <option value="Bad">Bad</option>
                <option value="Good">Good</option>
              </Form.Select> */}
              <Form.Control type="text" placeholder="Credit Warning" required />
              {/* <DatePicker onChange={onChange} style={{ width: "100%" }}/> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Open Load Balance</Form.Label>
              <Form.Control
                type="text"
                placeholder="Open Load Balance"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Enforce Credit/Term Limit</Form.Label>
              {/* <Form.Control type="text" placeholder="Open Load Balance" required /> */}
              <Form.Check
                required
                label="Yes"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Credit Status</option>
                <option value="Active - COD">Active - COD</option>
                <option value="Active - Credit Approved">Active - Credit Approved</option>
                <option value="Active - TBD">Active - TBD</option>
              </Form.Select> */}
              {/* <DatePicker onChange={onChange} style={{ width: "100%" }}/> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Billed Load Balance</Form.Label>
              {/* <Form.Select aria-label="Default select example">
                <option>Select Credit Rating</option>
                <option value="Average">Average</option>
                <option value="Bad">Bad</option>
                <option value="Good">Good</option>
              </Form.Select> */}
              <Form.Control
                type="text"
                placeholder="Billed Load Balance"
                required
              />
              {/* <DatePicker onChange={onChange} style={{ width: "100%" }}/> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Net Terms</Form.Label>
              {/* <Form.Control type="text" placeholder="Open Load Balance" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Net Terms</option>
                <option value="Net 15">Net 15</option>
                <option value="Net 30">Net 30</option>
                <option value="Net 60">Net 60</option>
                <option value="Net 90">Net 90</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Avg Days To Pay (Load)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Avg Days To Pay (Load)"
                required
              />
              {/* <Form.Check
              required
              label="Yes"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Credit Status</option>
                <option value="Active - COD">Active - COD</option>
                <option value="Active - Credit Approved">Active - Credit Approved</option>
                <option value="Active - TBD">Active - TBD</option>
              </Form.Select> */}
              {/* <DatePicker onChange={onChange} style={{ width: "100%" }}/> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Misc Invoice Balance</Form.Label>
              {/* <Form.Select aria-label="Default select example">
                <option>Select Credit Rating</option>
                <option value="Average">Average</option>
                <option value="Bad">Bad</option>
                <option value="Good">Good</option>
              </Form.Select> */}
              <Form.Control
                type="text"
                placeholder="Misc Invoice Balance"
                required
              />
              {/* <DatePicker onChange={onChange} style={{ width: "100%" }}/> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Avg Days To Pay (Misc Invoice)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Avg Days To Pay (Misc Invoice)"
                required
              />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Net Terms</option>
                <option value="Net 15">Net 15</option>
                <option value="Net 30">Net 30</option>
                <option value="Net 60">Net 60</option>
                <option value="Net 90">Net 90</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Open Credit Balance</Form.Label>
              <Form.Control
                type="text"
                placeholder="Open Credit Balance"
                required
              />
              {/* <Form.Check
              required
              label="Yes"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Credit Status</option>
                <option value="Active - COD">Active - COD</option>
                <option value="Active - Credit Approved">Active - Credit Approved</option>
                <option value="Active - TBD">Active - TBD</option>
              </Form.Select> */}
              {/* <DatePicker onChange={onChange} style={{ width: "100%" }}/> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Last Ship Date</Form.Label>
              {/* <Form.Select aria-label="Default select example">
                <option>Select Credit Rating</option>
                <option value="Average">Average</option>
                <option value="Bad">Bad</option>
                <option value="Good">Good</option>
              </Form.Select> */}
              {/* <Form.Control type="text" placeholder="Misc Invoice Balance" required /> */}
              <DatePicker onChange={onChange} style={{ width: "100%" }} />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Last Billing Date</Form.Label>
              {/* <Form.Control type="text" placeholder="Avg Days To Pay (Misc Invoice)" required /> */}
              <DatePicker onChange={onChange} style={{ width: "100%" }} />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Net Terms</option>
                <option value="Net 15">Net 15</option>
                <option value="Net 30">Net 30</option>
                <option value="Net 60">Net 60</option>
                <option value="Net 90">Net 90</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Number of Rebills</Form.Label>
              <Form.Control
                type="text"
                placeholder="Number of Rebills"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Loads YTD</Form.Label>
              {/* <Form.Select aria-label="Default select example">
                <option>Select Credit Rating</option>
                <option value="Average">Average</option>
                <option value="Bad">Bad</option>
                <option value="Good">Good</option>
              </Form.Select> */}
              <Form.Control
                type="text"
                placeholder="Misc Invoice Balance"
                required
              />
              {/* <DatePicker onChange={onChange} style={{ width: "100%" }}/> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Loads Historic</Form.Label>
              <Form.Control type="text" placeholder="Loads Historic" required />
              {/* <DatePicker onChange={onChange} style={{ width: "100%" }}/> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Net Terms</option>
                <option value="Net 15">Net 15</option>
                <option value="Net 30">Net 30</option>
                <option value="Net 60">Net 60</option>
                <option value="Net 90">Net 90</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit" variant="outline-primary" className="me-3 mb-5">
            Save
          </Button>
          <Button type="submit" variant="outline-primary" className="me-3 mb-5">
            Save And Add New
          </Button>
          <Button variant="outline-danger" className="mb-5">
            Cancel
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddCustomer;
