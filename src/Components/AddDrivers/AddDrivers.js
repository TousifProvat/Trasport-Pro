import { notification } from 'antd';
import React, { useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axios from '../../utils/axios';
import useContext from '../Hooks/useContext';
import './addDrivers.css';

const AddDrivers = () => {
  const { eobrs } = useSelector((state) => state.eobr);
  const initValue = {
    driverNumber: 1,
    status: 'Pending Hire',
    salutation: 'Mr',
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    address: '',
    zip: '',
    city: '',
    state: '',
    primaryPhoneNumber: '',
    secondaryPhoneNumber: '',
    faxPhoneNumber: '',
    cbHandle: '',
    eobrType: '',
    eobrId: '',
    correctiveLenses: false,
    diabetes: false,
    hearingAid: false,
    highBp: false,
    sleepApnea: false,
    birthDate: '',
    SSN: '',
    sex: '',
    race: '',
    hireDate: '',
    terminationDate: '',
    cdlNumber: 0,
    cdlState: '',
    cdlExpDate: '',
    medicalTestDate: '',
    certificateExpiryDate: '',
    drugTestDate: '',
    testResult: 'fail',
    mvrRunDate: '',
  };

  const [allValues, setAllValues] = useState(initValue);
  const [loading, setLoading] = useState(false);

  const addDriver = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post('/driver', values);
      if (res.status === 201) {
        notification.success({ message: res.data.message });
        setTimeout(() => {
          setValidated(false);
          setAllValues(initValue);
        }, 300);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({ message: err.response.data.message });
    }
  };

  const onChange = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    addDriver(allValues);
  };

  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-3">Driver Information</h3>
        <hr></hr>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Driver Number</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Driver Number"
                onChange={onChange}
                name="driverNumber"
                value={allValues.driverNumber}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Status</Form.Label>
              <Form.Select
                required
                onChange={onChange}
                name="status"
                value={allValues.status}
              >
                <option value="">Select Status</option>
                <option value="Pending Hire">Pending Hire</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Declined for work">Declined for work</option>
                <option value="Terminated">Terminated</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Email"
                onChange={onChange}
                name="email"
                value={allValues.email}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First Name"
                aria-describedby="inputGroupPrepend"
                onChange={onChange}
                name="firstName"
                value={allValues.firstName}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Middle Name"
                aria-describedby="inputGroupPrepend"
                onChange={onChange}
                name="middleName"
                value={allValues.middleName}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last Name"
                aria-describedby="inputGroupPrepend"
                onChange={onChange}
                name="lastName"
                value={allValues.lastName}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Salutation</Form.Label>
              <Form.Select
                aria-label=""
                onChange={onChange}
                name="salutation"
                value={allValues.salutation}
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
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Hiring Date</Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="Hire Date"
                onChange={onChange}
                name="hireDate"
                value={allValues.hireDate}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Termination Date</Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="Termination Date"
                onChange={onChange}
                name="terminationDate"
                value={allValues.terminationDate}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Address</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Address Name"
                onChange={onChange}
                name="address"
                value={allValues.address}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Zip Code"
                onChange={onChange}
                name="zip"
                value={allValues.zip}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>City</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="City Name"
                onChange={onChange}
                name="city"
                value={allValues.city}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>State</Form.Label>
              <Form.Select
                required
                onChange={onChange}
                name="state"
                value={allValues.state}
              >
                <option value="">Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="City Name"
                onChange={onChange}
                name="birthDate"
                value={allValues.birthDate}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>SSN</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="SSN Number"
                onChange={onChange}
                name="SSN"
                value={allValues.SSN}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Phone Number"
                onChange={onChange}
                name="primaryPhoneNumber"
                value={allValues.primaryPhoneNumber}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Alt Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Alt Phone Number"
                aria-describedby="inputGroupPrepend"
                onChange={onChange}
                name="secondaryPhoneNumber"
                value={allValues.secondaryPhoneNumber}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Fax Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Fax Number"
                onChange={onChange}
                name="faxPhoneNumber"
                value={allValues.faxPhoneNumber}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>CDL Number</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="CDL Number"
                onChange={onChange}
                name="cdlNumber"
                value={allValues.cdlNumber}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>CDL State</Form.Label>
              <Form.Select
                onChange={onChange}
                name="cdlState"
                value={allValues.cdlState}
              >
                <option value="">Select State</option>
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
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>CDL Expire Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="CDL Expire Date"
                onChange={onChange}
                name="cdlExpDate"
                value={allValues.cdlExpDate}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Gender</Form.Label>
              <Form.Select onChange={onChange} name="sex" value={allValues.sex}>
                <option>Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Medical Test Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Medical Test Date"
                onChange={onChange}
                name="medicalTestDate"
                value={allValues.medicalTestDate}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Medical Certificate Expiry Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Certificate Expiry Date"
                onChange={onChange}
                name="certificateExpiryDate"
                value={allValues.certificateExpiryDate}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>CB Handle</Form.Label>
              <Form.Control
                type="text"
                placeholder="CB Handle"
                onChange={onChange}
                name="cbHandle"
                value={allValues.cbHandle}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>EOBR Type</Form.Label>
              <Form.Select
                aria-label=""
                onChange={onChange}
                name="eobrType"
                value={allValues.eobrType}
              >
                <option value="">Select EOBR Type</option>
                {eobrs.map((eobr, index) => (
                  <option value={eobr._id} key={index}>
                    {eobr.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>EOBR ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="EOBR ID"
                onChange={onChange}
                name="eobrId"
                value={allValues.eobrId}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Drug Test Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Drug Test Date"
                onChange={onChange}
                name="drugTestDate"
                value={allValues.drugTestDate}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Test Result</Form.Label>
              <Form.Select
                onChange={onChange}
                name="testResult"
                value={allValues.testResult}
              >
                <option value="pass">Pass</option>
                <option value="fail">Fail</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>MVR Run Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="MVR Run Date"
                onChange={onChange}
                name="mvrRunDate"
                value={allValues.mvrRunDate}
              />
            </Form.Group>
          </Row>
          <Button
            type="submit"
            variant="outline-primary"
            className="mb-5"
            disabled={loading}
          >
            Save
          </Button>
          <Button
            variant="outline-danger"
            className="ms-3 mb-5"
            href="search-driver"
            disabled={loading}
          >
            Cancel
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddDrivers;
