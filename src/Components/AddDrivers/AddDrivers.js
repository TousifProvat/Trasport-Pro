import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./addDrivers.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";



const AddDrivers = () => {
  const [allValues, setAllValues] = useState({});

  const changeHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };


  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    console.log(allValues);
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
              <Form.Select aria-label="" onChange={changeHandler} name="status">
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

              <Form.Select
                aria-label=""
                onChange={changeHandler}
                name="homeTerminal"
              >
                <option>Select Home Terminal</option>
                <option value="EG, Egales">EG, Egales</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <p>Hire Date</p>
              {/* <DayPickerInput
                onDayChange={(day) => setHireDate(day)}
                className="datePicker"
              /> */}
              <Form.Control
                type="date"
                placeholder="Hire Date"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="hireDate"
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Company Driver</Form.Label>
              <Form.Select
                aria-label=""
                onChange={changeHandler}
                name="companyDriver"
              >
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
              <Form.Select
                aria-label=""
                onChange={changeHandler}
                name="driverGroup"
              >
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
              <Form.Control
                type="date"
                placeholder="Hire Date"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="reviewDate"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Salutation</Form.Label>
              <Form.Select
                aria-label=""
                onChange={changeHandler}
                name="salutation"
              >
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
              <Form.Select
                aria-label=""
                onChange={changeHandler}
                name="dispatchGroup"
              >
                <option>Select Dispatch Group</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Next Review Date</p>
              <Form.Control
                type="date"
                placeholder="Hire Date"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="nextReviewDate"
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
                onChange={changeHandler}
                name="firstName"
              />

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
                onChange={changeHandler}
                name="middleName"
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
                onChange={changeHandler}
                name="lastName"
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
                onChange={changeHandler}
                name="dispatcher"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>MVR Date</p>
              <Form.Control
                type="date"
                placeholder="MVR Date"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="mvrDate"
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
                onChange={changeHandler}
                name="address"
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
                onChange={changeHandler}
                name="recruiter"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Physical Due Date</p>
              <Form.Control
                type="date"
                placeholder="Recruiter Name"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="physicalDueDate"
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
                onChange={changeHandler}
                name="zip"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Recruiting Source</Form.Label>
              <Form.Select
                aria-label=""
                onChange={changeHandler}
                name="recruitingSource"
              >
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
              <Form.Control
                type="date"
                placeholder="Physical Submitted Date"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="physicalSubmittedDate"
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
                onChange={changeHandler}
                name="city"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Hiring Eligibility</Form.Label>
              <Form.Select
                aria-label=""
                onChange={changeHandler}
                name="hiringEligibility"
              >
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
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
                onChange={changeHandler}
                name="cdlMatchesPhysical"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>State</Form.Label>
              <Form.Select aria-label="" onChange={changeHandler} name="state">
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
              <Form.Control
                type="date"
                placeholder="City Name"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="birthDate"
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
                onChange={changeHandler}
                name="cdlNumber"
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
                onChange={changeHandler}
                name="homePhoneNumber"
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
                onChange={changeHandler}
                name="ssn"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>CDL State</p>
              <Form.Select
                aria-label=""
                onChange={changeHandler}
                name="cdlState"
              >
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
                onChange={changeHandler}
                name="cellPhoneNumber"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Sex</p>
              <Form.Select aria-label="" onChange={changeHandler} name="sex">
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
              <Form.Control
                type="date"
                placeholder="Cell Phone Number"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="cdlExpireDate"
              />
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
                onChange={changeHandler}
                name="pagerPhoneNumber"
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
                    label="Conestoga"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="trailerQualification"
                  />
                  <Form.Check
                    label="Power Only"
                    feedback="You must"
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="powerOnly"
                  />
                  <Form.Check
                    onChange={changeHandler}
                    name="stepDeck"
                    label="Step Deck"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Col>
                <Col sm={4}>
                  <Form.Check
                    label="Drop Check"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="dropCheck"
                  />
                  <Form.Check
                    label="Reefer"
                    feedback="You"
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="reefer"
                  />
                  <Form.Check
                    label="Tanker"
                    feedback="You"
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="tanker"
                  />
                </Col>
                <Col sm={4}>
                  <Form.Check
                    label="Flat Bed"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="flatBed"
                  />
                  <Form.Check
                    label="RGN"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="rgn"
                  />
                  <Form.Check
                    label="Van"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="van"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Resident Expiration Date</p>
              <Form.Control
                type="date"
                placeholder="Resident Expiration Date"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="residentExpirationDate"
              />
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
                onChange={changeHandler}
                name="cdHandle"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>TWIC Expiration Date</p>
              <Form.Control
                type="date"
                placeholder="Pager Phone Number"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="twicExpirationDate"
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
                onChange={changeHandler}
                name="email"
              />
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
                onChange={changeHandler}
                name="passport"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>EOBR Type</p>
              <Form.Select
                aria-label=""
                onChange={changeHandler}
                name="eobrType"
              >
                <option>Select EOBR Type</option>
                <option value="Geotab">Geotab</option>
                <option value="Keep Truncking">Keep Truncking</option>
                <option value="M2M In Motion">M2M In Motion</option>
                <option value="People Net">People Net</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Passport Expire Date</p>
              <Form.Control
                type="date"
                placeholder="Passport Number"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="passportExpireDate"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>EOBR ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="EOBR ID"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="eobrID"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Occ Acc Insurance Carrier</p>
              <Form.Control
                type="text"
                placeholder="Occ Acc"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="occAccInsuranceCarrier"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Occ Acc Insurance Start Date</p>
              <Form.Control
                type="date"
                placeholder="Occ Acc"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="occAccInsuranceStartDate"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Occ Acc Insurance Exp Date</p>
              <Form.Control
                type="date"
                placeholder="Occ Acc"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="occAccInsuranceExpDate"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Medical</p>
              <Row>
                <Col sm={6}>
                  <Form.Check
                    label="Corrective Lenses"
                    feedback="You"
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="correctiveLenses"
                  />
                  <Form.Check
                    label="Hearing Aid"
                    feedback="You"
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="hearingAid"
                  />
                  <Form.Check
                    label="Sleep Apnea"
                    feedback="You"
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="sleepApnea"
                  />
                </Col>
                <Col sm={6}>
                  <Form.Check
                    label="Diabetes"
                    feedback="You"
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="diabetes"
                  />
                  <Form.Check
                    label="High Blood Pressure"
                    feedback="You"
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="highBloodPressure"
                  />
                  <Form.Check
                    label="Yearly Physical"
                    feedback="You"
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="yearlyPhysical"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit" variant="outline-primary" className="mb-5">
            Save Record
          </Button>
          <Button type="submit" variant="outline-primary" className="ms-3 mb-5">
            Save and Add New
          </Button>
          <Button variant="outline-danger" className="ms-3 mb-5">
            Cancel
          </Button>{" "}
        </Form>
      </Container>
    </div>
  );
};

export default AddDrivers;
