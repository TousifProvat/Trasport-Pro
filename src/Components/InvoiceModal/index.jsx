import { message } from "antd";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Nav,
  Navbar,
  Row,
  Table,
} from "react-bootstrap";
import axios from "../../utils/axios";
import useContext from "../Hooks/useContext";

const InvoiceModal = (props) => {
  const { settings } = useContext();
  const { visible, setVisible, Id } = props;

  const [loading, setLoading] = useState(false);
  const [customer, setCustomer] = useState({});

  const [allValues, setAllValues] = useState({
    customer: "",
    load: "",
    notes: "",
    amount: 0,
    other: 0,
  });

  const onChange = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };

  const getLoadById = async (Id) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/load/${Id}`);
      setCustomer(data.load.customer);
      setAllValues({
        ...allValues,
        customer: data.load.customer._id,
        load: data.load._id,
        amount: data.load.loadRate,
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };
  useEffect(() => {
    if (Id) {
      getLoadById(Id);
    }
  }, [Id]);

  const [others, setOthers] = useState([]);

  const addCharge = () => {
    setOthers([...others, { name: "", price: 0 }]);
  };

  const removeCharge = (index) => {
    setOthers([
      ...others.slice(0, index),
      ...others.slice(index + 1, others.length),
    ]);
  };

  const otherChargeChange = (e, index) => {
    const other = others[index];
    other[e.target.name] = e.target.value;
    setOthers([
      ...others.slice(0, index),
      other,
      ...others.slice(index + 1, others.length),
    ]);
    if (e.target.name === "price") {
      setAllValues({
        ...allValues,
        other: Number(e.target.value),
      });
    }
  };
  return (
    <Modal size="lg" show={visible} onHide={() => setVisible(false)}>
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Invoice</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col sm={6}>
              <h4>LOGO HERE</h4>
            </Col>
            <Col sm={6}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                }}
              >
                <h4>
                  <b>{settings.name}</b>
                </h4>
                <p>
                  {settings.street}, {settings.city}, {settings.state}
                </p>
                <p>{settings.zip}</p>
              </div>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col sm={12}>
              <h3>Bill To :</h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <h4>
                  <b>{customer.name}</b>
                </h4>
                <p>
                  {customer.street}, {customer.city}, {customer.state}
                </p>
                <p>{customer.zip}</p>
              </div>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col sm={6}>
              <h3>Notes: </h3>
              <Form.Control
                as="textarea"
                placeholder="Notes"
                rows={3}
                name="notes"
                value={allValues.notes}
                onChange={onChange}
              />
            </Col>
            <Col sm={6}>
              <Navbar bg="light" expand="lg">
                <Container>
                  <Navbar.Brand>Other Charges</Navbar.Brand>
                  <Nav className="ms-auto">
                    <Button variant="outline-primary" onClick={addCharge}>
                      <i className="fa-solid fa-plus"></i>
                    </Button>
                  </Nav>
                </Container>
              </Navbar>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Charges</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {others.map((other, index) => (
                    <tr key={index}>
                      <td>
                        <Form.Control
                          type="text"
                          name="name"
                          value={other.name}
                          onChange={(e) => otherChargeChange(e, index)}
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          name="price"
                          value={other.price}
                          onChange={(e) => otherChargeChange(e, index)}
                        />
                      </td>
                      <td>
                        <Button onClick={() => removeCharge(index)}>
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col sm={12}>
              <strong>Sub-Total: </strong>
              <span>{allValues.amount}</span>
              <br></br>
              <strong>Other Charges: </strong>
              <span>{allValues.other}</span>
              <br></br>
              <strong>Total: </strong>
              <span>{allValues.amount + allValues.other}</span>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default InvoiceModal;
