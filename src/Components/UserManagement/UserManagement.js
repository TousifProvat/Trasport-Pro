import { message, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { Button, Container, Navbar, Spinner, Table } from 'react-bootstrap';
import axios from '../../utils/axios';
import './userManagement.css';
import UserManagementModal from './UserManagementModal';

const UserManagement = () => {
  //state
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  //hooks
  useEffect(() => {
    getUsers();
  }, []);
  //funcs
  const getUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('/user');
      setUser(data.users);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };
  const removeUser = async (id) => {
    try {
      setLoading(true);
      const res = await axios.delete(`/user/${id}`);
      notification.success({ message: res.data.message });
      setLoading(false);
      const newUsers = user.filter((user) => user._id !== id);
      setUser(newUsers);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };

  const showUpdateModal = (id) => {
    setUserId(id);
    setUpdateModal(true);
  };

  return (
    <>
      <UserManagementModal
        visible={addModal}
        setVisible={setAddModal}
        action="add"
        setId={setUserId}
        getUsers={getUsers}
      />
      <UserManagementModal
        visible={updateModal}
        setVisible={setUpdateModal}
        action="update"
        Id={userId}
        setId={setUserId}
        getUsers={getUsers}
      />
      <Container>
        <Navbar bg="" expand="lg" className="mt-5">
          <Container>
            <Navbar.Brand>User Management</Navbar.Brand>
            <Button variant="outline-primary" onClick={() => setAddModal(true)}>
              Add User
            </Button>
          </Container>
        </Navbar>
        <hr></hr>
      </Container>
      <Container>
        <Table striped bordered hover responsive>
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
            {loading && (
              <tr>
                <td
                  colSpan={5}
                  style={{
                    textAlign: 'center',
                  }}
                >
                  <Spinner animation="border" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </td>
              </tr>
            )}
            {!loading &&
              user.map((user, index) => (
                <tr key={index}>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.email}</td>
                  <td>{user.suspended && 'Suspended'}</td>
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
            {!loading && user.length < 1 && (
              <tr>
                <td
                  colSpan={5}
                  style={{
                    textAlign: 'center',
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

export default UserManagement;
