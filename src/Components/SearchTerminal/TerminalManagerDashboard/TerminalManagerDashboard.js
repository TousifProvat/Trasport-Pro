import React from "react";
import "./terminalManagerDashboard.css";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const TerminalManagerDashboard = () => {
  return (
    <div className="mb-5">
      <Container>
        <h3 className="mt-5 mb-3">Terminal Manager Dashboard</h3>
        <hr></hr>
        <Row>
          <Col className="mt-3 mb-5">
            <Form.Select aria-label="Default select example">
              <option>Select Terminal</option>
              <option value="EG - Egles">EG - Egles</option>
            </Form.Select>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>

        <Container>
          <Row>
            <Col>
              <p>Load Activity</p>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </Col>
            <Col>
              <p>Top Customers MTD</p>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Total Revenue</th>
                    <th>Loads</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SASS</td>
                    <td>343.52</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col>
              <p>Top Customers YTD</p>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Total Revenue</th>
                    <th>Loads</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SASS</td>
                    <td>343.52</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col className="mt-3 mb-5">
            <Form.Select aria-label="Default select example">
              <option>Select Date</option>
              <option value="Jan 31, 2022 - Dec 31, 2022">
                Jan 31, 2022 - Dec 31, 2022
              </option>
            </Form.Select>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
      <Container fluid className="mb-5">
        <Table striped bordered hover className="mb-5">
          <thead>
            <tr>
              <th>Month</th>
              <th>Loads</th>
              <th>Broker % </th>
              <th>Total Miles</th>
              <th>Total Freight</th>
              <th>Total Fuel</th>
              <th>Accessorial</th>
              <th>Total Bill</th>
              <th>Trans Cost</th>
              <th>Gross Margin $</th>
              <th>Gross Margin %</th>
              <th>Avg RPM</th>
              <th>Bill/Load</th>
              <th>Freight/Load</th>
              <th>Miles/Load</th>
              <th>Fuel/Load</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mar, 2022</td>
              <td>2</td>
              <td>0.00%</td>
              <td>24</td>
              <td>46</td>
              <td>5</td>
              <td>292</td>
              <td>343</td>
              <td>327</td>
              <td>16</td>
              <td>4.69%</td>
              <td>1.92</td>
              <td>171</td>
              <td>23</td>
              <td>12</td>
              <td>2</td>
            </tr>
            <tr className="mb-5">
              <td className="mb-5">
                <strong>Total</strong>
              </td>
              <td>2</td>
              <td>0.00%</td>
              <td>24</td>
              <td>46</td>
              <td>5</td>
              <td>292</td>
              <td>343</td>
              <td>327</td>
              <td>16</td>
              <td>4.69%</td>
              <td>1.92</td>
              <td>171</td>
              <td>23</td>
              <td>12</td>
              <td>2</td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <Container className="mt-5">
        <br></br>
      </Container>
    </div>
  );
};

export default TerminalManagerDashboard;
