import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Navbar,
  OverlayTrigger,
  Table,
  Tooltip,
} from "react-bootstrap";
import useContext from "../Hooks/useContext";
import MaintenanceModal from "./MaintenanceModal";

const MaintenanceLog = () => {
  const { maintenance, loading, removeMaintenance } = useContext();

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
      <Container fluid>
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
      <Container fluid>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Equipment Type</th>
              <th>Equipment Number</th>
              <th>Maintenance Type</th>
              <th>Cost</th>
              <th>Next Maintenance Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {maintenance.map((maintenance, index) => (
              <tr key={index}>
                <td>{maintenance.maintenanceDate}</td>
                <td>{maintenance.equipmentType}</td>
                <td>
                  {maintenance.equipmentType === "Tractor"
                    ? maintenance.tractor.id
                    : maintenance.trailer.id}
                </td>
                <td>{maintenance.maintenanceType}</td>
                <td>{maintenance.cost} $</td>
                <td>{maintenance.nextMaintenanceDate}</td>
                <td>
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}
                  >
                    <span className="d-inline-block">
                      <Button
                        variant="outline-success"
                        onClick={() => showUpdateModal(maintenance._id)}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Button>{" "}
                    </span>
                  </OverlayTrigger>{" "}
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip-disabled">Delete</Tooltip>}
                  >
                    <span className="d-inline-block">
                      <Button
                        variant="outline-danger"
                        onClick={() => removeMaintenance(maintenance._id)}
                      >
                        <i className="fa-solid fa-scissors"></i>
                      </Button>{" "}
                    </span>
                  </OverlayTrigger>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default MaintenanceLog;
