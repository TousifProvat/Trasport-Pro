import { message, notification } from "antd";
import React, { useEffect, useState } from "react";
import { Button, Container, Navbar, Spinner, Table } from "react-bootstrap";
import axios from "../../utils/axios";
import InspectionModal from "./InspectionModal";

const InspectionLog = () => {
  const [inspection, setInspection] = useState([]);
  const [loading, setLoading] = useState(false);

  const getInspection = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/inspection");
      setInspection(data.inspections);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };
  const updateInspection = async (id, values) => {
    try {
      setLoading(true);
      const res = await axios.put(`/inspection/${id}`, values);
      notification.success({ message: res.data.message });
      //
      const index = inspection.findIndex((obj) => obj._id === id);
      let arr = inspection;
      arr[index] = values;
      setInspection(arr);
      //
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };
  const addInspection = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post(`/inspection`, values);
      notification.success({ message: res.data.message });
      getInspection();
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };
  const removeInspection = async (id) => {
    try {
      setLoading(true);
      const res = await axios.delete(`/inspection/${id}`);
      notification.success({ message: res.data.message });
      setLoading(false);
      const newInspection = inspection.filter(
        (inspection) => inspection._id !== id
      );
      setInspection(newInspection);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };

  useEffect(() => {
    getInspection();
  }, []);

  const [inspectionId, setInspectionId] = useState(null);
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  const showUpdateModal = (id) => {
    setInspectionId(id);
    setUpdateModal(true);
  };

  return (
    <div>
      <InspectionModal
        visible={addModal}
        setVisible={setAddModal}
        action="add"
        addInspection={addInspection}
      />
      <InspectionModal
        visible={updateModal}
        setVisible={setUpdateModal}
        action="update"
        Id={inspectionId}
        updateInspection={updateInspection}
      />
      <Container>
        <Navbar bg="" expand="lg" className="mt-5">
          <Container>
            <Navbar.Brand>Inspection Log</Navbar.Brand>
            <Button variant="outline-primary" onClick={() => setAddModal(true)}>
              Add Inspection
            </Button>
          </Container>
        </Navbar>
        <hr></hr>
      </Container>
      <Container>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Date</th>
              <th>Equipment Type</th>
              <th>Equipment ID</th>
              <th>Inspection Type</th>
              <th>Next Inspection Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={10} style={{ textAlign: "center" }}>
                  <Spinner animation="border" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </td>
              </tr>
            )}
            {!loading &&
              inspection.map((inspection, index) => (
                <tr key={index}>
                  <td>{inspection.inspectionDate}</td>
                  <td>{inspection.equipmentType}</td>
                  <td>
                    {inspection.equipmentType === "Tractor"
                      ? inspection.tractor?._id
                      : inspection.trailer?._id}
                  </td>
                  <td>{inspection.inspectionType}</td>
                  <td>{inspection.nextInspectionDate}</td>
                  <td>{inspection.result}</td>
                  <td>
                    <Button
                      className="m-2"
                      variant="outline-primary"
                      onClick={() => showUpdateModal(inspection._id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={() => removeInspection(inspection._id)}
                    >
                      Delete
                    </Button>{" "}
                  </td>
                </tr>
              ))}
            {!loading && inspection.length < 1 && (
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

export default InspectionLog;
