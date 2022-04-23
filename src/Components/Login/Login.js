import React, { useState } from "react";
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./login.css"

const Login = () => {

     const [validated, setValidated] = useState(false);

     const handleSubmit = (event) => {
       const form = event.currentTarget;
       if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
       }

       setValidated(true);
     };
  return (
    <div>
      <Container>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <h1 className="mt-5 mb-3 text-center">LogIn Account</h1>
            <hr className="mb-5"></hr>
            <Card className="text-center mt-3">
              <Card.Header>
                <h1>LogIn</h1>
              </Card.Header>
              <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                      <Form.Label className="float-start mt-5">
                        Email Address
                      </Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Email Address"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                      <Form.Label className="float-start">Password</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Password"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <Button type="submit" className="mt-5 mb-5">
                    Login
                  </Button>
                </Form>
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
