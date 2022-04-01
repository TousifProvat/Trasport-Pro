import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./searchCustomer.css";
import { DatePicker, Space } from "antd";
const SearchCustomer = () => {
  const { RangePicker } = DatePicker;
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div>
      <Container fluid>
        <h3 className="mt-5 mb-3">Search Customers</h3>
        <hr></hr>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Customer ID</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Customer ID"
                // defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Terminal</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Terminal</option>
                <option value="EG - Egals">EG - Egals</option>
              </Form.Select>
              {/* <Form.Control
                required
                type="text"
                placeholder="Terminal"
                defaultValue="Otto"
              /> */}
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Credit Status</Form.Label>

              {/* <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Credit Status</option>
                <option value="Active - COD">Active - COD</option>
                <option value="Active - Credit Approved">
                  Active - Credit Approved
                </option>
                <option value="Inactive - TBD">Inactive - TBD</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Specialty Billing?</Form.Label>
              {/* <Form.Control type="text" placeholder="City" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Specialty Billing?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Customer Type</Form.Label>
              {/* <Form.Control type="text" placeholder="State" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Customer Type</option>
                <option value="3PL">3PL</option>
                <option value="Broker">Broker</option>
                <option value="Misc">Misc</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>C-TPAT</Form.Label>
              {/* <Form.Control type="text" placeholder="Zip" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Specialty C-TPAT</option>
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
              <Form.Label>Payment Method</Form.Label>
              {/* <Form.Control type="text" placeholder="City" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Specialty Billing?</option>
                <option value="Check">Check</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Wire">Wire</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>C-TPAT SVI Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="C-TPAT SVI Number"
                required
              />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Customer Type</option>
                <option value="3PL">3PL</option>
                <option value="Broker">Broker</option>
                <option value="Misc">Misc</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Net Terms</Form.Label>
              {/* <Form.Control type="text" placeholder="Zip" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Specialty Net Terms</option>
                <option value="Net 15">Net 15</option>
                <option value="Net 30">Net 30</option>
                <option value="Net 60">Net 60</option>
                <option value="Net 90">Net 90</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Mc Code</Form.Label>
              <Form.Control type="text" placeholder="Mc Code" required />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Specialty Billing?</option>
                <option value="Check">Check</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Wire">Wire</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control type="text" placeholder="Customer Name" required />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Customer Type</option>
                <option value="3PL">3PL</option>
                <option value="Broker">Broker</option>
                <option value="Misc">Misc</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>D/B #</Form.Label>
              <Form.Control type="text" placeholder="D/B #" required />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Specialty Net Terms</option>
                <option value="Net 15">Net 15</option>
                <option value="Net 30">Net 30</option>
                <option value="Net 60">Net 60</option>
                <option value="Net 90">Net 90</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Customer Code</Form.Label>
              <Form.Control type="text" placeholder="Customer Code" required />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Specialty Billing?</option>
                <option value="Check">Check</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Wire">Wire</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Federal ID (last 4 digits)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Federal ID (last 4 digits)"
                required
              />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Customer Type</option>
                <option value="3PL">3PL</option>
                <option value="Broker">Broker</option>
                <option value="Misc">Misc</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Sales Person</Form.Label>
              <Form.Control type="text" placeholder="Sales Person	" required />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Specialty Net Terms</option>
                <option value="Net 15">Net 15</option>
                <option value="Net 30">Net 30</option>
                <option value="Net 60">Net 60</option>
                <option value="Net 90">Net 90</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Credit Check Rec'd Date</p>
              {/* <Form.Control type="text" placeholder="Customer Code" required /> */}
              <Space direction="vertical" size={19} style={{ width: "100%" }}>
                <RangePicker style={{ width: "100%" }} />
              </Space>
              {/* <Form.Select aria-label="Default select example">
                <option>Select Specialty Billing?</option>
                <option value="Check">Check</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Wire">Wire</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Customer Service Rep</Form.Label>
              <Form.Control
                type="text"
                placeholder="Customer Service Rep"
                required
              />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Customer Type</option>
                <option value="3PL">3PL</option>
                <option value="Broker">Broker</option>
                <option value="Misc">Misc</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Date Added</Form.Label>
              {/* <Form.Control type="text" placeholder="Sales Person	" required /> */}
              <Space direction="vertical" size={19} style={{ width: "100%" }}>
                <RangePicker style={{ width: "100%" }} />
              </Space>
              {/* <Form.Select aria-label="Default select example">
                <option>Select Specialty Net Terms</option>
                <option value="Net 15">Net 15</option>
                <option value="Net 30">Net 30</option>
                <option value="Net 60">Net 60</option>
                <option value="Net 90">Net 90</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Collections Group</p>
              {/* <Form.Control type="text" placeholder="Customer Code" required /> */}
              {/* <Space direction="vertical" size={19} style={{ width: "100%" }}>
                <RangePicker style={{ width: "100%" }} />
              </Space> */}
              <Form.Select aria-label="Default select example">
                <option>Select Collections Group</option>
                <option value="Group A">Group A</option>
                <option value="Group B">Group B</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Load Balance</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="Customer Service Rep"
                required
              /> */}
              <Space direction="vertical" size={19} style={{ width: "100%" }}>
                <RangePicker style={{ width: "100%" }} />
              </Space>
              {/* <Form.Select aria-label="Default select example">
                <option>Select Customer Type</option>
                <option value="3PL">3PL</option>
                <option value="Broker">Broker</option>
                <option value="Misc">Misc</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Collector</Form.Label>
              <Form.Control type="text" placeholder="Collector" required />
              {/* <Space direction="vertical" size={19} style={{ width: "100%" }}>
                <RangePicker style={{ width: "100%" }} />
              </Space> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Specialty Net Terms</option>
                <option value="Net 15">Net 15</option>
                <option value="Net 30">Net 30</option>
                <option value="Net 60">Net 60</option>
                <option value="Net 90">Net 90</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Billing Deliverable</p>
              {/* <Form.Control type="text" placeholder="Customer Code" required /> */}
              {/* <Space direction="vertical" size={19} style={{ width: "100%" }}>
                <RangePicker style={{ width: "100%" }} />
              </Space> */}
              <Form.Select aria-label="Default select example">
                <option>Select Billing Deliverable</option>
                <option value="None">None</option>
                <option value="Hard Copy">Hard Copy</option>
                <option value="Email">Email</option>
                <option value="Fax">Fax</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Phone Number" required />
              {/* <Space direction="vertical" size={19} style={{ width: "100%" }}>
                <RangePicker style={{ width: "100%" }} />
              </Space> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Customer Type</option>
                <option value="3PL">3PL</option>
                <option value="Broker">Broker</option>
                <option value="Misc">Misc</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>No Loads in Last</Form.Label>
              {/* <Form.Control type="text" placeholder="Collector" required /> */}
              {/* <Space direction="vertical" size={19} style={{ width: "100%" }}>
                <RangePicker style={{ width: "100%" }} />
              </Space> */}
              <Form.Select aria-label="Default select example">
                <option>Select No Loads in Last</option>
                <option value="1 Month">1 Month</option>
                <option value="2 Month">2 Month</option>
                <option value="3 Month">3 Month</option>
                <option value="4 Month">4 Month</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Address</p>
              <Form.Control type="text" placeholder="Address" required />
              {/* <Space direction="vertical" size={19} style={{ width: "100%" }}>
                <RangePicker style={{ width: "100%" }} />
              </Space> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Billing Deliverable</option>
                <option value="None">None</option>
                <option value="Hard Copy">Hard Copy</option>
                <option value="Email">Email</option>
                <option value="Fax">Fax</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Has Images</Form.Label>
              <Form.Control type="text" placeholder="Has Images" required />
              {/* <Space direction="vertical" size={19} style={{ width: "100%" }}>
                <RangePicker style={{ width: "100%" }} />
              </Space> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Customer Type</option>
                <option value="3PL">3PL</option>
                <option value="Broker">Broker</option>
                <option value="Misc">Misc</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Has Images</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              {/* <Space direction="vertical" size={19} style={{ width: "100%" }}>
                <RangePicker style={{ width: "100%" }} />
              </Space> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select No Loads in Last</option>
                <option value="1 Month">1 Month</option>
                <option value="2 Month">2 Month</option>
                <option value="3 Month">3 Month</option>
                <option value="4 Month">4 Month</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>State (Radius)</p>
              {/* <Form.Control type="text" placeholder="Address" required /> */}
              {/* <Space direction="vertical" size={19} style={{ width: "100%" }}>
                <RangePicker style={{ width: "100%" }} />
              </Space> */}
              <Row>
                <Col>
                  <Form.Select aria-label="Default select example">
                    <option>Select State</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Canada">Canada</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select aria-label="Default select example">
                    <option>Select Radius</option>
                    <option value="15 miles">15 miles</option>
                    <option value="20 Miles">20 Miles</option>
                    <option value="30 Miles">30 Miles</option>
                  </Form.Select>
                </Col>
              </Row>
              {/* <Form.Select aria-label="Default select example">
                <option>Select Billing Deliverable</option>
                <option value="None">None</option>
                <option value="Hard Copy">Hard Copy</option>
                <option value="Email">Email</option>
                <option value="Fax">Fax</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Missing Images</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Missing Images"
                    required
                  />
                </Col>
                <Col>
                  <Form.Check
                    required
                    label=" Missing All Images"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Col>
              </Row>
              {/* <Space direction="vertical" size={19} style={{ width: "100%" }}>
                <RangePicker style={{ width: "100%" }} />
              </Space> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Customer Type</option>
                <option value="3PL">3PL</option>
                <option value="Broker">Broker</option>
                <option value="Misc">Misc</option>
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
          <Button type="submit">Submit form</Button>
        </Form>
      </Container>
    </div>
  );
};

export default SearchCustomer;
