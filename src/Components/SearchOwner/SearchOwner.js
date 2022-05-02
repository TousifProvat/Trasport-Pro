import { message } from "antd";
import axios from "../../utils/axios";
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
import { Link } from "react-router-dom";
import "./searchOwner.css";

const SearchOwner = () => {
  const [allOwners, setAllOwners] = useState([]);
  const [owners, setOwners] = useState([]);
  const [loading, setLoading] = useState(false);

  const getOwners = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/owner");
      setOwners(data.owners);
      setAllOwners(data.owners);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };

  useEffect(() => {
    getOwners();
  }, []);

  const [filter, setFilter] = useState({
    status: "",
    ownerId: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  //filter
  const onFilter = () => {
    let newOwners = allOwners;
    if (filter.status !== "") {
      newOwners = newOwners.filter((owner) => owner.status === filter.status);
    }
    if (filter.ownerId !== "") {
      newOwners = newOwners.filter((owner) => owner._id === filter.ownerId);
    }

    setOwners(newOwners);
  };

  const onReset = () => {
    setOwners(allOwners);
    setFilter({ status: "", ownerId: "" });
  };

  return (
    <>
      <Container className="mt-5 mb-3">
        <h4>Search Owner</h4>
        <hr></hr>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Owner ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Owner ID Number"
                name="ownerId"
                onChange={onChange}
                value={filter.ownerId}
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
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
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
      <Container className="search-result ">
        <h3>Search Results ({owners.length})</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Company</th>
              <th>Phone Number</th>
              <th>Cell Phone Number</th>
              <th>City</th>
              <th>State</th>
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
              owners.map((owner, index) => (
                <tr key={index}>
                  <td>
                    <Link to={`/owner/${owner._id}`}>{owner._id}</Link>
                  </td>
                  <td>
                    {owner.firstName} {owner.lastName}
                  </td>
                  <td>{owner.status}</td>
                  <td>{owner.company}</td>
                  <td>{owner.primaryPhoneNumber}</td>
                  <td>{owner.secondaryPhoneNumber}</td>
                  <td>{owner.city}</td>
                  <td>{owner.state}</td>
                </tr>
              ))}
            {!loading && owners.length < 1 && (
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

export default SearchOwner;
