import React, { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Modal, Nav, Navbar, OverlayTrigger, Row, Table, Tooltip } from 'react-bootstrap';

const MaintenanceLog = () => {
    const [lgShow, setLgShow] = useState(false);

    const handleClose = () => setLgShow(false);

    
    const [allValues, setAllValues] = useState({
      equipmentType: "",
      tractor: "",
      trailer: "",
      maintenanceType: "",
      cost: 0,
      maintenanceDate: "",
      nextMaintenanceDate: "",
    });
    const changeHandler = (e) => {
        setAllValues({
            ...allValues,
            [e.target.name]: e.target.value,
        });
    }
const handleSaveBtn = () => {
  console.log(allValues);
};
    
    const handleEdit = () => {
      alert("edited");
    };
    
    return (
      <div>
        <Container>
          <Navbar bg="" expand="lg" className="mt-5">
            <Container>
              <Navbar.Brand href="#home">
                <h1>Maintenance Log</h1>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Button
                    variant="outline-primary"
                    onClick={() => setLgShow(true)}
                  >
                    Add Maintenance
                  </Button>{" "}
                  <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-modal-sizes-title-lg">
                        Add Maintenance Record
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Row>
                        <Col sm={4}>
                          <Form.Label>Equipment Type</Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            name="equipmentType"
                            onChange={changeHandler}
                          >
                            
                            <option value="Tractor">Tractor</option>
                            <option value="Trailer">Trailer</option>
                          </Form.Select>
                        </Col>
                        {allValues.equipmentType === "Trailer" ? (
                          <>
                            <Col sm={4}>
                              <Form.Label>Trailer</Form.Label>
                              <Form.Select
                                aria-label="Default select example"
                                name="trailer"
                                onChange={changeHandler}
                              >
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
                              <Form.Select
                                aria-label="Default select example"
                                name="tractor"
                                onChange={changeHandler}
                              >
                                <option>Tractor</option>
                                {/* <option value="Tractor1">Tractor1</option>
                              <option value="Tractor2">Tractor2</option> */}
                              </Form.Select>
                            </Col>
                          </>
                        )}
                        {/*  */}
                        <Col sm={4}>
                          <Form.Label>Type of Maintenance</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Type of Maintenance"
                            name="maintenanceType"
                            onChange={changeHandler}
                          />
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col sm={3}>
                          <Form.Label>Cost</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Cost"
                            name="cost"
                            onChange={changeHandler}
                          />
                        </Col>
                        <Col sm={3}>
                          <Form.Label>M.Date</Form.Label>
                          <Form.Control
                            required
                            type="date"
                            placeholder="M.Date"
                            name="maintenanceDate"
                            onChange={changeHandler}
                          />
                        </Col>
                        <Col sm={3}>
                          <Form.Label>Next M.Date</Form.Label>
                          <Form.Control
                            required
                            type="date"
                            placeholder="Next M.Date"
                            name="nextMaintenanceDate"
                            onChange={changeHandler}
                          />
                        </Col>
                        <Col sm={3}>
                          <Form.Label>Attach Receipts</Form.Label>
                          <Form.Control
                            required
                            type="file"
                            placeholder="Inspection Type"
                            name="nextInspectionDate"
                            onChange={changeHandler}
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
                            name="comment"
                            onChange={changeHandler}
                          />
                        </FloatingLabel>
                      </Row>
                      <Button
                        variant="outline-primary"
                        className="mt-5 mb-3"
                        onClick={handleSaveBtn}
                      >
                        Update
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
                <th>Equipment Type</th>
                <th>Equipment Name</th>
                <th>Equipment Number</th>
                <th>M. Type</th>
                <th>Cost</th>
                <th>Next M. Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12/04/2022</td>
                <td>Tractor</td>
                <td>Nissan</td>
                <td>j400</td>
                <td>A-grade</td>
                <td>10000</td>
                <td>12/05/2022</td>
                <td>
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}
                  >
                    <span className="d-inline-block">
                      <Button
                        variant="outline-success"
                        onClick={() => setLgShow(true)}
                      >
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

export default MaintenanceLog;
