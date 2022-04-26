import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import "./searchTrailer.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import useContext from "../Hooks/useContext";
import { Link } from "react-router-dom";

const SearchTrailer = () => {
  const { trailerData, loading } = useContext();
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    setTrailers(trailerData);
  }, [trailerData]);

  //filter
  const [filter, setFilter] = useState({
    status: "",
    trailerId: "",
  });

  const onChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const onFilter = (e) => {
    let newTrailers = trailerData;
    if (filter.status !== "") {
      newTrailers = trailerData.filter(
        (trailer) => trailer.status === filter.status
      );
    }
    if (filter.trailerId !== "") {
      newTrailers = newTrailers.filter(
        (trailer) => trailer._id === filter.trailerId
      );
    }

    setTrailers(newTrailers);
  };

  const onReset = () => {
    setTrailers(trailerData);
    setFilter({ status: "", trailerId: "" });
  };

  return (
    <div className="pb-3">
      <Container>
        <h3 className="mt-5 mb-3">Search Trailers</h3>
        <hr></hr>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Trailer ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Trailer ID"
                name="trailerId"
                onChange={onChange}
                value={filter.trailerId}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Status</Form.Label>

              <Form.Select
                name="status"
                onChange={onChange}
                value={filter.status}
              >
                <option value="">Select Status</option>
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
        <h3 className="mt-5 mb-3">Search Results ({trailers.length})</h3>
        <hr></hr>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Owner</th>
              <th>Make</th>
              <th>Model</th>
              <th>Vin</th>
              <th>Tag Number</th>
              <th>On Boarding Date</th>
              <th>Termination Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {trailers.map((trailer) => (
              <tr>
                <td>
                  <Link to={`/trailer/${trailer._id}`}>{trailer._id}</Link>
                </td>
                <td>
                  {trailer.owner.firstName} {trailer.owner.lastName}
                </td>
                <td>{trailer.make}</td>
                <td>{trailer.model}</td>
                <td>{trailer.vin}</td>
                <td>{trailer.tagNumber}</td>
                <td>{trailer.onBoardingDate}</td>
                <td>{trailer.terminationDate}</td>
                <td>{trailer.status}</td>
              </tr>
            ))}
            {trailers.length < 1 && (
              <td
                colSpan={8}
                style={{
                  textAlign: "center",
                }}
              >
                No Data Found
              </td>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default SearchTrailer;
