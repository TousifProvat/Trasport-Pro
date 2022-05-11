import { Column } from "@ant-design/plots";
import { Card, message } from "antd";
import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios";

const InvoiceStatics = () => {
  //states
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState([
    {
      type: "Loads Not Invoiced",
      sales: 0,
    },
    {
      type: "Invoiced Loads",
      sales: 0,
    },
    {
      type: "Paid Loads",
      sales: 0,
    },
  ]);

  //hooks
  useEffect(() => {
    getInvoiceStats();
  }, []);
  //func
  const getInvoiceStats = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/analytics/invoice");
      setStats(data.invoiceStats);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };

  //config
  const config = {
    data: stats,
    seriesField: "type", // or seriesField in some cases
    color: ["#dc3545", "#ffc107", "#0d6efd"],
    xField: "type",
    yField: "sales",
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };

  return (
    <Card>
      <Column {...config} loading={loading} />
    </Card>
  );
};

export default InvoiceStatics;
