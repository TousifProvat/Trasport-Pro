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


  const [status, setStatus] = useState({});
  const [firstName, setFirstName] = useState({});
  const [middleName, setMiddleName] = useState({});
  const [lastName, setLastName] = useState({});
  const [companyName, setCompanyName] = useState({});
  const [addressName1, setAddressName1] = useState({});
  const [zip1, setZip1] = useState({});
  const [city1, setCity1] = useState({});
  const [state1, setState1] = useState({});
  const [group, setGroup] = useState({});
  const [settleMentDays, setSettleMentDays] = useState({});
  const [print1099, setPrint1099] = useState({});
  const [terminal, setTerminal] = useState({});
  const [phoneNumber, setPhoneNumber] = useState({});
  const [cellNumber, setCellNumber] = useState({});
  const [faxNumber, setFaxNumber] = useState({});
  const [email, setEmail] = useState({});
  const [trailerRentPercent, setTrailerRentPercent] = useState({});
  const [payBill, setPayBill] = useState({});
  const [address2, setAddress2] = useState({});
  const [zip2, setZip2] = useState({});
  const [city2, setCity2] = useState({});
  const [state2, setState2] = useState({});
  const [phoneNumber2, setPhoneNumber2] = useState({});
  const [altPhoneNumber, setAltPhoneNumber] = useState({});
  const [faxPhoneNumber2, setFaxPhoneNumber2] = useState({});
  const [email2, setEmail2] = useState({});
  const [hardCopy, setHardCopy] = useState({});
  const [emailCopy, setEmailCopy] = useState({});
  const [ssnFederalId, setSsnFederalId] = useState({});
  const [tractorPay, setTractorPay] = useState({});
  const [payPerMile, setPayPerMile] = useState({});
  const [payPerMileEmpty, setPayPerMileEmpty] = useState({});
  const basicInfo = {
    status: status,
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    companyName: companyName,
    addressName1: addressName1,
    zip1: zip1,
    city1: city1,
    state1: state1,
    group: group,
    settleMentDays: settleMentDays,
    print1099: print1099,
    terminal: terminal,
    phoneNumber: phoneNumber,
    secondaryPhoneNumber: cellNumber,
    faxPhoneNumber: faxNumber,
    email: email,
    trailerRentPercent: trailerRentPercent,
    payBill: payBill,
    address2: address2,
    zip2: zip2,
    city2: city2,
    state2: state2,
    phoneNumber2: phoneNumber2,
    altPhoneNumber: altPhoneNumber,
    faxPhoneNumber2: faxPhoneNumber2,
    email2: email2,
    hardCopy: hardCopy,
    emailCopy: emailCopy,
    ssnFederalId: ssnFederalId,
    defaultTractorPayPct: tractorPay,
    payPerMileLoaded: payPerMile,
    payPerMileEmplty: payPerMileEmpty,
  };
  
  const [allInfo, setAllInfo] = useState(basicInfo);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    console.log(basicInfo);
  };

    const handleSubmit2 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  //save button on Blur functionality

  const handleSaveButton = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setStatus(status);
  }

  const handleFirstName = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setFirstName(status);
  };

  const handleMiddleName = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setMiddleName(status);
  };

  const handleLastName = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setLastName(status);
  };

  const handleCompanyName = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setCompanyName(status);
  };
  const handleAddressName1 = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setAddressName1(status);
  };
  const handleZipName1 = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setZip1(status);
  };
  const handleCity1 = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setCity1(status);
  };
  const handleState1 = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setState1(status);
  };
  const handleGroup = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setGroup(status);
  };
  const handleSettleMentDays = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setSettleMentDays(status);
  };
  const handlePrint1099 = (e) => {
    e.preventDefault();
    const status = e.target.checked;
    setPrint1099(status);
  };
  const handleTerminal = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setTerminal(status);
  };
  const handlePhoneNumber = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setPhoneNumber(status);
  };
  const handleCellNumber = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setCellNumber(status);
  };
  const handleFaxNumber = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setFaxNumber(status);
  };
  const handleEmail = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setEmail(status);
  };
  const handletrailerRentPercent = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setTrailerRentPercent(status);
  };
  const handlePayBill = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setPayBill(status);
  };
  const handleAddress2 = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setAddress2(status);
  };
  const handleZip2 = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setZip2(status);
  };
  const handleCity2 = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setCity2(status);
  };
  const handleState2 = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setState2(status);
  };
  const handlePhoneNumber2 = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setPhoneNumber2(status);
  };
  const handleAltPhoneNumber = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setAltPhoneNumber(status);
  };
  const handleFaxPhoneNumber2 = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setFaxPhoneNumber2(status);
  };
  const handleEmail2 = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setEmail2(status);
  };
  const handleHardCopy = (e) => {
    e.preventDefault();
    const status = e.target.checked;
    setHardCopy(status);
  };
  const handleEmailCopy = (e) => {
    e.preventDefault();
    const status = e.target.checked;
    setEmailCopy(status);
  };
  const handleSSNFederalId = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setSsnFederalId(status);
  };
  const handleTractorPay = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setTractorPay(status);
  };
  const handlePayPerMile = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setPayPerMile(status);
  };
  const handlePayPerMileEmpty = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setPayPerMileEmpty(status);
  };

  // console.log(status);

  return (
    <div className="mb-5">
      <Container fluid>
        <h3 className="mt-5 mb-3">Owner Information</h3>
        <hr></hr>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Status</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onBlur={handleSaveButton}
              >
                <option>Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Owner (First, Middle, Last)</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First Name"
                    onBlur={handleFirstName}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Middle Name"
                    onBlur={handleMiddleName}
                  />
                </Col>
                <Col>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last Name"
                    onBlur={handleLastName}
                  />
                </Col>
              </Row>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please choose a Valid name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Company</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Company name"
                  aria-describedby="inputGroupPrepend"
                  onBlur={handleCompanyName}
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
              <Form.Control
                type="text"
                placeholder="Address"
                onBlur={handleAddressName1}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Address.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                onBlur={handleZipName1}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Zip.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                onBlur={handleCity1}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city name.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>State</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onBlur={handleState1}
              >
                <option>Select State</option>
                <option value="Alaska">Alaska</option>
                <option value="Alabama">Alabama</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
                <option value="Quebec">Quebec</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid Address.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Group</Form.Label>
              {/* <Form.Control type="text" placeholder="Zip"  required /> */}
              <Form.Select
                aria-label="Default select example"
                onBlur={handleGroup}
              >
                <option>Select Group</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid Zip.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Preferred Settlement Days</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onBlur={handleSettleMentDays}
              >
                <option>Select Settlement Days</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
              </Form.Select>
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
              {/* <Select options={options5} required /> */}
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before saving."
                feedbackType="invalid"
                onBlur={handlePrint1099}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Zip.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Home Terminal</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onBlur={handleTerminal}
              >
                <option>Select Terminal</option>
                <option value="EG - Egales">EG - Egales</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city name.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Main Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone NUmber"
                onBlur={handlePhoneNumber}
              />
              {/* <Select options={options4} required /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid Phone Number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Cell Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Cell number"
                onBlur={handleCellNumber}
              />
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
                onBlur={handleFaxNumber}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid fax phone number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email Address"
                onBlur={handleEmail}
              />
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
                onBlur={handletrailerRentPercent}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Percentage Number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Form>
      </Container>

      {/* Payment info start */}

      <Container fluid className="payment-info">
        <h3 className="mt-5 mb-3">Payment Information</h3>
        <hr></hr>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Pay/Bill Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Bill Name"
                onBlur={handlePayBill}
              />
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
                onBlur={handleAddress2}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please choose a Valid address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Zip</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  aria-describedby="inputGroupPrepend"
                  onBlur={handleZip2}
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
              <Form.Control
                type="text"
                placeholder="City"
                required
                onBlur={handleCity2}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid City Name.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onBlur={handleState2}
              >
                <option>Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
                <option value="Quebec">Quebec</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid Zip.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone NUmber"
                onBlur={handlePhoneNumber2}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Phone Number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Alt Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone Number"
                onBlur={handleAltPhoneNumber}
              />
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
                onBlur={handleFaxPhoneNumber2}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid fax phone number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email Address"
                onBlur={handleEmail2}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Email.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Settlement Receipt</Form.Label>
              <Row>
                <Col>
                  <Form.Check
                    required
                    label="Hard Copy"
                    feedback="You must agree before saving."
                    feedbackType="invalid"
                    onBlur={handleHardCopy}
                  />
                </Col>
                <Col>
                  <Form.Check
                    required
                    label="Email"
                    feedback="You must agree before saving."
                    feedbackType="invalid"
                    onBlur={handleEmailCopy}
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid Address.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Settlement Category</Form.Label>
              <Select required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Zip.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>SSN Federal ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="Federal ID"
                required
                onBlur={handleSSNFederalId}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Federal ID.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Default Tractor Pay Pct.</Form.Label>
              <Form.Control
                type="number"
                placeholder="Pay Pct."
                onBlur={handleTractorPay}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Pay Pct. Number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>pay Per Mile - Loaded</Form.Label>
              <Form.Control
                type="number"
                placeholder="pay per mile"
                onBlur={handlePayPerMile}
              />
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
                onBlur={handlePayPerMileEmpty}
              />
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
          <Button type="submit" className="me-3" variant="outline-primary">
            Save
          </Button>
          <Button type="submit" variant="outline-primary">
            Save and Add New
          </Button>
          <Button variant="outline-danger" className="ms-3">
            <Link to="/searchOwner">Cancel</Link>
          </Button>{" "}
        </Form>
      </Container>
    </div>
  );
};

export default AddOwner;
