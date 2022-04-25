import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./addOwner.css";
import useContext from "../Hooks/useContext";

const AddOwner = () => {
  const { addOwner, loading } = useContext();

  const initValue = {
    status: "active",
    firstName: "",
    middleName: "",
    lastName: "",
    company: "",
    address: "",
    zip: "",
    city: "",
    state: "",
    factorPayments: "Non-Factored",
    print1099: false,
    primaryPhoneNumber: "",
    secondaryPhoneNumber: "",
    faxPhoneNumber: "",
    email: "",
    billName: "",
    billAddress: "",
    billZip: "",
    billCity: "",
    billState: "",
    billPrimaryPhoneNumber: "",
    billSecondaryPhoneNumber: "",
    billFaxNumber: "",
    billHardCopy: false,
    billSoftCopy: false,
    billEmail: "",
    billSSN: "",
  };

  const [allValues, setAllValues] = useState(initValue);

  const onChange = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(allValues);
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    addOwner(allValues);
    setTimeout(() => {
      setValidated(false);
      setAllValues(initValue);
    }, 1000);
  };

  const copyInfo = () => {
    setAllValues({
      ...allValues,
      billName: `${allValues.firstName} ${allValues.lastName}`,
      billAddress: allValues.address,
      billCity: allValues.city,
      billZip: allValues.zip,
      billEmail: allValues.email,
      billState: allValues.state,
      billPrimaryPhoneNumber: allValues.primaryPhoneNumber,
      billSecondaryPhoneNumber: allValues.secondaryPhoneNumber,
      billFaxNumber: allValues.faxPhoneNumber,
    });
  };
  return (
    <div>
      <Container fluid>
        <h3 className="mt-5 mb-3">Owner Information</h3>
        <hr></hr>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Status</Form.Label>
              <Form.Select
                required
                aria-label="Default select example"
                onChange={onChange}
                name="status"
                value={allValues.status}
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Owner (First, Middle, Last)</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    onChange={onChange}
                    value={allValues.firstName}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Middle Name"
                    name="middleName"
                    onChange={onChange}
                    value={allValues.middleName}
                  />
                </Col>
                <Col>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={onChange}
                    value={allValues.lastName}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company name"
                name="company"
                onChange={onChange}
                value={allValues.company}
              />
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                name="address"
                onChange={onChange}
                value={allValues.address}
                required
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                onChange={onChange}
                value={allValues.zip}
                required
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                onChange={onChange}
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>State</Form.Label>
              <Form.Select
                required
                aria-label="Default select example"
                name="state"
                onChange={onChange}
                value={allValues.state}
              >
                <option value="">Select State</option>
                <option value="Alaska">Alaska</option>
                <option value="Alabama">Alabama</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
                <option value="Quebec">Quebec</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Factory Payments</Form.Label>
              <Form.Select
                required
                name="factorPayments"
                onChange={onChange}
                value={allValues.factorPayments}
              >
                <option value="">Select</option>
                <option value="Non-Factored">Non-Factored</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4" className="mt-4">
              <Form.Check
                label="Print 1099?"
                name="print1099"
                onChange={(e) =>
                  setAllValues({
                    ...allValues,
                    print1099: Boolean(e.target.value),
                  })
                }
                value={allValues.print1099}
              />
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Main Phone Number</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Phone NUmber"
                name="primaryPhoneNumber"
                onChange={onChange}
                value={allValues.primaryPhoneNumber}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Cell Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cell number"
                name="secondaryPhoneNumber"
                onChange={onChange}
                value={allValues.secondaryPhoneNumber}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Fax Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Fax Phone Number"
                name="faxPhoneNumber"
                onChange={onChange}
                value={allValues.faxPhoneNumber}
              />
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={onChange}
                value={allValues.email}
              />
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
            <Col span={4}>
              <Button onClick={copyInfo}>Copy Information From Above</Button>
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Pay/Bill Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Bill Name"
                name="billName"
                onChange={onChange}
                value={allValues.billName}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Address</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Address"
                name="billAddress"
                onChange={onChange}
                value={allValues.billAddress}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Zip</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="text"
                  placeholder="Zip"
                  name="billZip"
                  onChange={onChange}
                  value={allValues.billZip}
                />
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
                name="billCity"
                onChange={onChange}
                value={allValues.billCity}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Select
                required
                aria-label="Default select example"
                name="billState"
                onChange={onChange}
                value={allValues.billState}
              >
                <option value="">Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
                <option value="Quebec">Quebec</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Phone Number"
                name="billPrimaryPhoneNumber"
                onChange={onChange}
                value={allValues.billPrimaryPhoneNumber}
              />
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Alt Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Alt Phone Number"
                name="billSecondaryPhoneNumber"
                onChange={onChange}
                value={allValues.billSecondaryPhoneNumber}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Fax Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Fax Phone Number"
                name="billFaxNumber"
                onChange={onChange}
                value={allValues.billFaxNumber}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Email"
                name="billEmail"
                onChange={onChange}
                value={allValues.billEmail}
              />
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4">
              <Form.Check
                label="Hard Copy"
                name="billHardCopy"
                onChange={(e) =>
                  setAllValues({
                    ...allValues,
                    billHardCopy: Boolean(e.target.value),
                  })
                }
                value={allValues.billHardCopy}
              />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Check
                label="Soft Copy"
                name="billSoftCopy"
                onChange={(e) =>
                  setAllValues({
                    ...allValues,
                    billSoftCopy: Boolean(e.target.value),
                  })
                }
                value={allValues.billSoftCopy}
              />
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>SSN Federal ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Federal ID"
                required
                name="billSSN"
                onChange={onChange}
              />
            </Form.Group>
          </Row>
          <Button type="submit" className="me-3" variant="outline-primary">
            Save
          </Button>
          <Button
            type="reset"
            variant="outline-primary"
            onClick={() => {
              setValidated(false);
              setAllValues(initValue);
            }}
          >
            Reset
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddOwner;
