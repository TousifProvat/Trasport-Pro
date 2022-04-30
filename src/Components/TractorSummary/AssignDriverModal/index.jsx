import React, { useState, useEffect } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useContext from "../../Hooks/useContext";

const AssignDriverModal = (props) => {
  const { driverData, assignDriverToTractor } = useContext();

  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    let availableDrivers = driverData.filter(
      (driver) => driver.tractor === undefined || driver.tractor === null
    );
    setDrivers(availableDrivers);
  }, [driverData]);

  const { visible, setVisible, tractor } = props;
  const [allValues, setAllValues] = useState({
    driverId: "",
    dateAssigned: "",
    comments: "",
  });
  const onChange = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    assignDriverToTractor(allValues.driverId, {
      ...allValues,
      id: tractor,
      driverId: undefined,
    });
    setTimeout(() => {
      setVisible(false);
    }, 300);
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
                required
                as="textarea"
                placeholder="Comment (Internal)"
                name="comments"
                onChange={onChange}
                value={allValues.comments}
              />
            </Form.Group>
          </Row>

          <Button variant="outline-primary" type="submit">
            Save
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => setVisible(false)}
            className="m-2"
          >
            Close
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AssignDriverModal;
