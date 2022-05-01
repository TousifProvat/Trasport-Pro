import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import { message } from "antd";
import "./searchTrailer.css";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";

const SearchTrailer = () => {
  const [allTrailer, setAllTrailer] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTrailers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/trailer");
      setTrailers(data.trailers);
      setAllTrailer(data.trailers);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };

  useEffect(() => {
    getTrailers();
  }, []);

  //filter
  const [filter, setFilter] = useState({
    status: "",
    trailerId: "",
  });

  const onChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const onFilter = (e) => {
    let newTrailers = allTrailer;
    if (filter.status !== "") {
      newTrailers = newTrailers.filter(
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
    setTrailers(allTrailer);
    setFilter({ status: "", trailerId: "" });
  };

  return (
    <>
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

      <Container>
        <h3 className="mt-5 mb-3">Search Results ({trailers.length})</h3>
        <hr></hr>

        <Table striped bordered hover responsive>
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
            {loading && (
              <tr>
                <td
                  colSpan={8}
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
              trailers.map((trailer) => (
                <tr>
                  <td>
                    <Link to={`/trailer/${trailer._id}`}>{trailer._id}</Link>
                  </td>
                  <td>
                    {trailer.owner?.firstName} {trailer.owner?.lastName}
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
            {!loading && trailers.length < 1 && (
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
    </>
  );
};

export default SearchTrailer;
