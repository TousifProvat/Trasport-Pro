import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "../../../utils/axios";
//
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { notification } from "antd";
//actions
import { fetchDrivers } from "../../../features/driver/action";

const AssignDriverModal = (props) => {
  const { visible, setVisible, trailer, fetchSummary } = props;
  //state
  const { drivers: driverData } = useSelector((state) => state.driver);
  const [drivers, setDrivers] = useState([]);
  const initVal = {
    driverId: "",
    dateAssigned: "",
    comments: "",
  };
  const [allValues, setAllValues] = useState(initVal);
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);

  //hooks
  const dispatch = useDispatch();
  useEffect(() => {
    let availableDrivers = driverData.filter(
      (driver) => driver.trailer === undefined || driver.trailer === null
    );
    setDrivers(availableDrivers);
  }, [driverData]);

  //funcs
  const onChange = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };
  const reset = () => {
    fetchSummary();
    setVisible(false);
    setValidated(false);
    setAllValues(initVal);
    dispatch(fetchDrivers());
  };

  const assignDriver = async (driverId, values) => {
    try {
      setLoading(true);
      const res = await axios.put(
        `/driver/toggle-trailer/${driverId}?action=assign`,
        values
      );
      notification.success({ message: res.data.message });
      reset();
      setLoading(false);
    } catch (err) {
      console.log({ err });
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
    assignDriver(allValues.driverId, {
      ...allValues,
      id: trailer,
      driverId: undefined,
    });
  };
  return (
    <Modal
      show={visible}
      onHide={() => setVisible(false)}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Assign Driver</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button variant="outline-primary">
          <Link to="/addDriver">Add New Driver</Link>
        </Button>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="mt-4"
        >
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>Driver</Form.Label>
              <Form.Select
                required
                name="driverId"
                onChange={onChange}
                value={allValues.driverId}
              >
                <option value=""> Select Driver</option>
                {drivers.map((driver, index) => (
                  <option value={driver._id} key={index}>
                    {driver.firstName}-{driver.email}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>Driver Assigned</Form.Label>
              <Form.Control
                required
                type="date"
                name="dateAssigned"
                onChange={onChange}
                value={allValues.dateAssigned}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>Comment (Internal)</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Comment (Internal)"
                name="comments"
                onChange={onChange}
                value={allValues.comments}
              />
            </Form.Group>
          </Row>

          <Button variant="outline-primary" type="submit" disabled={loading}>
            Save
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => setVisible(false)}
            className="m-2"
            disabled={loading}
          >
            Close
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AssignDriverModal;
