import { Pie } from "@ant-design/plots";
import { Card, Col, message, Row } from "antd";
import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios";

const PieStatics = () => {
  //state
  const [stats, setStats] = useState({
    medicalStats: [
      {
        type: "Missing",
        value: 0,
      },
      {
        type: "Due",
        value: 0,
      },
      {
        type: "Expired",
        value: 0,
      },
    ],
    plateStats: [
      {
        type: "Missing",
        value: 0,
      },
      {
        type: "Due",
        value: 0,
      },
      {
        type: "Expired",
        value: 0,
      },
    ],
    driverLicenseStats: [
      {
        type: "Missing",
        value: 0,
      },
      {
        type: "Due",
        value: 0,
      },
      {
        type: "Expired",
        value: 0,
      },
    ],
    tractorStats: [
      {
        type: "Missing",
        value: 0,
      },
      {
        type: "Due",
        value: 0,
      },
      {
        type: "Expired",
        value: 0,
      },
    ],
    trailerStats: [
      {
        type: "Missing",
        value: 0,
      },
      {
        type: "Due",
        value: 0,
      },
      {
        type: "Expired",
        value: 0,
      },
    ],
  });
  const [loading, setLoading] = useState(false);

  const {
    trailerStats,
    tractorStats,
    medicalStats,
    plateStats,
    driverLicenseStats,
  } = stats;
  //hooks
  useEffect(() => {
    getSafetyAndComplianceStats();
  }, []);
  //func
  const getSafetyAndComplianceStats = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/analytics/safety-and-compliance");
      setStats(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };
  const getConfig = (title) => {
    return {
      appendPadding: 20,
      angleField: "value",
      colorField: "type",
      color: ["#6c757d", "#ffc20b", "#dc3545"],
      radius: 1,
      innerRadius: 0.7,
      autoFit: false,
      width: 300,
      height: 200,
      label: {
        type: "inner",
        offset: "-50%",
        content: "{value}",
        style: {
          textAlign: "center",
          fontSize: 14,
        },
      },
      interactions: [
        {
          type: "element-selected",
        },
        {
          type: "element-active",
        },
      ],
      statistic: {
        title: false,
        content: {
          style: {
            whiteSpace: "pre-wrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: 15,
          },
          content: `${title}`,
        },
      },
    };
  };

  return (
    <Card className="pieStatics">
      <Row align="center">
        <Col>
          <Pie
            loading={loading}
            data={trailerStats}
            {...getConfig("Trailer Inspection")}
          />
        </Col>
        <Col>
          <Pie
            loading={loading}
            data={tractorStats}
            {...getConfig("Tractor Inspection")}
          />
        </Col>

        <Col>
          <Pie
            loading={loading}
            data={driverLicenseStats}
            {...getConfig("Driver License (CDL)")}
          />
        </Col>

        <Col>
          <Pie
            loading={loading}
            data={medicalStats}
            {...getConfig("Medical Certificate")}
          />
        </Col>
        <Col>
          <Pie
            loading={loading}
            data={plateStats}
            {...getConfig("Plate Registration")}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default PieStatics;
