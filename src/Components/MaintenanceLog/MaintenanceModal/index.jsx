import { Button, Col, Form, Modal, Row, Spinner } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { message } from "antd";
import axios from "../../../utils/axios";
import { useSelector } from "react-redux";

const MaintenanceModal = (props) => {
  const { tractors } = useSelector((state) => state.tractor);
  const { trailers } = useSelector((state) => state.trailer);

  const { visible, setVisible, Id, action, addMaintenance, updateMaintenance } =
    props;

  const initValue = {
    equipmentType: "Tractor",
    tractor: "",
    trailer: "",
    maintenanceType: "",
    cost: 0,
    maintenanceDate: "",
    nextMaintenanceDate: "",
    receipt: "",
    comments: "",
  };
  const [allValues, setAllValues] = useState(initValue);

  const [loading, setLoading] = useState(false);

  const getMaintenanceById = async (Id) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/maintenance/${Id}`);
      setAllValues({ ...data.maintenance });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };

  useEffect(() => {
    if (Id) {
      getMaintenanceById(Id);
    }
  }, [Id]);

  const onChange = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };

  const [validated, setValidated] = useState(false);

  const onUpdate = () => {
    updateMaintenance(Id, allValues);
    setTimeout(() => {
      setVisible(false);
    }, 300);
  };

  const onSave = () => {
    allValues.equipmentType === "Trailer"
      ? (allValues.tractor = undefined)
      : (allValues.trailer = undefined);
    addMaintenance(allValues);
    setTimeout(() => {
      setVisible(false);
      setValidated(false);
      setAllValues(initValue);
    }, 300);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    action === "add" ? onSave() : onUpdate();
  };

  return (
    <Modal size="lg" show={visible} onHide={() => setVisible(false)}>
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Maintenance Record
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading && (
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Spinner animation="border" variant="primary" />
          </div>
        )}
        {!loading && (
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col sm={4}>
                <Form.Label>Equipment Type</Form.Label>
                <Form.Select
                  required
                  name="equipmentType"
                  onChange={onChange}
                  value={allValues.equipmentType}
                  disabled={action === "update"}
                >
                  <option value="Tractor">Tractor</option>
                  <option value="Trailer">Trailer</option>
                </Form.Select>
              </Col>
              <Col sm={4}>
                <Form.Label>{allValues.equipmentType}</Form.Label>
                <Form.Select
                  required
                  disabled={action === "update"}
                  name={
                    allValues.equipmentType === "Trailer"
                      ? "trailer"
                      : "tractor"
                  }
                  onChange={onChange}
                  value={
                    allValues.equipmentType === "Trailer"
                      ? allValues.trailer
                      : allValues.tractor
                  }
                >
                  <option value="">Select {allValues.equipmentType}</option>
                  {allValues.equipmentType === "Trailer"
                    ? trailers.map((trailer, index) => (
                        <option value={trailer._id} key={index}>
                          {trailer.id}
                        </option>
                      ))
                    : tractors.map((tractor, index) => (
                        <option value={tractor._id} key={index}>
                          {tractor.id}
                        </option>
                      ))}
                </Form.Select>
              </Col>

              <Col sm={4}>
                <Form.Label>Type of Maintenance</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Type of Maintenance"
                  name="maintenanceType"
                  onChange={onChange}
                  value={allValues.maintenanceType}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={3}>
                <Form.Label>Cost</Form.Label>
                <Form.Control
                  required
                  type="number"
                  min={1}
                  placeholder="Cost"
                  name="cost"
                  onChange={onChange}
                  value={allValues.cost}
                />
              </Col>
              <Col sm={3}>
                <Form.Label>Maintenance Date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  name="maintenanceDate"
                  onChange={onChange}
                  value={allValues.maintenanceDate}
                />
              </Col>
              <Col sm={3}>
                <Form.Label>Next Maintenance Date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  name="nextMaintenanceDate"
                  onChange={onChange}
                  value={allValues.nextMaintenanceDate}
                  // value={formatDate(allValues.nextMaintenanceDate)}
                />
              </Col>
              {/* <Col sm={3}>
            <Form.Label>Attach Receipts</Form.Label>
            <Form.Control
              required
              type="file"
              placeholder="Inspection Type"
              name="receipt"
              onChange={onChange}
              value={allValues.receipt}
            />
          </Col> */}
            </Row>
            {/* <Row className="m-1">
          <Form.Label>Comments</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Comment"
            rows={3}
            name="comments"
            onChange={onChange}
          />
        </Row> */}
            <Button type="submit" className="mt-5 mb-3">
              {action === "add" ? "Save" : "Update"}
            </Button>

            <Button
              variant="outline-danger"
              className="mt-5 mb-3 m-2"
              onClick={() => setVisible(false)}
            >
              cancel
            </Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default MaintenanceModal;
