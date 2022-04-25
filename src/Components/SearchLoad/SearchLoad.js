import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import useContext from "../Hooks/useContext";

const SearchLoad = () => {
  const { load, loading } = useContext();

  const [loads, setLoads] = useState([]);

  useEffect(() => {
    setLoads(load);
  }, [load]);

  const [status, setStatus] = useState("");

  const handleFilter = () => {
    let newLoads;
    if (status === "") {
      return;
    }
    newLoads = load.filter((load) => load.status === status);
    setLoads(newLoads);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilter();
  };

  const handleReset = (e) => {
    setLoads(load);
    setStatus("");
  };

  const onChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <Container className="mt-5 mb-3">
        <h2>Search load</h2>
        <hr></hr>
        <Form onSubmit={handleSubmit} onReset={handleReset}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Label>Status</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="status"
                value={status}
                onChange={onChange}
              >
                <option>Select Status</option>
                <option value="planned">Planned</option>
                <option value="dispatched">Dispatched</option>
                <option value="picked">Picked</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Button type="submit" variant="outline-primary">
            Filter
          </Button>{" "}
          <Button type="reset" variant="outline-danger">
            Clear
          </Button>{" "}
        </Form>
      </Container>
    </div>
  );
};

export default SearchLoad;
