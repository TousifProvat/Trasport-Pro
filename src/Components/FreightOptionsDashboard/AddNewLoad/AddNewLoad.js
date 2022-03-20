import React from "react";
import { Button, Col, Container, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./addNewLoad.css";
import Select from "react-select";

const options = [
  { value: 2, label: "two" },
  { value: 3, label: "three" },
  { value: 4, label: "Four" },
];

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Location
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="inside-modal">
          <div className="inside-modal-inside">
            <Button variant="outline-dark">Save</Button>
            <Form.Group className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column>Customer</Form.Label>
              <Col>
                <Form.Control type="text" placeholder="" required/>
              </Col>
            </Form.Group>
          </div>
          <div className="inside-modal-inside">2</div>
          <div className="inside-modal-inside">3</div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
const AddNewLoad = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Container>
        <h4 className="mt-5 mb-3">Load Information</h4>
        <hr></hr>
        <div className="mb-3 btn-class">
          <Button variant="outline-warning">
            <i className="me-2 fa-solid fa-floppy-disk"></i>Save Record
          </Button>{" "}
          <Button variant="outline-warning">
            <i className="me-2 fa-solid fa-floppy-disk"></i>
            Save and Add New
          </Button>{" "}
          <Button variant="outline-warning">
            <Link to="/">
              <i className="me-2 fa-solid fa-xmark"></i>Cancel
            </Link>
          </Button>{" "}
        </div>

        <div className="selected-div">
          <div>
            <strong>Number of Loads: </strong>
            <Select options={options} />
          </div>
          <div className="float-end">
            <Button
              variant="primary"
              onClick={() => setModalShow(true)}
              className="float-end mt-3"
            >
              <i className="me-2 fa-solid fa-plus"></i>Add New Location
            </Button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              className="flex-end"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddNewLoad;
