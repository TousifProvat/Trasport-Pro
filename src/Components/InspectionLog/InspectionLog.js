import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Modal,
  Nav,
  Navbar,
  OverlayTrigger,
  Row,
  Table,
  Tooltip,
} from "react-bootstrap";

const InspectionLog = () => {
    const [lgShow, setLgShow] = useState(false);
    const[handleEquipment, setHandleEquipment] = useState(false);
  const [allValues, setAllValues] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    accounting: false,
    billing: false,
    systemAdmin: true,
    settlements: false,
    freightOperation: false,
  });

  const changeHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
      
      setHandleEquipment({ [e.target.name]: e.target.value === "Trailer" });
    };
    
    // console.log(handleEquipment.equipType);

  const handleEdit = () => {
    alert("edited");
    };
    const handleClose = () => setLgShow(false);

    const handleSaveBtn = () => {
        console.log(allValues);
    }
  return (
    <div>
      <Container>
        <Navbar bg="" expand="lg" className="mt-5">
          <Container>
            <Navbar.Brand href="/">
              <h1>Inspection Log</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Button
                  variant="outline-primary"
                  onClick={() => setLgShow(true)}
                >
                  Add Inspection
                </Button>{" "}
                <Modal
                  size="lg"
                  show={lgShow}
                  onHide={() => setLgShow(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                      Add Inspection Record
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Row>
                      <Col sm={4}>
                        <Form.Label>Equipment Type</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="equipType"
                          onChange={changeHandler}
                        >
                          <option>Select Equipment Type</option>
                          <option value="Tractor">Tractor</option>
                          <option value="Trailer">Trailer</option>
                        </Form.Select>
                      </Col>
                      {handleEquipment.equipType ? (
                        <>
                          <Col sm={4}>
                            <Form.Label>Trailer</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>Trailer</option>
                              {/* <option value="Tractor1">Tractor1</option>
                              <option value="Tractor2">Tractor2</option> */}
                            </Form.Select>
                          </Col>
                        </>
                      ) : (
                        <>
                          <Col sm={4}>
                            <Form.Label>Tractor</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>Tractor</option>
                              {/* <option value="Tractor1">Tractor1</option>
                              <option value="Tractor2">Tractor2</option> */}
                            </Form.Select>
                          </Col>
                        </>
                      )}
                      {/*  */}
                      <Col sm={4}>
                        <Form.Label>Inspection Type</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Inspection Type"
                        />
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Form.Label>Comments</Form.Label>
                      <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Comments"
                      >
                        <Form.Control
                          as="textarea"
                          placeholder="Comment"
                          style={{ height: "100px" }}
                        />
                      </FloatingLabel>
                    </Row>
                    <Row className="mt-3">
                      <Col sm={6}>
                        <Form.Label>Inspect Result</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Select result</option>
                          {/* <option value="Tractor1">Tractor1</option>
                          <option value="Tractor2">Tractor2</option> */}
                        </Form.Select>
                      </Col>
                      <Col sm={6}>
                        <Form.Label>Attach Inspect Result</Form.Label>
                        <Form.Control
                          required
                          type="file"
                          placeholder="Inspection Type"
                        />
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col sm={6}>
                        <Form.Label>Inspect Date</Form.Label>
                        <Form.Control
                          required
                          type="date"
                          placeholder="Inspection Type"
                        />
                      </Col>
                      <Col sm={6}>
                        <Form.Label>Next Inspect Date</Form.Label>
                        <Form.Control
                          required
                          type="date"
                          placeholder="Inspection Type"
                        />
                      </Col>
                    </Row>
                    <Button
                      variant="outline-primary"
                      className="mt-5 mb-3"
                      onClick={handleSaveBtn}
                    >
                      Save
                    </Button>{" "}
                    <Button
                      variant="outline-danger"
                      className="mt-5 mb-3"
                      onClick={handleClose}
                    >
                      cancel
                    </Button>{" "}
                  </Modal.Body>
                </Modal>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <hr></hr>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>E.Q Type</th>
              <th>Equipment</th>
              <th>Inc. Type</th>
              <th>Inc. Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12/04/2022</td>
              <td>GeoTab</td>
              <td>9090909090</td>
              <td>jhonDoe@789</td>
              <td>Active</td>
              <td>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}
                >
                  <span className="d-inline-block">
                    <Button variant="outline-success" onClick={handleEdit}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>{" "}
                  </span>
                </OverlayTrigger>{" "}
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Delete</Tooltip>}
                >
                  <span className="d-inline-block">
                    <Button variant="outline-danger">
                      <i className="fa-solid fa-scissors"></i>
                    </Button>{" "}
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default InspectionLog;
