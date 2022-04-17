import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const SearchLoad = () => {
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
      <Container className="mt-5 mb-3">
        <h2>Search load</h2>
        <hr></hr>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Load Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Load Id"
                //defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Dispatch Status</Form.Label>
              {/* <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              /> */}
              <Form.Select aria-label="Default select example">
                <option>select dispatch status</option>
                <option value="Canceled">Canceled</option>
                <option value="Delivered">Delivered</option>
                <option value="Dispatched">Dispatched</option>
                <option value="Planned">Planned</option>
                <option value="Quote">Quote</option>
                <option value="Ready to dispatch">Ready to dispatch</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Dispatch Id</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Dispatch Id"
                  aria-describedby="inputGroupPrepend"
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Billing Status</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>select billing status</option>
                <option value="Approved for billing">
                  Approved for billing
                </option>
                <option value="Billing Open">Billing Open</option>
                <option value="Billing Complete">Billing Complete</option>
                <option value="Planned">Planned</option>
                <option value="factor Review">factor Review</option>
                <option value="Pending Review">Pending Review</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Doc Status</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>select doc status</option>
                <option value="Billed without document">
                  Billed without document
                </option>
                <option value="Document Received">Document Received</option>
                <option value="Not Required">Not Required</option>
                <option value="Waiting for document">
                  Waiting for document
                </option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Shipper Code</Form.Label>
              <Form.Control type="text" placeholder="Shipper Code" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Settlements Created?</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>select billing status</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Consignee Name</Form.Label>
              {/* <Form.Select aria-label="Default select example">
                <option>select doc status</option>
                <option value="Billed without document">
                  Billed without document
                </option>
                <option value="Document Received">Document Received</option>
                <option value="Not Required">Not Required</option>
                <option value="Waiting for document">
                  Waiting for document
                </option>
              </Form.Select> */}
              <Form.Control type="text" placeholder="Consignee Name" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Has Quickpay?</Form.Label>
              {/* <Form.Control type="text" placeholder="Shipper Code" /> */}
              <Form.Check
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
              <Form.Label>Consignee Code</Form.Label>
              {/* <Form.Select aria-label="Default select example">
                <option>select billing status</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select> */}
              <Form.Control type="text" placeholder="Consignee Code" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid code.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Rebill Status</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>select rebilled status</option>
                <option value="Not Rebilled">Not Rebilled</option>
                <option value="Rebilled">Rebilled</option>
              </Form.Select>
              {/* <Form.Control type="text" placeholder="Consignee Name" /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Origin (City / State)</Form.Label>
              {/* <Form.Control type="text" placeholder="Shipper Code" /> */}
              <Row>
                <Col>
                  <Form.Control type="text" placeholder="City" />
                </Col>
                <Col>
                  <Form.Select aria-label="Default select example">
                    <option>select State</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Arizona">Arizona</option>
                    <option value="California">California</option>
                    <option value="Canada">Canada</option>
                    <option value="Quebec">Quebec</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select aria-label="Default select example">
                    <option>select Distance</option>
                    <option value="100 Miles">100 Miles</option>
                    <option value="200 Miles">200 Miles</option>
                    <option value="300 Miles">300 Miles</option>
                  </Form.Select>
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Commodity</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>select Comodity</option>
                <option value="FAK">FAK</option>
              </Form.Select>
              {/* <Form.Control type="text" placeholder="Consignee Code" /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid code.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Destination (City / State) </Form.Label>
              <Row>
                <Col>
                  <Form.Control type="text" placeholder="City" />
                </Col>
                <Col>
                  <Form.Select aria-label="Default select example">
                    <option>select State</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Arizona">Arizona</option>
                    <option value="California">California</option>
                    <option value="Canada">Canada</option>
                    <option value="Quebec">Quebec</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select aria-label="Default select example">
                    <option>select Distance</option>
                    <option value="100 Miles">100 Miles</option>
                    <option value="200 Miles">200 Miles</option>
                    <option value="300 Miles">300 Miles</option>
                  </Form.Select>
                </Col>
              </Row>
              {/* <Form.Control type="text" placeholder="Consignee Name" /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Commodity Description</Form.Label>
              <Form.Control type="text" placeholder="Commodity Description" />

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Terminal</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>select Comodity</option>
                <option value="EG-Egales">EG-Egales</option>
              </Form.Select>
              {/* <Form.Control type="text" placeholder="Consignee Code" /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid code.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Stopoff Service Level</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>select Stopoff Service Level</option>
                <option value="File Appointment">File Appointment</option>
                <option value="Flexible / FCFS">Flexible / FCFS</option>
                <option value="Priority / Crane">Priority / Crane</option>
              </Form.Select>
              {/* <Form.Control type="text" placeholder="Consignee Name" /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Pickup Date</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
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
              <Form.Label>Pickup Service Level</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>select Pickup Service Level</option>
                <option value="File Appointment">File Appointment</option>
                <option value="Flexible / FCFS">Flexible / FCFS</option>
                <option value="Priority / Crane">Priority / Crane</option>
              </Form.Select>
              {/* <Form.Control type="text" placeholder="Consignee Code" /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid code.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Dispatch Type</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>select Dispatch Type</option>
                <option value="Owner Operator">Owner Operator</option>
                <option value="Broker Carrier">Broker Carrier</option>
              </Form.Select>
              {/* <Form.Control type="text" placeholder="Consignee Name" /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Delivery Date</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
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
              <Form.Label>Customer Name</Form.Label>
              {/* <Form.Select aria-label="Default select example">
                <option>select Pickup Service Level</option>
                <option value="File Appointment">File Appointment</option>
                <option value="Flexible / FCFS">Flexible / FCFS</option>
                <option value="Priority / Crane">Priority / Crane</option>
              </Form.Select> */}
              <Form.Control type="text" placeholder="Customer Name" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid code.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Delivery Service Level</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row>
              {/* <Form.Control type="text" placeholder="Consignee Name" /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Customer ID</Form.Label>

              <Form.Control type="text" placeholder="Customer ID" />

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Dispatch Date</Form.Label>
              {/* <Form.Select aria-label="Default select example">
                <option>select Pickup Service Level</option>
                <option value="File Appointment">File Appointment</option>
                <option value="Flexible / FCFS">Flexible / FCFS</option>
                <option value="Priority / Crane">Priority / Crane</option>
              </Form.Select> */}
              {/* <Form.Control type="text" placeholder="Customer Name" /> */}
              <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid code.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Customer Code</Form.Label>

              <Form.Control type="text" placeholder="Customer Code" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Billing Date</Form.Label>

              {/* <Form.Control type="text" placeholder="Customer ID" /> */}
              <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
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
              <Form.Label>Driver</Form.Label>
              {/* <Form.Select aria-label="Default select example">
                <option>select Pickup Service Level</option>
                <option value="File Appointment">File Appointment</option>
                <option value="Flexible / FCFS">Flexible / FCFS</option>
                <option value="Priority / Crane">Priority / Crane</option>
              </Form.Select> */}
              <Form.Control type="text" placeholder="Driver" />
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid code.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Date Entered</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row>
              {/* <Form.Control type="text" placeholder="Customer Code" /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Tractor</Form.Label>

              <Form.Control type="text" placeholder="Tractor" />
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>BOL Date</Form.Label>
              {/* <Form.Select aria-label="Default select example">
                <option>select Pickup Service Level</option>
                <option value="File Appointment">File Appointment</option>
                <option value="Flexible / FCFS">Flexible / FCFS</option>
                <option value="Priority / Crane">Priority / Crane</option>
              </Form.Select> */}
              {/* <Form.Control type="text" placeholder="Driver" /> */}
              <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid code.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Trailer</Form.Label>
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}
              <Form.Control type="text" placeholder="Trailer" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Date Factored</Form.Label>

              {/* <Form.Control type="text" placeholder="Tractor" /> */}
              <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
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
              <Form.Label>Trailer Type</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>select Pickup Service Level</option>
                <option value="Flatbed">Flatbed</option>
                <option value="Power Only">Power Only</option>
                <option value="Refeer">Refeer</option>
                <option value="Van">Van</option>
              </Form.Select>
              {/* <Form.Control type="text" placeholder="Driver" /> */}
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid code.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Billing Hold</Form.Label>
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}
              {/* <Form.Control type="text" placeholder="Trailer" /> */}
              <Form.Select aria-label="Default select example">
                <option>select Billing Hold</option>
                <option value="Hold Enable">Hold Enable</option>
                <option value="Not Hold">Not Hold</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Broker Carrier</Form.Label>

              <Form.Control type="text" placeholder="Broker Carrier" />
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Has Permits?</Form.Label>
              {/* <Form.Select aria-label="Default select example">
                <option>select Pickup Service Level</option>
                <option value="Flatbed">Flatbed</option>
                <option value="Power Only">Power Only</option>
                <option value="Refeer">Refeer</option>
                <option value="Van">Van</option>
              </Form.Select> */}
              {/* <Form.Control type="text" placeholder="Driver" /> */}
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}
              <Form.Check
                required
                label="Yes"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid code.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Dispatcher </Form.Label>
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}
              <Form.Control type="text" placeholder="Dispatcher	" />
              {/* <Form.Select aria-label="Default select example">
                <option>select Billing Hold</option>
                <option value="Hold Enable">Hold Enable</option>
                <option value="Not Hold">Not Hold</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Requires Escorts?</Form.Label>

              {/* <Form.Control type="text" placeholder="Broker Carrier" /> */}
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}
              <Form.Check
                required
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
              <Form.Label>Order Taker </Form.Label>
              {/* <Form.Select aria-label="Default select example">
                <option>select Pickup Service Level</option>
                <option value="Flatbed">Flatbed</option>
                <option value="Power Only">Power Only</option>
                <option value="Refeer">Refeer</option>
                <option value="Van">Van</option>
              </Form.Select> */}
              <Form.Control type="text" placeholder="Order Taker" />
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}

              <Form.Control.Feedback type="invalid">
                Please provide a valid code.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Split Load? </Form.Label>
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}
              <Form.Check
                required
                label="Yes"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
              {/* <Form.Select aria-label="Default select example">
                <option>select Billing Hold</option>
                <option value="Hold Enable">Hold Enable</option>
                <option value="Not Hold">Not Hold</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Billing Collector </Form.Label>

              <Form.Control type="text" placeholder="Billing Collector	" />
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}
              {/* <Form.Check
                required
                label="Yes"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Hazmat? </Form.Label>
              {/* <Form.Select aria-label="Default select example">
                <option>select Pickup Service Level</option>
                <option value="Flatbed">Flatbed</option>
                <option value="Power Only">Power Only</option>
                <option value="Refeer">Refeer</option>
                <option value="Van">Van</option>
              </Form.Select> */}
              <Form.Check
                required
                label="Yes"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}

              <Form.Control.Feedback type="invalid">
                Please provide a valid code.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Billed By </Form.Label>
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}
              <Form.Control type="text" placeholder="Billed By" />
              {/* <Form.Select aria-label="Default select example">
                <option>select Billing Hold</option>
                <option value="Hold Enable">Hold Enable</option>
                <option value="Not Hold">Not Hold</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Tracking Enabled?</Form.Label>

              {/* <Form.Control type="text" placeholder="Billing Collector	" /> */}

              <Form.Check
                required
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
              <Form.Label>Customer Sales Person</Form.Label>
              {/* <Form.Select aria-label="Default select example">
                <option>select Pickup Service Level</option>
                <option value="Flatbed">Flatbed</option>
                <option value="Power Only">Power Only</option>
                <option value="Refeer">Refeer</option>
                <option value="Van">Van</option>
              </Form.Select> */}
              <Form.Control type="text" placeholder="Customer Sales Person" />
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}

              <Form.Control.Feedback type="invalid">
                Please provide a valid code.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Created From Express Load?</Form.Label>
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}
              <Form.Check
                required
                label="Yes"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
              {/* <Form.Select aria-label="Default select example">
                <option>select Billing Hold</option>
                <option value="Hold Enable">Hold Enable</option>
                <option value="Not Hold">Not Hold</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Customer Service Rep</Form.Label>

              <Form.Control type="text" placeholder="Customer Service Rep" />

              {/* <Form.Check
                required
                label="Yes"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Division</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>select Division </option>
              </Form.Select>
              {/* <Form.Control type="text" placeholder="Customer Sales Person" /> */}
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}

              <Form.Control.Feedback type="invalid">
                Please provide a valid code.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Specialty Billing Customer</Form.Label>
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}
              <Form.Check
                required
                label="Yes"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
              {/* <Form.Select aria-label="Default select example">
                <option>select Billing Hold</option>
                <option value="Hold Enable">Hold Enable</option>
                <option value="Not Hold">Not Hold</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Bill of Lading</Form.Label>

              <Form.Control type="text" placeholder="Bill of Lading	" />

              {/* <Form.Check
                required
                label="Yes"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Has Image</Form.Label>
              {/* <Form.Select aria-label="Default select example">
                <option>select Division </option>
              </Form.Select> */}
              <Form.Control type="text" placeholder="Has Image	" />
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}

              <Form.Control.Feedback type="invalid">
                Please provide a valid code.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Manifest</Form.Label>
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}
              <Form.Control type="text" placeholder="Manifest" />
              {/* <Form.Select aria-label="Default select example">
                <option>select Billing Hold</option>
                <option value="Hold Enable">Hold Enable</option>
                <option value="Not Hold">Not Hold</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Missing Image</Form.Label>

              <Form.Control type="text" placeholder="Missing Image" />

              {/* <Form.Check
                required
                label="Yes"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Pickup</Form.Label>
              {/* <Form.Select aria-label="Default select example">
                <option>select Division </option>
              </Form.Select> */}
              <Form.Control type="text" placeholder="Pickup" />
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}

              <Form.Control.Feedback type="invalid">
                Please provide a valid code.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>PO</Form.Label>
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}
              <Form.Control type="text" placeholder="PO" />
              {/* <Form.Select aria-label="Default select example">
                <option>select Billing Hold</option>
                <option value="Hold Enable">Hold Enable</option>
                <option value="Not Hold">Not Hold</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Seal</Form.Label>

              <Form.Control type="text" placeholder="Seal" />

              {/* <Form.Check
                required
                label="Yes"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Container</Form.Label>
              {/* <Form.Select aria-label="Default select example">
                <option>select Division </option>
              </Form.Select> */}
              <Form.Control type="text" placeholder="Container" />
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}

              <Form.Control.Feedback type="invalid">
                Please provide a valid code.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Reference</Form.Label>
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}
              <Form.Control type="text" placeholder="Reference" />
              {/* <Form.Select aria-label="Default select example">
                <option>select Billing Hold</option>
                <option value="Hold Enable">Hold Enable</option>
                <option value="Not Hold">Not Hold</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Billing Equipment</Form.Label>

              <Form.Control type="text" placeholder="Billing Equipment" />

              {/* <Form.Check
                required
                label="Yes"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              /> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Internal Comments</Form.Label>
              {/* <Form.Select aria-label="Default select example">
                <option>select Division </option>
              </Form.Select> */}
              <Form.Control type="text" placeholder="Internal Comments" />
              {/* <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Commodity Description"
                  />
                </Col>
              </Row> */}

              <Form.Control.Feedback type="invalid">
                Please provide a valid code.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Freight Bill Total</Form.Label>
              <Row>
                <Col>
                  <Form.Control type="text" placeholder="From" />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="To" />
                </Col>
              </Row>
              {/* <Form.Control type="text" placeholder="Reference" /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>select Billing Hold</option>
                <option value="Hold Enable">Hold Enable</option>
                <option value="Not Hold">Not Hold</option>
              </Form.Select> */}
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
          <Button type="submit" variant="outline-primary">
            Search
          </Button>{" "}
          <Button type="" variant="outline-danger">
            Clear
          </Button>{" "}
          <Button type="submit" variant="outline-primary">
            Save Search
          </Button>{" "}
        </Form>
      </Container>
    </div>
  );
};

export default SearchLoad;
