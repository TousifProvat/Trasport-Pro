import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./tractors.css";
import "react-day-picker/lib/style.css";


const Tractors = () => {
  
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
  });


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
        <h3 className="mt-5 mb-3">Tractor Information</h3>
        <hr></hr>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Tractor Id</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Tractor Id"
                name="tractorId"
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
              <Form.Label>Weight</Form.Label>
              <Form.Control
                type="number"
                placeholder="Weight"
                name="weight"
                onChange={changeHandler}
              />
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
                <option value="EG Egales">EG Egales</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Fuel Capacity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Fuel Capacity"
                name="fuelCapacity"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Current Owner</Form.Label>
              <Form.Control
                type="text"
                placeholder="Current Owner"
                name="currentOwner"
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
                Please provide a valid number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Owner Since</p>
              <Form.Control
                type="date"
                placeholder="Owner Since"
                name="ownerSince"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Tag Expiration</p>
              <Form.Control
                type="date"
                placeholder=""
                name="tagExpiration"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
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
                Please provide a valid number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Leasing Company</p>
              <Form.Select
                aria-label="Default select example"
                name="leasingCompany"
                onChange={changeHandler}
              >
                <option>Select Leasing Company</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Make</p>
              <Form.Select
                aria-label="Default select example"
                name="selectMake"
                onChange={changeHandler}
              >
                <option>Select Make</option>
                <option value="Blue Bird">Blue Bird</option>
                <option value="CaterPiller">CaterPiller</option>
                <option value="Ford">Ford</option>
                <option value="GMC">GMC</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Lease Exp Date</p>
              <Form.Control
                type="date"
                placeholder=""
                name="leaseExpDate"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Model</p>
              <Form.Control
                type="text"
                placeholder="Model Name"
                name="model"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Physical Damage Insurance Carrier</p>

              <Form.Control
                type="text"
                placeholder="Damage Carrier"
                name="physicalDamageInsuranceCarrier"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Type</p>
              <Form.Select aria-label="Default select example">
                <option>Select Type</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Physical Damage Insurance Start Date </p>
              <Form.Control
                type="date"
                placeholder=""
                name="physicalDamageInsuranceStartDate"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Group</p>
              <Form.Select aria-label="Default select example">
                <option>Select Group</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Physical Damage Insurance Expiration Date</p>
              <Form.Control
                type="date"
                placeholder=""
                name="physicalDamageInsuranceExpDate"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Color</p>

              <Form.Control
                type="text"
                placeholder="Color Name"
                name="color"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Physical Damage Insurance Value</p>

              <Form.Control
                type="text"
                placeholder="Physical Damage Insurance Value"
                name="physicalDamageInsuranceValue"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>VIN</p>

              <Form.Control
                type="number"
                placeholder="VIN number"
                required
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
              <p>Carb Compliant</p>

              <Form.Check
                required
                label="Yes"
                feedback="You must agree before submitting."
                feedbackType="invalid"
                name="crabCompliant"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>NTL Insurance Carrier</p>

              <Form.Control
                type="text"
                placeholder="NTL Insurance Carrier"
                name="ntlInsuranceCarrier"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>NTL Insurance Start Date</p>
              <Form.Control
                type="date"
                placeholder=""
                name="ntlInsuranceStartDate"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>NTL Insurance Expiration Date</p>

              <Form.Control
                type="date"
                placeholder=""
                name="ntlInsuranceExpDate"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>NTL Insurance Value</p>

              <Form.Control
                type="number"
                placeholder="NTL Insurance Value"
                name="ntlInsuranceValue"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Form>
      </Container>

      <Container>
        <h3 className="mt-5 mb-3">Safety Information</h3>
        <hr></hr>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <p>Last Inspection Date</p>
              <Form.Control
                type="date"
                placeholder=""
                name="lastInspectionDate"
                onChange={changeHandler}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>PrePass ID</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Pre Pass ID"
                // defaultValue="Otto"
                name="prePassID"
                onChange={changeHandler}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Last Inspection Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Inspection Location"
                aria-describedby="inputGroupPrepend"
                name="lastInspectionLocation"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>EOBR Type ID</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="eobrTypeId"
                onChange={changeHandler}
              >
                <option>Select EOBR Type ID</option>
                <option value="Geolab">Geolab</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Next Inspection Date</p>
              <Form.Control
                type="date"
                placeholder=""
                name="nextInspectionDate"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>EOBR ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="EOBR ID"
                required
                name="eobrId"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Last Service Date</p>

              <Form.Control
                type="date"
                placeholder=""
                name="lastServiceDate"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Camera Type</p>

              <Form.Select
                aria-label="Default select example"
                name="selectCameraType"
                onChange={changeHandler}
              >
                <option>Select Camera Type ID</option>
                <option value="Driver Supplied">Driver Supplied</option>
                <option value="Lytx-Cam">Lytx-Cam</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Next Service Date</p>

              <Form.Control
                type="date"
                placeholder=""
                name="nextServiceDate"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Camera ID</p>
              <Form.Control
                type="number"
                placeholder="Camera ID"
                name="cameraID"
                onChange={changeHandler}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Monthly Maintenance</p>
              <Form.Control
                type="date"
                placeholder=""
                name="nextServiceDate"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Comment (Internal)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="comment"
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit" variant="outline-primary" className="mb-5">
            Save Record
          </Button>
          <Button type="submit" variant="outline-primary" className="ms-3 mb-5">
            Save And Add New
          </Button>
          <Button variant="outline-danger" className="ms-3 mb-5">
            Clear
          </Button>{" "}
        </Form>
      </Container>
    </div>
  );
};

export default Tractors;
