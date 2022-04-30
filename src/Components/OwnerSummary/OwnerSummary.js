import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  Navbar,
  OverlayTrigger,
  Row,
  Table,
  Tooltip,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useContext from "../Hooks/useContext";
import axios from "../../utils/axios";
import "./ownerSummary.css";
import AssignDriverModal from "./AssignDriverModal";

const OwnerSummary = () => {
  const { updateOwner, unassignDriverFromOwner } = useContext();
  const { ownerId } = useParams();
  const [loading, setLoading] = useState(false);
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
  const [drivers, setDrivers] = useState([]);

  const onChange = (e) => {
    if (e.target.type === "checkbox") {
      setAllValues({
        ...allValues,
        [e.target.name]: allValues[e.target.name] ? false : true,
      });
      return;
    }
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const fetchOwnerSummary = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/owner/summary/${ownerId}`);

        setAllValues({
          ...data.owner,
          billName: data.owner.billing.name,
          billAddress: data.owner.billing.address,
          billCity: data.owner.billing.city,
          billZip: data.owner.billing.zip,
          billEmail: data.owner.billing.email,
          billState: data.owner.billing.state,
          billPrimaryPhoneNumber: data.owner.billing.primaryPhoneNumber,
          billSecondaryPhoneNumber: data.owner.billing.secondaryPhoneNumber,
          billFaxNumber: data.owner.billing.faxPhoneNumber,
          billSSN: data.owner.billing.SSN,
          billHardCopy: data.owner.billing.hardCopy,
          billSoftCopy: data.owner.billing.softCopy,
        });
        setDrivers(data.assignedDrivers);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchOwnerSummary();
  }, [ownerId]);

  //form validation functionality

  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    updateOwner(ownerId, { ...allValues, billing: allValues.billing._id });
  };
  //assigned/unassign drivers
  const [show, setShow] = useState(false);
  const unassignDriver = (driverId, index) => {
    unassignDriverFromOwner(driverId);
    setDrivers([
      ...drivers.slice(0, index),
      ...drivers.slice(index + 1, drivers.length),
    ]);
  };

  return (
    <div className="mb-5">
      {loading && <h2>loading..</h2>}
      {!loading && (
        <>
          <Container className="mb-5">
            <Navbar bg="light" expand="lg" className="mt-5">
              <Container>
                <Navbar.Brand>
                  <h4>Owner Information</h4>
                  <hr></hr>
                </Navbar.Brand>
              </Container>
            </Navbar>
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
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustomUsername"
                >
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
                    value={allValues.city}
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
                    onChange={onChange}
                    checked={allValues.print1099}
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

            <Navbar bg="light" expand="lg" className="mt-5">
              <Container>
                <Navbar.Brand href="#home">
                  <h4>Payment Information</h4>
                  <hr></hr>
                </Navbar.Brand>
              </Container>
            </Navbar>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustomUsername"
                >
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
                    onChange={onChange}
                    checked={allValues.billHardCopy}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Check
                    label="Soft Copy"
                    name="billSoftCopy"
                    onChange={onChange}
                    checked={allValues.billSoftCopy}
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
                    value={allValues.billSSN}
                  />
                </Form.Group>
              </Row>
              <Button
                type="submit"
                className="mb-5 me-3"
                variant="outline-primary"
              >
                Update
              </Button>
            </Form>
          </Container>
          <Container>
            <AssignDriverModal
              visible={show}
              setVisible={setShow}
              owner={ownerId}
            />
            <Navbar bg="light" expand="lg" className="mt-5">
              <Container>
                <Navbar.Brand href="#home">
                  <h1>Assigned Drivers</h1>
                </Navbar.Brand>

                <Button variant="outline-primary" onClick={() => setShow(true)}>
                  <i className="fa-solid fa-plus"></i>
                </Button>
              </Container>
            </Navbar>
            <Table striped bordered hover className="mb-5">
              <thead>
                <tr>
                  <th>Driver</th>
                  <th>Date Assigned </th>
                  <th>Comments (Internal)</th>
                  <th>Manage</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map((driver, index) => (
                  <tr key={index}>
                    <td>
                      {driver.firstName} {driver.lastName}
                    </td>
                    <td>{driver.ownerAssigningDate}</td>
                    <td>{driver.ownerComments}</td>
                    <td>
                      <Button
                        variant="outline-danger"
                        onClick={() => unassignDriver(driver._id, index)}
                      >
                        <i className="fa-solid fa-scissors"></i>{" "}
                      </Button>
                    </td>
                  </tr>
                ))}
                {drivers.length < 1 && (
                  <tr>
                    <td colSpan={5} style={{ textAlign: "center" }}>
                      No Driver Assigned
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Container>
        </>
      )}
    </div>
  );
};

export default OwnerSummary;
