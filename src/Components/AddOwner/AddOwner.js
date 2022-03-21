import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./addOwner.css";
import Select from "react-select";

const options = [
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];
const options2 = [
  { value: "Alabama", label: "Alabama" },
  { value: "Alaska", label: "Alaska" },
  { value: "California", label: "California" },
  { value: "Alberta", label: "Alberta" },
  { value: "Manitoba", label: "Manitoba" },
  { value: "Quebec", label: "Quebec" },
];
const options3 = [
  { value: "Saturday", label: "Saturdaya" },
  { value: "Sunday", label: "Sunday" },
  { value: "Monday", label: "Monday" },
  { value: "Tuesday", label: "Tuesday" },
  { value: "Wednesday", label: "Wednesday" },
  { value: "Thusday", label: "Thusday" },
];
const options4 = [{ value: "Non factored", label: "Non factored" }];
const options5 = [
  { value: "True", label: "True" },
  { value: "false", label: "False" },
];
const options6 = [{ value: "EG Terminal", label: "EG Terminal" }];
const options7 = [
  { value: "Hard Copy", label: "Hard Copy" },
  { value: "Mail", label: "Mail" },
];
const AddOwner = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

    const handleSubmit2 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="mb-5">
      <Container>
        <h4 className="mt-5 mb-3">Owner Information</h4>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Status</Form.Label>
              <Select options={options} required />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Owner Full Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Full Name"
                // defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please choose a Valid name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Company</Form.Label>
              <InputGroup hasValidation>
                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                <Form.Control
                  type="text"
                  placeholder="Company name"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                <Form.Control.Feedback type="invalid">
                  Please choose a Valid name.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Address.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Zip.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city name.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>State</Form.Label>
              {/* <Form.Control type="text" placeholder="Address" required /> */}
              <Select options={options2} required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Address.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Group</Form.Label>
              {/* <Form.Control type="text" placeholder="Zip" required /> */}
              <Select required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Zip.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Preferred Settlement Days</Form.Label>
              {/* <Form.Control type="text" placeholder="City" required /> */}
              <Select options={options3} required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city name.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Factory Payments</Form.Label>
              {/* <Form.Control type="text" placeholder="Address" required /> */}
              <Select options={options4} required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Address.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Print 1099?</Form.Label>
              {/* <Form.Control type="text" placeholder="Zip" required /> */}
              <Select options={options5} required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Zip.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Home Terminal</Form.Label>
              {/* <Form.Control type="text" placeholder="City" required /> */}
              <Select options={options6} required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city name.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Main Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Phone NUmber" required />
              {/* <Select options={options4} required /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid Phone Number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Cell Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Cell number" required />
              {/* <Select options={options5} required /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid Cell Phone Number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Fax Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Fax Phone Number"
                required
              />
              {/* <Select options={options6} required /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid fax phone number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email Address" required />
              {/* <Select options={options4} required /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid Email.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Trailer Rent Percentage</Form.Label>
              <Form.Control
                type="number"
                placeholder="Rent Percentage"
                required
              />
              {/* <Select options={options5} required /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid Percentage Number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          {/* <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before saving."
              feedbackType="invalid"
            />
          </Form.Group> */}
          {/* <Button type="submit" className="me-3">
            Save
          </Button>
          <Button type="submit">Save and Add New</Button>
          <Button variant="outline-primary" className="ms-3">
            <i className="me-2 fa-solid fa-xmark"></i>
            <Link to="/searchOwner">Cancel</Link>
          </Button>{" "} */}
        </Form>
      </Container>

      {/* Payment info start */}

      <Container>
        <h4 className="mt-5 mb-3">Payment Information</h4>

        <Form noValidate validated={validated} onSubmit={handleSubmit2}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Pay/Bill Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Bill Name"
                // defaultValue="Otto"
              />
              {/* <Select options={options} required /> */}
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please choose a Valid bill name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Address</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Address Name"
                // defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please choose a Valid address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Zip</Form.Label>
              <InputGroup hasValidation>
                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                <Form.Control.Feedback type="invalid">
                  Please choose a Valid zip.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid City Name.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              {/* <Form.Control type="text" placeholder="Zip" required /> */}
              <Select options={options2} required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Zip.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Phone NUmber" required />
              {/* <Select options={options4} required /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid Phone Number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Alt Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Phone NUmber" required />
              {/* <Select options={options4} required /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid Alt Phone Number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Fax Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Fax Phone Number"
                required
              />
              {/* <Select options={options6} required /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid fax phone number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email Address" required />
              {/* <Select options={options4} required /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid Email.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Settlement Receipt</Form.Label>
              {/* <Form.Control type="text" placeholder="Address" required /> */}
              <Select options={options7} required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Address.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Settlement Category</Form.Label>
              {/* <Form.Control type="text" placeholder="Zip" required /> */}
              <Select required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Zip.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>SSN Federal ID</Form.Label>
              <Form.Control type="number" placeholder="Federal ID" required />
              {/* <Select options={options6} required /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid Federal ID.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Default Tractor Pay Pct.</Form.Label>
              <Form.Control type="number" placeholder="Pay Pct." required />
              {/* <Select options={options4} required /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid Pay Pct. Number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>pay Per Mile - Loaded</Form.Label>
              <Form.Control type="number" placeholder="pay per mile" required />
              {/* <Select options={options5} required /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid pay per mile Number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Pay Per Mile - Empty</Form.Label>
              <Form.Control
                type="number"
                placeholder="Pay per mile empty"
                required
              />
              {/* <Select options={options5} required /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid Pay Per mile empty Number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before saving."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit" className="me-3">
            Save
          </Button>
          <Button type="submit">Save and Add New</Button>
          <Button variant="outline-primary" className="ms-3">
            <i className="me-2 fa-solid fa-xmark"></i>
            <Link to="/searchOwner">Cancel</Link>
          </Button>{" "}
        </Form>
      </Container>
    </div>
  );
};

export default AddOwner;
