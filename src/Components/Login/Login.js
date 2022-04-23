import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { notification } from "antd";
import "./login.css";
import axios from "../../utils/axios";
import useContext from "../Hooks/useContext";

const Login = () => {
  const { authSignin, loading } = useContext();
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    authSignin(formValues);
  };

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <Card className="text-center mt-3">
              <Card.Header>
                <h1>Logo</h1>
              </Card.Header>
              <Card.Body>
                {loading && <h2>Loading Component here...</h2>}
                {!loading && (
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom01"
                      >
                        <Form.Label className="float-start mt-5">
                          Email Address
                        </Form.Label>
                        <Form.Control
                          required
                          type="email"
                          placeholder="Email Address"
                          name="email"
                          onChange={onChange}
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom01"
                      >
                        <Form.Label className="float-start">
                          Password
                        </Form.Label>
                        <Form.Control
                          required
                          type="password"
                          placeholder="Password"
                          name="password"
                          onChange={onChange}
                        />
                      </Form.Group>
                    </Row>
                    <Button type="submit" className="mt-5 mb-5">
                      Login
                    </Button>
                  </Form>
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
