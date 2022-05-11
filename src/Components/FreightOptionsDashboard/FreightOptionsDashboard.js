import React, { useEffect, useState } from "react";
import {
  Badge,
  Container,
  Dropdown,
  Modal,
  Navbar,
  Spinner,
  Table,
} from "react-bootstrap";
import "./freightOptionsDashboard.css";
import InvoiceModal from "../InvoiceModal";
import LoadStatusModal from "./LoadStatusModal";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoads } from "../../features/load/action";
import { fetchDrivers } from "../../features/driver/action";
const FreightOptionsDashboard = () => {
  const { loading, loads } = useSelector((state) => state.load);
  const { drivers } = useSelector((state) => state.driver);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLoads());
  }, []);

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
    const pl = loads.filter((load) => load.status === "planned");
    setPlannedLoads(pl);
  }, [loads]);
  //
  //cancelled loads
  const [cancelledLoads, setCancelledLoads] = useState([]);

  useEffect(() => {
    const cl = loads.filter((load) => load.status === "cancelled");
    setCancelledLoads(cl);
  }, [loads]);
  //

  //active drivers
  const [activeDrivers, setActiveDrivers] = useState([]);
  useEffect(() => {
    const ad = drivers.filter((driver) => driver.status === "Active");
    setActiveDrivers(ad);
  }, [drivers]);
  //

  const [invoiceModal, setInvoiceModal] = useState(false);
  const [invoiceId, setInvoiceId] = useState(null);

  const invoiceLoad = (id, invoiceId) => {
    setLoadId(id);
    setInvoiceId(invoiceId);
    setInvoiceModal(true);
  };

  return (
    <Container>
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

      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand>
              Available Loads <Badge>{loads.length}</Badge>
            </Navbar.Brand>
          </Container>
        </Navbar>

        <Table striped bordered hover responsive="lg">
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
            {loading && (
              <tr>
                <td
                  colSpan={11}
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Spinner animation="border" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </td>
              </tr>
            )}
            {!loading &&
              loads.map((load, index) => (
                <tr
                  key={index}
                  style={{
                    background: `rgba(
                      ${load.color},
                      ${load.color},
                      ${load.color},
                      ${0.5}
                    )`,
                  }}
                >
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
            {!loading && loads.length < 1 && (
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

      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>
              Active Drivers
              <Badge bg="warning" text="dark" className="ms-3">
                {activeDrivers.length}
              </Badge>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Table striped bordered hover responsive="lg">
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
            {loading && (
              <tr>
                <td
                  colSpan={11}
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Spinner animation="border" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </td>
              </tr>
            )}
            {!loading &&
              activeDrivers.map((driver, index) => (
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
            {!loading && activeDrivers.length < 1 && (
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
              Planned Loads <Badge bg="success">{plannedLoads.length}</Badge>
            </Navbar.Brand>
          </Container>
        </Navbar>

        <Table striped bordered hover responsive="lg">
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
            {loading && (
              <tr>
                <td
                  colSpan={11}
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Spinner animation="border" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </td>
              </tr>
            )}
            {!loading &&
              plannedLoads.map((load, index) => (
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
            {!loading && plannedLoads.length < 1 && (
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
          </Container>
        </Navbar>

        <Table striped bordered hover responsive="lg">
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
            {loading && (
              <tr>
                <td
                  colSpan={11}
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Spinner animation="border" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </td>
              </tr>
            )}
            {!loading &&
              cancelledLoads.map((load, index) => (
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
            {!loading && cancelledLoads.length < 1 && (
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
    </Container>
  );
};

export default FreightOptionsDashboard;
