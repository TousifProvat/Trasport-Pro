import { message, notification } from "antd";
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Spinner,
  Table,
} from "react-bootstrap";
import axios from "../../utils/axios";
import AccidentModal from "./AccidentModal";

const AccidentLog = () => {
  const [incident, setIncident] = useState([]);
  const [loading, setLoading] = useState(false);

  const getIncidents = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/incident");
      setIncident(data.incidents);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };
  const updateIncident = async (id, values) => {
    try {
      setLoading(true);
      const res = await axios.put(`/incident/${id}`, values);
      notification.success({ message: res.data.message });
      const index = incident.findIndex((obj) => obj._id === id);
      let arr = incident;
      arr[index] = values;
      setIncident(arr);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };
  const addIncident = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post(`/incident`, values);
      notification.success({ message: res.data.message });
      getIncidents();
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };
  const removeIncident = async (id) => {
    try {
      setLoading(true);
      const res = await axios.delete(`/incident/${id}`);
      notification.success({ message: res.data.message });
      setLoading(false);
      const newIncidents = incident.filter((incident) => incident._id !== id);
      setIncident(newIncidents);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };

  useEffect(() => {
    getIncidents();
  }, []);

  const [accidentId, setAccidentId] = useState(null);
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  const showUpdateModal = (id) => {
    setAccidentId(id);
    setUpdateModal(true);
  };
  return (
    <div>
      <AccidentModal
        visible={addModal}
        setVisible={setAddModal}
        action="add"
        addIncident={addIncident}
      />
      <AccidentModal
        visible={updateModal}
        setVisible={setUpdateModal}
        action="update"
        Id={accidentId}
        updateIncident={updateIncident}
      />
      <Container>
        <Navbar bg="" expand="lg">
          <Container>
            <Navbar.Brand>Accident Log</Navbar.Brand>

            <Nav className="ms-auto">
              <Button
                variant="outline-primary"
                className="mt-4"
                onClick={() => setAddModal(true)}
              >
                Add Accident Record
              </Button>
            </Nav>
          </Container>
        </Navbar>
        <hr></hr>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Date</th>
              <th>Tractor ID</th>
              <th>Driver</th>
              <th>Time</th>
              <th>Location of Accident</th>
              <th>Facilities</th>
              <th>Injuries</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={10} style={{ textAlign: "center" }}>
                  <Spinner animation="border" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </td>
              </tr>
            )}
            {!loading &&
              incident.map((incident, index) => (
                <tr key={index}>
                  <td>{incident.incidentDate}</td>
                  <td>{incident.tractor}</td>
                  <td>
                    {incident.driver?.firstName} {incident.driver?.lastName}
                  </td>
                  <td>{incident.incidentTime}</td>
                  <td>
                    {incident.street}, {incident.city}, {incident.state}
                  </td>
                  <td>{incident.fatalities}</td>
                  <td>{incident.injuries}</td>
                  <td>
                    <Button
                      className="m-1"
                      variant="outline-primary"
                      onClick={() => showUpdateModal(incident._id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline-danger"
                      className="m-1"
                      onClick={() => removeIncident(incident._id)}
                    >
                      Delete
                    </Button>{" "}
                  </td>
                </tr>
              ))}
            {!loading && incident.length < 1 && (
              <tr
                style={{
                  textAlign: "center",
                }}
              >
                <td colSpan={10}>No Data Found</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AccidentLog;
