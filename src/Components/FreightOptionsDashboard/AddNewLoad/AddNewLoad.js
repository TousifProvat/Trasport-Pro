import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  Modal,
  Button,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Col,
  DatePicker,
  Space,
  Checkbox,
  Table,
} from "antd";
import { Link } from "react-router-dom";
import "./addNewLoad.css";
import "antd/dist/antd.css";
import { TimePicker } from "antd";

const options = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
];

const AddNewLoad = () => {
  const { Option } = Select;
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");
  const [type, setType] = useState("time");
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  const [visible, setVisible] = useState(false);

  // ant selectors

  const children = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Canada",
    "California",
    "Colorado",
    "Florida",
    "Georgia",
    "Hawaii",
  ];

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  // date picker dateHandler
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  // Select time and date both

  function PickerWithType({ type, onChange }) {
    if (type === "time") return <TimePicker onChange={onChange} />;
    if (type === "date") return <DatePicker onChange={onChange} />;
    return <DatePicker picker={type} onChange={onChange} />;
  }

  /// Fuel calc button

  const handleFuelCalc = () => {
    alert("Must Enter Bill-To Information First");
  };

  /// Check Box function here

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  // table data table

  

  return (
    <div>
      <Container fluid>
        <div className="modal-header">
          <h4 className="mt-5 ">Load Information</h4>
          <Button
            type="primary"
            className="modal-btn"
            onClick={() => setVisible(true)}
          >
            Add New Location
          </Button>
        </div>

        <div className="">
          <strong className="mb-3 mt-3 me-3">Number of Loads :</strong>
          <Select placeholder="Select State" className="mt-3">
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
            <Option value="6">6</Option>
          </Select>
        </div>

        <Modal
          title="Load Information"
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={1800}
        >
          <div className="main-modal-form">
            {/*  */}

            <div className="main-inside-modal">
              <div>
                <Form
                  form={form}
                  layout="vertical"
                  initialValues={{
                    requiredMarkValue: requiredMark,
                  }}
                  onValuesChange={onRequiredTypeChange}
                  requiredMark={requiredMark}
                >
                  <Form.Item
                    label="Customer"
                    required
                    tooltip="This is a required field"
                  >
                    <Input placeholder="Customer" />
                  </Form.Item>
                  <Form.Item
                    label="Location Name"
                    required
                    tooltip="This is a required field"
                  >
                    <Input placeholder="Location Name" />
                  </Form.Item>
                  <Form.Item
                    label="Location Code"
                    required
                    tooltip="This is a required field"
                  >
                    <Input placeholder="Location Code" />
                  </Form.Item>
                  <Form.Item
                    label="Location Contact"
                    required
                    tooltip="This is a required field"
                  >
                    <Input placeholder="Location Contact" />
                  </Form.Item>
                  <Form.Item
                    label="Phone Number"
                    required
                    tooltip="This is a required field"
                  >
                    <Input placeholder="Phone Number" />
                  </Form.Item>
                  <Form.Item
                    label="Fax Number"
                    required
                    tooltip="This is a required field"
                  >
                    <Input placeholder="Fax Number" />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    required
                    tooltip="This is a required field"
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                  <Form.Item
                    label="Dispatch Note"
                    required
                    tooltip="This is a required field"
                  >
                    <TextArea
                      rows={4}
                      placeholder="Dispatch Note"
                      maxLength={4}
                    />
                  </Form.Item>
                </Form>
              </div>

              <div>
                <Form
                  form={form}
                  layout="vertical"
                  initialValues={{
                    requiredMarkValue: requiredMark,
                  }}
                  onValuesChange={onRequiredTypeChange}
                  requiredMark={requiredMark}
                >
                  <Form.Item
                    label="Address Name"
                    required
                    tooltip="This is a required field"
                  >
                    <Input placeholder="Address Name" />
                  </Form.Item>
                  <Form.Item
                    label="Zip"
                    required
                    tooltip="This is a required field"
                  >
                    <Input placeholder="Zip" />
                  </Form.Item>
                  <Form.Item
                    label="City"
                    required
                    tooltip="This is a required field"
                  >
                    <Input placeholder="City" />
                  </Form.Item>
                  <Form.Item
                    label="State"
                    required
                    tooltip="This is a required field"
                  >
                    <Select placeholder="Select State">
                      <Option value="Alaska">Alaska</Option>
                      <Option value="Alabama">Alabama</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Sales Representative	"
                    required
                    tooltip="This is a required field"
                  >
                    <Input placeholder="Sales Representative	" />
                  </Form.Item>
                  <Form.Item
                    label="Customer Service Rep	"
                    required
                    tooltip="This is a required field"
                  >
                    <Input placeholder="Customer Service Rep" />
                  </Form.Item>
                  <Form.Item
                    label="Hours of Operation"
                    required
                    tooltip="This is a required field"
                  >
                    <TextArea
                      rows={4}
                      placeholder="Hours of Operation"
                      maxLength={4}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Internal Notes"
                    required
                    tooltip="This is a required field"
                  >
                    <TextArea
                      rows={4}
                      placeholder="Internal Notes"
                      maxLength={4}
                    />
                  </Form.Item>
                </Form>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174614.2910999577!2d-71.393197557926!3d46.85651774274637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb8968a05db8893%3A0x8fc52d63f0e83a03!2sQuebec%20City%2C%20QC%2C%20Canada!5e0!3m2!1sen!2sbd!4v1648454702105!5m2!1sen!2sbd"
                  width={600}
                  height={800}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="map-CA"
                />
              </div>
            </div>
          </div>
        </Modal>
        <Container className="ship-Consignee mb-5">
          <Row className="mt-5 mb-5" gutter={26}>
            <Col span={12} className="mb-5">
              <h3>Shipper Information </h3>
              <hr></hr>
              <p>Search</p>
              <Input placeholder="Search" />
              <p className="mt-3">Company</p>
              <Input placeholder="Company" />
              <p className="mt-3">Address</p>
              <Input placeholder="Address" />
              <p className="mt-3">State</p>
              <Select placeholder="Select State" style={{ width: "100%" }}>
                <Option value="Alabama">Alabama</Option>
                <Option value="Alaska">Alaska</Option>
                <Option value="Canada">Canada</Option>
                <Option value="Quebec">Quebec</Option>
              </Select>
              <p className="mt-3">Zip</p>
              <Input placeholder="Zip" />
              <p className="mt-3">Phone Number</p>
              <Input placeholder="Phone Number" />
              <p className="mt-3">Fax Number</p>
              <Input placeholder="Fax Number" />
              <p className="mt-3">Contact</p>
              <Input placeholder="Contact" />
              <p className="mt-3">Email</p>
              <Input placeholder="Email" />
              <p className="mt-3">Signed By</p>
              <Input placeholder="Signed By" />
              <p className="mt-3">Special Instructions/Directions</p>
              <TextArea
                rows={4}
                placeholder="Special Instructions/Directions"
                maxLength={6}
              />
            </Col>
            <Col span={12}>
              <div className="Consignee-Information">
                <h3>Consignee Information </h3>
                <Button>Add Stop</Button>
              </div>
              <hr></hr>
              <p>Search</p>
              <Input placeholder="Search" />
              <p className="mt-3">Company</p>
              <Input placeholder="Company" />
              <p className="mt-3">Address</p>
              <Input placeholder="Address" />
              <p className="mt-3">State</p>
              <Select placeholder="Select State" style={{ width: "100%" }}>
                <Option value="Alabama">Alabama</Option>
                <Option value="Alaska">Alaska</Option>
                <Option value="Canada">Canada</Option>
                <Option value="Quebec">Quebec</Option>
              </Select>
              <p className="mt-3">Zip</p>
              <Input placeholder="Zip" />
              <p className="mt-3">Phone Number</p>
              <Input placeholder="Phone Number" />
              <p className="mt-3">Fax Number</p>
              <Input placeholder="Fax Number" />
              <p className="mt-3">Contact</p>
              <Input placeholder="Contact" />
              <p className="mt-3">Email</p>
              <Input placeholder="Email" />
              <p className="mt-3">Signed By</p>
              <Input placeholder="Signed By" />
              <p className="mt-3">Special Instructions/Directions</p>
              <TextArea
                rows={4}
                placeholder="Special Instructions/Directions"
                maxLength={6}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        {/* Add todo list functionality here */}

        <div className="Consignee-Information">
          <h3>Stop Offs</h3>
          <Button>Add Stop</Button>
        </div>
        <hr></hr>
        <Row className="mt-5 mb-5" gutter={26}>
          <Col span={12} className="mb-5">
            <p>Stop Type</p>
            <Select placeholder="Select Stop Type" style={{ width: "100%" }}>
              <Option value="SO">SO</Option>
              <Option value="PO">PO</Option>
            </Select>
            <p className="mt-3">Company Name</p>
            <Input placeholder="Company Name" />
            {/* <p className="mt-3">State</p>
            <Select placeholder="Select State" style={{ width: "100%" }}>
              <Option value="Alabama">Alabama</Option>
              <Option value="Alaska">Alaska</Option>
              <Option value="Canada">Canada</Option>
              <Option value="Quebec">Quebec</Option>
            </Select> */}
            <p className="mt-3">Zip</p>
            <Input placeholder="Zip" />
            <p className="mt-3">Phone Number</p>
            <Input placeholder="Phone Number" />
            <p className="mt-3">Fax Number</p>
            <Input placeholder="Fax Number" />
            <p className="mt-3">Contact</p>
            <Input placeholder="Contact" />
            <p className="mt-3">Email</p>
            <Input placeholder="Email" />
            <p className="mt-3">Pices</p>
            <Input placeholder="Pices" />
            <p className="mt-3">Signed By</p>
            <Input placeholder="Signed By" />
            <p className="mt-3">Comments</p>
            <TextArea rows={4} placeholder="Comments" maxLength={6} />
          </Col>
          <Col span={12}>
            <div className="Consignee-Information"></div>
            <p>City</p>
            <Input placeholder="City" />
            <p className="mt-3">Contact</p>
            <Input placeholder="Contact" />
            <p className="mt-3">Address</p>
            <Input placeholder="Address" />
            <p className="mt-3">State</p>
            <Select placeholder="Select State" style={{ width: "100%" }}>
              <Option value="Alabama">Alabama</Option>
              <Option value="Alaska">Alaska</Option>
              <Option value="Canada">Canada</Option>
              <Option value="Quebec">Quebec</Option>
            </Select>
            <p className="mt-3">Service Level</p>
            <Select
              placeholder="Select Service Level"
              style={{ width: "100%" }}
            >
              <Option value="Firm Appointment">Firm Appointme</Option>
              <Option value="Flexible/FCFS">Flexible/FCFS</Option>
              <Option value="Priority/Crane">Priority/Crane</Option>
            </Select>
            <p className="mt-3">Earliest Appointment</p>
            <Space direction="vertical" style={{ width: "100%" }}>
              <DatePicker onChange={onChange} style={{ width: "100%" }} />
            </Space>
            <p className="mt-3">Latest Appointment</p>
            <Space direction="vertical" style={{ width: "100%" }}>
              <DatePicker onChange={onChange} style={{ width: "100%" }} />
            </Space>
            <p className="mt-3">Commodity</p>
            <Select placeholder="Select State" style={{ width: "100%" }}>
              <Option value="FAK">FAK</Option>
            </Select>
            <p className="mt-3">Reference</p>
            <Input placeholder="Address" />
            <p className="mt-3">Weight</p>
            <Input placeholder="Weight" />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <h3>Load Information</h3>
        <hr></hr>
        <Row className="mt-5 mb-5" gutter={26}>
          <Col span={8} className="mb-5">
            <p>Requested Pickup Date/Time</p>
            <Space direction="vertical" style={{ width: "70%" }}>
              <DatePicker onChange={onChange} style={{ width: "100%" }} />
            </Space>
            <Space
              direction="vertical"
              style={{ width: "25%", marginLeft: "30px" }}
            >
              <PickerWithType
                type={type}
                style={{ width: "100%" }}
                onChange={(value) => console.log(value)}
              />
            </Space>

            <p className="mt-3">Pickup Service Level</p>
            <Select placeholder="Select State" style={{ width: "100%" }}>
              <Option value="Firm Appointment">Firm Appointment</Option>
              <Option value="Flexible/FCFS">Flexible/FCFS</Option>
              <Option value="Priority/Crane">Priority/Crane</Option>
            </Select>
            {/* <Input placeholder="Company Name" /> */}
            <p className="mt-3">Requested Delivery Date/Time</p>
            <Space direction="vertical" style={{ width: "70%" }}>
              <DatePicker onChange={onChange} style={{ width: "100%" }} />
            </Space>
            <Space
              direction="vertical"
              style={{ width: "25%", marginLeft: "30px" }}
            >
              <PickerWithType
                type={type}
                style={{ width: "100%" }}
                onChange={(value) => console.log(value)}
              />
            </Space>
            {/* <Select placeholder="Select State" style={{ width: "100%" }}>
              <Option value="Alabama">Alabama</Option>
              <Option value="Alaska">Alaska</Option>
              <Option value="Canada">Canada</Option>
              <Option value="Quebec">Quebec</Option>
            </Select> */}
            <p className="mt-3">Delivery Service Level</p>
            {/* <Input placeholder="Zip" /> */}
            <Select
              placeholder="Select Delivery Service Level"
              style={{ width: "100%" }}
            >
              <Option value="Firm Appointment">Firm Appointment</Option>
              <Option value="Flexible/FCFS">Flexible/FCFS</Option>
              <Option value="Priority/Crane">Priority/Crane</Option>
            </Select>
            <p className="mt-3">Terminal</p>
            <Select placeholder="Select Terminal" style={{ width: "100%" }}>
              <Option value="EG-Egales">EG-Egales</Option>
            </Select>
            {/* <Input placeholder="Phone Number" /> */}
            <p className="mt-3">Division</p>
            <Select placeholder="Select Terminal" style={{ width: "100%" }}>
              {/* <Option value="EG-Egales">EG-Egales</Option> */}
            </Select>
            {/* <Input placeholder="Fax Number" /> */}
            <p className="mt-3">Load Entered By </p>
            <Input placeholder="Load Entered By" />
            <p className="mt-3">
              Internal Comments (does not appears on the freight bill)
            </p>
            <TextArea rows={4} placeholder="Comments" maxLength={6} />
            <p className="mt-3">
              HOT Comments (appears on load summary / dispatch)
            </p>
            <TextArea rows={4} placeholder="Comments" maxLength={6} />
          </Col>
          <Col span={8}>
            <div className="Consignee-Information"></div>
            <p>Commodity Type</p>
            <Select
              placeholder="Select Commodity Type"
              style={{ width: "100%" }}
            >
              <Option value="Firm Appointment">FAK</Option>
            </Select>
            <p className="mt-3">Commodity Value</p>
            <Input placeholder="Commodity Value" />
            <p className="mt-3">Commodity Description</p>
            <TextArea rows={4} placeholder="Comments" maxLength={6} />
            <p className="mt-3">Load Size</p>
            <Select placeholder="Select Load Size" style={{ width: "100%" }}>
              <Option value="LTL">LTL</Option>
              <Option value="Full">Full</Option>
            </Select>
            <p className="mt-3">Trailer Requirment</p>
            <Select
              placeholder="Select Service Level"
              style={{ width: "100%" }}
            >
              <Option value="Flatbed">Flatbed</Option>
              <Option value="Power Only">Power Only</Option>
              <Option value="Reefer">Reefer</Option>
              <Option value="Van">Van</Option>
            </Select>
            <p className="mt-3">Weight</p>
            <Input placeholder="Weight" />
            {/* <Space direction="vertical" style={{ width: "100%" }}>
              <DatePicker onChange={onChange} style={{ width: "100%" }} />
            </Space>
            <p className="mt-3">Latest Appointment</p>
            <Space direction="vertical" style={{ width: "100%" }}>
              <DatePicker onChange={onChange} style={{ width: "100%" }} />
            </Space> */}
            <p className="mt-3">Minimum Weight</p>
            <Input placeholder="Minimum Weight" />
            {/* <Select placeholder="Select State" style={{ width: "100%" }}>
              <Option value="FAK">FAK</Option>
            </Select> */}
            <p className="mt-3">Load Diamensions</p>
            <Row gutter={26}>
              <Col span={6}>
                <Input placeholder="Length (ft)" />
              </Col>
              <Col span={6}>
                <Input placeholder="Width (in)" />
              </Col>
              <Col span={6}>
                <Input placeholder="Height (in)" />
              </Col>
              <Col span={6}>
                <Input placeholder="Volume (cu ft)" />
              </Col>
            </Row>
            {/* <Input placeholder="Address" /> */}
          </Col>

          <Col span={8}>
            <div className="Consignee-Information"></div>
            <p>Bill Of Loading</p>
            <Input placeholder="Bill Of Loading" />
            <p className="mt-3">Billing Equipment</p>
            <Input placeholder="Billing Equipment" />
            <p className="mt-3">Container Number</p>
            <Input placeholder="Container Number" />
            <p className="mt-3">Hazmat</p>
            <Select placeholder="Select Hazmat" style={{ width: "100%" }}>
              <Option value="Yes">Yes</Option>
              <Option value="No">No</Option>
            </Select>
            <p className="mt-3">Mainfest</p>
            <Input placeholder="Mainfest" />
            <p className="mt-3">Number Of Pices</p>
            <Input placeholder="Number Of Pices" />
            <p className="mt-3">Pick up Number</p>
            <Input placeholder="Pick up Number" />
            <p className="mt-3">PO Number</p>
            <Input placeholder="PO Number" />
            <p className="mt-3">Reference</p>
            <Input placeholder="Reference" />
            <p className="mt-3">Seal Number</p>
            <Input placeholder="Seal Number" />
            <p className="mt-3">Reefer Temperature</p>
            <Input placeholder="Reefer Temperature" />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row gutter={26}>
          <Col span={8}>
            <h3>Bill-To Information</h3>
            <hr></hr>
            <p className="mt-3">Bill Action</p>
            <Select placeholder="Select Bill Action" style={{ width: "100%" }}>
              <Option value="Bill Shipper">Bill Shipper</Option>
              <Option value="Bill Consignee">Bill Consignee</Option>
              <Option value="Bill 3rd Party">Bill #rd Party</Option>
            </Select>
            <p className="mt-3">Company</p>
            <Input placeholder="Company" />
            <p className="mt-3">Hours</p>
            <Input placeholder="Hours" />
            <p className="mt-3">Address</p>
            <Input placeholder="Address" />
            <p className="mt-3">City</p>
            <Input placeholder="City" />
            <p className="mt-3">State</p>
            <Input placeholder="State" />
            <p className="mt-3">Zip</p>
            <Input placeholder="Zip" />
            <p className="mt-3">Phone</p>
            <Input placeholder="Phone" />
            <p className="mt-3">Fax</p>
            <Input placeholder="Fax" />
            <p className="mt-3">Contact</p>
            <Input placeholder="Contact" />
            <p className="mt-3">Email</p>
            <Input placeholder="Email" />
          </Col>
          <Col span={8}>
            <h3>Freight Bill</h3>
            <hr></hr>
            <p className="mt-3">Billing Method</p>
            <Select
              placeholder="Select Billing Method"
              style={{ width: "100%" }}
            >
              <Option value="Line Haul Billing">Line Haul Billing</Option>
            </Select>

            <p className="mt-3">Line Haul</p>
            <Select placeholder="Select Per Load" style={{ width: "100%" }}>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
            </Select>

            <p className="mt-3">Rate</p>
            <Input placeholder="Rate" />
            <p className="mt-3">Calc. Miles</p>
            <Input placeholder="Calc. Miles" />

            <h5 className="text-center mt-4">Fuel</h5>
            <hr></hr>
            <Row gutter={26}>
              <Col span={6}>
                <p className="">Fuel Calc. Help</p>
                <Button onClick={handleFuelCalc}>Default Button</Button>
              </Col>
              <Col span={6}>
                <p>Percent of fuel</p>
                <Input placeholder="Percent of fuel %" />
              </Col>
              <Col span={6}>
                <p>Cents / Miles</p>
                <Input placeholder="Cents / Miles" />
              </Col>
              <Col span={6}>
                <p>Fuel</p>
                <Input placeholder="Fuel" />
              </Col>
              <p className="mt-3 Checkbox-para">Ready To Bill</p>
              <Checkbox onChange={onChange} className="mt-3">
                Yes
              </Checkbox>
              <hr></hr>
              <p className="mt-3 Checkbox-para2">
                Bill Without Required Document
              </p>
              <Checkbox onChange={onChange} className="mt-3">
                Yes
              </Checkbox>
              <p className="mt-3 Checkbox-para2">Combine Billing</p>
              <Checkbox onChange={onChange} className="mt-3">
                Yes
              </Checkbox>
              <p className="mt-3 Checkbox-para2">Block Terminal Commission </p>
              <Checkbox onChange={onChange} className="mt-3">
                Yes
              </Checkbox>
              <p className="mt-3 Checkbox-para2">Post to Broker Board</p>
              <Checkbox onChange={onChange} className="mt-3">
                Yes
              </Checkbox>
            </Row>
            <Row gutter={26}>
              <Col span={12}>
                <Form.Item
                  label="Load Board Rate?	"
                  required
                  tooltip="This is a required field"
                >
                  <Input placeholder="Load Board Rate?	" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Max Buy Per Rate?"
                  required
                  tooltip="This is a required field"
                >
                  <Input placeholder="Max Buy?" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <div className="line-items">
              <h3>Line Items</h3>
              <Button>Add Line Item</Button>
            </div>
            <hr></hr>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddNewLoad;
