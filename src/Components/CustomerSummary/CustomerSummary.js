import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../utils/axios";
//
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { notification } from "antd";
//
import Loader from "../Loader";

const CustomerSummary = () => {
  const { customerId } = useParams();
  //state
  const initValue = {
    name: "",
    phoneNumber: "",
    fax: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
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
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);

  //hooks
  useEffect(() => {
    fetchCustomerSummary();
  }, [customerId]);

  //funcs
  const fetchCustomerSummary = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/customer/summary/${customerId}`);
      setAllValues({
        ...data.customer,
        billName: data.customer.billing.name,
        billAddress: data.customer.billing.address,
        billCity: data.customer.billing.city,
        billZip: data.customer.billing.zip,
        billEmail: data.customer.billing.email,
        billState: data.customer.billing.state,
        billPrimaryPhoneNumber: data.customer.billing.primaryPhoneNumber,
        billSecondaryPhoneNumber: data.customer.billing.secondaryPhoneNumber,
        billFaxNumber: data.customer.billing.faxPhoneNumber,
        billSSN: data.customer.billing.SSN,
        billHardCopy: data.customer.billing.hardCopy,
        billSoftCopy: data.customer.billing.softCopy,
      });
      setLoading(false);
    } catch (err) {
      console.log({ err });
    }
  };
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
  const handleUpdate = async () => {
    try {
      setLoading(true);
      const res = await axios.put(`/customer/${customerId}`, {
        ...allValues,
        billing: allValues.billing._id,
      });
      notification.success({ message: res.data.message });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    handleUpdate();
  };
  const copyInfo = () => {
    setAllValues({
      ...allValues,
      billName: allValues.name,
      billCity: allValues.city,
      billZip: allValues.zip,
      billEmail: allValues.email,
      billState: allValues.state,
      billPrimaryPhoneNumber: allValues.phoneNumber,
      billFaxNumber: allValues.fax,
    });
  };
  return (
    <div>
      <Container>
        <Container>
          <h4 className="mt-5 mb-3">Customer Summary</h4>
          <hr></hr>
        </Container>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          {loading && <Loader />}
          {!loading && (
            <>
              {" "}
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Customer Name"
                    name="name"
                    onChange={onChange}
                    value={allValues.name}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    onChange={onChange}
                    value={allValues.phoneNumber}
                  />
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom03">
                  <Form.Label>Fax</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Fax Number"
                    name="fax"
                    onChange={onChange}
                    value={allValues.fax}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={onChange}
                    value={allValues.email}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom05">
                  <Form.Label>Street</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Street"
                    name="street"
                    onChange={onChange}
                    value={allValues.street}
                  />
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom06">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    onChange={onChange}
                    value={allValues.city}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom07">
                  <Form.Label>State</Form.Label>
                  <Form.Select
                    required
                    name="state"
                    onChange={onChange}
                    value={allValues.state}
                  >
                    <option value="">Select State</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="California">California</option>
                    <option value="Canada">Canada</option>
                    <option value="Quebec">Quebec</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom08">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Zip Code"
                    name="zip"
                    onChange={onChange}
                    value={allValues.zip}
                  />
                </Form.Group>
              </Row>
            </>
          )}
          <Row className="mb-5">
            <h3 className="mt-5 mb-3">Billing Information</h3>
            <hr></hr>

            <Col span={4}>
              <Button onClick={copyInfo}>Copy Information From Above</Button>
            </Col>
          </Row>
          {loading && <Loader />}
          {!loading && (
            <>
              {" "}
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
            </>
          )}
        </Form>
      </Container>
    </div>
  );
};

export default CustomerSummary;
