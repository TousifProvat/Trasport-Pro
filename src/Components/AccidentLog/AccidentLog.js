import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  Nav,
  Navbar,
  OverlayTrigger,
  Row,
  Table,
  Tooltip,
} from "react-bootstrap";

const AccidentLog = () => {
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);

  const [allValues, setAllValues] = useState({
    tractor: "",
    incidentDate: "",
    incidentTime: "",
    damagedArea: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    driver: "",
    fatalities: "",
    injuries: "",
    notes: "",
    accidentDocument: "",
  });

  const changeHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    console.log(allValues);
  };
  return (
    <div>
      <Container fluid>
        <Navbar bg="" expand="lg">
          <Container>
            <Navbar.Brand>Accident Log</Navbar.Brand>

            <Nav className="ms-auto">
              <Button
                variant="outline-primary"
                className="mt-4"
                onClick={() => setLgShow(true)}
              >
                Add Accident Record
              </Button>{" "}
              <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Large Modal
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Tractor</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="tractor"
                          value={allValues.tractor}
                          onChange={changeHandler}
                        >
                          <option>Select Tractor</option>
                          <option value="Tractor1">Tractor1</option>
                          <option value="Tractor2">Tractor2</option>
                          <option value="Tractor3">Tractor3</option>
                        </Form.Select>
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Date Occured</Form.Label>
                        <Form.Control
                          required
                          type="date"
                          name="incidentDate"
                          value={allValues.incidentDate}
                          onChange={changeHandler}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustomUsername"
                      >
                        <Form.Label>Time</Form.Label>

                        <Form.Control
                          required
                          type="time"
                          name="incidentTime"
                          value={allValues.incidentTime}
                          onChange={changeHandler}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please choose a username.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom03"
                      >
                        <Form.Label>Damage Area</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Damage Area"
                          required
                          name="damagedArea"
                          value={allValues.damagedArea}
                          onChange={changeHandler}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid city.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom04"
                      >
                        <Form.Label>Street</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Street"
                          required
                          name="street"
                          value={allValues.street}
                          onChange={changeHandler}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid state.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom05"
                      >
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="City"
                          required
                          name="city"
                          value={allValues.city}
                          onChange={changeHandler}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid zip.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom03"
                      >
                        <Form.Label>State</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="state"
                          value={allValues.state}
                          onChange={changeHandler}
                        >
                          <option>Open this select menu</option>
                          <option value="Alaska">Alaska</option>
                          <option value="Alabama">Alabama</option>
                          <option value="Canada">Canada</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid city.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom04"
                      >
                        <Form.Label>Driver</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="driver"
                          value={allValues.driver}
                          onChange={changeHandler}
                        >
                          <option>Open this select menu</option>
                          <option value="Driver1">Driver1</option>
                          <option value="Driver2">Driver2</option>
                          <option value="Driver3">Driver3</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid state.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom05"
                      >
                        <Form.Label>Notes</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Notes"
                          required
                          name="notes"
                          value={allValues.notes}
                          onChange={changeHandler}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid zip.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Button type="submit">Save</Button>{" "}
                    <Button variant="danger" onClick={handleClose}>
                      Cancel
                    </Button>
                  </Form>
                </Modal.Body>
              </Modal>
            </Nav>
          </Container>
        </Navbar>
        <hr></hr>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Truck</th>
              <th>Drivers</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location of A.</th>
              <th>Facilities</th>
              <th>Injuries</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12/14/2022</td>
              <td>22</td>
              <td>20</td>
              <td>12/05/2022</td>
              <td>10:28 AM</td>
              <td>Alaska</td>
              <td>Good</td>
              <td>No</td>
              <td>
                <Button
                  className="m-1"
                  variant="outline-primary"
                  onClick={() => setLgShow(true)}
                >
                  Edit
                </Button>
                <Button variant="outline-danger" className="m-1">
                  Delete
                </Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AccidentLog;
