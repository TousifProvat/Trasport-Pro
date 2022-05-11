import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../utils/axios";
//
import {
  Button,
  Col,
  Container,
  Form,
  Navbar,
  Row,
  Table,
} from "react-bootstrap";
import { notification } from "antd";
//
import AssignDriverModal from "./AssignDriverModal";
import Loader from "../Loader";
//action
import { fetchDrivers } from "../../features/driver/action";

const TractorSummary = () => {
  const { tractorId } = useParams();
  //state
  const { eobrs } = useSelector((state) => state.eobr);
  const { owners } = useSelector((state) => state.owner);

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

  const [allValues, setAllValues] = useState(initValue);
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  //hooks
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTractorSummary();
  }, [tractorId]);

  //funcs
  const fetchTractorSummary = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/tractor/summary/${tractorId}`);
      setAllValues(data.tractor);
      setDrivers(data.assignedDrivers);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  const onChange = (e) => {
    if (e.target.type === "checkbox") {
      setAllValues({
        ...allValues,
        [e.target.name]: allValues[e.target.name] ? false : true,
      });
      return;
    }
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpdate = async (id, values) => {
    try {
      setLoading(true);
      const { data } = await axios.put(`/tractor/${id}`, values);
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
    handleUpdate(tractorId, allValues);
  };

  const unassignDriver = async (id, index) => {
    try {
      const res = await axios.put(
        `/driver/toggle-tractor/${id}?action=unassign`,
        {}
      );
      setDrivers([
        ...drivers.slice(0, index),
        ...drivers.slice(index + 1, drivers.length),
      ]);
      dispatch(fetchDrivers());
      notification.success({ message: res.data.message });
    } catch (err) {
      console.log({ err });
      notification.error({ message: err.response.data.message });
    }
  };

  return (
    <div>
      <Container>
        <Navbar bg="light" expand="lg" className="mt-5">
          <Container>
            <Navbar.Brand>
              <h4>Tractor Information</h4>
              <hr></hr>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          {loading && <Loader />}
          {!loading && (
            <>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>Tractor Id</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Tractor Id"
                    name="id"
                    onChange={onChange}
                    value={allValues.id}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Axle Count</Form.Label>
                  <Form.Control
                    name="axieCount"
                    onChange={onChange}
                    type="number"
                    placeholder="Axie Count"
                    value={allValues.axieCount}
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>Status</Form.Label>

                  <Form.Select
                    name="status"
                    onChange={onChange}
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
                    onChange={onChange}
                    value={allValues.weight}
                  />
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom05">
                  <Form.Label>Fuel Capacity</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Fuel Capacity"
                    name="fuelCapacity"
                    onChange={onChange}
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
                    onChange={onChange}
                    value={allValues.owner}
                  >
                    <option value="">Select Owner</option>
                    {owners.map((owner, index) => (
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
                    onChange={onChange}
                    value={allValues.tagNumber}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom05">
                  <Form.Label>Tag State</Form.Label>
                  <Form.Select
                    name="tagState"
                    onChange={onChange}
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
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                  <Form.Label>Owner Since</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    placeholder="Owner Since"
                    name="ownerSince"
                    onChange={onChange}
                    value={allValues.ownerSince}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label>Tag Expiration</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Tag Expiration Date"
                    name="tagExp"
                    onChange={onChange}
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
                    onChange={onChange}
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
                    onChange={onChange}
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
                    onChange={onChange}
                    value={allValues.model}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label>Physical Damage Insurance Carrier</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Damage Carrier"
                    name="physicalDmgInsCarrier"
                    onChange={onChange}
                    value={allValues.physicalDmgInsCarrier}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                  <Form.Label>Physical Damage Insurance Start Date </Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Physical Damage Insurance Start Date"
                    name="physicalDmgInsStartDate"
                    onChange={onChange}
                    value={allValues.physicalDmgInsStartDate}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label>Group</Form.Label>
                  <Form.Control
                    type="text"
                    name="group"
                    onChange={onChange}
                    value={allValues.group}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom05">
                  <Form.Label>
                    Physical Damage Insurance Expiration Date
                  </Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Expiration Date"
                    name="physicalDmgInsExpDate"
                    onChange={onChange}
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
                    onChange={onChange}
                    value={allValues.color}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label>Physical Damage Insurance Value</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Physical Damage Insurance Value"
                    name="physicalDmgInsValue"
                    onChange={onChange}
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
                    onChange={onChange}
                    value={allValues.vin}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                  <Form.Check
                    label="Carb Compliant"
                    name="crabCompliant"
                    onChange={onChange}
                    value={allValues.carbCompliant}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label>NTL Insurance Carrier</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="NTL Insurance Carrier"
                    name="ntlInsCarrier"
                    onChange={onChange}
                    value={allValues.ntlInsCarrier}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom05">
                  <Form.Label>NTL Insurance Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="NTL Insurance Start Date"
                    name="ntlInsStartDate"
                    onChange={onChange}
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
                    onChange={onChange}
                    value={allValues.ntlInsExpDate}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label>NTL Insurance Value</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="NTL Insurance Value"
                    name="ntlInsValue"
                    onChange={onChange}
                    value={allValues.ntlInsValue}
                  />
                </Form.Group>
              </Row>
            </>
          )}
        </Form>
      </Container>
      <Container>
        <Navbar bg="light" expand="lg" className="mt-5">
          <Container>
            <Navbar.Brand>
              <h4>Safety Information</h4>
              <hr></hr>
            </Navbar.Brand>
          </Container>
        </Navbar>
        {loading && <Loader />}
        {!loading && (
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Last Inspection Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Last Inspection Date"
                  name="lastInspectionDate"
                  onChange={onChange}
                  value={allValues.lastInspectionDate}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>PrePass ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Pre Pass ID"
                  name="prePassId"
                  onChange={onChange}
                  value={allValues.prePassId}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Last Inspection Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Inspection Location"
                  name="lastInspectionLocation"
                  onChange={onChange}
                  value={allValues.lastInspectionDate}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>EOBR Type</Form.Label>
                <Form.Select
                  name="eobrType"
                  onChange={onChange}
                  value={allValues.eobrType}
                >
                  <option value="">Select EOBR Type ID</option>
                  {eobrs.map((eobr, index) => (
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
                  onChange={onChange}
                  value={allValues.nextInspectionDate}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>EOBR ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="EOBR ID"
                  name="eobrId"
                  onChange={onChange}
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
                  onChange={onChange}
                  value={allValues.lastServiceDate}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Camera Type</Form.Label>

                <Form.Control
                  name="cameraType"
                  placeholder="Camera Type"
                  onChange={onChange}
                  value={allValues.cameraType}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>Next Service Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Next Service Date"
                  name="nextServiceDate"
                  onChange={onChange}
                  value={allValues.nextServiceDate}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Camera ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Camera ID"
                  name="cameraId"
                  onChange={onChange}
                  value={allValues.cameraId}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Maintenance Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Maintenance Date"
                  name="maintenanceDate"
                  onChange={onChange}
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
                    onChange={onChange}
                    value={allValues.comments}
                  />
                </Form.Group>
              </Form.Group>
            </Row>
            <Button type="submit" variant="outline-primary" className="mb-5">
              Update
            </Button>
          </Form>
        )}
      </Container>
      <Container>
        <AssignDriverModal
          visible={show}
          setVisible={setShow}
          tractor={tractorId}
          fetchSummary={fetchTractorSummary}
        />
        <Navbar bg="light" expand="lg" className="mt-5">
          <Container>
            <Navbar.Brand href="#home">
              <h4>Assigned Drivers</h4>
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
            {loading && <Loader type="table" />}
            {!loading &&
              drivers.map((driver, index) => (
                <tr key={index}>
                  <td>
                    {driver.firstName} {driver.lastName}
                  </td>
                  <td>{driver.tractorAssigningDate}</td>
                  <td>{driver.tractorComments}</td>
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
            {!loading && drivers.length < 1 && (
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

export default TractorSummary;
