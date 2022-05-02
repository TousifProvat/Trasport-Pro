import { notification } from "antd";
import React, { useEffect, useState } from "react";
import { Button, Container, Navbar, Spinner, Table } from "react-bootstrap";
import axios from "../../utils/axios";
import useContext from "../Hooks/useContext";
import MaintenanceModal from "./MaintenanceModal";

const MaintenanceLog = () => {
  const [loading, setLoading] = useState(false);
  const [maintenance, setMaintenance] = useState([]);

  const getMaintenance = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/maintenance");
      setMaintenance(data.maintenances);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };

  const addMaintenance = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post(`/maintenance`, values);

      notification.success({ message: res.data.message });
      getMaintenance();
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };

  const updateMaintenance = async (id, values) => {
    try {
      setLoading(true);
      const res = await axios.put(`/maintenance/${id}`, values);
      notification.success({ message: res.data.message });

      const index = maintenance.findIndex((obj) => obj._id === id);
      let arr = maintenance;
      arr[index] = values;
      setMaintenance(arr);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };

  const removeMaintenance = async (id) => {
    try {
      setLoading(true);
      const res = await axios.delete(`/maintenance/${id}`);
      notification.success({ message: res.data.message });
      setLoading(false);
      const newMaintenance = maintenance.filter(
        (maintenance) => maintenance._id !== id
      );
      setMaintenance(newMaintenance);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };

  useEffect(() => {
    getMaintenance();
  }, []);

  const [maintenanceId, setMaintenanceId] = useState(null);
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  const showUpdateModal = (id) => {
    setMaintenanceId(id);
    setUpdateModal(true);
  };

  return (
    <div>
      <MaintenanceModal
        visible={addModal}
        setVisible={setAddModal}
        action="add"
        addMaintenance={addMaintenance}
      />
      <MaintenanceModal
        visible={updateModal}
        setVisible={setUpdateModal}
        action="update"
        Id={maintenanceId}
        updateMaintenance={updateMaintenance}
      />
      <Container>
        <Navbar bg="" expand="lg" className="mt-5">
          <Container>
            <Navbar.Brand>Maintenance Log</Navbar.Brand>
            <Button variant="outline-primary" onClick={() => setAddModal(true)}>
              Add Maintenance
            </Button>
          </Container>
        </Navbar>
        <hr></hr>
      </Container>
      <Container>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Date</th>
              <th>Equipment Type</th>
              <th>Equipment ID</th>
              <th>Maintenance Type</th>
              <th>Cost</th>
              <th>Next Maintenance Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={11} style={{ textAlign: "center" }}>
                  <Spinner animation="border" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </td>
              </tr>
            )}
            {!loading &&
              maintenance.map((maintenance, index) => (
                <tr key={index}>
                  <td>{maintenance.maintenanceDate}</td>
                  <td>{maintenance.equipmentType}</td>
                  <td>
                    {maintenance.equipmentType === "Tractor"
                      ? maintenance.tractor?._id
                      : maintenance.trailer?._id}
                  </td>
                  <td>{maintenance.maintenanceType}</td>
                  <td>{maintenance.cost} $</td>
                  <td>{maintenance.nextMaintenanceDate}</td>
                  <td>
                    <Button
                      className="m-2"
                      variant="outline-primary"
                      onClick={() => showUpdateModal(maintenance._id)}
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      variant="outline-danger"
                      onClick={() => removeMaintenance(maintenance._id)}
                    >
                      Delete
                    </Button>{" "}
                  </td>
                </tr>
              ))}
            {!loading && maintenance.length < 1 && (
              <tr>
                <td
                  colSpan={8}
                  style={{
                    textAlign: "center",
                  }}
                >
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default MaintenanceLog;
