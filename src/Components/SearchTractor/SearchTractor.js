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
import "./searchTractor.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import useContext from "../Hooks/useContext";
const SearchTractor = () => {



  const [allValues, setAllValues] = useState({
    tractorId: "",
    axleCount: "",
    status: "",
    weight: "",
    terminal: "",
    fuelCapacity: "",
    currentOwner: "",
    tagNumber: "",
    tagState: "",
    ownerSince: "",
    tagExpiration: "",
    year: "",
    leasingCompany: "",
    selectMake: "",
    model: "",
    physicalDamageInsuranceCarrier: "",
    color: "",
    physicalDamageInsuranceValue: "",
    vin: "",
    crabCompliant: "",
    ntlInsuranceCarrier: "",
    ntlInsuranceValue: "",
    prePassID: "",
    lastInspectionLocation: "",
    eobrTypeId: "",
    eobrId: "",
    selectCameraType: "",
    cameraID: "",
    comment: "",
    leaseExpDate: "",
    physicalDamageInsuranceStartDate: "",
    physicalDamageInsuranceExpDate: "",
    ntlInsuranceStartDate: "",
    ntlInsuranceExpDate: "",
    lastInspectionDate: "",
    nextInspectionDate: "",
    lastServiceDate: "",
    nextServiceDate: "",
    leaseCompany: "",
    ownerLeaseDate2: "",
    ownerLeaseOffDate: "",
    ownerLeaseOffDate2: "",
    nextServiceDate2: "",
    lastServiceDate2: "",
    monthlyMaintenanceDate2: "",
    dotInspection2: "",
    insuranceExp2: "",
    tagExp2: "",
    warrantyStartDate2: "",
    warrantyEndDate2: "",
    ownerLastName: "",
    driverLastName: "",
  });

  const changeHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };
  const { tractorData } = useContext();
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
      <Container>
        <h3 className="mt-5 mb-3">Search Tractors</h3>
        <hr></hr>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Tractor ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="Tractor ID"
                name="tractorId"
                onChange={changeHandler}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Leasing Company</Form.Label>
              <Form.Control
                name="leaseCompany"
                onChange={changeHandler}
                type="text"
                placeholder="Leasing Company"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Status</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="status"
                onChange={changeHandler}
              >
                <option>Open this select menu</option>
                <option value="Active">Active</option>
                <option value="Hold-Safely">Hold-Safely</option>
                <option value="Hold-Shop">Hold-Shop</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Owner Lease On Date</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    name="ownerLeaseDate"
                    onChange={changeHandler}
                    type="date"
                    //placeholder="Leasing Company"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="ownerLeaseDate2"
                    onChange={changeHandler}
                    type="date"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Terminal</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="terminal"
                onChange={changeHandler}
              >
                <option>Select Terminal</option>
                <option value="EG-Eagles">EG-Eagles</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Owner Lease Off Date </Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    name="ownerLeaseOffDate"
                    onChange={changeHandler}
                    type="date"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="ownerLeaseOffDate2"
                    onChange={changeHandler}
                    type="date"
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
              <Form.Label>Type</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="type"
                onChange={changeHandler}
              >
                <option>Select Type</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Next Service Date</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    name="nextServiceDate"
                    onChange={changeHandler}
                    type="date"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="nextServiceDate2"
                    onChange={changeHandler}
                    type="date"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Year</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="year"
                onChange={changeHandler}
              >
                <option>Select Year</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Last Service Date</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    name="lastServiceDate"
                    onChange={changeHandler}
                    type="date"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="lastServiceDate2"
                    onChange={changeHandler}
                    type="date"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Make</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="make"
                onChange={changeHandler}
              >
                <option>Select Make</option>
                <option value="Blue Bird">Blue Bird</option>
                <option value="Ford">Ford</option>
                <option value="Hino">Hino</option>
                <option value="GMC">GMC</option>
                <option value="Mack">Mack</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Monthly Maintenance Date</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    name="monthlyMaintenanceDate"
                    onChange={changeHandler}
                    type="date"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="monthlyMaintenanceDate2"
                    onChange={changeHandler}
                    type="date"
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
              <Form.Label>Model</Form.Label>
              <Form.Control
                type="text"
                placeholder="Model"
                required
                name="model"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>DOT Inspection</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    name="dotInspection"
                    onChange={changeHandler}
                    type="date"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="dotInspection2"
                    onChange={changeHandler}
                    type="date"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>VIN</Form.Label>
              <Form.Control
                type="number"
                placeholder="VIN"
                name="vin"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Insurance Expiration</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    name="insuranceExp"
                    onChange={changeHandler}
                    type="date"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="insuranceExp2"
                    onChange={changeHandler}
                    type="date"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Tag Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Tag Number"
                name="tagNumber"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Tag Expiration</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    name="tagExp"
                    onChange={changeHandler}
                    type="date"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="tagExp2"
                    onChange={changeHandler}
                    type="date"
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
              <Form.Label>Tag State</Form.Label>

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Warranty Start Date</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    name="warrantyStartDate"
                    onChange={changeHandler}
                    type="date"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="warrantyStartDate2"
                    onChange={changeHandler}
                    type="date"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Owner Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Owner Company Name"
                name="ownerCompanyName"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Warranty End Date</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    name="warrantyEndDate"
                    onChange={changeHandler}
                    type="date"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="warrantyEndDate2"
                    onChange={changeHandler}
                    type="date"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Owner</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="First name"
                    name="owner"
                    onChange={changeHandler}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Last name"
                    name="ownerLastName"
                    onChange={changeHandler}
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Warranty Provider</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="warrantyProvider"
                onChange={changeHandler}
              >
                <option>Select Warranty Provider</option>
                <option value="Cummins">Cummins</option>
                <option value="NTP">NTP</option>
                <option value="Other">Other</option>
                <option value="Premium 2020">Premium 2020</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Driver</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="First name"
                    name="driver"
                    onChange={changeHandler}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Last name"
                    name="driverLastName"
                    onChange={changeHandler}
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Warranty Status</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="warrantyStatus"
                onChange={changeHandler}
              >
                <option>Select Warranty Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Expired">Expired</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Camera Type</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="cameraType"
                onChange={changeHandler}
              >
                <option>Select Camera Type</option>
                <option value="Driver Supplied">Driver Supplied</option>
                <option value="Lytx - Driver Cam">Lytx - Driver Cam</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Warranty Starting Mileage</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Warranty Starting Mileage"
                    name="warrantyStaringMileage"
                    onChange={changeHandler}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Warranty Starting Mileage"
                    name="warrantyStaringMileage2"
                    onChange={changeHandler}
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>No Loads in Last</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="NoLoadLast"
                onChange={changeHandler}
              >
                <option>Select No Loads in Last</option>
                <option value="10 Days">10 Days</option>
                <option value="15 Days">15 Days</option>
                <option value="30 Days">30 Days</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Warranty Ending Mileage</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Warranty Starting Mileage"
                    name="WarrantyEndingMileage"
                    onChange={changeHandler}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Warranty Starting Mileage"
                    name="WarrantyEndingMileage2"
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
              <Form.Label>Is CARB Compliant?</Form.Label>
              
              <Form.Select aria-label="Default select example" name="isCrabCompliant" onChange={changeHandler}>
                <option>Select Is CARB Compliant?</option>
                <option value="All">All</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>No Loads in Last</Form.Label>
              
              <Form.Select aria-label="Default select example" name="NoLoadLast" onChange={changeHandler}>
                <option>Select No Loads in Last</option>
                <option value="10 Days">10 Days</option>
                <option value="15 Days">15 Days</option>
                <option value="30 Days">30 Days</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Has Image</Form.Label>
              <Form.Control type="text" placeholder="Has Image" name="hasImg" onChange={changeHandler} />
              
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Missing Image</Form.Label>
              <Form.Control type="text" placeholder="Missing Image" name="missingImg" onChange={changeHandler} />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
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
            Search
          </Button>
          <Button className="me-3" variant="outline-danger">
            Clear
          </Button>
          <Button type="submit" variant="outline-primary">
            Save Search
          </Button>
        </Form>
      </Container>

      <Container fluid>
        <h3 className="mt-5 mb-3">Search Results (1)</h3>
        <hr></hr>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Year</th>
              <th>Model</th>
              <th>Type</th>
              <th>VIN</th>
              <th>Tag Number</th>
              <th>Tag State</th>
              <th>Tag Expiration</th>
              <th>Terminal</th>
              <th>OwnerId</th>
              <th>Driver(s)</th>
              <th>Lease On</th>
              <th>Next Service</th>
              <th>Last Service</th>
              <th>Next DOT Inspection</th>
              <th>Maintenance Date</th>
              <th>Last Dispatch Date</th>
            </tr>
          </thead>

          {tractorData.map((i) => (
            <tbody>
              <tr>
                <td>{i.id}</td>
                <td>{i.status}</td>
                <td>{i.year}</td>
                <td>{i.model}</td>
                <td>{i.type}</td>
                <td>{i.vin}</td>
                <td>{i.tagNumber}</td>
                <td>{i.tagState}</td>
                <td>{i.tagExpiration}</td>
                <td>{i.terminal}</td>
                <td>{i.ownerId}</td>
                <td>
                  <li>{i.driver.firstOne}</li>
                  <li>{i.driver.secondOne}</li>
                </td>
                <td>{i.leaseOn}</td>
                <td>{i.nextService}</td>
                <td>{i.lastService}</td>
                <td>{i.mainteinanceDate}</td>
                <td>{i.nextDotInspection}</td>
                <td>{i.lastDispatchDate}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    </div>
  );
};

export default SearchTractor;
