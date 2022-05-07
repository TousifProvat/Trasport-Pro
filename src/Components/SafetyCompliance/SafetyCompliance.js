import React from "react";
import {
  Badge,
  Card,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Button } from "bootstrap";
import "./safetyCompliance.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Expired", "Valid", "Due", "Unknown"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(0, 0, 0, 0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(0, 0, 0, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
export const data2 = {
  labels: ["Expired", "Valid", "Due", "Unknown"],
  datasets: [
    {
      label: "# of Votes",
      data: [25, 19, 24, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(0, 0, 0, 0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(0, 0, 0, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
export const data3 = {
  labels: ["Expired", "Valid", "Due", "Unknown"],
  datasets: [
    {
      label: "# of Votes",
      data: [25, 25, 25, 25],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(0, 0, 0, 0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(0, 0, 0, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const SafetyCompliance = () => {
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col lg={6} md={6} sm={12}>
          <Card>
            <Card.Body>
              <Navbar bg="" expand="lg">
                <Container fluid>
                  <Navbar.Brand href="#home">
                    Safety And Compliance
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav" className="mt-3">
                    <Nav className="ms-auto">
                      <Badge pill bg="danger">
                        Expired
                      </Badge>{" "}
                      <Badge pill bg="primary">
                        Valid
                      </Badge>{" "}
                      <Badge pill bg="warning">
                        Due
                      </Badge>{" "}
                      <Badge pill bg="secondary">
                        Unknown
                      </Badge>{" "}
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              <Row>
                <Col lg={4} md={6} sm={6}>
                  <h5 className="mt-5 text-center">Trailer Inspection</h5>
                  <Pie data={data} className="pie-chart" />
                </Col>
                <Col lg={4} md={6} sm={6}>
                  {" "}
                  <h5 className="mt-5 text-center">Tractor Inspection</h5>
                  <Pie data={data2} />
                </Col>
                <Col lg={4} md={6} sm={6}>
                  {" "}
                  <h5 className="mt-5 text-center">Driver Licences(CDL)</h5>
                  <Pie data={data} />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={6} sm={6}>
                  <h5 className="mt-5 text-center">Medical Certificate</h5>
                  <Pie data={data3} />
                </Col>
                <Col lg={4} md={6} sm={6}>
                  {" "}
                  <h5 className="mt-5 text-center">Plate Registration</h5>
                  <Pie data={data2} />
                </Col>
                <Col lg={4} md={6} sm={6}>
                  {" "}
                  {/* <h5 className="mt-5 text-center">Driver Licences(CDL)</h5>
                  <Pie data={data} /> */}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <Card>
            <Card.Body>
              <Navbar bg="" expand="lg">
                <Container fluid>
                  <Navbar.Brand href="#home">Dispatch</Navbar.Brand>
                </Container>
              </Navbar>
              <hr></hr>
              <Row>
                <Col lg={3} md={4} sm={12}>
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h3 className="mb-3" style={{ color: "blue" }}>
                      0
                    </h3>
                    <p>Schedule Loads</p>
                  </div>
                </Col>
                <Col lg={3} md={4} sm={12}>
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h3 className="mb-3" style={{ color: "goldenRod" }}>
                      0
                    </h3>
                    <p>Schedule Loads</p>
                  </div>
                </Col>
                <Col lg={3} md={4} sm={12}>
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h3 className="mb-3" style={{ color: "green" }}>
                      0
                    </h3>
                    <p>Schedule Loads</p>
                  </div>
                </Col>
                <Col lg={3} md={4} sm={12}>
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h3 className="mb-3" style={{ color: "red" }}>
                      0
                    </h3>
                    <p>Schedule Loads</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
            <Card.Body>
              <Navbar bg="" expand="lg">
                <Container fluid>
                  <Navbar.Brand href="#home">Billing</Navbar.Brand>
                </Container>
              </Navbar>
              <hr></hr>
              <Row>
                <Col lg={4} md={4} sm={12}>
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h3 className="mb-3" style={{ color: "blue" }}>
                      0
                    </h3>
                    <p>Schedule Loads</p>
                  </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h3 className="mb-3" style={{ color: "goldenRod" }}>
                      0
                    </h3>
                    <p>Schedule Loads</p>
                  </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h3 className="mb-3" style={{ color: "green" }}>
                      0
                    </h3>
                    <p>Schedule Loads</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <h2 className="text-center mt-5 mb-3">Accounting</h2>
        <hr></hr>
        <Col lg={4} md={6} sm={6}>
          <strong>Revenue(Load Rate)</strong>
          <Card bg="primary" style={{ width: "100%" }} className="mb-2 mt-3">
            <Card.Body>
              <Card.Title className="text-center">0.00</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={6}>
          <strong>Fuel Charge</strong>
          <Card bg="secondary" style={{ width: "100%" }} className="mb-2 mt-3">
            <Card.Body>
              <Card.Title className="text-center">160.00</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={6}>
          <strong>Paid Invoices</strong>
          <Card bg="success" style={{ width: "100%" }} className="mb-2 mt-3">
            <Card.Body>
              <Card.Title className="text-center">0.00</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col lg={4} md={6} sm={6}>
          <strong>Factory Fee(QP)</strong>
          <Card bg="primary" style={{ width: "100%" }} className="mb-2 mt-3">
            <Card.Body>
              <Card.Title className="text-center">0.00</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={6}>
          <strong>Truck Expense</strong>
          <Card bg="secondary" style={{ width: "100%" }} className="mb-2 mt-3">
            <Card.Body>
              <Card.Title className="text-center">0.00</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={6}>
          <strong>Unpaid Invoices</strong>
          <Card bg="danger" style={{ width: "100%" }} className="mb-2 mt-3">
            <Card.Body>
              <Card.Title className="text-center">160.00</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3 mb-5">
        <Col lg={4} md={6} sm={6}>
          <strong>Carrier Commission</strong>
          <Card bg="primary" style={{ width: "100%" }} className="mb-2 mt-3">
            <Card.Body>
              <Card.Title className="text-center">40.00</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={6}>
          <strong>Truck Settlement</strong>
          <Card bg="secondary" style={{ width: "100%" }} className="mb-2 mt-3">
            <Card.Body>
              <Card.Title className="text-center">155.00</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={6}></Col>
      </Row>
    </Container>
  );
};

export default SafetyCompliance;
