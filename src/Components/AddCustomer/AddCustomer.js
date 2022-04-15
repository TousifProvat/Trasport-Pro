import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import "./addCustomer.css";



const AddCustomer = () => {



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
      <Container fluid>
        <h3 className="mt-5 mb-3">Customer Information</h3>
        <hr></hr>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Customer Type</Form.Label>

              <Form.Select
                aria-label="Default select example"
                required
                name="customerType"
                onChange={changeHandler}
              >
                <option>Select Customer Type</option>
                <option value="3PL">3PL</option>
                <option value="Broker">Broker</option>
                <option value="Misc">Misc</option>
                <option value="Shipper">Shipper</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Terminal</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="terminal"
                onChange={changeHandler}
              >
                <option>Select Terminal</option>
                <option value="EG - Egales">EG - Egales</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Customer Code</Form.Label>

              <Form.Control
                type="text"
                placeholder="Customer Code"
                aria-describedby="inputGroupPrepend"
                required
                name="customerCode"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Sales Representative</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sales Representative"
                name="salesRepresentative"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company Name"
                name="companyName"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Customer Service Representative</Form.Label>
              <Form.Control
                type="text"
                placeholder="Customer Service Representative"
                name="customerServiceRepresentative"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Address</Form.Label>

              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  name="address"
                  onChange={changeHandler}
                />
              </FloatingLabel>

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Collections Representative</Form.Label>
              <Form.Control
                type="text"
                placeholder="Collections Representative"
                name="collectionsRepresentative"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Collections Group</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="collectionsGroup"
                onChange={changeHandler}
              >
                <option>Select Collections Group</option>
                <option value="Group - A">Group - A</option>
                <option value="Group - B">Group - B</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                required
                name="city"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>State</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="state"
                onChange={changeHandler}
              >
                <option>Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Canada">Canada</option>
                <option value="Quebec">Quebec</option>
                <option value="california">california</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Toll-free Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Toll-free Phone Number"
                name="tollFreePhoneNumber"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>CityContract Date</Form.Label>

              <Form.Control
                type="text"
                placeholder="Toll-free Phone Number"
                name="cityContactDate"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Fuel Surcharge</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="fuelSurcharge"
                onChange={changeHandler}
              >
                <option>Select Fuel Surcharge</option>
                <option value="Per Mile">Per Mile</option>
                <option value="Percent Per Load">Percent Per Load</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Fax Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Fax Phone Number"
                name="faxPhoneNumber"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone Number"
                name="phoneNumber2"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Fuel Surcharge Region</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="fuelSurchargeRegion"
                onChange={changeHandler}
              >
                <option>Select Fuel Fuel Surcharge Region</option>
                <option value="California">California</option>
                <option value="East Coast">East Coast</option>
                <option value="Gulf Coast">Gulf Coast</option>
                <option value="US Average">US Average</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Company Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company Email"
                name="companyEmail"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Factor Payments</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="factoryPayment"
                onChange={changeHandler}
              >
                <option>Select Factor Payments</option>
                <option value="Non Factored">Non Factored</option>
                <option value="Apex">Apex</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                placeholder="Website"
                name="website"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Payment Method</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="paymentMethod"
                onChange={changeHandler}
              >
                <option>Select Payment Method</option>
                <option value="Check">Check</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Wire">Wire</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Business Hours</Form.Label>
              <Form.Control
                type="text"
                placeholder="Business Hours"
                name="businessHour"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Report Credit Data?</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="reportCreditData"
                onChange={changeHandler}
              >
                <option>Select Report Credit Data</option>
                <option value="Yes, Send Report">Yes, Send Report</option>
                <option value="Don't Send Report">Don't Send Report</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Dispatch Notes</Form.Label>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  name="dispatchNotes"
                  onChange={changeHandler}
                />
              </FloatingLabel>

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Deliverable Receipt Options</Form.Label>

              <Row>
                <Col>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="deliveredReceiptOptions"
                      onChange={changeHandler}
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Hard Copy
                    </label>
                  </div>
                </Col>
                <Col>
                  <Form.Check
                    name="email"
                    onChange={changeHandler}
                    label="Email"
                    feedbackType="invalid"
                  />
                </Col>
                <Col>
                  <Form.Check
                    name="edi"
                    onChange={changeHandler}
                    label="EDI"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Col>
                <Col>
                  <Form.Check
                    name="ftp"
                    onChange={changeHandler}
                    label="FTP"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Dispatcher Notice</Form.Label>

              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Dispatcher Notice"
                  style={{ height: "100px" }}
                  name="dispatcherNotice"
                  onChange={changeHandler}
                />
              </FloatingLabel>

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Row>
                <Col>
                  <Form.Label>Combine Billing</Form.Label>
                  <Form.Check
                    name="combineBilling"
                    onChange={changeHandler}
                    label="Yes"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Col>
                <Col>
                  <Form.Label>Specialty Billing</Form.Label>
                  <Form.Check
                    name="specialityBilling"
                    onChange={changeHandler}
                    label="Yes"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Col>
                <Col>
                  <Form.Label>
                    Sister Company (no terminal commission)
                  </Form.Label>
                  <Form.Check
                    name="yes"
                    onChange={changeHandler}
                    label="Yes"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Col>
              </Row>

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Tracking Requirements</Form.Label>

              <FloatingLabel
                controlId="floatingTextarea2"
                label="Tracking Requirements"
                name="trackingRequirements"
                onChange={changeHandler}
              >
                <Form.Control
                  as="textarea"
                  placeholder="Tracking Requirements"
                  style={{ height: "100px" }}
                  name="trackingRequirements"
                  onChange={changeHandler}
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>EDI Billing Map</Form.Label>

              <Form.Select aria-label="Default select example">
                <option>Select EDI Billing Map</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>EDI Billing Map</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="bdiBillingMap"
                onChange={changeHandler}
              >
                <option>Select EDI Billing Map</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Pay Gross Reduction</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Flat Rate"
                    name="flatRate"
                    onChange={changeHandler}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Percentage"
                    name="percentage"
                    onChange={changeHandler}
                  />
                </Col>
              </Row>

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Load Notification</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="loadModification"
                onChange={changeHandler}
              >
                <option>Select EDI Billing Map</option>
                <option value="1 Hour">1 Hour</option>
                <option value="2 Hour">2 Hour</option>
                <option value="3 Hour">3 Hour</option>
                <option value="4 Hour">4 Hour</option>
                <option value="5 Hour">5 Hour</option>
                <option value="6 Hour">6 Hour</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>EDI Update Frequency </Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="ediUpdateFrequently"
                onChange={changeHandler}
              >
                <option>Select EDI Billing Map</option>
                <option value="1 Hour">1 Hour</option>
                <option value="2 Hour">2 Hour</option>
                <option value="3 Hour">3 Hour</option>
                <option value="4 Hour">4 Hour</option>
                <option value="5 Hour">5 Hour</option>
                <option value="6 Hour">6 Hour</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Can broker loads?</Form.Label>
              <Form.Check
                name="canBrokerLoad"
                onChange={changeHandler}
                label="Do not allow brokerage"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Can post loads to external board?</Form.Label>

              <Form.Check
                name="canPostLoadExternal"
                onChange={changeHandler}
                label="Do not allow brokerage"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Special Billing Instructions</Form.Label>

              <FloatingLabel
                controlId="floatingTextarea2"
                label="Special Billing Instructions"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Dispatcher Notice"
                  style={{ height: "100px" }}
                  name="dispatcherNote2"
                  onhange={changeHandler}
                />
              </FloatingLabel>

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>External Billing Notes</Form.Label>

              <FloatingLabel
                controlId="floatingTextarea2"
                label="External Billing Notes"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Dispatcher Notice"
                  style={{ height: "100px" }}
                  name="externalBillingNotes"
                  onhange={changeHandler}
                />
              </FloatingLabel>

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Form>
      </Container>

      <Container fluid>
        <h3 className="mt-5 mb-3">Insurance Information</h3>
        <hr></hr>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Customer Contract Validated</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="cusomerContractValidated"
                onChange={changeHandler}
              >
                <option>Select Customer Contract Validated</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>COI Sent</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="coiSent"
                onChange={changeHandler}
              >
                <option>Select COI Sent</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Surety Bond Company</Form.Label>

              <Form.Control
                type="text"
                placeholder="Surety Bond Company"
                aria-describedby="inputGroupPrepend"
                name="suretyBondCompany"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Cargo Addendum (Max Liability)</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="cargoAddendum"
                onChange={changeHandler}
              >
                <option>Select COI Sent</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>COI Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="COI Address"
                name="coiAddress"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Bond Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Bond Number"
                name="bondNumber"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Customer AL Required</Form.Label>
              <Form.Control
                type="text"
                placeholder="Customer AL Required"
                name="cusomerAlRequired"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>COI Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="COI Zip"
                name="coiZip"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Bond Contact</Form.Label>
              <Form.Control
                type="text"
                placeholder="Bond Contact"
                name="bondContarct"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Customer GL Required</Form.Label>
              <Form.Control
                type="text"
                placeholder="Customer GL Required"
                name="customerGlRequired"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>COI City</Form.Label>
              <Form.Control
                type="text"
                placeholder="COI City"
                name="coiCity"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Bond Contact Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Bond Contact Phone"
                name="bondCntarctPhone"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Customer Cargo Required</Form.Label>
              <Form.Control
                type="text"
                placeholder="Customer Cargo Required"
                name="customercargoRequired"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>COI State</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="coiState"
                onChange={changeHandler}
              >
                <option>Select COI State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Canada">Canada</option>
                <option value="California">California</option>
                <option value="Quebec">Quebec</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Bond Contact Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Bond Contact Email"
                name="bondContactEmail"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Customer Waiver of Subrogation</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="customerWaiver"
                onChange={changeHandler}
              >
                <option>Select COI Sent</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>COI Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="COI Email"
                name="coiEmail"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Cargo Max Liability Capped</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="cargomaxLiabilityCapped"
                onChange={changeHandler}
              >
                <option>Select COI Sent</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>COI Fax </Form.Label>
              <Form.Control
                type="text"
                placeholder="COI Fax"
                name="coifax"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>COI Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="COI Email"
                name="coiEmail2"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Special Cert Language</Form.Label>

              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  name="specialCertLanguage"
                  onChange={changeHandler}
                />
              </FloatingLabel>

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Special Requirements</Form.Label>

              <FloatingLabel
                controlId="floatingTextarea2"
                label="Special Requirements"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  name="specialRequirments"
                  onChange={changeHandler}
                />
              </FloatingLabel>

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>C-TPAT</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="cTpat"
                onChange={changeHandler}
              >
                <option>Select C-TPAT</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>C-TPAT SVI Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="C-TPAT SVI Number"
                name="CtpatSviNumber"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Form>
      </Container>

      <Container fluid>
        <h3 className="mt-5 mb-3">Customer Credit Information</h3>
        <hr></hr>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Federal ID</Form.Label>
              <Form.Control
                name="federal_id"
                onChange={changeHandler}
                type="text"
                placeholder="Federal ID"
                // defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Credit App</Form.Label>

              <Form.Select aria-label="Default select example">
                <option>Select Credit App</option>
                <option value="Pending">Pending</option>
                <option value="Received">Received</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>SIC Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="SIC Code"
                aria-describedby="inputGroupPrepend"
                name="sicCode"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Credit Check Rec'd Date</Form.Label>
              {/*  */}
              <Form.Control
                type="date"
                placeholder="City"
                name="creditCheckDate"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>MC Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="MC Code"
                name="mcCode"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Credit Status</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="creditStatus"
                onChange={changeHandler}
              >
                <option>Select Credit Status</option>
                <option value="Active - COD">Active - COD</option>
                <option value="Active - Credit Approved">
                  Active - Credit Approved
                </option>
                <option value="Active - TBD">Active - TBD</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>DUNS Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="DUNS Number"
                name="DunsNumber"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Credit Status Change Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Credit Status Change Date"
                name="creditStatusChangeDate"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>DUNS Exp Date</Form.Label>

              <Form.Control
                type="date"
                placeholder="Credit Status Change Date"
                name="dunsExpDate"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Credit Rating</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="creditRating"
                onChange={changeHandler}
              >
                <option>Select Credit Rating</option>
                <option value="Average">Average</option>
                <option value="Bad">Bad</option>
                <option value="Good">Good</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Billing Fax Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Billing Fax Number"
                name="billingFaxNumber"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Credit Limit</Form.Label>
              <Form.Control
                type="text"
                placeholder="Credit Limit"
                name="creditLimit"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Billing Email</Form.Label>

              <Form.Control
                type="text"
                placeholder="Billing Email"
                name="billingEmail"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Credit Warning</Form.Label>
              <Form.Control
                type="text"
                placeholder="Credit Warning"
                name="creditWarning"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Open Load Balance</Form.Label>
              <Form.Control
                type="text"
                placeholder="Open Load Balance"
                name="openLoadBalance"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Credit Warning</Form.Label>

              <Form.Control
                type="text"
                placeholder="Credit Warning"
                name="creditWarning"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Open Load Balance</Form.Label>
              <Form.Control
                type="text"
                placeholder="Open Load Balance"
                name="openLoadBalance"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Enforce Credit/Term Limit</Form.Label>

              <Form.Check
                name="enforceCredittLimit"
                onChange={changeHandler}
                label="Yes"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Billed Load Balance</Form.Label>

              <Form.Control
                type="text"
                placeholder="Billed Load Balance"
                name="billedLoadBalance"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Net Terms</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="netTerm"
                onChange={changeHandler}
              >
                <option>Select Net Terms</option>
                <option value="Net 15">Net 15</option>
                <option value="Net 30">Net 30</option>
                <option value="Net 60">Net 60</option>
                <option value="Net 90">Net 90</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Avg Days To Pay (Load)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Avg Days To Pay (Load)"
                name="avgDaysToPay"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Misc Invoice Balance</Form.Label>

              <Form.Control
                type="text"
                placeholder="Misc Invoice Balance"
                name="miscInvoiceBalance"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Avg Days To Pay (Misc Invoice)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Avg Days To Pay (Misc Invoice)"
                name="avgDaysToPay(Misc Invoice)"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Open Credit Balance</Form.Label>
              <Form.Control
                type="text"
                placeholder="Open Credit Balance"
                name="openCreditBalance"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Last Ship Date</Form.Label>

              {/*  */}
              <Form.Control
                type="date"
                placeholder="Misc Invoice Balance"
                onChange={changeHandler}
                name="lastShipDate"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Last Billing Date</Form.Label>

              <Form.Control
                type="date"
                placeholder="Misc Invoice Balance"
                onChange={changeHandler}
                name="lastBillingDate"
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Number of Rebills</Form.Label>
              <Form.Control
                type="text"
                placeholder="Number of Rebills"
                name="numberOfReBills"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Loads YTD</Form.Label>
              
              <Form.Control
                type="text"
                placeholder="Misc Invoice Balance"
                name="loadYtd"
                onChange={changeHandler}
              />
              
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Loads Historic</Form.Label>
              <Form.Control type="text" placeholder="Loads Historic" name="loadHistoric" onChange={changeHandler} />
              
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
          <Button type="submit" variant="outline-primary" className="me-3 mb-5">
            Save
          </Button>
          <Button type="submit" variant="outline-primary" className="me-3 mb-5">
            Save And Add New
          </Button>
          <Button variant="outline-danger" className="mb-5">
            Cancel
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddCustomer;
