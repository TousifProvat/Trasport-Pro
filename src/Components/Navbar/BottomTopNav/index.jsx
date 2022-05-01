import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./navbar2.css";
const Navbar2 = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Load Management" id="basic-nav-dropdown">
                <NavDropdown.Item href="/freight-options-dashboard">
                  Freight Options Dashboard
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.2">
                  Load management Dashboard
                </NavDropdown.Item> */}
                <NavDropdown.Item href="/add-new-load">
                  Add New Load
                </NavDropdown.Item>

                <NavDropdown.Item href="/search-load">
                  Search Load
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Drivers / Equip" id="basic-nav-dropdown">
                <NavDropdown title="Owner" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/add-owner">
                    Add Owner
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/search-owner">
                    Search Owner
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Drivers" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/add-driver">
                    Add Driver
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/search-driver">
                    Search Driver
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Tractors" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/add-tractor">
                    Add Tractor
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/search-tractor">
                    Search Tractor
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Trailers" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/add-trailer">
                    Add Trailer
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/search-trailer">
                    Search Trailer
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>

              <NavDropdown title="Customers" id="basic-nav-dropdown">
                <NavDropdown.Item href="/add-customer">
                  Add Customer
                </NavDropdown.Item>
                <NavDropdown.Item href="/search-customer">
                  Search Customer
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Billing" id="basic-nav-dropdown">
                <NavDropdown.Item href="/billing-dashboard">
                  Billing Dashboard
                </NavDropdown.Item>
                <NavDropdown.Item href="/invoice">Invoice</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Claims" id="basic-nav-dropdown">
                <NavDropdown.Item href="/accident-log">
                  Accident Log
                </NavDropdown.Item>
              </NavDropdown>

              {/* <NavDropdown title="Accounting" id="basic-nav-dropdown">
                <NavDropdown.Item href="/settlements">
                  Settlements
                </NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link href="maintenance">Maintenance </Nav.Link>
              <Nav.Link href="inspection">Inspection </Nav.Link>
              <NavDropdown
                title="Administration"
                id="basic-nav-dropdown"
                align={{ lg: "start" }}
                className="me-5"
              >
                <NavDropdown.Item href="/site-setting">
                  Manage Site Settings
                </NavDropdown.Item>
                <NavDropdown.Item href="/user-management">
                  User Management
                </NavDropdown.Item>

                {/* <NavDropdown title="Manage Terminals" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#aSearchction/3.1">
                    <Link to="/addTerminal">Add Terminals</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    <Link to="/searchTerminal">Search For Terminals</Link>
                  </NavDropdown.Item>
                </NavDropdown> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar2;
