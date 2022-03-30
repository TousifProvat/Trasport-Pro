import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { DatePicker, Space } from "antd";

const AddTerminal = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  // date picker 1

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-3">Terminal Information</h3>
        <hr></hr>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Terminal Code</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Terminal Code"
                // defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Commission Program</Form.Label>
              {/* <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Commission Program</option>
                <option value="Split Commission">Split Commission</option>
                <option value="Simple Commission">Simple Commission</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Terminal Type</Form.Label>

              {/* <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Terminal Type</option>
                <option value="Agent - Freight">Agent - Freight</option>
                <option value="Agent - Truck">Agent - Truck</option>
                <option value="Company Store">Company Store</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>System Truck Commission (%) </Form.Label>
              <Form.Control
                type="text"
                placeholder="System Truck Commission"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Status</Form.Label>
              {/* <Form.Control type="text" placeholder="State" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Terminal Truck Commission (%) </Form.Label>
              <Form.Control
                type="text"
                placeholder="Terminal Truck Commission	"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>BC Split Rate (%)</Form.Label>
              <Form.Control type="text" placeholder="BC Split Rate" required />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>BC Cap Rate(%)</Form.Label>
              <Form.Control type="text" placeholder="BC Cap Rate(%)" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>BC Minimum Amount ($)</Form.Label>
              <Form.Control
                type="text"
                placeholder="BC Minimum Amount ($)"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Calculate Commission?</Form.Label>
              <Form.Check
                required
                label="Yes"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
              {/* <Form.Control type="text" placeholder="Zip" required /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>State</Form.Label>
              {/* <Form.Control type="text" placeholder="BC Minimum Amount ($)" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Canada">Canada</option>
                <option value="California">California</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Use Owner Operator Contractual Rate</Form.Label>
              {/* <Form.Control type="text" placeholder="City" required /> */}
              <Form.Check
                required
                label="Yes"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Office Phone Number</Form.Label>
              {/* <Form.Check
              required
              label="Yes"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            /> */}
              <Form.Control
                type="text"
                placeholder="Office Phone Number"
                required
              />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Parent Terminal</Form.Label>
              {/* <Form.Control type="text" placeholder="BC Minimum Amount ($)" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Parent Terminal</option>
                <option value="EG - Egales">EG - Egales</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Emergency Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Emergency Phone Number"
                required
              />
              {/* <Form.Check
              required
              label="Yes"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Preferred Settlement Day</Form.Label>
              {/* <Form.Check
              required
              label="Yes"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            /> */}
              {/* <Form.Control type="text" placeholder="Office Phone Number" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Preferred Settlement Day</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thusday">Thusday</option>
                <option value="Friday">Friday</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Fax Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Fax Phone Number"
                required
              />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Parent Terminal</option>
                <option value="EG - Egales">EG - Egales</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Share driver info with other terminals</Form.Label>
              {/* <Form.Control type="text" placeholder="Emergency Phone Number" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Share driver info with other terminals</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              {/* <Form.Check
              required
              label="Yes"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Toll Free Number</Form.Label>
              {/* <Form.Check
              required
              label="Yes"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            /> */}
              <Form.Control
                type="text"
                placeholder="Toll Free Number"
                required
              />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Preferred Settlement Day</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thusday">Thusday</option>
                <option value="Friday">Friday</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Pay Gross Reduction</Form.Label>
              {/* <Form.Control type="text" placeholder="Pay Gross Reduction" required /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Parent Terminal</option>
                <option value="EG - Egales">EG - Egales</option>
              </Form.Select> */}
              <Row>
                <Col>
                  <Form.Control type="text" placeholder="Flat Rate" required />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Percentage" required />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Email" required />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Share driver info with other terminals</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select> */}
              {/* <Form.Check
              required
              label="Yes"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Escalation Email</Form.Label>
              {/* <Form.Check
              required
              label="Yes"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            /> */}
              <Form.Control
                type="text"
                placeholder="Escalation Email"
                required
              />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Preferred Settlement Day</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thusday">Thusday</option>
                <option value="Friday">Friday</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Date Opened</p>
              {/* <Form.Control type="text" placeholder="Pay Gross Reduction" required /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Parent Terminal</option>
                <option value="EG - Egales">EG - Egales</option>
              </Form.Select> */}
              <Space direction="vertical" style={{ width: "100%" }}>
                <DatePicker onChange={onChange} style={{ width: "100%" }} />
              </Space>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Date Closed</p>
              {/* <Form.Control type="text" placeholder="Pay Gross Reduction" required /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Parent Terminal</option>
                <option value="EG - Egales">EG - Egales</option>
              </Form.Select> */}
              <Space direction="vertical" style={{ width: "100%" }}>
                <DatePicker onChange={onChange} style={{ width: "100%" }} />
              </Space>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Print 1099?</Form.Label>
              <Form.Check
                required
                label="Yes"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Form>
      </Container>
      <Container>
        <h3 className="mt-5 mb-3">Billing / Payment Information</h3>
        <hr></hr>
        <Button variant="outline-primary">
          Copy Information From Above
        </Button>{" "}
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="mt-5 mb-3"
        >
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Pay/Bill Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Pay/Bill Name"
                // defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>SSN or Federal ID</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="SSN or Federal ID"
                // defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Address</Form.Label>

              <Form.Control
                type="text"
                placeholder="Address"
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
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
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
              {/* <Form.Control type="text" placeholder="Zip" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Canada">Canada</option>
                <option value="California">California</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Phone Number" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Alt Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Alt Phone Number"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Fax Number</Form.Label>
              <Form.Control type="text" placeholder="Fax Number" required />
              {/* <Form.Select aria-label="Default select example">
                <option>Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Canada">Canada</option>
                <option value="California">California</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Email" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Settlement Receipt</Form.Label>
              {/* <Form.Control type="text" placeholder="Alt Phone Number" required /> */}
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
              </Row>
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
          <Button type="submit" className="me-3 mb-5" variant="outline-primary">Save</Button>
          <Button type="submit" className="me-3 mb-5" variant="outline-primary">Save And Add New</Button>
          <Button type="submit" className="me-3 mb-5" variant="outline-danger"> Cancel</Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddTerminal;
