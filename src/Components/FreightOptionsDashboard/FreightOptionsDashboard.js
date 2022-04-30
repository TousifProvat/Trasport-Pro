import React, { useEffect, useState } from "react";
import {
  Badge,
  Container,
  Dropdown,
  Modal,
  Navbar,
  Table,
} from "react-bootstrap";
import "./freightOptionsDashboard.css";
import useContext from "../Hooks/useContext";
import InvoiceModal from "../InvoiceModal";
import LoadStatusModal from "./LoadStatusModal";
import { Link } from "react-router-dom";
const FreightOptionsDashboard = () => {
  const { load, driverData } = useContext();

  //load status modal
  const [loadStatusModal, setLoadStatusModal] = useState(false);
  const [loadId, setLoadId] = useState("");
  const dispatchLoad = (id) => {
    setLoadId(id);
    setLoadStatusModal(true);
  };
  //
  //planned loads
  const [plannedLoads, setPlannedLoads] = useState([]);

  useEffect(() => {
    const pl = load.filter((load) => load.status === "planned");
    setPlannedLoads(pl);
  }, [load]);
  //
  //cancelled loads
  const [cancelledLoads, setCancelledLoads] = useState([]);

  useEffect(() => {
    const cl = load.filter((load) => load.status === "cancelled");
    setCancelledLoads(cl);
  }, [load]);
  //

  //active drivers
  const [activeDrivers, setActiveDrivers] = useState([]);
  useEffect(() => {
    const ad = driverData.filter((driver) => driver.status === "Active");
    setActiveDrivers(ad);
  }, [driverData]);
  //

  const [invoiceModal, setInvoiceModal] = useState(false);
  const [invoiceId, setInvoiceId] = useState(null);

  const invoiceLoad = (id, invoiceId) => {
    setLoadId(id);
    setInvoiceId(invoiceId);
    setInvoiceModal(true);
  };

  return (
    <>
      <InvoiceModal
        visible={invoiceModal}
        setVisible={setInvoiceModal}
        Id={loadId}
        invoice={invoiceId}
      />
      <LoadStatusModal
        visible={loadStatusModal}
        setVisible={setLoadStatusModal}
        Id={loadId}
        action="dispatch"
      />
      <div className="frt-header">
        <p className="lead mt-3 ms-3">
          <span className="me-auto">Freight Options</span>
        </p>

        <Dropdown className="frt-drop mt-3 me-3">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Show Freight Options Tools
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/add-new-load">Add New Load</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <hr></hr>

      <div className="availableLoads">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand>
              Available Loads <Badge>{load.length}</Badge>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
        </Navbar>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Load Number</th>
              <th>Customer</th>
              <th>Pickup Date</th>
              <th>Delivery Date</th>
              <th>Pickup City</th>
              <th>Pickup City</th>
              <th>Tractor ID</th>
              <th>Driver</th>
              <th>Status</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {load.map((load, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/load/${load._id}`}>{load._id}</Link>
                </td>
                <td>{load.loadNumber}</td>
                <td>{load.customer.name}</td>
                <td>{load.pickupDate}</td>
                <td>{load.deliveryDate}</td>
                <td>{load.pickupCity}</td>
                <td>{load.deliveryCity}</td>
                <td>{load.tractor?._id}</td>
                <td>
                  {load.driver?.firstName} {load.driver?.lastName}
                </td>
                <td>{load.status}</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Manage
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => invoiceLoad(load._id, load.invoice)}
                      >
                        {load.invoice ? "Update Invoice" : "Invoice"}
                      </Dropdown.Item>
                      {load.status !== "cancelled" && (
                        <Dropdown.Item onClick={() => dispatchLoad(load._id)}>
                          {load.status !== "dispatched"
                            ? "Dispatch"
                            : "Update Dispatch"}
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
            {load.length < 1 && (
              <tr>
                <td
                  colSpan={11}
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
      </div>

      {/* active driver */}
      <div className="activeDrivers">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand>
              Active Drivers
              <Badge bg="warning" text="dark" className="ms-3">
                {activeDrivers.length}
              </Badge>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
        </Navbar>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th>Hire Date</th>
              <th>Termination Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {activeDrivers.map((driver, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/driver/${driver._id}`}>{driver._id}</Link>
                </td>
                <td>
                  {driver.firstName} {driver.lastName}
                </td>
                <td>{driver.primaryPhoneNumber}</td>
                <td>{driver.email}</td>
                <td>
                  {driver.address}, {driver.city}, {driver.zip}
                </td>
                <td>{driver.hireDate}</td>
                <td>{driver.terminationDate}</td>
                <td>{driver.status}</td>
              </tr>
            ))}
            {activeDrivers.length < 1 && (
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
      </div>

      {/* Planned Load */}

      <div className="plannedLoads">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand>
              Planned Loads <Badge bg="yellow">{plannedLoads.length}</Badge>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
        </Navbar>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Load Number</th>
              <th>Customer</th>
              <th>Pickup Date</th>
              <th>Delivery Date</th>
              <th>Pickup City</th>
              <th>Pickup City</th>
              <th>Tractor ID</th>
              <th>Driver</th>
              <th>Status</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {plannedLoads.map((load, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/load/${load._id}`}>{load._id}</Link>
                </td>
                <td>{load.loadNumber}</td>
                <td>{load.customer.name}</td>
                <td>{load.pickupDate}</td>
                <td>{load.deliveryDate}</td>
                <td>{load.pickupCity}</td>
                <td>{load.deliveryCity}</td>
                <td>{load.tractor?._id}</td>
                <td>
                  {load.driver?.firstName} {load.driver?.lastName}
                </td>
                <td>{load.status}</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Manage
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => invoiceLoad(load._id, load.invoice)}
                      >
                        {load.invoice ? "Update Invoice" : "Invoice"}
                      </Dropdown.Item>
                      {load.status !== "cancelled" && (
                        <Dropdown.Item onClick={() => dispatchLoad(load._id)}>
                          {load.status !== "dispatched"
                            ? "Dispatch"
                            : "Update Dispatch"}
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
            {plannedLoads.length < 1 && (
              <tr>
                <td
                  colSpan={11}
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
      </div>

      {/* Cancelled Load */}
      <div className="cancelledLoads">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand>
              Cancelled Loads <Badge bg="danger">{cancelledLoads.length}</Badge>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
        </Navbar>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Load Number</th>
              <th>Customer</th>
              <th>Pickup Date</th>
              <th>Delivery Date</th>
              <th>Pickup City</th>
              <th>Pickup City</th>
              <th>Tractor ID</th>
              <th>Driver</th>
              <th>Status</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {cancelledLoads.map((load, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/load/${load._id}`}>{load._id}</Link>
                </td>
                <td>{load.loadNumber}</td>
                <td>{load.customer.name}</td>
                <td>{load.pickupDate}</td>
                <td>{load.deliveryDate}</td>
                <td>{load.pickupCity}</td>
                <td>{load.deliveryCity}</td>
                <td>{load.tractor?._id}</td>
                <td>
                  {load.driver?.firstName} {load.driver?.lastName}
                </td>
                <td>{load.status}</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Manage
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => invoiceLoad(load._id, load.invoice)}
                      >
                        {load.invoice ? "Update Invoice" : "Invoice"}
                      </Dropdown.Item>
                      {load.status !== "cancelled" && (
                        <Dropdown.Item onClick={() => dispatchLoad(load._id)}>
                          {load.status !== "dispatched"
                            ? "Dispatch"
                            : "Update Dispatch"}
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
            {cancelledLoads.length < 1 && (
              <tr>
                <td
                  colSpan={11}
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
      </div>
    </>
  );
};

export default FreightOptionsDashboard;
