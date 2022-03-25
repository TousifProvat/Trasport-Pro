import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import "./searchDriver.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import useContext from "../Hooks/useContext";
const SearchDrivers = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validated, setValidated] = useState(false);
  const { driverDate } = useContext();
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  // console.log(driverDate);
  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-3">Search Drivers</h3>
        <hr></hr>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>ID</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="ID Number"
                defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Terminal</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Terminal</option>
                <option value="EG Egales">EG Egales</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Status</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending Hire">Pending Hire</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Retention Rate</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Retention Rate</option>
                <option value="0-90">0-90</option>
                <option value="91-180">91-180</option>
                <option value="181-270">181-270</option>
                <option value="270+">270+</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Company Driver</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Company Driver</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Term Reason </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Term Reason</option>
                <option value="Don't Get Enough Loads">
                  Don't Get Enough Loads
                </option>
                <option value="Don't Get Home Enough">
                  Don't Get Home Enough
                </option>
                <option value="Get Quite Lease Other">
                  Get Quite Lease Other
                </option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>First Name</Form.Label>
              <Form.Control required type="text" placeholder="First Name" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Last Name</Form.Label>
              <Form.Control required type="text" placeholder="Last Name" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Medical Condition</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Medical Condition</option>
                <option value="Crrective Lenses">Crrective Lenses</option>
                <option value="Dieabetes">Dieabetes</option>
                <option value="Hearing Aid">Hearing Aid</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Subject to Work Comp </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Subject to Work Comp</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control required type="number" placeholder="Phone Number" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>CDL # </Form.Label>
              <Form.Control required type="text" placeholder="CDL Number" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>State </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>CDL State </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select CDL State</option>
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
              <Form.Label>Load ID</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Load ID Number"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>CDL Matches Physical</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select CDL Matches Physical State</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Has Active TWIC?</Form.Label>
              <Form.Check
                required
                label="Yes"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>CDL Exp Date</p>
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
              <Form.Label>Dispatcher</Form.Label>
              <Form.Control required type="text" placeholder="Dispatcher" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Last MVR Date </p>
              <DayPickerInput
                onDayChange={(day) => console.log(day)}
                className="datePicker"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Dispatch Group</p>
              <Form.Select aria-label="Default select example">
                <option>Select Dispatcher Group</option>
                {/* <option value="Yes">Yes</option>
                <option value="No">No</option> */}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Next Review Date</p>
              <DayPickerInput
                onDayChange={(day) => console.log(day)}
                className="datePicker"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Recruiter</p>
              <Form.Control required type="text" placeholder="Recruiter Name" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Physical Due Date</p>
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
              <p>Recruiting Source</p>
              <Form.Select aria-label="Default select example">
                <option>Select Recruiting Source</option>
                <option value="Direct Call">Direact Call</option>
                <option value="Driver Refereal">Driver Refereal</option>
                <option value="Employee Referal">Employee Referal</option>
                <option value="Facebook">Facebook</option>
                <option value="Indeed">Indeed</option>
                <option value="Other">Other</option>
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
              <p>Hirirng Eligibility</p>
              <Form.Select aria-label="Default select example">
                <option>Select Hiring Eligibility</option>
                <option value="Eligible For Rehire">Eligible For Rehire</option>
                <option value="Do Not Rehire">Do Not Rehire</option>
                <option value="Deceased">Deceased</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Hire Date</p>
              <DayPickerInput
                onDayChange={(day) => console.log(day)}
                className="datePicker"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Tractor ID</p>
              <Form.Control required type="number" placeholder="Tractor ID" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Term Date </p>
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
              <p>Trailer ID</p>
              <Form.Control required type="number" placeholder="Trailer ID" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Resident Exp Date </p>
              <DayPickerInput
                onDayChange={(day) => console.log(day)}
                className="datePicker"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>SSN(Last 4 Digits) </p>
              <Form.Control required type="number" placeholder="SSN ID" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>No Loads in Last </p>
              <Form.Select aria-label="Default select example">
                <option>Select No Loads in Last</option>
                <option value="5 days">5 days</option>
                <option value="10 Days">10 Days</option>
                <option value="15 Days">15 Days</option>
                <option value="30 Days">30 Days</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>EOBR</p>
              <Form.Select aria-label="Default select example">
                <option>Select EOBR</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>EOBR Type</p>
              <Form.Select aria-label="Default select example">
                <option>Select EOBR Type</option>
                <option value="Geotab">Geotab</option>
                <option value="M2M in Motion">M2M in Motion</option>
                <option value="People Net">People Net</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Driver Posting </p>
              <Form.Select aria-label="Default select example">
                <option>Select Driver Posting</option>
                <option value="Auto Update">Auto Update</option>
                <option value="Expiration Date">Expiration Date</option>
                <option value="None">None</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Has Image</p>
              <Form.Control required type="text" placeholder="Has Image" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Missing Image</p>
              <Form.Control required type="text" placeholder="Missing Image" />
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
          <Button variant="outline-primary" className="mb-5 me-3">
            Search
          </Button>
          <Button variant="outline-danger" className="mb-5 me-3">
            Clear
          </Button>
          <Button variant="outline-primary" className="mb-5 me-3">
            Save Search
          </Button>{" "}
        </Form>
      </Container>

      <Container fluid>
        <h3>Search Results (1)</h3>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Driver Status</th>
              <th>Driver</th>
              <th>City</th>
              <th>State</th>
              <th>Terminal</th>
              <th>Dispatcher</th>
              <th>Home Phone Number</th>
              <th>Cell Phone Number</th>
              <th>Email</th>
              <th>CB Handle</th>
              <th>CDL State</th>
              <th>CDL Exp.</th>
              <th>Physical Exp.</th>
              <th>Resident Exp.</th>
              <th>Annual Review</th>
              <th>Next Annual Review</th>
              <th>Hire Date</th>
              <th>Term</th>
              <th>Driver Posting</th>
            </tr>
          </thead>

          {driverDate.map((i) => (
            <tbody>
              <tr>
                <td>{i.id}</td>
                <td>{i.status}</td>
                <td>{i.driverName}</td>
                <td>{i.city}</td>
                <td>{i.state}</td>
                <td>{i.terminal}</td>
                <td>{i.dispatcher}</td>
                <td>{i.HomePhone}</td>
                <td>{i.cellPhone}</td>
                <td>{i.email}</td>
                <td>{i.cbHandle}</td>
                <td>{i.cdlState}</td>
                <td>{i.cdlExpDate}</td>
                <td>{i.physicalDueDate}</td>
                <td>{i.residentExpDate}</td>
                <td>{i.annualReview}</td>
                <td>{i.NxtAnnualReview}</td>
                <td>{i.hireDate}</td>
                <td>{i.termDate}</td>
                <Button
                  variant="outline-success"
                  className="mt-3 mb-3 ms-3"
                  onClick={handleShow}
                >
                  Post
                </Button>{" "}
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Driver Posting</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Row>
                      <Col>
                        <p>
                          Driver:{" "}
                          <strong>
                            {i.id} --- {i.driverName}
                          </strong>
                        </p>
                      </Col>
                      <Col>
                        <Form.Select aria-label="Default select example">
                          <option>Select Posting Type</option>
                          <option value="Auto Update">Auto Update</option>
                          <option value="Expiration Date">
                            Expiration Date
                          </option>
                          <option value="None">None</option>
                        </Form.Select>
                      </Col>
                    </Row>

                    <FloatingLabel
                      controlId="floatingTextarea2"
                      label="Posting Note"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "100px", marginTop: "20px" }}
                      />
                    </FloatingLabel>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                      Save Record
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                      Clear
                    </Button>
                  </Modal.Footer>
                </Modal>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    </div>
  );
};

export default SearchDrivers;
