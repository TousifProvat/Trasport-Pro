import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import "./searchTractor.css";
import "react-day-picker/lib/style.css";
import useContext from "../Hooks/useContext";
import { Link } from "react-router-dom";

const SearchTractor = () => {
  const { tractorData, loading } = useContext();
  const [tractors, setTractors] = useState([]);

  useEffect(() => {
    setTractors(tractorData);
  }, [tractorData]);

  //filter
  const [filter, setFilter] = useState({
    status: "",
    tractorId: "",
  });

  const onChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const onFilter = () => {
    let newTractors = tractorData;
    if (filter.status !== "") {
      newTractors = tractorData.filter(
        (tractor) => tractor.status === filter.status
      );
    }
    if (filter.tractorId !== "") {
      newTractors = newTractors.filter(
        (tractor) => tractor._id === filter.tractorId
      );
    }

    setTractors(newTractors);
  };

  const onReset = () => {
    setTractors(tractorData);
    setFilter({ status: "", tractorId: "" });
  };

  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-3">Search Tractors</h3>
        <hr></hr>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Tractor ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tractor ID"
                name="tractorId"
                onChange={onChange}
                value={filter.tractorId}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Status</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="status"
                onChange={onChange}
                value={filter.status}
              >
                <option>Select Status</option>
                <option value="Active">Active</option>
                <option value="Hold-Safely">Hold-Safely</option>
                <option value="Hold-Shop">Hold-Shop</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Button variant="outline-primary" className="me-3" onClick={onFilter}>
            Filter
          </Button>
          <Button className="me-3" variant="outline-danger" onClick={onReset}>
            Reset
          </Button>
        </Form>
      </Container>

      <Container fluid>
        <h3 className="mt-5 mb-3">Search Results ({tractorData.length})</h3>
        <hr></hr>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Owner</th>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>VIN</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {tractors.map((tractor, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/tractor/${tractor._id}`}>{tractor._id}</Link>
                </td>
                <td>
                  {tractor.owner?.firstName} {tractor.owner?.lastName}
                </td>
                <td>{tractor.make}</td>
                <td>{tractor.model}</td>
                <td>{tractor.year}</td>
                <td>{tractor.vin}</td>
                <td>{tractor.status}</td>
              </tr>
            ))}
            {tractors.length < 1 && (
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

export default SearchTractor;
