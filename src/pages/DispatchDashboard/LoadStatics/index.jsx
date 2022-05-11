import { Column } from "@ant-design/plots";
import { Card, message } from "antd";
import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios";

const LoadStatics = () => {
  //states
  const [stats, setStats] = useState([
    {
      type: "Planned Loads",
      sales: 0,
    },
    {
      type: "Dispatched Loads",
      sales: 0,
    },
    {
      type: "Delivered Loads",
      sales: 0,
    },
    {
      type: "Cancelled Loads",
      sales: 0,
    },
  ]);
  const [loading, setLoading] = useState(false);

  //hooks
  useEffect(() => {
    getLoadStats();
  }, []);
  //func
  const getLoadStats = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/analytics/load");
      setStats(data.loadStats);
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
    color: ["#198754", "#ffc107", "#0d6efd", "#dc3545"],
    xField: "type",
    yField: "sales",
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle",
      // 'top', 'bottom', 'middle',
      // 配置样式
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

export default LoadStatics;
