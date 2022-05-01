import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useContext from "../Hooks/useContext";

const SearchLoad = () => {
  const { load, loading } = useContext();

  const [loads, setLoads] = useState([]);

  useEffect(() => {
    setLoads(load);
  }, [load]);

  const [filter, setFilter] = useState({
    status: "",
    loadId: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  //filter
  const onFilter = () => {
    let newLoads = load;
    if (filter.status !== "") {
      newLoads = load.filter((load) => load.status === filter.status);
    }
    if (filter.loadId !== "") {
      newLoads = newLoads.filter((load) => load._id === filter.loadId);
    }

    setLoads(newLoads);
  };

  const onReset = () => {
    setLoads(load);
    setFilter({ status: "", loadId: "" });
  };
  return (
    <div>
      <Container className="mt-5 mb-3">
        <h4>Search Load and Dispatches</h4>
        <hr></hr>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Load/Dispatch ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Load/Dispatch ID Number"
                name="loadId"
                onChange={onChange}
                value={filter.loadId}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                onChange={onChange}
                value={filter.status}
              >
                <option value="">Select Status</option>
                <option value="planned">Planned</option>
                <option value="dispatched">Dispatched</option>
                <option value="picked">Picked</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Button
            variant="outline-primary"
            type="submit"
            className="mb-5"
            onClick={onFilter}
          >
            Filter
          </Button>
          <Button
            variant="outline-danger"
            className="mb-5 ms-3"
            onClick={onReset}
          >
            Reset
          </Button>
        </Form>
      </Container>
      <Container fluid>
        <h3>Search Results ({loads.length})</h3>
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
            </tr>
          </thead>
          <tbody>
            {loads.map((load, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/load/${load._id}`}>{load._id}</Link>
                </td>
                <td>{load.loadNumber}</td>
                <td>{load.customer?.name}</td>
                <td>{load.pickupDate}</td>
                <td>{load.deliveryDate}</td>
                <td>{load.pickupCity}</td>
                <td>{load.deliveryCity}</td>
                <td>{load.tractor?._id}</td>
                <td>
                  {load.driver?.firstName} {load.driver?.lastName}
                </td>
                <td>{load.status}</td>
              </tr>
            ))}
            {loads.length < 1 && (
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
      </Container>
    </div>
  );
};

export default SearchLoad;
