import { message, notification } from "antd";
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
import { useSelector } from "react-redux";
import axios from "../../../utils/axios";

const InvoiceModal = (props) => {
  const { settings } = useSelector((state) => state.settings);

  const { visible, setVisible, invoice, getInvoices } = props;

  const [loading, setLoading] = useState(false);
  const [customer, setCustomer] = useState({});

  const updateInvoice = async (id, values) => {
    try {
      setLoading(true);
      const res = await axios.put(`/invoice/${id}`, values);
      notification.success({ message: res.data.message });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };

  const [allValues, setAllValues] = useState({
    customer: "",
    load: "",
    notes: "",
    amount: 0,
    other: 0,
    status: "",
    invoiceNumber: 0,
    invoiceDate: "",
  });

  const onChange = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };

  const getInvoiceById = async (Id) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/invoice/${Id}`);
      setCustomer(data.invoice.customer);
      const other = data.invoice.other.reduce(function (res, item) {
        return Number(res) + Number(item.price);
      }, 0);
      setAllValues({
        ...allValues,
        customer: data.invoice.customer._id,
        load: data.invoice.load._id,
        amount: data.invoice.load.loadRate,
        notes: data.invoice.notes,
        other: other,
        status: data.invoice.status,
        invoiceNumber: data.invoice.invoiceNumber,
        invoiceDate: data.invoice.invoiceDate,
      });
      setOthers(data.invoice.other);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };
  useEffect(() => {
    if (invoice) {
      getInvoiceById(invoice);
    }
  }, [invoice]);

  const [others, setOthers] = useState([]);

  const addCharge = () => {
    setOthers([...others, { name: "", price: 0 }]);
  };

  const removeCharge = (index) => {
    const other = others[index];
    setAllValues({
      ...allValues,
      other: allValues.other - other.price,
    });
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
      const other = others.reduce(function (res, item) {
        return Number(res) + Number(item.price);
      }, 0);
      setAllValues({
        ...allValues,
        other: other,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateInvoice(invoice, { ...allValues, other: others });
    setTimeout(() => {
      setVisible(false);
      getInvoices();
    }, 300);
  };

  const markPaid = () => {
    updateInvoice(invoice, {
      ...allValues,
      paid: allValues.other + allValues.amount,
      other: others,
      status: "paid",
    });
    setTimeout(() => {
      setVisible(false);
      getInvoices();
    }, 300);
  };
  const markUnpaid = () => {
    updateInvoice(invoice, {
      ...allValues,
      paid: 0,
      other: others,
      status: "unpaid",
    });
    setTimeout(() => {
      setVisible(false);
      getInvoices();
    }, 300);
  };

  return (
    <Modal size="lg" show={visible} onHide={() => setVisible(false)}>
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Invoice</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
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
            <Col sm={6}>
              <h5>Bill To :</h5>
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
            <Col sm={6}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                }}
              >
                <p>
                  Invoice No:{" "}
                  <span>
                    <b>#{allValues.invoiceNumber}</b>
                  </span>
                </p>
                <p>
                  Invoice Date:
                  <span>
                    <b> #{allValues.invoiceDate}</b>
                  </span>
                </p>
                <p>
                  Invoice Status:
                  <span>
                    <b> {allValues.status}</b>
                  </span>
                </p>
                <p>
                  Load ID:
                  <span>
                    <b> {allValues.load}</b>
                  </span>
                </p>
              </div>
            </Col>
          </Row>
          <hr></hr>
          <Row className="mb-2">
            <Col sm={12}>
              <Form.Label>Notes: </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Note"
                rows={3}
                name="notes"
                value={allValues.notes}
                onChange={onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
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
                          placeholder="Name of the charge"
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
            <Col
              sm={12}
              style={{
                textAlign: "right",
              }}
            >
              <strong>Load Charge: </strong>
              <span>{allValues.amount}$</span>
              <br></br>
              <strong>Other's Charge: </strong>
              <span>{allValues.other}$</span>
              <br></br>
              <strong>Total: </strong>
              <span>{allValues.amount + allValues.other}$</span>
            </Col>
          </Row>
          <Button type="submit" variant="outline-primary">
            Save
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => setVisible(false)}
            className="m-2"
          >
            Cancel
          </Button>
          {allValues.status === "paid" ? (
            <Button onClick={markUnpaid} variant="danger">
              Mark as Unpaid
            </Button>
          ) : (
            <Button onClick={markPaid}>Mark as Paid</Button>
          )}
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default InvoiceModal;
