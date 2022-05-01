import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Navbar,
  OverlayTrigger,
  Row,
  Table,
  Tooltip,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "../../utils/axios";
import { notification } from "antd";
import useContext from "../Hooks/useContext";
import AssignDriverModal from "./AssignDriverModal";

const TrailerSummary = () => {
  const { ownerData, eobr, unassignDriverFromTrailer } = useContext();
  const { trailerId } = useParams();

  const initValue = {
    id: "",
    status: "Active",
    owner: "",
    ownerSince: "",
    onBoardingDate: "",
    terminationDate: "",
    year: "",
    make: "",
    model: "",
    trailerType: "",
    group: "",
    vin: "",
    tagNumber: "",
    tagState: "",
    tagExp: "",
    lastInspectionDate: "",
    nextInspectionDate: "",
    lastServiceDate: "",
    nextServiceDate: "",
    maintenanceDate: "",
    axieCount: 0,
    length: 0,
    width: 0,
    deckHeight: 0,
    weight: 0,
    eobrType: "",
    eobrId: "",
    physicalDmgInsCarrier: "",
    physicalDmgInsStartDate: "",
    physicalDmgInsExpDate: "",
    physicalDmgInsValue: "",
    comments: "",
  };

  const [allValues, setAllValues] = useState(initValue);
  const [drivers, setDrivers] = useState([]);
  useEffect(() => {
    const fetchTrailerSummary = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/trailer/summary/${trailerId}`);
        setAllValues(data.trailer);
        setDrivers(data.assignedDrivers);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log({ err });
      }
    };
    fetchTrailerSummary();
  }, [trailerId]);

  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const { data } = await axios.put(`/trailer/${trailerId}`, allValues);
      setLoading(false);
      notification.success({ message: data.message });
    } catch (err) {
      setLoading(false);
      notification.error({ message: err.response.data.message });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    handleUpdate();
  };

  const changeHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };

  //assign/unassign driver
  const [show, setShow] = useState(false);
  const unassignDriver = (driverId, index) => {
    unassignDriverFromTrailer(driverId);
    setDrivers([
      ...drivers.slice(0, index),
      ...drivers.slice(index + 1, drivers.length),
    ]);
  };

  return (
    <div>
      <Container>
        <Navbar bg="light" expand="lg" className="mt-5">
          <Container>
            <Navbar.Brand>
              <h4>Trailer Information</h4>
              <hr></hr>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Trailer Id</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Trailer Id"
                name="id"
                onChange={changeHandler}
                value={allValues.id}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                onChange={changeHandler}
                value={allValues.status}
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Hold Safely">Hold Safely</option>
                <option value="Hold Shop">Hold Shop</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Model</Form.Label>
              <Form.Control
                type="text"
                placeholder="Model Name"
                name="model"
                onChange={changeHandler}
                value={allValues.model}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Owner</Form.Label>
              <Form.Select
                required
                name="owner"
                onChange={changeHandler}
                value={allValues.owner}
              >
                <option value=""> Select Owner </option>
                {ownerData.map((owner, index) => (
                  <option value={owner._id} key={index}>
                    {owner.firstName} {owner.lastName}-{owner.email}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
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
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>On Boarding Date</Form.Label>
              <Form.Control
                required
                type="date"
                name="onBoardingDate"
                onChange={changeHandler}
                value={allValues.onBoardingDate}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Termination Date</Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="Termination Date"
                name="terminationDate"
                onChange={changeHandler}
                value={allValues.terminationDate}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Year</Form.Label>
              <Form.Control
                required
                placeholder="Year"
                name="year"
                onChange={changeHandler}
                value={allValues.year}
              />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Make</Form.Label>
              <Form.Control
                required
                placeholder="Make"
                name="make"
                onChange={changeHandler}
                value={allValues.make}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>VIN</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="VIN number"
                name="vin"
                onChange={changeHandler}
                value={allValues.vin}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Axie Count</Form.Label>
              <Form.Control
                name="axieCount"
                onChange={changeHandler}
                type="number"
                placeholder="Axie Count"
                value={allValues.axieCount}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Deck Height (inches)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Deck Height (inches)"
                name="deckHeight"
                onChange={changeHandler}
                value={allValues.deckHeight}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Trailer Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Trailer Type"
                name="trailerType"
                onChange={changeHandler}
                value={allValues.trailerType}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Weight (lbs)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Weight (lbs)"
                name="weight"
                onChange={changeHandler}
                value={allValues.weight}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Length (Feet)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Length(Feet)"
                name="length"
                onChange={changeHandler}
                value={allValues.length}
              />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Width(inches)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Width(inches)"
                name="width"
                onChange={changeHandler}
                value={allValues.width}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Group</Form.Label>
              <Form.Control
                type="text"
                placeholder="Group Name"
                name="group"
                onChange={changeHandler}
                value={allValues.group}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>EOBR Type</Form.Label>
              <Form.Select
                name="eobrType"
                onChange={changeHandler}
                value={allValues.eobrType}
              >
                <option value="">Select EOBR Type</option>
                {eobr.map((eobr, index) => (
                  <option value={eobr._id} key={index}>
                    {eobr.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>EOBR ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="EOBR ID"
                name="eobrId"
                onChange={changeHandler}
                value={allValues.eobrId}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
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
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Tag State</Form.Label>
              <Form.Select
                name="tagState"
                onChange={changeHandler}
                value={allValues.tagState}
              >
                <option value="">Select Tag State</option>
                <option value="Alaska">Alaska</option>
                <option value="Alabama">Alabama</option>
                <option value="Arizona">Arizona</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Tag Expiration Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Tag Expire Date"
                name="tagExp"
                onChange={changeHandler}
                value={allValues.tagExp}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Physical Damage Insurance Carrier</Form.Label>
              <Form.Control
                placeholder="Physical Damage Insurance Carrier"
                name="physicalDmgInsCarrier"
                onChange={changeHandler}
                value={allValues.physicalDmgInsCarrier}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Physical Damage Insurance Start Date </Form.Label>
              <Form.Control
                type="date"
                name="physicalDmgInsStartDate"
                onChange={changeHandler}
                value={allValues.physicalDmgInsStartDate}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Physical Damage Insurance Expiration Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Expire Date"
                name="physicalDmgInsExpDate"
                onChange={changeHandler}
                value={allValues.physicalDmgInsExpDate}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Physical Damage Insurance Value</Form.Label>
              <Form.Control
                type="text"
                name="physicalDmgInsValue"
                onChange={changeHandler}
                placeholder="Physical Damage Insurance Value"
                value={allValues.physicalDmgInsValue}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Last Inspection Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Tag Number"
                name="lastInspectionDate"
                onChange={changeHandler}
                value={allValues.lastInspectionDate}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Next Inspection Date</Form.Label>
              <Form.Control
                type="text"
                name="nextInspectionDate"
                onChange={changeHandler}
                placeholder="Next Inspection Date"
                value={allValues.nextInspectionDate}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3"></Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Last Service Date</Form.Label>
              <Form.Control
                type="date"
                name="lastServiceDate"
                onChange={changeHandler}
                placeholder="Last Service Date"
                value={allValues.lastServiceDate}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Next Service Date</Form.Label>
              <Form.Control
                type="date"
                name="nextServiceDate"
                onChange={changeHandler}
                placeholder="Next Service Date"
                value={allValues.nextServiceDate}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Maintenance Date</Form.Label>
              <Form.Control
                type="date"
                name="maintenanceDate"
                onChange={changeHandler}
                placeholder="Maintenance Date"
                value={allValues.maintenanceDate}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="comment "
                rows={3}
                name="comments"
                onChange={changeHandler}
                value={allValues.comments}
              />
            </Form.Group>
          </Row>
          <Button type="submit" variant="outline-primary" className="mb-5 me-3">
            Update
          </Button>
        </Form>
      </Container>
      <Container>
        <AssignDriverModal
          visible={show}
          setVisible={setShow}
          trailer={trailerId}
        />
        <Navbar bg="light" expand="lg" className="mt-5">
          <Container>
            <Navbar.Brand href="#home">
              <h1>Assigned Drivers</h1>
            </Navbar.Brand>

            <Button variant="outline-primary" onClick={() => setShow(true)}>
              <i className="fa-solid fa-plus"></i>
            </Button>
          </Container>
        </Navbar>
        <Table striped bordered hover className="mb-5">
          <thead>
            <tr>
              <th>Driver</th>
              <th>Date Assigned </th>
              <th>Comments (Internal)</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver, index) => (
              <tr key={index}>
                <td>
                  {driver.firstName} {driver.lastName}
                </td>
                <td>{driver.trailerAssigningDate}</td>
                <td>{driver.trailerComments}</td>
                <td>
                  <Button
                    variant="outline-danger"
                    onClick={() => unassignDriver(driver._id, index)}
                  >
                    <i className="fa-solid fa-scissors"></i>{" "}
                  </Button>
                </td>
              </tr>
            ))}
            {drivers.length < 1 && (
              <tr>
                <td colSpan={5} style={{ textAlign: "center" }}>
                  No Driver Assigned
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default TrailerSummary;
