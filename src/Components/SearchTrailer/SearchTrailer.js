import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import "./searchTrailer.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import useContext from "../Hooks/useContext";
import { Link } from "react-router-dom";


const SearchTrailer = () => {


  const [allValues, setAllValues] = useState({});

  const changeHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };



  const { trailerDate, perTrailerDetails } = useContext();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    console.log(allValues)
  };
  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-3">Search Trailers</h3>
        <hr></hr>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Trailer ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="Trailer ID"
                name="trailerId"
                onChange={changeHandler}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Leasing Company</Form.Label>
              <Form.Control
                name="leasingCompany"
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
                    name="ownerLeaseOnDate"
                    onChange={changeHandler}
                    type="date"
                    placeholder="Leasing Company"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="ownerLeaseOnDate2"
                    onChange={changeHandler}
                    type="date"
                    placeholder="Leasing Company"
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
                    placeholder="Leasing Company"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="ownerLeaseOffDate2"
                    onChange={changeHandler}
                    type="date"
                    placeholder="Leasing Company"
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
                    placeholder="Leasing Company"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="nextServiceDate2"
                    onChange={changeHandler}
                    type="date"
                    placeholder="Leasing Company"
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
                    placeholder="Leasing Company"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="lastServiceDate2"
                    onChange={changeHandler}
                    type="date"
                    placeholder="Leasing Company"
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
                    name="monthlyMainainanceDate"
                    onChange={changeHandler}
                    type="date"
                    placeholder="Leasing Company"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="monthlyMainainanceDate2"
                    onChange={changeHandler}
                    type="date"
                    placeholder="Leasing Company"
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
                name="model"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Next Inspection Date</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    name="nextInspectionDate"
                    onChange={changeHandler}
                    type="date"
                    placeholder="Leasing Company"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="nextInspectionDate2"
                    onChange={changeHandler}
                    type="date"
                    placeholder="Leasing Company"
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
              <Form.Label>Tag Expiration</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    name="tagExp"
                    onChange={changeHandler}
                    type="date"
                    placeholder="Leasing Company"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="tagExp2"
                    onChange={changeHandler}
                    type="date"
                    placeholder="Leasing Company"
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
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Tag State</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="tagState"
                onChange={changeHandler}
              >
                <option>Select Tag State</option>
                <option value="Alaska">Alaska</option>
                <option value="Alabama">Alabama</option>
                <option value="Arizona">Arizona</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Warranty Start Date</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    name="warrantyStartDate"
                    onChange={changeHandler}
                    type="date"
                    placeholder="Leasing Company"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="warrantyStartDate2"
                    onChange={changeHandler}
                    type="date"
                    placeholder="Leasing Company"
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
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Warranty End Date</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    name="warrantyEndDate"
                    onChange={changeHandler}
                    type="date"
                    placeholder="Leasing Company"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="warrantyEndDate2"
                    onChange={changeHandler}
                    type="date"
                    placeholder="Leasing Company"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Owner</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="First name"
                    name="ownerFirstName"
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
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Driver</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="First name"
                    name="driverFirstName"
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
          </Row>

          <Row className="mb-3">
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
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Warranty Starting Mileage</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Warranty Starting Mileage"
                    name="warrantyStartingMileage"
                    onChange={changeHandler}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Warranty Starting Mileage"
                    name="warrantyStartingMileage2"
                    onChange={changeHandler}
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Trailer Length</Form.Label>
              <Form.Control
                type="number"
                placeholder="Trailer Length"
                name="trailerLength"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Warranty Ending Mileage</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Warranty Starting Mileage"
                    name="warrantyEndingMileage"
                    onChange={changeHandler}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Warranty Starting Mileage"
                    name="warrantyEndingMileage2"
                    onChange={changeHandler}
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Axle Count</Form.Label>
              <Form.Control
                type="number"
                placeholder="Axle Count"
                name="axleCount"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Has Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Has Image"
                name="hasImg"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Missing Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Missing Image"
                name="missingHasImage"
                onChange={changeHandler}
              />
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

      <Container fluid style={{ marginBottom: "50px" }}>
        <h3 className="mt-5 mb-3">Search Results ({trailerDate.length})</h3>
        <hr></hr>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Year</th>
              <th>Make</th>
              <th>Model</th>
              <th>Length</th>
              <th>Type</th>
              <th>VIN</th>
              <th>Tag Number</th>
              <th>Tag State</th>
              <th>Tag Expiration</th>
              <th>Terminal</th>
              <th>OwnerId</th>
              <th>Owner</th>
              <th>Driver ID Driver</th>
              <th>Lease On</th>
              <th>Lease Off</th>
              <th>Next Service</th>
              <th>Last Inspection</th>
              <th>Next Inspection</th>
              <th>Last Dispatch Date</th>
            </tr>
          </thead>

          {trailerDate.map((i) => (
            <tbody>
              <tr>
                {/* <td>{i.id}</td> */}
                <Link to={`/summary/trailer/${i._id}`}>
                  <p onClick={() => perTrailerDetails(i._id)}>{i.id}</p>
                </Link>

                <td>{i.status}</td>
                <td>{i.year}</td>
                <td>{i.make}</td>
                <td>{i.model}</td>
                <td>{i.length}</td>
                <td>{i.trailerType}</td>
                <td>{i.vin}</td>
                <td>{i.tagNumber}</td>
                <td>{i.tagState}</td>
                <td>{i.tagExp}</td>
                <td>{i.terminal}</td>
                <td>{i.eobrId}</td>
                <td>{i.owner}</td>
                <td>{i.driverId}</td>
                <td>{i.leaseOnDate}</td>
                <td>{i.nextServiceDate}</td>
                <td>{i.lastInspectionDate}</td>
                <td>{i.nextInspectionDate}</td>
                <td>{i.leaseOffDate}</td>
                <td>{i.lastDispatchDate}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    </div>
  );
};

export default SearchTrailer;
