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
import EditDriver from "../EditDriver/EditDriver";
import { notification } from "antd";

const DriverSummary = () => {


  const [allValues, setAllValues] = useState({});

  const changeHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };

    const [summaryData, setSummaryData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [smShow, setSmShow] = useState(false);
  const { driverId } = useParams();
  const [enable, setEnable] = useState(true);


  const handleEnable = (enable) => {
    setEnable(false);
  }



  const handleUpdate = async () => {
    try {
      setLoading(true);
      const { data } = await axios.put(
        `/driver/summary/${driverId}`,
        allValues
      );
      setEnable(true);
      setLoading(false);
      notification.success({ message: data.message });
    } catch (err) {
      notification.error({ message: err.response.data.message });
    }    
  }



    useEffect(() => {
      const fetchTrailerSummary = async () => {
        try {
          setLoading(true);
          const { data } = await axios.get(`/driver/summary/${driverId}`);
          setSummaryData(data.driverInfo);
          
        } catch (err) {
          setLoading(false);
          console.log(err);
        }
      };
      fetchTrailerSummary();
    }, [driverId]);

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




  const handleSubmit = (event) => {
    EventTarget.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    console.log("data submitted successfully");
    
  };
    return (
      <div>
        <div>
          {loading && <h2>loading..</h2>}
          {!loading && (
            <Container>
              <h1 className="mt-5 mb-3">Driver Summary</h1>
              <hr></hr>
              <div className="operator-info">
                <h5 className="mt-5 mb-3">Driver Information</h5>
                {enable ? (
                  <Button variant="outline-primary" onClick={handleEnable}>
                    Edit Information
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="outline-primary"
                      type="submit"
                      onClick={handleUpdate}
                    >
                      Update Information
                    </Button>{" "}
                    <Button variant="outline-danger" onClick={handleUpdate}>
                      Cancel
                    </Button>
                  </>
                )}
                {"   "}
                <Modal
                  size="lg"
                  show={smShow}
                  onHide={() => setSmShow(false)}
                  aria-labelledby="example-modal-sizes-title-sm"
                >
                  <Modal.Header closeButton>
                    <Modal.Body id="example-modal-sizes-title-sm">
                      <Row>
                        <Col>Transport Pro Administrator</Col>
                        <Col>{date}</Col>
                      </Row>
                    </Modal.Body>
                  </Modal.Header>
                  {/* <Modal.Body>...</Modal.Body> */}
                </Modal>
                <hr></hr>
              </div>
              <Form noValidate onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <Form.Label>Trailer ID </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      placeholder="Trailer ID	"
                      onChange={changeHandler}
                      name="trailerId"
                      defaultValue={summaryData._id}
                    />
                  </Col>
                  <Col>
                    <Form.Label>EOBR Type</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      placeholder="EOBR Type"
                      onChange={changeHandler}
                      name="eobrType"
                      defaultValue={summaryData.eobrType}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      placeholder="Status"
                      onChange={changeHandler}
                      name="status"
                      defaultValue={summaryData.status}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col>
                    <Form.Label>EOBR ID</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      placeholder="EOBR ID"
                      onChange={changeHandler}
                      name="eobrId"
                      defaultValue={summaryData.eobrID}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Current Owner</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      placeholder="Current Owner"
                      onChange={changeHandler}
                      name="owner"
                      defaultValue={summaryData.owner}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Tag Information </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="tagInfo"
                      placeholder="Tag Information"
                      defaultValue={summaryData.tagInfo}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col>
                    <Form.Label>Terminal</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      placeholder="Terminal"
                      onChange={changeHandler}
                      name="terminal"
                      defaultValue={summaryData.terminal}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Last Inspection Date</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="lastInspectionDate"
                      placeholder="Last Inspection Date"
                      defaultValue={summaryData.lastInspectionDate}
                    />
                  </Col>
                  <Col>
                    <Form.Label>VIN</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="vin"
                      placeholder="VIN"
                      defaultValue={summaryData.vin}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col>
                    <Form.Label>Last Inspection Location</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="lastInspectionLocation"
                      placeholder="Last Inspection Location"
                      defaultValue={summaryData.lastInspectionLocation}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="year"
                      placeholder="Year"
                      defaultValue={summaryData.year}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Next Inspection Date </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="nextInspectionDate"
                      placeholder="Next Inspection Date"
                      defaultValue={summaryData.nextInspectionDate}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col>
                    <Form.Label>Make</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="make"
                      placeholder="Make"
                      defaultValue={summaryData.make}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Last Service Date </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="lastServiceDate"
                      placeholder="Last Service Date"
                      defaultValue={summaryData.lastServiceDate}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Model</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="model"
                      placeholder="Model"
                      defaultValue={summaryData.model}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col>
                    <Form.Label>Next Service Date </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="nextServiceDate"
                      placeholder="Next Service Date"
                      defaultValue={summaryData.nextServiceDate}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Type</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="type"
                      placeholder="Type"
                      defaultValue={summaryData.type}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Monthly Maintenance</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="monthlyMaintenance"
                      placeholder="Monthly Maintenance"
                      defaultValue={summaryData.maintenanceDate}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col>
                    <Form.Label>Comments</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="comments"
                      placeholder="Comments"
                      defaultValue={summaryData.comments}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Group</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="group"
                      placeholder="Group"
                      defaultValue={summaryData.group}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Physical Damage Insurance Carrier</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="physicalDamageInsuranceCarrier"
                      placeholder="Physical Damage Insurance Carrier"
                      defaultValue={summaryData.physicalDmgInsCarrier}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col>
                    <Form.Label>Axle Count</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="axleCount"
                      placeholder="Axle Count"
                      defaultValue={summaryData.axieCount}
                    />
                  </Col>
                  <Col>
                    <Form.Label>
                      Physical Damage Insurance Start Date
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="physicalDamageInsuranceStartDate"
                      placeholder="Physical Damage Insurance Start Date"
                      defaultValue={summaryData.physicalDmgInsStartDate}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Length</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="length"
                      placeholder="Length"
                      defaultValue={summaryData.length}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col>
                    <Form.Label>
                      Physical Damage Insurance Expiration Date{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="physicalDamageInsuranceExpirationDate"
                      placeholder="Physical Damage Insurance Expiration Date"
                      defaultValue={summaryData.physicalDmgInsExpDate}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Width</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="width"
                      placeholder="Width"
                      defaultValue={summaryData.width}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Physical Damage Insurance Value</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="physicalDamageInsuranceValue"
                      placeholder="Physical Damage Insurance Value"
                      defaultValue={summaryData.physicalDmgInsValue}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col>
                    <Form.Label>Deck Height</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="deckHeight"
                      placeholder="Deck Height"
                      defaultValue={summaryData.deckHeight}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Leasing Company</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="leasingCompany"
                      placeholder="Leasing Company"
                      defaultValue={summaryData.leasingCompany}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Weight</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="weight"
                      placeholder="Weight"
                      defaultValue={summaryData.weight}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col>
                    <Form.Label>Lease Exp Date</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={enable}
                      onChange={changeHandler}
                      name="leaseExpDate"
                      placeholder="Lease Exp Date"
                      defaultValue={summaryData.leaseExpDate}
                    />
                  </Col>
                  <Col></Col>
                </Row>
              </Form>
            </Container>
          )}
        </div>
      </div>
    );
};

export default DriverSummary;
