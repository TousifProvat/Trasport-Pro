import React, { useState } from "react";
import { Button, Container, Nav, Navbar, Table } from "react-bootstrap";
import useContext from "../Hooks/useContext";
import "./userManagement.css";
import UserManagementModal from "./UserManagementModal";

const UserManagement = () => {
  const { loading, user, removeUser } = useContext();

  const [userId, setUserId] = useState(null);
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  const showUpdateModal = (id) => {
    setUserId(id);
    setUpdateModal(true);
  };
  return (
    <div>
      <UserManagementModal
        visible={addModal}
        setVisible={setAddModal}
        action="add"
      />
      <UserManagementModal
        visible={updateModal}
        setVisible={setUpdateModal}
        action="update"
        Id={userId}
      />
      <Container>
        <Navbar bg="" expand="lg" className="mt-5">
          <Container>
            <Navbar.Brand>User Management</Navbar.Brand>

            <Nav className="ms-auto">
              <Button
                variant="outline-primary"
                onClick={() => setAddModal(true)}
              >
                Add User
              </Button>{" "}
            </Nav>
          </Container>
        </Navbar>
        <hr></hr>
      </Container>
      <Container fluid>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr key={index}>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.phoneNumber}</td>
                <td>{user.email}</td>
                <td>{user.suspended && "Suspended"}</td>
                <td>
                  <Button
                    variant="outline-primary"
                    className="m-2"
                    onClick={() => showUpdateModal(user._id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline-danger"
                    onClick={() => removeUser(user._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
            {user.length < 1 && (
              <tr>
                <td
                  colSpan={5}
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

export default UserManagement;
