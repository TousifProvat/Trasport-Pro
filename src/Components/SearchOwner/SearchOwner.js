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
import { Link } from "react-router-dom";
import useContext from "../Hooks/useContext";
import OwnerSummary from "../OwnerSummary/OwnerSummary";
import "./searchOwner.css";



const SearchOwner = () => {


  // const [status, setStatus] = useState({});
  // const [terminalValue, setTerminalValue] = useState({});
  // const [id, setId] = useState({});
  // const [code, setCode] = useState({});
  // const [fullName, setFullName] = useState({});
  // const [company, setCompany] = useState({});
  // const [state, setState] = useState({});
  // const [group, setGroup] = useState({});
  // const [tractorId, setTractorId] = useState({});
  // const [trailerId, setTrailerId] = useState({});
  // const [billName, setBillName] = useState({});
  // const [billId, setBillId] = useState({});
  // const [payPercentage, setPayPercentage] = useState({});
  // const [factored, setFactored] = useState({});
  // const [print1099, setPrint1099] = useState({});
  // const [hasImage, setHasImage] = useState({});
  // const [missImage, setMissImage] = useState({});
  // const [searchData, setSearchData] = useState([]);
  // const [requireData, setRequireDate] = useState("");


const [allValues, setAllValues] = useState({});

const changeHandler = (e) => {
  setAllValues({
    ...allValues,
    [e.target.name]: e.target.value,
  });
};


  const { terminalData, perDetails } = useContext();

  console.log(terminalData);


  // const allSearchInfo = {
  //   status: status,
  //   terminal: terminalValue,
  //   id: id,
  //   code: code,
  //   fullName: fullName,
  //   company: company,
  //   state: state,
  //   group: group,
  //   tractorId: tractorId,
  //   trailerId: trailerId,
  //   billName: billName,
  //   billId: billId,
  //   defaultPayPercentage: payPercentage,
  //   factored: factored,
  //   print1099: print1099,
  //   hasImage: hasImage,
  //   missImage: missImage,
  // }

  // useEffect(() => {
  //   setSearchData(terminalData);
  // }, [terminalData]);

  //form validator button

  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(allValues);

    setValidated(true);
  };

  ///////////////////////////

  // const handleStatus = (e) => {
  //   e.preventDefault();
  //   setStatus(e.target.value);
  // };
  // const handleTerminalChange = (e) => {
  //   e.preventDefault();
  //   setTerminalValue(e.target.value);
  // };
  // const handleId = (e) => {
  //   e.preventDefault();
  //   setId(e.target.value);
  // };
  // const handleCode = (e) => {
  //   e.preventDefault();
  //   setCode(e.target.value);
  // };
  // const handleFullName = (e) => {
  //   e.preventDefault();
  //   setFullName(e.target.value);
  // };
  // const handleCompany = (e) => {
  //   e.preventDefault();
  //   setCompany(e.target.value);
  // };
  // const handleState = (e) => {
  //   e.preventDefault();
  //   setState(e.target.value);
  // };
  // const handleGroup = (e) => {
  //   e.preventDefault();
  //   setGroup(e.target.value);
  // };
  // const handleTractorId = (e) => {
  //   e.preventDefault();
  //   setTractorId(e.target.value);
  // };
  // const handleTrailerId = (e) => {
  //   e.preventDefault();
  //   setTrailerId(e.target.value);
  // };
  // const handleBillName = (e) => {
  //   e.preventDefault();
  //   setBillName(e.target.value);
  // };
  // const handleBillId = (e) => {
  //   e.preventDefault();
  //   setBillId(e.target.value);
  // };
  // const handlePayPercentage = (e) => {
  //   e.preventDefault();
  //   setPayPercentage(e.target.value);
  // };
  // const handleFactored = (e) => {
  //   e.preventDefault();
  //   setFactored(e.target.value);
  // };
  // const handlePrint1099 = (e) => {
  //   e.preventDefault();
  //   setPrint1099(e.target.value);
  // };
  // const handleHasImage = (e) => {
  //   e.preventDefault();
  //   setHasImage(e.target.value);
  // };
  // const handleMissImage = (e) => {
  //   e.preventDefault();
  //   setMissImage(e.target.value);
  // };
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

            {terminalData.map((i) => (
              <tbody key={i._id}>
                <tr>
                  <td>
                    <Link to={`/summary/${i._id}`}>
                      <p onClick={() => perDetails(i._id)}>{i._id}</p>
                    </Link>
                  </td>
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
