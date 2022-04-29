import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { message, notification } from "antd";
import useContext from "../../Hooks/useContext";
import axios from "../../../utils/axios";
const LoadStatusModal = (props) => {
  const { driverData, tractorData, trailerData, user, auth } = useContext();
  const { visible, setVisible, Id, action } = props;

  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allValues, setAllValues] = useState({
    _id: "",
    status: "",
    dispatcher: "",
    driver: "",
    tractor: "",
    trailer: "",
    loadBy: "",
  });

  const getLoadById = async (Id) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/load/${Id}`);
      setAllValues({
        _id: data.load._id,
        status: data.load.status,
        driver: data.load.driver ? data.load.driver : "",
        tractor: data.load.tractor ? data.load.tractor : "",
        trailer: data.load.trailer ? data.load.trailer : "",
        loadBy: data.load.loadBy ? data.load.loadBy : auth.user._id,
        dispatcher: data.load.dispatcher ? data.load.dispatcher : auth.user._id,
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };
  useEffect(() => {
    if (Id) {
      getLoadById(Id);
    }
  }, [Id]);
  const onChange = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const dispatch = async () => {
    try {
      setLoading(true);
      const res = await axios.put(`/load/${Id}`, {
        ...allValues,
        status: "dispatched",
      });
      setLoading(false);
      notification.success({ message: "Load Dispatched Successfully!" });
    } catch (err) {
      console.log({ err });
    }
  };
  const updateDispatch = async () => {
    try {
      setLoading(true);
      const res = await axios.put(`/load/${Id}`, allValues);
      setLoading(false);
      notification.success({ message: "Dispatch Updated Successfully!" });
    } catch (err) {
      console.log({ err });
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

    allValues.status === "planned" ? dispatch() : updateDispatch();

    setTimeout(() => {
      setVisible(false);
    }, 300);
  };

  return (
    <Modal
      size="lg"
      show={visible}
      onHide={() => setVisible(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Dispatch Load
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col sm={6}>
              <Form.Label>Load Id</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Load Id"
                name="_id"
                onChange={onChange}
                value={allValues._id}
                disabled
              />
            </Col>
            <Col sm={6}>
              <Form.Label>Load Status</Form.Label>
              <Form.Select
                required
                name="status"
                onChange={onChange}
                value={allValues.status}
              >
                <option value="">Select Status</option>
                {allValues.status === "planned" && (
                  <option value="planned">Planned</option>
                )}
                <option value="dispatched">Dispatched</option>
                <option value="picked">Picked</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={6}>
              <Form.Label>Load Entered By</Form.Label>
              <Form.Select
                required
                name="loadBy"
                onChange={onChange}
                value={allValues.loadBy}
                disabled={allValues.status !== "planned"}
              >
                <option value="">Select User</option>
                {user.map((user, index) => (
                  <option value={user._id} key={index}>
                    {user.firstName} {user.lastName}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col sm={6}>
              <Form.Label>Dispatcher</Form.Label>
              <Form.Select
                required
                name="dispatcher"
                onChange={onChange}
                value={allValues.dispatcher}
                disabled={allValues.status !== "planned"}
              >
                <option value="">Select User</option>
                {user.map((user, index) => (
                  <option key={index} value={user._id}>
                    {user.firstName} {user.lastName}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={6}>
              <Form.Label>Driver</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="driver"
                onChange={onChange}
                value={allValues.driver}
                disabled={allValues.status !== "planned"}
              >
                <option value="">Select Driver</option>
                {driverData.map((driver, index) => (
                  <option value={driver._id} key={index}>
                    {driver.firstName} - {driver.email}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col sm={6}>
              <Form.Label>Tractor</Form.Label>
              <Form.Select
                required
                name="tractor"
                onChange={onChange}
                value={allValues.tractor}
                disabled={allValues.status !== "planned"}
              >
                <option value="">Select Tractor</option>
                {tractorData.map((tractor, index) => (
                  <option value={tractor._id} key={index}>
                    {tractor.id}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={6}>
              <Form.Label>Trailer</Form.Label>
              <Form.Select
                required
                name="trailer"
                onChange={onChange}
                value={allValues.trailer}
                disabled={allValues.status !== "planned"}
              >
                <option value="">Select Trailer</option>
                {trailerData.map((trailer, index) => (
                  <option value={trailer._id} key={index}>
                    {trailer.id}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col sm={6}></Col>
          </Row>
          <Button
            variant="outline-danger"
            className="mt-5 mb-5 m-2"
            onClick={() => setVisible(false)}
          >
            cancel
          </Button>
          <Button type="submit" variant="outline-primary" className="mt-5 mb-5">
            {allValues.status !== "dispatched" ? "Dispatch" : "Update"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoadStatusModal;
