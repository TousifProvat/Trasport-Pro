import { Card, Col, Row, Space, Statistic } from "antd";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
//css
import "./style.modules.scss";
import PieStatics from "./PieStatics";
import LoadStatics from "./LoadStatics";
import InvoiceStatics from "./InvoiceStatics";
import { DollarOutlined } from "@ant-design/icons";
import RevenueStatics from "./RevenueStatics";

const DispatchDashboard = () => {
  //state
  const [billing, setBilling] = useState({
    loadStats: {
      total: 10,
      planned: 2,
      dispatched: 3,
      delivered: 4,
      cancelled: 1,
    },
    revenueStats: { revenue: 0, paid: 0, unpaid: 0 },
    invoiceStats: { notInvoicedLoads: 0, loadsInvoiced: 0, paidLoads: 0 },
    medicalStats: [
      {
        type: "Missing",
        value: 10,
      },
      {
        type: "Due",
        value: 1,
      },
      {
        type: "Expired",
        value: 5,
      },
    ],
    plateStats: [
      {
        type: "Missing",
        value: 10,
      },
      {
        type: "Due",
        value: 1,
      },
      {
        type: "Expired",
        value: 5,
      },
    ],
    driverLicenseStats: [
      {
        type: "Missing",
        value: 10,
      },
      {
        type: "Due",
        value: 1,
      },
      {
        type: "Expired",
        value: 5,
      },
    ],
    tractorStats: [
      {
        type: "Missing",
        value: 10,
      },
      {
        type: "Due",
        value: 1,
      },
      {
        type: "Expired",
        value: 5,
      },
    ],
    trailerStats: [
      {
        type: "Missing",
        value: 10,
      },
      {
        type: "Due",
        value: 1,
      },
      {
        type: "Expired",
        value: 5,
      },
    ],
  });

  const {
    loadStats,
    invoiceStats,
    revenueStats,
    trailerStats,
    tractorStats,
    medicalStats,
    plateStats,
    driverLicenseStats,
  } = billing;

  //

  return (
    <Container className="my-5">
      <Card
        title="Overview/Dashboard"
        style={{
          background: "#f9f9f9",
        }}
      >
        <Row>
          <Col span={24}>
            <PieStatics />
          </Col>
        </Row>
        <Row className="my-2">
          <Col md={12} xs={24}>
            <LoadStatics />
          </Col>
          <Col md={12} xs={24}>
            <InvoiceStatics />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <RevenueStatics />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DispatchDashboard;
