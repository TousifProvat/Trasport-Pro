import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import "./searchTractor.css";
import useContext from "../Hooks/useContext";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import { message } from "antd";

const SearchTractor = () => {
  const [allTractors, setAllTractors] = useState([]);
  const [tractors, setTractors] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTractors = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/tractor");
      setTractors(data.tractors);
      setAllTractors(data.tractors);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };

  useEffect(() => {
    getTractors();
  }, []);

  //filter
  const [filter, setFilter] = useState({
    status: "",
    tractorId: "",
  });

  const onChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const onFilter = () => {
    let newTractors = allTractors;
    if (filter.status !== "") {
      newTractors = newTractors.filter(
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
    setTractors(allTractors);
    setFilter({ status: "", tractorId: "" });
  };

  return (
    <>
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

      <Container>
        <h3 className="mt-5 mb-3">Search Results ({tractors.length})</h3>
        <hr></hr>

        <Table striped bordered hover responsive>
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
              tractors.map((tractor, index) => (
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
            {!loading && tractors.length < 1 && (
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

export default SearchTractor;
