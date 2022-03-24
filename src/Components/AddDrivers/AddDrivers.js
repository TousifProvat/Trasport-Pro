import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./addDrivers.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
const AddDrivers = () => {
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
      <Container>
        <h3 className="mt-5 mb-3">Driver Information</h3>
        <hr></hr>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Status</Form.Label>
              {/* <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
              /> */}
              <Form.Select aria-label="">
                <option>Select Status</option>
                <option value="Pending Hire">Pending Hire</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Declined">Declined</option>
                <option value="Terminated">Terminated</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Home Terminal</Form.Label>
              {/* <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              /> */}
              <Form.Select aria-label="">
                <option>Select Home Terminal</option>
                <option value="EG, Egales">EG, Egales</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              {/* <Form.Label>Hire Date</Form.Label> */}
              {/* <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                /> */}
              <p>Hire Date</p>
              <DayPickerInput
                onDayChange={(day) => console.log(day)}
                className="datePicker"
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Company Driver</Form.Label>
              <Form.Select aria-label="">
                <option>Select Company Driver</option>
                <option value="yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Driver Group</Form.Label>
              <Form.Select aria-label="">
                <option>Select Driver Group</option>
                <option value="Group A">Group A</option>
                <option value="Group B">Group B</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Review Date</p>
              <DayPickerInput
                onDayChange={(day) => console.log(day)}
                className="datePicker"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Salutation</Form.Label>
              <Form.Select aria-label="">
                <option>Select Salutation</option>
                <option value="Dr">Dr</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Dispatch Group</Form.Label>
              <Form.Select aria-label="">
                <option>Select Dispatch Group</option>
                {/* <option value="Group A">Group A</option>
                <option value="Group B">Group B</option> */}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Next Review Date</p>
              <DayPickerInput
                onDayChange={(day) => console.log(day)}
                className="datePicker"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                aria-describedby="inputGroupPrepend"
                required
              />
              {/* <Form.Select aria-label="">
                <option>Select Salutation</option>
                <option value="Dr">Dr</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Middle Name"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Dispatcher</Form.Label>
              <Form.Control
                type="text"
                placeholder="Dispatcher Name"
                aria-describedby="inputGroupPrepend"
                required
              />
              {/* <Form.Select aria-label="">
                <option>Select Salutation</option>
                <option value="Dr">Dr</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>MVR Date</p>
              <DayPickerInput
                onDayChange={(day) => console.log(day)}
                className="datePicker"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address Name"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Recruiter</Form.Label>
              <Form.Control
                type="text"
                placeholder="Recruiter Name"
                aria-describedby="inputGroupPrepend"
                required
              />
              {/* <Form.Select aria-label="">
                <option>Select Salutation</option>
                <option value="Dr">Dr</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Physical Due Date</p>
              <DayPickerInput
                onDayChange={(day) => console.log(day)}
                className="datePicker"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip address"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Recruiting Source</Form.Label>
              {/* <Form.Control
                  type="text"
                  placeholder="Recruiter Name"
                  aria-describedby="inputGroupPrepend"
                  required
                /> */}
              <Form.Select aria-label="">
                <option>Select Recruiting</option>
                <option value="Direct Call">Direct Call</option>
                <option value="Driver Referal">Driver Referal</option>
                <option value="Employee Referal">Employee Referal</option>
                <option value="Facebook">Facebook</option>
                <option value="Indeed">Indeed</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Physical Submitted Date</p>
              <DayPickerInput
                onDayChange={(day) => console.log(day)}
                className="datePicker"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City Name"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Hiring Eligibility</Form.Label>
              {/* <Form.Control
                  type="text"
                  placeholder="Recruiter Name"
                  aria-describedby="inputGroupPrepend"
                  required
                /> */}
              <Form.Select aria-label="">
                <option>Select Hiring Eligibility</option>
                <option value="Decrased">Decrased</option>
                <option value="Do Not Rehire">Do Not Rehire</option>
                <option value="Eiligible For Rehire">
                  Eiligible For Rehire
                </option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>CDL Matches Physical</p>
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>State</Form.Label>
              <Form.Select aria-label="">
                <option>Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Birth Date</p>
              <DayPickerInput
                onDayChange={(day) => console.log(day)}
                className="datePicker"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>CDL Number</p>
              <Form.Control
                type="text"
                placeholder="CDL Number"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Home Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Home Phone Number"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>SSN</p>
              <Form.Control
                type="text"
                placeholder="SSN Number"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>CDL State</p>
              <Form.Select aria-label="">
                <option>Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Cell Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cell Phone Number"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Sex</p>
              <Form.Select aria-label="">
                <option>Select Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>CDL Expire Date</p>
              <DayPickerInput
                onDayChange={(day) => console.log(day)}
                className="datePicker"
              />
              {/* <Form.Select aria-label="">
                <option>Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Pager Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pager Phone Number"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Trailer Qualification</p>
              <Row>
                <Col sm={4}>
                  <Form.Check
                    required
                    label="Conestoga"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                  <Form.Check
                    required
                    label="Power Only"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                  <Form.Check
                    required
                    label="Step Deck"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Col>
                <Col sm={4}>
                  <Form.Check
                    required
                    label="Drop Check"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                  <Form.Check
                    required
                    label="Reefer"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                  <Form.Check
                    required
                    label="Tanker"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Col>
                <Col sm={4}>
                  <Form.Check
                    required
                    label="Flat Bed"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                  <Form.Check
                    required
                    label="RGN"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                  <Form.Check
                    required
                    label="Van"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Resident Expiration Date</p>
              <DayPickerInput
                onDayChange={(day) => console.log(day)}
                className="datePicker"
              />
              {/* <Form.Select aria-label="">
                <option>Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>CB Handle</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pager Phone Number"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>



          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>TWIC Expiration Date</p>
              <DayPickerInput
                onDayChange={(day) => console.log(day)}
                className="datePicker"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Email</p>
              <Form.Control
                type="email"
                placeholder="Email Address"
                aria-describedby="inputGroupPrepend"
                required
              />
              {/* <Form.Select aria-label="">
                <option>Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Passport</Form.Label>
              <Form.Control
                type="text"
                placeholder="Passport Number"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
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

export default AddDrivers;
