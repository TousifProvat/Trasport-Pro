import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import { message } from "antd";
import UpdateInvoiceModal from "./UpdateInvoiceModal";
import axios from "../../utils/axios";

const Invoice = () => {
  const [invoice, setInvoice] = useState([]);
  const [loading, setLoading] = useState(false);

  const getInvoices = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/invoice");
      setInvoice(data.invoices);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };

  useEffect(() => {
    getInvoices();
  }, []);

  const [invoices, setInvoices] = useState([]);
  const [filter, setFilter] = useState({
    status: "",
  });

  const onChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setInvoices(invoice);
  }, [invoice]);

  const [show, setShow] = useState(false);
  const [invoiceId, setInvoiceId] = useState(null);

  const openInvoice = (id) => {
    setInvoiceId(id);
    setShow(true);
  };
  //filter
  const onFilter = () => {
    let newInvoices = invoice;
    if (filter.status !== "") {
      newInvoices = invoice.filter(
        (invoice) => invoice.status === filter.status
      );
    }

    setInvoices(newInvoices);
  };

  const onReset = () => {
    setInvoices(invoice);
    setFilter({ status: "" });
  };

  return (
    <>
      <UpdateInvoiceModal
        visible={show}
        setVisible={setShow}
        invoice={invoiceId}
        setInvoice={setInvoiceId}
        getInvoices={getInvoices}
      />
      <Container>
        <Navbar bg="" expand="lg" className="mt-5">
          <Container>
            <Navbar.Brand>Invoices</Navbar.Brand>
          </Container>
        </Navbar>
        <hr></hr>
        <Form>
          <Row className="mb-3">
            <Col sm={6}>
              <Form.Label>Invoice Status</Form.Label>
              <Form.Select
                name="status"
                onChange={onChange}
                value={filter.status}
              >
                <option>Select Invoice Status</option>
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
              </Form.Select>
            </Col>
          </Row>
          <Button variant="outline-primary" className="mb-5" onClick={onFilter}>
            Filter
          </Button>
          <Button
            variant="outline-danger"
            className="mb-5 ms-3"
            onClick={onReset}
          >
            Reset
          </Button>
        </Form>
      </Container>
      <Container>
        <h3>Search Results ({invoices.length})</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Load No.</th>
              <th>Invoice No.</th>
              <th>Customers</th>
              <th>Load Rate</th>
              <th>Others</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={7} style={{ textAlign: "center" }}>
                  <Spinner animation="border" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </td>
              </tr>
            )}
            {!loading &&
              invoices.map((invoice, index) => (
                <tr key={index}>
                  <td>{invoice.load?.loadNumber}</td>
                  <td>{invoice.invoiceNumber}</td>
                  <td>{invoice.customer.name}</td>
                  <td>{invoice.amount}</td>
                  <td>
                    {invoice.other.reduce(function (res, item) {
                      return Number(res) + Number(item.price);
                    }, 0)}
                  </td>
                  <td>{invoice.status}</td>
                  <td>
                    <Button onClick={() => openInvoice(invoice._id)}>
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            {!loading && invoices.length < 1 && (
              <tr>
                <td
                  colSpan={10}
                  style={{
                    textAlign: "center",
                  }}
                >
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Invoice;
