import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import "./searchCustomer.css";
import { DatePicker, Space } from "antd";
import useContext from "../Hooks/useContext";





const SearchCustomer = () => {




  const [allValues, setAllValues] = useState({});

  const changeHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };
  const { customerData } = useContext();
  const { RangePicker } = DatePicker;
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
        <h3 className="mt-5 mb-3">Search Customers</h3>
        <hr></hr>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Customer ID</Form.Label>
              <Form.Control
                name="customerId"
                onChange={changeHandler}
                type="text"
                placeholder="Customer ID"
                // defaultValue="Mark"
              />
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
                <option value="EG - Egals">EG - Egals</option>
              </Form.Select>

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
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
                <option value="Inactive - TBD">Inactive - TBD</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Specialty Billing?</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="specialityBilling"
                onChange={changeHandler}
              >
                <option>Select Specialty Billing?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Customer Type</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="customerType"
                onChange={changeHandler}
              >
                <option>Select Customer Type</option>
                <option value="3PL">3PL</option>
                <option value="Broker">Broker</option>
                <option value="Misc">Misc</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>C-TPAT</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="cTpat"
                onChange={changeHandler}
              >
                <option>Select Specialty C-TPAT</option>
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
              <Form.Label>Payment Method</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="paymentMethod"
                onChange={changeHandler}
              >
                <option>Select Specialty Billing?</option>
                <option value="Check">Check</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Wire">Wire</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>C-TPAT SVI Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="C-TPAT SVI Number"
                name="cTpatSviNumber"
                onnChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Net Terms</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="netTerms"
                onChange={changeHandler}
              >
                <option>Select Specialty Net Terms</option>
                <option value="Net 15">Net 15</option>
                <option value="Net 30">Net 30</option>
                <option value="Net 60">Net 60</option>
                <option value="Net 90">Net 90</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Mc Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Mc Code"
                name="mcCode"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Customer Name"
                name="customerName"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>D/B #</Form.Label>
              <Form.Control
                type="text"
                placeholder="D/B #"
                name="d/b"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Customer Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Customer Code"
                name="customerCode"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Federal ID (last 4 digits)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Federal ID (last 4 digits)"
                name="federalId"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Sales Person</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sales Person"
                name="salesPerson"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Credit Check Rec'd Date Start and End Date</p>

              <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Customer Service Rep"
                    name="creditCheckRecStartDate"
                    onChange={changeHandler}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Customer Service Rep"
                    name="creditCheckRecEndStartDate"
                    onChange={changeHandler}
                  />
                </Col>
              </Row>

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Customer Service Rep</Form.Label>
              <Form.Control
                type="text"
                placeholder="Customer Service Rep"
                name="customerServiceRep"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Date Added</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Customer Service Rep"
                    name="addedStartDate"
                    onChange={changeHandler}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Customer Service Rep"
                    name="addedEndDate"
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
              <p>Collections Group</p>

              <Form.Select
                aria-label="Default select example"
                name="collectionsGroup"
                onChange={changeHandler}
              >
                <option>Select Collections Group</option>
                <option value="Group A">Group A</option>
                <option value="Group B">Group B</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Load Balance</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Customer Service Rep"
                    name="loadBalanceStartDate"
                    onChange={changeHandler}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Customer Service Rep"
                    name="loadBalanceEndDate"
                    onChange={changeHandler}
                  />
                </Col>
              </Row>

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Collector</Form.Label>
              <Form.Control
                type="text"
                placeholder="Collector"
                name="collector"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Billing Deliverable</p>

              <Form.Select
                aria-label="Default select example"
                name="billingDeliverable"
                onChange={changeHandler}
              >
                <option>Select Billing Deliverable</option>
                <option value="None">None</option>
                <option value="Hard Copy">Hard Copy</option>
                <option value="Email">Email</option>
                <option value="Fax">Fax</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>No Loads in Last</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="noLoadInLast"
                onChange={changeHandler}
              >
                <option>Select No Loads in Last</option>
                <option value="1 Month">1 Month</option>
                <option value="2 Month">2 Month</option>
                <option value="3 Month">3 Month</option>
                <option value="4 Month">4 Month</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Address</p>
              <Form.Control
                type="text"
                placeholder="Address"
                name="address"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Has Images</Form.Label>
              <Form.Control
                type="text"
                placeholder="Has Images"
                name="hasImage"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>State (Radius)</p>
              
              <Row>
                <Col>
                  <Form.Select aria-label="Default select example" name="state(state)" onChange={changeHandler}>
                    <option>Select State</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Canada">Canada</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select aria-label="Default select example" name="state(radius)" onChange={changeHandler}>
                    <option>Select Radius</option>
                    <option value="15 miles">15 miles</option>
                    <option value="20 Miles">20 Miles</option>
                    <option value="30 Miles">30 Miles</option>
                  </Form.Select>
                </Col>
              </Row>
              
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Missing Images</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Missing Images"
                    name="missingImg"
                    onChange={changeHandler}
                  />
                </Col>
                <Col>
                  <Form.Check
                    required
                    label=" Missing All Images"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Col>
              </Row>
              
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
          <Button type="submit" variant="outline-primary" className="me-3">
            Save
          </Button>
          <Button variant="outline-danger" className="me-3">
            Cancel
          </Button>
          <Button type="submit" variant="outline-primary">
            Save Search
          </Button>
        </Form>
      </Container>

      <Container fluid>
        <h3 className="mt-5 mb-3">Search Results (1)</h3>
        <hr></hr>
        <Button variant="outline-dark" className="me-3">
          Print Results
        </Button>

        <Table striped bordered hover className="mt-5 mb-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Code</th>
              <th>Type</th>
              <th>Company</th>
              <th>Credit Status</th>
              <th>City</th>
              <th>State</th>
              <th>Terminal</th>
              <th>Sales Rep.</th>
              <th>Cust. Serv. Rep.</th>
              <th>Collector</th>
              <th>Office Phone</th>
              <th>Email</th>
              <th>Date Added</th>
              <th>Total Revenue</th>
              <th>Total Loads</th>
              <th>Last Loads</th>
              <th>Load Balance</th>
            </tr>
          </thead>
          {customerData.map((i) => (
            <tbody>
              <tr>
                <td>{i.id}</td>
                <td>{i.customerCode}</td>
                <td>{i.type}</td>
                <td>{i.company}</td>
                <td>{i.creditStatus}</td>
                <td>{i.city}</td>
                <td>{i.state}</td>
                <td>{i.terminal}</td>
                <td>{i.SalesRep}</td>
                <td>{i.lastServRep}</td>
                <td>{i.collector}</td>
                <td>{i.officePhone}</td>
                <td>{i.email}</td>
                <td>{i.dateAddress}</td>
                <td>{i.totalRevenue}</td>
                <td>{i.totalLoad}</td>
                <td>{i.lastLoad}</td>
                <td>{i.balance}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    </div>
  );
};

export default SearchCustomer;
