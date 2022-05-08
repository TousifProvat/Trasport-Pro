import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
//
import { Badge, Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { message } from "antd";
//
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
//
import Loader from "../Loader";
//
import "./dashboard.css";
//
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  //states
  const [billing, setBilling] = useState({
    loadStats: {
      total: 0,
      planned: 0,
      dispatched: 0,
      delivered: 0,
      cancelled: 0,
    },
    revenueStats: { revenue: 0, paid: 0, unpaid: 0 },
    invoiceStats: { notInvoicedLoads: 0, loadsInvoiced: 0, paidLoads: 0 },
    medicalStats: [0, 0, 0],
    plateStats: [0, 0, 0],
    revenueStats: [0, 0, 0],
    tractorStats: [0, 0, 0],
    trailerStats: [0, 0, 0],
  });

  const { loadStats, invoiceStats, revenueStats } = billing;

  const [loading, setLoading] = useState(false);

  const getBilling = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/billing");
      setBilling(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };

  //hooks
  useEffect(() => {
    getBilling();
  }, []);

  //pie chart data sets
  const trailerInspection = {
    labels: ["Due", "Unknown", "Expired"],
    datasets: [
      {
        label: "# of Votes",
        data: billing.trailerStats,
        backgroundColor: [
          "rgba(255, 193, 7, 0.2)",
          "rgba(108, 117, 125, 0.2)",
          "rgba(255, 0, 0, 0.2)",
        ],
        borderColor: [
          "rgba(255, 193, 7, 1)",
          "rgba(108, 117, 125, 1)",
          "rgba(255, 0, 0, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const tractorInspection = {
    labels: ["Due", "Unknown", "Expired"],
    datasets: [
      {
        label: "# of Votes",
        data: billing.tractorStats,
        backgroundColor: [
          "rgba(255, 193, 7, 0.2)",
          "rgba(108, 117, 125, 0.2)",
          "rgba(255, 0, 0, 0.2)",
        ],
        borderColor: [
          "rgba(255, 193, 7, 1)",
          "rgba(108, 117, 125, 1)",
          "rgba(255, 0, 0, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const driverLicenseStats = {
    labels: ["Due", "Unknown", "Expired"],
    datasets: [
      {
        label: "# of Votes",
        data: billing.driverLicenseStats,
        backgroundColor: [
          "rgba(255, 193, 7, 0.2)",
          "rgba(108, 117, 125, 0.2)",
          "rgba(255, 0, 0, 0.2)",
        ],
        borderColor: [
          "rgba(255, 193, 7, 1)",
          "rgba(108, 117, 125, 1)",
          "rgba(255, 0, 0, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const medicalStats = {
    labels: ["Due", "Unknown", "Expired"],
    datasets: [
      {
        label: "# of Votes",
        data: billing.medicalStats,
        backgroundColor: [
          "rgba(255, 193, 7, 0.2)",
          "rgba(108, 117, 125, 0.2)",
          "rgba(255, 0, 0, 0.2)",
        ],
        borderColor: [
          "rgba(255, 193, 7, 1)",
          "rgba(108, 117, 125, 1)",
          "rgba(255, 0, 0, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const plateStats = {
    labels: ["Due", "Unknown", "Expired"],
    datasets: [
      {
        label: "# of Votes",
        data: billing.plateStats,
        backgroundColor: [
          "rgba(255, 193, 7, 0.2)",
          "rgba(108, 117, 125, 0.2)",
          "rgba(255, 0, 0, 0.2)",
        ],
        borderColor: [
          "rgba(255, 193, 7, 1)",
          "rgba(108, 117, 125, 1)",
          "rgba(255, 0, 0, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Average mood per day",
      },
    },
  };

  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col lg={7} md={7} sm={12} className="mt-2">
          <Card>
            <Card.Body>
              <Navbar bg="" expand="lg">
                <Container>
                  <Navbar.Brand>
                    <h5>Safety And Compliance</h5>
                  </Navbar.Brand>

                  <Nav className="ms-auto">
                    <Badge pill bg="danger" className="m-1">
                      Expired
                    </Badge>{" "}
                    <Badge pill bg="primary" className="m-1">
                      Valid
                    </Badge>{" "}
                    <Badge pill bg="warning" className="m-1">
                      Due
                    </Badge>{" "}
                    <Badge pill bg="secondary" className="m-1">
                      Unknown
                    </Badge>{" "}
                  </Nav>
                </Container>
              </Navbar>
              <Row>
                <Col lg={4} md={6} sm={6}>
                  <h6 className="mt-5 text-center">Trailer Inspection</h6>
                  {loading && <Loader />}
                  {!loading && (
                    <Pie
                      data={trailerInspection}
                      className="pie-chart"
                      options={options}
                    />
                  )}
                </Col>
                <Col lg={4} md={6} sm={6}>
                  <h6 className="mt-5 text-center">Tractor Inspection</h6>
                  {loading && <Loader />}
                  {!loading && (
                    <Pie data={tractorInspection} options={options} />
                  )}
                </Col>
                <Col lg={4} md={6} sm={6}>
                  <h6 className="mt-5 text-center">Driver Licenses(CDL)</h6>
                  {loading && <Loader />}
                  {!loading && (
                    <Pie data={driverLicenseStats} options={options} />
                  )}
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={6} sm={6}>
                  <h6 className="mt-5 text-center">Medical Certificate</h6>
                  {loading && <Loader />}
                  {!loading && <Pie data={medicalStats} options={options} />}
                </Col>
                <Col lg={4} md={6} sm={6}>
                  <h6 className="mt-5 text-center">Plate Registration</h6>
                  {loading && <Loader />}
                  {!loading && <Pie data={plateStats} options={options} />}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={5} md={5} sm={12} className="mt-2">
          <Card>
            <Card.Body>
              <Row>
                <Navbar.Brand>
                  <h4>Dispatch</h4>
                </Navbar.Brand>
              </Row>
              <hr></hr>
              <Row>
                <Col lg={3} md={4} sm={12}>
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h1 className="m-2" style={{ color: "blue" }}>
                      {loadStats.planned}
                    </h1>
                    <p className="text-center">Planned Loads</p>
                  </div>
                </Col>
                <Col lg={3} md={4} sm={12}>
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h1 className="m-2" style={{ color: "goldenRod" }}>
                      {loadStats.dispatched}
                    </h1>
                    <p className="text-center">Dispatched Loads</p>
                  </div>
                </Col>
                <Col lg={3} md={4} sm={12}>
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h1 className="mb-3" style={{ color: "green" }}>
                      {loadStats.delivered}
                    </h1>
                    <p className="text-center">Delivered Loads</p>
                  </div>
                </Col>
                <Col lg={3} md={4} sm={12}>
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h1 className="mb-3" style={{ color: "red" }}>
                      {loadStats.cancelled}
                    </h1>
                    <p className="text-center">Cancelled Loads</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
            <Card.Body>
              <Row>
                <Navbar.Brand>
                  <h4>Billing</h4>
                </Navbar.Brand>
              </Row>
              <hr></hr>
              <Row>
                <Col lg={4} md={4} sm={12}>
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h1 className="mb-3" style={{ color: "blue" }}>
                      {invoiceStats.notInvoicedLoads}
                    </h1>
                    <p>Loads Not Invoiced</p>
                  </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h1 className="mb-3" style={{ color: "goldenRod" }}>
                      {invoiceStats.loadsInvoiced}
                    </h1>
                    <p>Loads Invoiced</p>
                  </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h1 className="mb-3" style={{ color: "green" }}>
                      {invoiceStats.paidLoads}
                    </h1>
                    <p>Paid Loads</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Navbar.Brand>
                  <h2 className="text-center">Accounting</h2>
                </Navbar.Brand>
              </Row>
              <hr></hr>
              <Row>
                <Col lg={4} md={4} sm={12}>
                  <strong>Revenue(Load Rate)</strong>
                  <Card
                    bg="primary"
                    style={{ width: "100%" }}
                    className="mb-2 mt-3"
                  >
                    <Card.Body>
                      <Card.Title className="text-center">
                        {revenueStats.revenue}$
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={4} md={4} sm={12}>
                  <strong>Paid Invoices</strong>
                  <Card
                    bg="success"
                    style={{ width: "100%" }}
                    className="mb-2 mt-3"
                  >
                    <Card.Body>
                      <Card.Title className="text-center">
                        {revenueStats.paid}$
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <strong>Unpaid Invoices</strong>
                  <Card
                    bg="danger"
                    style={{ width: "100%" }}
                    className="mb-2 mt-3"
                  >
                    <Card.Body>
                      <Card.Title className="text-center">
                        {revenueStats.unpaid}$
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
