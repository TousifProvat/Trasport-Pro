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
import "./searchTerminal.css";
import useContext from "../Hooks/useContext";
import { Link } from "react-router-dom";
const SearchTerminal = () => {



  const [allValues, setAllValues] = useState({});

  const changeHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };



  const { searchTerminalData } = useContext();

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();  
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    console.log(allValues);
  };
  //   console.log(searchTerminalData);
  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-3">Search Terminal</h3>
        <hr></hr>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Search Terminal</Form.Label>
              <Form.Control
                name="searchTerminal"
                onChange={changeHandler}
                type="text"
                placeholder="Search Terminal"
                // defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Terminal Name</Form.Label>
              <Form.Control
                name="terminalName"
                onChange={changeHandler}
                type="text"
                placeholder="Terminal Name"
                // defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Terminal ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Terminal ID"
                aria-describedby="inputGroupPrepend"
                name="terminalId"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Terminal Type</Form.Label>
              
              <Form.Select aria-label="Default select example" name="terminalType" onChange={changeHandler}>
                <option>Select Terminal Type</option>
                <option value="Agent - Freight">Agent - Freight</option>
                <option value="Agent - Truck">Agent - Truck</option>
                <option value="Company Store">Company Store</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Phone" name="phone" onChange={changeHandler} />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>State</Form.Label>
              
              <Form.Select aria-label="Default select example" name="state" onChange={changeHandler}  >
                <option>Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
                <option value="Quebec">Quebec</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Status</Form.Label>
              
              <Form.Select aria-label="Default select example" name="status" onChange={changeHandler}>
                <option>Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Pay/Bill Name</Form.Label>
              <Form.Control type="text" placeholder="Pay/Bill Name" name="payName" onChange={changeHandler} />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Pay/Bill Federal ID (last 4)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pay/Bill Federal ID (last 4)"
                name="payFederalID"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit" variant="outline-primary">
            Search
          </Button>{" "}
          <Button variant="outline-danger">Clear</Button>{" "}
          <Button variant="outline-primary">Save Search</Button>{" "}
        </Form>
      </Container>
      <Container fluid>
        <h3 className="mt-5 mb-3">Search Results (1) </h3>
        <Button variant="dark">Print Results</Button> <hr></hr>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Terminal Name</th>
              <th>Code</th>
              <th>Parent</th>
              <th>Type</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Phone</th>
              <th>Fax Phone</th>
              <th>Calc Commission</th>
              <th>System Truck (%)</th>
              <th>Terminal Truck (%)</th>
              <th>BC Split</th>
              <th>BC Cap</th>
              <th>Action</th>
            </tr>
          </thead>

          {searchTerminalData.map((i) => (
            <tbody>
              <tr>
                <td>{i.terminalName}</td>
                <td>{i.code}</td>
                <td>{i.parent}</td>
                <td>{i.type}</td>
                <td>{i.address}</td>
                <td>{i.city}</td>
                <td>{i.state}</td>
                <td>{i.zip}</td>
                <td>{i.phoneNumber}</td>
                <td>{i.faxPhoneNumber}</td>
                <td>{i.calcCommission}</td>
                <td>{i.systemTruck}</td>
                <td>{i.terminalTruck}</td>
                <td>{i.bcSplit}</td>
                <td>{i.bcCap}</td>
                <td>
                          <Button variant="outline-success">
                          <Link to="/terminalManagerDashboard">Dashboard</Link>
                          </Button>{" "}
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    </div>
  );
};

export default SearchTerminal;
