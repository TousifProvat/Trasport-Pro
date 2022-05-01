import React, { useEffect, useState } from "react";
import { Button, Container, Navbar, Spinner, Table } from "react-bootstrap";
import useContext from "../Hooks/useContext";
import MaintenanceModal from "./MaintenanceModal";

const MaintenanceLog = () => {
  const { maintenance, loading, removeMaintenance, getMaintenance } =
    useContext();

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
      />
      <MaintenanceModal
        visible={updateModal}
        setVisible={setUpdateModal}
        action="update"
        Id={maintenanceId}
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
