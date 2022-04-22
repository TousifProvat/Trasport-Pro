import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';

const SiteSettings = () => {
    return (
      <div>
        <Container>
          <h1 className="mt-5 mb-3 text-center">Site settings</h1>
          <hr></hr>
          <div>
            <Row>
              <Col sm={4}></Col>
              <Col sm={4} className="mt-5">
                <InputGroup className="mb-3">
                  <InputGroup.Text>Name</InputGroup.Text>
                  <FormControl aria-label="First name" />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Street</InputGroup.Text>
                  <FormControl aria-label="Street name" />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>City</InputGroup.Text>
                  <FormControl aria-label="City" />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Zip</InputGroup.Text>
                  <FormControl aria-label="Zip" />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>State</InputGroup.Text>
                  <FormControl aria-label="State" />
                </InputGroup>
                <Button variant="outline-primary">Update</Button>{" "}
              </Col>
              <Col sm={4}></Col>
            </Row>
          </div>
        </Container>
      </div>
    );
};

export default SiteSettings;
