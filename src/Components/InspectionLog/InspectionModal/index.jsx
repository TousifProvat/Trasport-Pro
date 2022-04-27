import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { message } from "antd";
import axios from "../../../utils/axios";
import useContext from "../../Hooks/useContext";

const InspectionModal = (props) => {
  const { tractorData, trailerData, addInspection, updateInspection } =
    useContext();
  const { visible, setVisible, Id, action } = props;

  const [loading, setLoading] = useState(false);
  const [allValues, setAllValues] = useState({
    equipmentType: "Trailer",
    tractor: "",
    trailer: "",
    inspectionType: "",
    comments: "",
    result: "pass",
    inspectionDocument: "",
    inspectionDate: "",
    nextInspectionDate: "",
  });

  const getInspectionById = async (Id) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/inspection/${Id}`);
      setAllValues({ ...data.inspection });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };

  useEffect(() => {
    if (Id) {
      getInspectionById(Id);
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
    updateInspection(Id, allValues);
    setTimeout(() => {
      setVisible(false);
    }, 300);
  };

  const onSave = () => {
    allValues.equipmentType === "Trailer"
      ? (allValues.tractor = undefined)
      : (allValues.trailer = undefined);

    addInspection(allValues);
    setTimeout(() => {
      setVisible(false);
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
          Inspection Record
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col sm={4}>
              <Form.Label>Equipment Type</Form.Label>
              <Form.Select
                required
                aria-label="Default select example"
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
                  allValues.equipmentType === "Trailer" ? "trailer" : "tractor"
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
                  ? trailerData.map((trailer, index) => (
                      <option value={trailer._id} key={index}>
                        {trailer.id}
                      </option>
                    ))
                  : tractorData.map((tractor, index) => (
                      <option value={tractor._id} key={index}>
                        {tractor.id}
                      </option>
                    ))}
              </Form.Select>
            </Col>
            <Col sm={4}>
              <Form.Label>Inspection Type</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Inspection Type"
                name="inspectionType"
                onChange={onChange}
                value={allValues.inspectionType}
              />
            </Col>
          </Row>
          <Row className="m-0 mt-3">
            <Form.Label>Comments</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Comment"
              row={3}
              name="comments"
              onChange={onChange}
              value={allValues.comments}
            />
          </Row>
          <Row className="mt-3">
            <Col sm={6}>
              <Form.Label>Inspection Result</Form.Label>
              <Form.Select
                required
                aria-label="Default select example"
                name="result"
                onChange={onChange}
                value={allValues.result}
              >
                <option value="pass">Pass</option>
                <option value="fail">Fail</option>
              </Form.Select>
            </Col>
            <Col sm={6}>
              <Form.Label>Attach Inspection Result</Form.Label>
              <Form.Control
                type="file"
                placeholder="Inspection Type"
                name="inspectionDocument"
                onChange={onChange}
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={6}>
              <Form.Label>Inspection Date</Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="Inspection Type"
                name="inspectionDate"
                onChange={onChange}
                value={allValues.inspectionDate}
              />
            </Col>
            <Col sm={6}>
              <Form.Label>Next Inspection Date</Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="Inspection Type"
                name="nextInspectionDate"
                onChange={onChange}
                value={allValues.nextInspectionDate}
              />
            </Col>
          </Row>
          <Button type="submit" variant="outline-primary" className="mt-5 mb-3">
            {action === "add" ? "Save" : "Update"}
          </Button>
          <Button
            variant="outline-danger"
            className="mt-5 mb-3 m-3"
            onClick={() => setVisible(false)}
          >
            cancel
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default InspectionModal;
