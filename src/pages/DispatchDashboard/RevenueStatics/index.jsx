import { Card, Col, message, Row, Statistic } from "antd";
import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios";

const RevenueStatics = () => {
  //states
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({
    revenue: 0,
    paid: 0,
    unpaid: 0,
  });
  //hooks
  useEffect(() => {
    getRevenueStats();
  }, []);
  //func
  const getRevenueStats = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/analytics/revenue");
      setStats(data.revenueStats);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };

  return (
    <Card>
      <Row>
        <Col md={8} xs={24}>
          <Statistic
            title="Total Revenue"
            loading={loading}
            value={stats.revenue}
            prefix="$"
            valueStyle={{
              color: "#198754",
            }}
          />
        </Col>
        <Col md={8} xs={24}>
          <Statistic
            title="Paid"
            loading={loading}
            value={stats.paid}
            prefix="$"
            valueStyle={{
              color: "#0d6efd",
            }}
          />
        </Col>
        <Col md={8} xs={24}>
          <Statistic
            title="Due"
            loading={loading}
            value={stats.unpaid}
            prefix="$"
            valueStyle={{
              color: "#dc3545",
            }}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default RevenueStatics;
