import React, { useState } from "react";
import { Button, Container, Nav, Navbar, Table } from "react-bootstrap";
import useContext from "../Hooks/useContext";
import AccidentModal from "./AccidentModal";

const AccidentLog = () => {
  const { loading, accident } = useContext();

  const [accidentId, setAccidentId] = useState(null);
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  const showUpdateModal = (id) => {
    setAccidentId(id);
    setUpdateModal(true);
  };
  return (
    <div>
      <AccidentModal visible={addModal} setVisible={setAddModal} action="add" />
      <AccidentModal
        visible={updateModal}
        setVisible={setUpdateModal}
        action="update"
        Id={accidentId}
      />
      <Container fluid>
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Truck</th>
              <th>Drivers</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location of A.</th>
              <th>Facilities</th>
              <th>Injuries</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12/14/2022</td>
              <td>22</td>
              <td>20</td>
              <td>12/05/2022</td>
              <td>10:28 AM</td>
              <td>Alaska</td>
              <td>Good</td>
              <td>No</td>
              <td>
                <Button
                  className="m-1"
                  variant="outline-primary"
                  onClick={() => showUpdateModal(accident._id)}
                >
                  Edit
                </Button>
                <Button variant="outline-danger" className="m-1">
                  Delete
                </Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AccidentLog;
