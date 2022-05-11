import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../../utils/axios";
//
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { message, notification } from "antd";
//
import Loader from "../../Loader";
//actions
import { fetchLoads } from "../../../features/load/action";

const LoadStatusModal = (props) => {
  const { visible, setVisible, Id, action } = props;
  //state
  const { drivers } = useSelector((state) => state.driver);
  const { tractors } = useSelector((state) => state.tractor);
  const { trailers } = useSelector((state) => state.trailer);
  const { auth } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);
  const initVal = {
    _id: "",
    status: "",
    dispatcher: "",
    driver: "",
    tractor: "",
    trailer: "",
    loadBy: "",
  };
  const [allValues, setAllValues] = useState(initVal);
  const [validated, setValidated] = useState(false);

  //hooks
  const dispatch = useDispatch();
  useEffect(() => {
    if (Id) {
      getLoadById(Id);
    }
  }, [Id]);

  //funcs
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
        loadBy: data.load.loadBy ? data.load.loadEnteredBy : auth.user._id,
        dispatcher: data.load.dispatcher ? data.load.dispatcher : auth.user._id,
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };

  const onChange = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const dispatchLoad = async () => {
    try {
      setLoading(true);
      await axios.put(`/load/${Id}`, {
        ...allValues,
        status: "dispatched",
      });
      notification.success({ message: "Load Dispatched Successfully!" });
      dispatch(fetchLoads());
      setVisible(false);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log({ err });
      notification.error({ message: err.response.data.message });
    }
  };

  const updateDispatch = async () => {
    try {
      setLoading(true);
      await axios.put(`/load/${Id}`, allValues);
      notification.success({ message: "Dispatch Updated Successfully!" });
      dispatch(fetchLoads());
      setVisible(false);
      setLoading(false);
    } catch (err) {
      setLoading(false);
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

    allValues.status === "planned" ? dispatchLoad() : updateDispatch();
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
        {loading && <Loader />}
        {!loading && (
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
                  disabled={allValues.status === "planned"}
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
                  disabled
                >
                  <option value="">Select User</option>
                  {users.map((user, index) => (
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
                  disabled
                >
                  <option value="">Select User</option>
                  {users.map((user, index) => (
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
                  required
                  aria-label="Default select example"
                  name="driver"
                  onChange={onChange}
                  value={allValues.driver}
                  disabled={allValues.status !== "planned"}
                >
                  <option value="">Select Driver</option>
                  {drivers.map((driver, index) => (
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
                  {tractors.map((tractor, index) => (
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
                  {trailers.map((trailer, index) => (
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
              disabled={loading}
            >
              cancel
            </Button>
            <Button
              disabled={loading}
              type="submit"
              variant="outline-primary"
              className="mt-5 mb-5"
            >
              {allValues.status === "planned" ? "Dispatch" : "Update"}
            </Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default LoadStatusModal;
