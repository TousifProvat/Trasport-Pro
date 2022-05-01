import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
  Row,
  Table,
} from "react-bootstrap";
import useContext from "../Hooks/useContext";

const BillingDashboard = () => {
  const { billing } = useContext();
  const { loadStats, invoiceStats, revenueStats, loading } = billing;

  // console.log(loadStats);
  return (
    <div>
      <Container fluid>
        {" "}
        <h3 className="mt-5 mb-3">Billing Dashboard</h3>
        <hr></hr>
        <Row>
          {loading && <h2>loading..</h2>}
          {!loading && (
            <>
              <Col sm={4}>
                <Navbar bg="light" expand="lg">
                  <Container>
                    <Navbar.Brand href="#home">Load Stats</Navbar.Brand>
                  </Container>
                </Navbar>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Load Stats</th>
                      <th>Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Total</td>
                      <td>{loadStats.total}</td>
                    </tr>
                    <tr>
                      <td>Planned</td>
                      <td>{loadStats.planned}</td>
                    </tr>
                    <tr>
                      <td>Dispatched</td>
                      <td>{loadStats.dispatched}</td>
                    </tr>
                    <tr>
                      <td>Delivered</td>
                      <td>{loadStats.delivered}</td>
                    </tr>
                    <tr>
                      <td>Cancelled</td>
                      <td>{loadStats.cancelled}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col sm={4}>
                <Navbar bg="light" expand="lg">
                  <Container>
                    <Navbar.Brand href="#home">Revenue Stats</Navbar.Brand>
                  </Container>
                </Navbar>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Label</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Revenue</td>
                      <td>{revenueStats.revenue}</td>
                    </tr>
                    <tr>
                      <td>Paid</td>
                      <td>{revenueStats.paid}</td>
                    </tr>
                    <tr>
                      <td>Unpaid</td>
                      <td>{revenueStats.unpaid}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col sm={4}>
                <Navbar bg="light" expand="lg">
                  <Container>
                    <Navbar.Brand href="#home">Invoices Stats</Navbar.Brand>
                  </Container>
                </Navbar>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Load Stats</th>
                      <th>Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Loads Not Invoiced</td>
                      <td>{invoiceStats.notInvoicedLoads}</td>
                    </tr>
                    <tr>
                      <td>Load Invoiced</td>
                      <td>{invoiceStats.loadsInvoiced}</td>
                    </tr>
                    <tr>
                      <td>Paid Loads</td>
                      <td>{invoiceStats.paidLoads}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default BillingDashboard;
