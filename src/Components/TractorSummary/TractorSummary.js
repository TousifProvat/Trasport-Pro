import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Navbar, OverlayTrigger, Row, Table, Tooltip } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "../../utils/axios";
import { notification } from "antd";
import useContext from "../Hooks/useContext";





const TractorSummary = () => {
  const { ownerData, eobr } = useContext();
  const [summaryData, setSummaryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const { tractorId } = useParams();
  const [enable, setEnable] = useState(true);
  const [validated, setValidated] = useState(false);


  


  const initValue = {
    id: "",
    status: "Inactive",
    owner: "",
    ownerSince: "",
    year: "",
    make: "",
    model: "",
    tractorType: "",
    group: "",
    color: "",
    vin: "",
    carbCompliant: false,
    axieCount: 0,
    weight: 0,
    fuelCapacity: 0,
    tagNumber: "",
    tagState: "",
    tagExp: "",
    physicalDmgInsCarrier: "",
    physicalDmgInsStartDate: "",
    physicalDmgInsExpDate: "",
    physicalDmgInsValue: "",
    ntlInsCarrier: "",
    ntlInsStartDate: "",
    ntlInsExpDate: "",
    ntlInsValue: "",
    lastInspectionDate: "",
    lastInspectionLocation: "",
    nextInspectionDate: "",
    lastServiceDate: "",
    nextServiceDate: "",
    maintenanceDate: "",
    prePassId: "",
    eobrType: "",
    eobrId: "",
    cameraType: "",
    cameraId: "",
    comments: "",
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    console.log(initValue);
  };

  const [allValues, setAllValues] = useState({});

  const changeHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };



const handleEnable = (enable) => {
  setEnable(false);
};


  
  const handleUpdate = async () => {
    try {
      setLoading(true);
      const { data } = await axios.put(
        `/tractor/${tractorId}`,
        allValues
      );
      setEnable(true);
      setLoading(false);
      notification.success({ message: data.message });
      console.log(allValues);
    } catch (err) {
      setLoading(false);
      notification.error({ message: err.response.data.message });
    } 
  };

  useEffect(() => {
    const fetchTractorSummary = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/tractor/summary/${tractorId}`);
        setSummaryData(data.tractorInformation);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    fetchTractorSummary();
  }, [tractorId]);

  //console.log(summaryData);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const handleDeleteDriver = (event) => {
    window.confirm("Are you sure you want to delete this driver?");
  };



  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-3">Tractor Summary</h3>
        <hr></hr>
        <Button variant="outline-primary">Update Information</Button>{" "}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Tractor Id</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Tractor Id"
                name="id"
                onChange={changeHandler}
                value={allValues.id}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Axle Count</Form.Label>
              <Form.Control
                name="axieCount"
                onChange={changeHandler}
                type="number"
                placeholder="Axie Count"
                value={allValues.axieCount}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Status</Form.Label>

              <Form.Select
                name="status"
                onChange={changeHandler}
                value={allValues.status}
              >
                <option value="Active">Active</option>
                <option value="Hold-Safely">Hold Safely</option>
                <option value="Hold-Shop">Hold Shop</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
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
                value={allValues.weight}
              />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Fuel Capacity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Fuel Capacity"
                name="fuelCapacity"
                onChange={changeHandler}
                value={allValues.fuelCapacity}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Current Owner</Form.Label>
              <Form.Select
                required
                name="owner"
                onChange={changeHandler}
                value={allValues.owner}
              >
                <option value="">Select Owner</option>
                {ownerData.map((owner, index) => (
                  <option value={owner._id} key={index}>
                    {owner.firstName} {owner.lastName}-{owner.email}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Tag Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tag Number"
                name="tagNumber"
                onChange={changeHandler}
                value={allValues.tagNumber}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Tag State</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="tagState"
                onChange={changeHandler}
                value={allValues.tagState}
              >
                <option>Select Tag State</option>
                <option value="Alaska">Alaska</option>
                <option value="Alabama">Alabama</option>
                <option value="Arizona">Arizona</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Owner Since</Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="Owner Since"
                name="ownerSince"
                onChange={changeHandler}
                value={allValues.ownerSince}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Tag Expiration</Form.Label>
              <Form.Control
                type="date"
                placeholder="Tag Expiration Date"
                name="tagExp"
                onChange={changeHandler}
                value={allValues.tagExp}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Year</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Tractor Model Year"
                name="year"
                onChange={changeHandler}
                value={allValues.year}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Make</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tractor Make"
                required
                name="make"
                onChange={changeHandler}
                value={allValues.make}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Model</Form.Label>
              <Form.Control
                type="text"
                placeholder="Model Name"
                name="model"
                onChange={changeHandler}
                value={allValues.model}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Physical Damage Insurance Carrier</Form.Label>
              <Form.Control
                type="text"
                placeholder="Damage Carrier"
                name="physicalDmgInsCarrier"
                onChange={changeHandler}
                value={allValues.physicalDmgInsCarrier}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Physical Damage Insurance Start Date </Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                name="physicalDmgInsStartDate"
                onChange={changeHandler}
                value={allValues.physicalDmgInsStartDate}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Group</Form.Label>
              <Form.Control
                type="text"
                name="group"
                onChange={changeHandler}
                value={allValues.group}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Physical Damage Insurance Expiration Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Expiration Date"
                name="physicalDmgInsExpDate"
                onChange={changeHandler}
                value={allValues.physicalDmgInsExpDate}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tractor Color"
                name="color"
                onChange={changeHandler}
                value={allValues.color}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Physical Damage Insurance Value</Form.Label>

              <Form.Control
                type="text"
                placeholder="Physical Damage Insurance Value"
                name="physicalDmgInsValue"
                onChange={changeHandler}
                value={allValues.physicalDmgInsValue}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>VIN</Form.Label>

              <Form.Control
                type="text"
                placeholder="VIN number"
                required
                name="vin"
                onChange={changeHandler}
                value={allValues.vin}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Check
                label="Carb Compliant"
                name="crabCompliant"
                onChange={changeHandler}
                value={allValues.carbCompliant}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>NTL Insurance Carrier</Form.Label>

              <Form.Control
                type="text"
                placeholder="NTL Insurance Carrier"
                name="ntlInsCarrier"
                onChange={changeHandler}
                value={allValues.ntlInsCarrier}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>NTL Insurance Start Date</Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                name="ntlInsStartDate"
                onChange={changeHandler}
                value={allValues.ntlInsStartDate}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>NTL Insurance Expiration Date</Form.Label>

              <Form.Control
                type="date"
                placeholder="NTL Insurance Expiration Date"
                name="ntlInsExpDate"
                onChange={changeHandler}
                value={allValues.ntlInsExpDate}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>NTL Insurance Value</Form.Label>
              <Form.Control
                type="text"
                placeholder="NTL Insurance Value"
                name="ntlInsValue"
                onChange={changeHandler}
                value={allValues.ntlInsValue}
              />
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
              <Form.Label>Last Inspection Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Last Inspection Date"
                name="lastInspectionDate"
                onChange={changeHandler}
                value={allValues.lastInspectionDate}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>PrePass ID</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Pre Pass ID"
                name="prePassId"
                onChange={changeHandler}
                value={allValues.prePassId}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Last Inspection Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Inspection Location"
                name="lastInspectionLocation"
                onChange={changeHandler}
                value={allValues.lastInspectionDate}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>EOBR Type</Form.Label>
              <Form.Select
                name="eobrType"
                onChange={changeHandler}
                value={allValues.eobrType}
              >
                <option value="">Select EOBR Type ID</option>
                {eobr.map((eobr, index) => (
                  <option value={eobr._id} key={index}>
                    {eobr.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Next Inspection Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Next Inspection Date"
                name="nextInspectionDate"
                onChange={changeHandler}
                value={allValues.nextInspectionDate}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>EOBR ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="EOBR ID"
                required
                name="eobrId"
                onChange={changeHandler}
                value={allValues.eobrId}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Last Service Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Last Service Date"
                name="lastServiceDate"
                onChange={changeHandler}
                value={allValues.lastServiceDate}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Camera Type</Form.Label>

              <Form.Control
                name="cameraType"
                placeholder="Camera Type"
                onChange={changeHandler}
                value={allValues.cameraType}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Next Service Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Next Service Date"
                name="nextServiceDate"
                onChange={changeHandler}
                value={allValues.nextServiceDate}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Camera ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="Camera ID"
                name="cameraID"
                onChange={changeHandler}
                value={allValues.cameraId}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Maintenance Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Maintenance Date"
                name="maintenanceDate"
                onChange={changeHandler}
                value={allValues.maintenanceDate}
              />
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
                  name="comments"
                  onChange={changeHandler}
                  value={allValues.comments}
                />
              </Form.Group>
            </Form.Group>
          </Row>
          <Button type="submit" variant="outline-primary" className="mb-5">
            Save
          </Button>
          <Button
            variant="outline-danger"
            className="ms-3 mb-5"
            href="/search-tractor"
          >
            Cancel
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default TractorSummary;
