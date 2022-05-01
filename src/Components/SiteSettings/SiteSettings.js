import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormSelect,
  InputGroup,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import useContext from "../Hooks/useContext";
const SiteSettings = () => {
  const { settings, loading, updateSettings } = useContext();
  const [allValues, setAllValues] = useState({
    _id: "",
    name: "",
    street: "",
    city: "",
    zip: "",
    state: "",
  });

  useEffect(() => {
    setAllValues(settings);
  }, [settings]);

  const onChange = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    updateSettings(allValues._id, allValues);
  };
  return (
    <div>
      <Container>
        <Navbar bg="" expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="mt-5">
              Site Settings
            </Navbar.Brand>
          </Container>
        </Navbar>
        <hr></hr>
        <div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col sm={4}></Col>
              <Col sm={4} className="mt-5">
                <InputGroup className="mb-3">
                  <InputGroup.Text>Site Name</InputGroup.Text>
                  <FormControl
                    required
                    placeholder="Enter your site name"
                    name="name"
                    onChange={onChange}
                    value={allValues.name}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Street</InputGroup.Text>
                  <FormControl
                    required
                    aria-label="Street"
                    name="street"
                    onChange={onChange}
                    value={allValues.street}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>City</InputGroup.Text>
                  <FormControl
                    required
                    name="city"
                    onChange={onChange}
                    value={allValues.city}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Zip</InputGroup.Text>
                  <FormControl
                    required
                    placeholder="Zip Code"
                    name="zip"
                    onChange={onChange}
                    value={allValues.zip}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>State</InputGroup.Text>
                  <FormSelect
                    required
                    name="state"
                    onChange={onChange}
                    value={allValues.state}
                  >
                    <option value="">Select State</option>
                    <option value="alabama">Alabama</option>
                  </FormSelect>
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={4}></Col>
              <Col sm={4}>
                <Button
                  type="submit"
                  variant="outline-primary"
                  className="mt-5 mb-5"
                >
                  Update
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default SiteSettings;
