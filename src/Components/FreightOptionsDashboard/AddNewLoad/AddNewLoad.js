import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Modal, Button, Form, Input, Radio, Row, Select } from "antd";
import { Link } from "react-router-dom";
import "./addNewLoad.css";
import "antd/dist/antd.css";

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
  // for (let i = 10; i < 36; i++) {
  //   children.push(
  //     <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
  //   );
  // }

  // end ant selectors
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div>
      <Container>
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
        {/* <hr></hr> */}

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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174614.2910999577!2d-71.393197557926!3d46.85651774274637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb8968a05db8893%3A0x8fc52d63f0e83a03!2sQuebec%20City%2C%20QC%2C%20Canada!5e0!3m2!1sen!2sbd!4v1648454702105!5m2!1sen!2sbd" width={600} height={800} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map-CA" />

              </div>
            </div>
          </div>
        </Modal>
      </Container>
    </div>
  );
};

export default AddNewLoad;
