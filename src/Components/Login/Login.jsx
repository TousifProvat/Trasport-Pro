import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Navbar,
  Row,
  Spinner,
} from "react-bootstrap";
import "./login.css";
import useContext from "../Hooks/useContext";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSignin } from "../../features/auth/action";

const Login = () => {
  const { auth, loading } = useSelector((state) => state.auth);

  //navigate
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      setTimeout(() => {
        navigate("/");
      }, 300);
    }
  }, [auth.isAuthenticated]);

  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    dispatch(authSignin(formValues));
  };

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>Logo here</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col
            sm={10}
            md={6}
            lg={5}
            xl={4}
            xxl={4}
            style={{
              display: "flex",
              minHeight: "90vh",
              margin: "0 auto",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card className="text-center mt-3">
              <Card.Header>
                <h1>Logo</h1>
              </Card.Header>
              <Card.Body>
                {loading && (
                  <div>
                    <Spinner animation="border" variant="primary">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </div>
                )}
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
                          value={formValues.email}
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom02"
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
                          value={formValues.password}
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
        </Row>
      </Container>
    </>
  );
};

export default Login;
