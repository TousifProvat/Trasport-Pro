import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useContext from "../Hooks/useContext";
import "./searchOwner.css";

const SearchOwner = () => {
  const { ownerData, loading } = useContext();
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    setOwners(ownerData);
  }, [ownerData]);

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
    let newOwners = ownerData;
    if (filter.status !== "") {
      newOwners = ownerData.filter((owner) => owner.status === filter.status);
    }
    if (filter.ownerId !== "") {
      newOwners = newOwners.filter((owner) => owner._id === filter.ownerId);
    }

    setOwners(newOwners);
  };

  const onReset = () => {
    setOwners(ownerData);
    setFilter({ status: "", ownerId: "" });
  };

  return (
    <>
      <div>
        <Container className="mt-5 mb-3">
          <h4>Search Owner</h4>
          <hr></hr>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-4">
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
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Owner Id</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Owner Id Number"
                  name="ownerId"
                  onChange={onChange}
                  value={filter.ownerId}
                />
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
        <Container fluid className="search-result ">
          <Table striped bordered hover>
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
                {/* <th>Active Tractors</th>
                <th>Active Trailers</th>
                <th>Active Drivers</th> */}
              </tr>
            </thead>
            <tbody>
              {owners.map((owner, index) => (
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
                  {/* <td></td>
                  <td></td>
                  <td></td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
};

export default SearchOwner;
