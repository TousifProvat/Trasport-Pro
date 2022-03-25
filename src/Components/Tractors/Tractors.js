import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./tractors.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
const Tractors = () => {
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
        <h3 className="mt-5 mb-3">Tractor Information</h3>
        <hr></hr>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Tractor Id</Form.Label>
              <Form.Control required type="number" placeholder="Tractor Id" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Axle Count</Form.Label>
              <Form.Control required type="number" placeholder="Axle Count" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Status</Form.Label>

              {/* <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            /> */}

              <Form.Select aria-label="Default select example">
                <option>Select Status</option>
                <option value="Active">Active</option>
                <option value="Hold Safely">Hold Safely</option>
                <option value="Hold Shop">Hold Shop</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Weight</Form.Label>
              <Form.Control type="number" placeholder="Weight" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Terminal</Form.Label>
                          {/* <Form.Control type="text" placeholder="State" required /> */}
                <Form.Select aria-label="Default select example">
                <option>Select Terminal</option>
                <option value="EG Egales">EG Egales</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Fuel Capacity</Form.Label>
              <Form.Control type="text" placeholder="Fuel Capacity" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>
            </Form.Group>
                  </Row>
                  

                  <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Current Owner</Form.Label>
              <Form.Control type="text" placeholder="Current Owner" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Tag Number</Form.Label>
                          <Form.Control type="number" placeholder="Tag Number" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Tag State</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Tag State</option>
                <option value="Alaska">Alaska</option>
                <option value="Alabama">Alabama</option>
                <option value="Arizona">Arizona</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

                  

                  <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Owner Since</p>
              <DayPickerInput
                onDayChange={(day) => console.log(day)}
                className="datePicker"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
                <p>Tag Expiration</p>
                <DayPickerInput
                onDayChange={(day) => console.log(day)}
                className="datePicker"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Year</p>
              <Form.Select aria-label="Default select example">
                <option>Select Year</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">Arizona2021</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>
            </Form.Group>
                  </Row>
                  


                  <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Leasing Company</p>
              <Form.Select aria-label="Default select example">
                <option>Select Leasing Company</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
                <p>Make</p>
                <Form.Select aria-label="Default select example">
                <option>Select Make</option>
                <option value="Blue Bird">Blue Bird</option>
                <option value="CaterPiller">CaterPiller</option>
                <option value="Ford">Ford</option>
                <option value="GMC">GMC</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Lease Exp Date</p>
              <DayPickerInput
                onDayChange={(day) => console.log(day)}
                className="datePicker"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
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

export default Tractors;
