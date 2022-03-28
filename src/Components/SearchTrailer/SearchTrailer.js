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
import "./searchTrailer.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import useContext from "../Hooks/useContext";
const SearchTrailer = () => {
  const { trailerDate } = useContext();
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
      <Container>
        <h3 className="mt-5 mb-3">Search Trailers</h3>
        <hr></hr>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Trailer ID</Form.Label>
              <Form.Control required type="number" placeholder="Trailer ID" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Leasing Company</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Leasing Company"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Status</Form.Label>

              <Form.Select aria-label="Default select example">
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
              {/* <Form.Control type="text" placeholder="Owner Lease On Date" required /> */}
              <Row>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Terminal</Form.Label>
              {/* <Form.Control type="text" placeholder="State" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Terminal</option>
                <option value="EG-Eagles">EG-Eagles</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Owner Lease Off Date </Form.Label>
              {/* <Form.Control type="text" placeholder="Zip" required /> */}
              <Row>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
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
              {/* <Form.Control type="text" placeholder="City" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Type</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Next Service Date</Form.Label>
              {/* <Form.Control type="text" placeholder="State" required /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Terminal</option>
                <option value="EG-Eagles">EG-Eagles</option>
              </Form.Select> */}
              <Row>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Year</Form.Label>
              {/* <Form.Control type="text" placeholder="Zip" required /> */}
              <Form.Select aria-label="Default select example">
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
              {/* <Form.Control type="text" placeholder="City" required /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Type</option>
              </Form.Select> */}
              <Row>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Make</Form.Label>
              {/* <Form.Control type="text" placeholder="State" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Make</option>
                <option value="Blue Bird">Blue Bird</option>
                <option value="Ford">Ford</option>
                <option value="Hino">Hino</option>
                <option value="GMC">GMC</option>
                <option value="Mack">Mack</option>
              </Form.Select>
              {/* <Row>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
              </Row> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Monthly Maintenance Date</Form.Label>
              {/* <Form.Control type="text" placeholder="Zip" required /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Year</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </Form.Select> */}
              <Row>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
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
              <Form.Control type="text" placeholder="Model" required />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Type</option>
              </Form.Select> */}
              {/* <Row>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
              </Row> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Next Inspection Date</Form.Label>
              {/* <Form.Control type="text" placeholder="State" required /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Make</option>
                <option value="Blue Bird">Blue Bird</option>
                <option value="Ford">Ford</option>
                <option value="Hino">Hino</option>
                <option value="GMC">GMC</option>
                <option value="Mack">Mack</option>
              </Form.Select> */}
              <Row>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>VIN</Form.Label>
              <Form.Control type="number" placeholder="VIN" required />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Year</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </Form.Select> */}
              {/* <Row>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
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
              <Form.Label>Tag Expiration</Form.Label>
              {/* <Form.Control type="text" placeholder="Model" required /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Type</option>
              </Form.Select> */}
              <Row>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Tag Number</Form.Label>
              <Form.Control type="number" placeholder="Tag Number" required />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Make</option>
                <option value="Blue Bird">Blue Bird</option>
                <option value="Ford">Ford</option>
                <option value="Hino">Hino</option>
                <option value="GMC">GMC</option>
                <option value="Mack">Mack</option>
              </Form.Select> */}
              {/* <Row>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
              </Row> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Tag State</Form.Label>
              {/* <Form.Control type="text" placeholder="Model" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Tag State</option>
                <option value="Alaska">Alaska</option>
                <option value="Alabama">Alabama</option>
                <option value="Arizona">Arizona</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
              </Form.Select>
              {/* <Row>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
              </Row> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Warranty Start Date</Form.Label>
              {/* <Form.Control type="number" placeholder="Tag Number" required /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Make</option>
                <option value="Blue Bird">Blue Bird</option>
                <option value="Ford">Ford</option>
                <option value="Hino">Hino</option>
                <option value="GMC">GMC</option>
                <option value="Mack">Mack</option>
              </Form.Select> */}
              <Row>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
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
                required
              />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Year</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </Form.Select> */}
              {/* <Row>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
                          </Row> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Warranty End Date</Form.Label>
              {/* <Form.Control type="text" placeholder="Model" required /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Tag State</option>
                <option value="Alaska">Alaska</option>
                <option value="Alabama">Alabama</option>
                <option value="Arizona">Arizona</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
              </Form.Select> */}
              <Row>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
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
              {/* <Form.Control type="number" placeholder="Tag Number" required /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Make</option>
                <option value="Blue Bird">Blue Bird</option>
                <option value="Ford">Ford</option>
                <option value="Hino">Hino</option>
                <option value="GMC">GMC</option>
                <option value="Mack">Mack</option>
              </Form.Select> */}
              <Row>
                <Col>
                  <Form.Control type="text" placeholder="First name" required />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Last name" required />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Warranty Provider</Form.Label>
              {/* <Form.Control type="text" placeholder="Owner Company Name" required /> */}
              <Form.Select aria-label="Default select example">
                <option>Select Warranty Provider</option>
                <option value="Cummins">Cummins</option>
                <option value="NTP">NTP</option>
                <option value="Other">Other</option>
                <option value="Premium 2020">Premium 2020</option>
              </Form.Select>
              {/* <Row>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
                <Col>
                  <DayPickerInput
                    onDayChange={(day) => console.log(day)}
                    className="datePicker"
                  />
                </Col>
                          </Row> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Driver</Form.Label>
              {/* <Form.Control type="text" placeholder="Model" required /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Tag State</option>
                <option value="Alaska">Alaska</option>
                <option value="Alabama">Alabama</option>
                <option value="Arizona">Arizona</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
              </Form.Select> */}
              <Row>
                <Col>
                  <Form.Control type="text" placeholder="First name" required />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Last name" required />
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
              {/* <Form.Control type="number" placeholder="Tag Number" required /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Make</option>
                <option value="Blue Bird">Blue Bird</option>
                <option value="Ford">Ford</option>
                <option value="Hino">Hino</option>
                <option value="GMC">GMC</option>
                <option value="Mack">Mack</option>
              </Form.Select> */}
              <Form.Select aria-label="Default select example">
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
              {/* <Form.Control type="text" placeholder="Model" required /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Tag State</option>
                <option value="Alaska">Alaska</option>
                <option value="Alabama">Alabama</option>
                <option value="Arizona">Arizona</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
              </Form.Select> */}
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Warranty Starting Mileage"
                    required
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Warranty Starting Mileage"
                    required
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
                required
              />
              {/* <Form.Select aria-label="Default select example">
                <option>Select No Loads in Last</option>
                <option value="10 Days">10 Days</option>
                <option value="15 Days">15 Days</option>
                <option value="30 Days">30 Days</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Warranty Ending Mileage</Form.Label>
              {/* <Form.Control type="text" placeholder="Owner Company Name" required /> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Select Camera Type</option>
                <option value="Driver Supplied">Driver Supplied</option>
                <option value="Lytx - Driver Cam">Lytx - Driver Cam</option>
              </Form.Select> */}
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Warranty Starting Mileage"
                    required
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Warranty Starting Mileage"
                    required
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Axle Count</Form.Label>
              <Form.Control type="number" placeholder="Axle Count" required />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Is CARB Compliant?</option>
                <option value="All">All</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Has Image</Form.Label>
              <Form.Control type="text" placeholder="Has Image" required />
              {/* <Form.Select aria-label="Default select example">
                <option>Select Camera Type</option>
                <option value="Driver Supplied">Driver Supplied</option>
                <option value="Lytx - Driver Cam">Lytx - Driver Cam</option>
              </Form.Select> */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Missing Image</Form.Label>
              <Form.Control type="text" placeholder="Missing Image" required />
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

      <Container fluid style={{marginBottom: "50px"}}>
        <h3 className="mt-5 mb-3">Search Results (1)</h3>
        <hr></hr>
        {/* <strong className="seacrhTrailer-error">No trailer records matching your search criteria were found</strong> */}
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
                      <td>{i.id}</td>
                <td>{i.status}</td>
                <td>{i.year}</td>
                      <td>{i.make}</td>
                      <td>{i.model}</td>
                      <td>{i.length}</td>
                      <td>{i.type}</td>
                      <td>{i.vin}</td>
                      <td>{i.tagNumber}</td>
                      <td>{i.tagState}</td>
                      <td>{i.tagExpiration}</td>
                      <td>{i.terminal}</td>
                      <td>{i.ownerId}</td>
                      <td>{i.owner}</td>
                      <td>
                          <li>{i.driver.firstOne}</li>
                          <li>{i.driver.secondOne}</li>
                          <li>{i.driver.thirdOne}</li>
                      </td>
                      <td>{i.leaseOn}</td>
                      <td>{i.leaseOff}</td>
                      <td>{i.nextService}</td>
                      <td>{i.lastInspection}</td>
                      <td>{i.nextInspection}</td>
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
