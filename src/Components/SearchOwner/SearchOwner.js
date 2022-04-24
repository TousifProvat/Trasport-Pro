import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import useContext from "../Hooks/useContext";
import "./searchOwner.css";

const SearchOwner = () => {
  const [allValues, setAllValues] = useState({});

  const changeHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };

  //form validator button

  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(allValues);

    setValidated(true);
  };

  ///////////////////////////

  return (
    <>
      <div>
        <Container className="mt-5 mb-3">
          <h4>Search Owner</h4>
          <hr></hr>
          <p className="text-center lead">Search For Owners</p>

          <Form validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-4">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="status"
                  onBlur={changeHandler}
                >
                  <option>Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Terminals</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="terminals"
                  onChange={changeHandler}
                >
                  <option>Select Terminals</option>
                  <option value="EG">EG</option>
                  <option value="BG">BG</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>ID</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="number"
                    placeholder="ID number"
                    aria-describedby="inputGroupPrepend"
                    name="id"
                    onChange={changeHandler}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Code</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Code"
                  name="code"
                  onChange={changeHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  onChange={changeHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Company Name"
                  name="companyName"
                  onChange={changeHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid company name.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>State</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="state"
                  onChange={changeHandler}
                >
                  <option>Select State</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Canada">Canada</option>
                  <option value="Quebec">Quebec</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Group</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="group"
                  onChange={changeHandler}
                >
                  <option>Select Group</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>Tractor ID</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Tracktor ID"
                  name="tracktorID"
                  onChange={changeHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid company name.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Trailor ID</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Trailor ID"
                  name="trailorId"
                  onChange={changeHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Pay/Bill Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Bill Name"
                  name="billName"
                  onChange={changeHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>Bill ID</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Bill ID"
                  name="billID"
                  onChange={changeHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid company name.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Default Pay Percentage</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Pay Percentage"
                  name="defaultPayPercentage"
                  onChange={changeHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Factored</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="factored"
                  onChange={changeHandler}
                >
                  <option>Select Factored</option>
                  <option value="Yes">Alaska</option>
                  <option value="No">Canada</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>Factor Payment to</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select Factor Payments</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid company name.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Print 1099?</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="print1099"
                  onChange={changeHandler}
                >
                  <option>Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Has Image</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="hasImage"
                  onChange={changeHandler}
                >
                  <option>Select Options</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>Missing Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Missing Image"
                  name="missingImg"
                  onChange={changeHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid company name.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button variant="outline-primary" type="submit" className="mb-5">
              Search Owner
            </Button>
            <Button variant="outline-danger" className="mb-5 ms-3">
              Clear
            </Button>{" "}
            <Button variant="outline-primary" className="mb-5 ms-3">
              Save Search
            </Button>{" "}
          </Form>
        </Container>
        <Container fluid className="search-result">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Status</th>
                <th>Code</th>
                <th>Owner</th>
                <th>Company</th>
                <th>Group</th>
                <th>Phone Number</th>
                <th>Cell Phone Number</th>
                <th>City</th>
                <th>State</th>
                <th>Active Tractors</th>
                <th>Active Trailers</th>
                <th>Active Drivers</th>
                <th>Pay%</th>
              </tr>
            </thead>
          </Table>
        </Container>
      </div>
    </>
  );
};

export default SearchOwner;
