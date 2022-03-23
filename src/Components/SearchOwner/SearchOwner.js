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
  const [value, setValue] = useState({});
  const [terminalValue, setTerminalValue] = useState({});
  const [searchData, setSearchData] = useState([]);
  const { terminalData } = useContext();

  useEffect(() => {
    setSearchData(terminalData);
  }, [terminalData]);

  // const mapData = searchData.map((i) => { return i.terminal });
  // console.log(mapData);

  const handleSelectValue = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const handleTerminalChange = (e) => {
    e.preventDefault();
    setTerminalValue(e.target.value);
  };
  return (
    <>
      <div>
        <Container className="mt-5 mb-3">
          <h4>Search Owner</h4>
          <hr></hr>
          <p className="text-center lead">Search For Owners</p>

          <Form noValidate>
            <Row className="mb-4">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Status</Form.Label>
                {/* <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
              /> */}
                <Form.Select
                  aria-label="Default select example"
                  onBlur={handleSelectValue}
                >
                  <option>Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Terminals</Form.Label>
                {/* <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              /> */}
                <Form.Select
                  aria-label="Default select example"
                  onBlur={(e) => {
                    handleTerminalChange(e);
                  }}
                >
                  <option>Select Terminals</option>
                  <option value="EG">EG</option>
                  <option value="BG">BG</option>
                  {/* <option value="Inactive">Inactive</option> */}
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
                    required
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
                <Form.Control type="number" placeholder="Code" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" placeholder="Company Name" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid company name.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>State</Form.Label>
                {/* <Form.Control type="number" placeholder="Code" required /> */}
                <Form.Select aria-label="Default select example">
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
                {/* <Form.Control type="text" placeholder="Full Name" required /> */}
                <Form.Select aria-label="Default select example">
                  <option>Select Group</option>
                  {/* <option value="Alaska">Alaska</option>
                <option value="Canada">Canada</option>
                <option value="Quebec">Quebec</option> */}
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
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid company name.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Trailor ID</Form.Label>
                <Form.Control type="number" placeholder="Trailor ID" required />
                {/* <Form.Select aria-label="Default select example">
                <option>Select State</option>
                <option value="Alaska">Alaska</option>
                <option value="Canada">Canada</option>
                <option value="Quebec">Quebec</option>
              </Form.Select> */}
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Pay/Bill Name</Form.Label>
                <Form.Control type="text" placeholder="Bill Name" required />
                {/* <Form.Select aria-label="Default select example">
                <option>Select Group</option>
                <option value="Alaska">Alaska</option>
                <option value="Canada">Canada</option>
                <option value="Quebec">Quebec</option>
              </Form.Select> */}
                <Form.Control.Feedback type="invalid">
                  Please provide a valid name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>Bill ID</Form.Label>
                <Form.Control type="number" placeholder="Bill ID" required />
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
                  required
                />
                {/* <Form.Select aria-label="Default select example">
                <option>Select State</option>
                <option value="Alaska">Alaska</option>
                <option value="Canada">Canada</option>
                <option value="Quebec">Quebec</option>
              </Form.Select> */}
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Factored</Form.Label>
                {/* <Form.Control type="text" placeholder="Bill Name" required /> */}
                <Form.Select aria-label="Default select example">
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
                {/* <Form.Control type="number" placeholder="Bill ID" required /> */}
                <Form.Select aria-label="Default select example">
                  <option>Select Factor Payments</option>
                  {/* <option value="Yes">Alaska</option>
                <option value="No">Canada</option> */}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid company name.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Print 1099?</Form.Label>
                {/* <Form.Control
                type="number"
                placeholder="Pay Percentage"
                required
              /> */}
                <Form.Select aria-label="Default select example">
                  <option>Select Option</option>
                  <option value="Yes">Alaska</option>
                  <option value="No">Canada</option>
                  {/* <option value="Quebec">Quebec</option> */}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Has Image</Form.Label>
                {/* <Form.Control type="text" placeholder="Bill Name" required /> */}
                <Form.Select aria-label="Default select example">
                  <option>Select Options</option>
                  <option value="Yes">Alaska</option>
                  <option value="No">Canada</option>
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
                  required
                />
                {/* <Form.Select aria-label="Default select example">
                <option>Select Factor Payments</option>
                <option value="Yes">Alaska</option>
                <option value="No">Canada</option>
              </Form.Select> */}
                <Form.Control.Feedback type="invalid">
                  Please provide a valid company name.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button variant="outline-primary" type="submit" className="mb-5">
              Search Owner
            </Button>

            <Button variant="outline-primary" className="mb-5 ms-3">Clear</Button>{' '}
            <Button variant="outline-primary" className="mb-5 ms-3">Save Search</Button>{' '}
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

            {searchData.map((i) => (
              <tbody>
                <tr>
                  <td>{i.id}</td>
                  <td>{i.status}</td>
                  <td>{i.zip}</td>
                  <td>{i.owner}</td>
                  <td>{i.company}</td>
                  <td>{i.group}</td>
                  <td>{i.phoneNumber}</td>
                  <td>{i.cellphone}</td>
                  <td>{i.city}</td>
                  <td>{i.state}</td>
                  <td>{i.activeTractors}</td>
                  <td>{i.activeTrailers}</td>
                  <td>{i.activeDrivers}</td>
                  <td>{i.pay}</td>
                </tr>
              </tbody>
            ))}
          </Table>
        </Container>
      </div>
    </>
  );
};

export default SearchOwner;
