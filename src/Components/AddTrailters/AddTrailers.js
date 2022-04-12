import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import "./addTrailers.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
const AddTrailers = () => {



  const [allValues, setAllValues] = useState({});


  const changeHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };


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
        <h3 className="mt-5 mb-3">Trailer Information</h3>
        <hr></hr>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Trailer Id</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Trailer Id"
                name="trailerId"
                onChange={changeHandler}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Axle Count</Form.Label>
              <Form.Control
                name="axleCount"
                onChange={changeHandler}
                type="number"
                placeholder="Axle Count"
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
                <option>Select Status</option>
                <option value="Active">Active</option>
                <option value="Hold Safely">Hold Safely</option>
                <option value="Hold Shop">Hold Shop</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Length (Feet)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Length(Feet)"
                name="length"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              {/*  */}
              <p>Year</p>
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
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Width(inches)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Width(inches)"
                name="width"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              {/* */}
              <p>Make</p>
              <Form.Select
                aria-label="Default select example"
                name="make"
                onChange={changeHandler}
              >
                <option>Select Make</option>
                <option value="Blue Bird">Blue Bird</option>
                <option value="CaterPiller">CaterPiller</option>
                <option value="Ford">Ford</option>
                <option value="GMC">GMC</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              {/*  */}
              <Form.Label>Deck Height (inches)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Deck Height (inches)"
                name="deckHeight"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              {/*  */}
              <p>Model</p>
              <Form.Control
                type="text"
                placeholder="Model Name"
                name="model"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Weight (lbs)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Weight (lbs)"
                name="weights"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              {/*  */}
              <p>Type</p>
              <Form.Select aria-label="Default select example">
                <option>Select Type</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Terminal</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="terminal"
                onChange={changeHandler}
              >
                <option>Select Terminal</option>
                <option value="EG Egales">EG Egales</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Group</p>
              <Form.Select aria-label="Default select example">
                <option>Select Group</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>EOBR Type ID</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="eorbTypeId"
                onChange={changeHandler}
              >
                <option>Select EOBR Type ID</option>
                <option value="Geolab">Geolab</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>VIN</p>

              <Form.Control
                type="number"
                placeholder="VIN number"
                name="vin"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>EOBR ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="EOBR ID"
                name="eobrId"
                onChange={changeHandler}
              />
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
              <p>Physical Damage Insurance Carrier</p>
              <Form.Select
                aria-label="Default select example"
                name="physicalDamageInsuranceCarrier"
                onChange={changeHandler}
              >
                <option>Select Make</option>
                <option value="Blue Bird">Blue Bird</option>
                <option value="CaterPiller">CaterPiller</option>
                <option value="Ford">Ford</option>
                <option value="GMC">GMC</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
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
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Physical Damage Insurance Start Date </p>
              <Form.Select
                aria-label="Default select example"
                name="physicalDamageInsuranceStartDate"
                onChange={changeHandler}
              >
                <option>Select Leasing Company</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Tag Expiration Date</p>
              <Form.Control
                type="date"
                placeholder="Tag Number"
                name="tagExpDate"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Physical Damage Insurance Expiration Date</p>
              <Form.Control
                type="date"
                placeholder="Tag Number"
                name="physicalDamageInsuranceExpirationDate"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Last Inspection Date</p>
              <Form.Control
                type="date"
                placeholder="Tag Number"
                name="lastInspectionDate"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Physical Damage Insurance Value</p>
              <Form.Control
                type="number"
                name="physicalDamageInsuranceValue"
                onChange={changeHandler}
                placeholder="Physical Damage Insurance Value"
                
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Last Inspection Location</p>
              <Form.Control
                type="text"
                name="lastInspectionLocation"
                onChange={changeHandler}
                placeholder="Last Inspection Location"
                
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Leasing Company</p>
              <Form.Select aria-label="Default select example">
                <option>Select Leasing Company</option>
              </Form.Select>
              {/* */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Next Inspection Date</p>
              <Form.Control
                type="text"
                name="nextInspectionDate"
                onChange={changeHandler}
                placeholder="Last Inspection Location"
                
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Lease Exp Date</p>
              <Form.Control
                type="text"
                name="leaseExpDate"
                onChange={changeHandler}
                placeholder="Last Inspection Location"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Last Service Date</p>
              <Form.Control
                type="text"
                name="lastServiceDate"
                onChange={changeHandler}
                placeholder="Last Inspection Location"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Next Service Date</p>
              <Form.Control
                type="text"
                name="nextServiceDate"
                onChange={changeHandler}
                placeholder="Last Inspection Location"
                
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Maintenance Date</p>
              <Form.Control
                type="text"
                name="maintenanceDate"
                onChange={changeHandler}
                placeholder="Last Inspection Location"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Trailer Owned By</p>
              <Form.Control
                name="trailerOwnedBy"
                onChange={changeHandler}
                type="text"
                placeholder="Trailer Owned By"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Trailer Owned By Date</p>
              <Form.Control
                name="trailerOwnedByDate"
                onChange={changeHandler}
                type="date"
                placeholder="Trailer Owned By"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Comment</p>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="comment here"
                  style={{ height: "100px" }}
                  name="comment"
                  onChange={changeHandler}
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit" variant="outline-primary" className="mb-5">
            Save
          </Button>{" "}
          <Button type="submit" variant="outline-primary" className="mb-5">
            Save And Add New
          </Button>{" "}
          <Button variant="outline-danger" className="mb-5">
            Cancel
          </Button>{" "}
        </Form>
      </Container>
    </div>
  );
};

export default AddTrailers;
