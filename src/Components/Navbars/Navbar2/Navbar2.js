import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar2.css";
const Navbar2 = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Load Management" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/frtOpsDash">Freight Options Dashboard</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Load management Dashboard
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Add New Load
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#action/3.4">
                  Create Quote
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Search Load
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Search Permits
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Load Tracking
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#link">Drivers / Equip</Nav.Link> */}
              <NavDropdown title="Drivers / Equip" id="basic-nav-dropdown">
                <NavDropdown title="Owner" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    <Link to="/addOwner">Add Owner</Link>
                    
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Link to="/searchOwner">Search Owners</Link>
                    
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Drivers" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    <Link to="/addDriver">Add Driver</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Link to="/searchDriver">Search Drivers</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>

              <NavDropdown title="Broker Carrier" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Add Broker Carrier
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Search Broker Carrier
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Carrier Sourcing
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#action/3.4">
                  Carrier Onboarding
                </NavDropdown.Item>
                <NavDropdown
                  title="Carrier Qualification"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Carrier Watch - Auto Update report
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Manage Carrier Qualifications
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>

              <NavDropdown title="Customers" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Add Customer
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Search Customer
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Manage Shipper Location
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Billing" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Billing Dashboard
                </NavDropdown.Item>
                <NavDropdown title="Load Queues" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Waiting for documents
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Freight Bill processing queue
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Freight Bill print queue
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Submit factoring invoices
                  </NavDropdown.Item>
                  <NavDropdown title="EDI" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      EDI queue
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Search EDI batch
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>

                <NavDropdown
                  title="Miscellaneous Invoicing"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Add Misc Invoicing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Search Misc Invoicing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Miscellaneous Print Queue
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Fuel Surcharge" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    National Diesel Rates
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Standard Fuel Surcharge Rates
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Reports" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Load Delivered Not RTB
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Report - Billed Line Items.
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>

              {/* Settlement start */}

              <NavDropdown title="Settlements" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Settlements Dashboard
                </NavDropdown.Item>
                <NavDropdown
                  title="Process Settlements"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Broker Carriers.
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Company Drivers
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Owners / Owner Operators
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Terminals
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Venders
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Upload Pending Settlements
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Recurring Settlements"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Add Recurring Settlements
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Search Recurring Settlements
                  </NavDropdown.Item>
                </NavDropdown>

                {/* Pay adjustments start */}

                <NavDropdown title="Pay Adjustments" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Pay Adjustments Queue
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Pay Adjustments History
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Print Queue" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Settlements
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Settlements Queue
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Reports" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Completed Settlement Report
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Settlements Activity Summary
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    DER Activity Summary
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Pending Settlement GL Report
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Settlement Aging
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Fuel Card Maintainance"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Search Fuel cards
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Add Fleetone card
                  </NavDropdown.Item>
                  <NavDropdown title="Fuel Tickets" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Add Fuel Tickets
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Search Fuel Tickets
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Fuel & Mileage Report
                    </NavDropdown.Item>

                    <NavDropdown
                      title="Road / Fuel Taxes"
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        Search Fuel Tax
                      </NavDropdown.Item>
                    </NavDropdown>
                  </NavDropdown>

                  <NavDropdown.Item href="#action/3.1">
                    Add Comdata Fuel card
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Add EPS Fuel Card
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Add T-Check Fuel Card
                  </NavDropdown.Item>
                  <NavDropdown title="Reports" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Fuel Without Dispatch
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Fuel Card Transactions
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown.Item href="#action/3.1">
                    manage Fuel card Products
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Direct Deposit / ACH"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown title="ACH Transmittal" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      ACH queue
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Search ACH Payment
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown.Item href="#action/3.1">
                    Search ACH Accounts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Add payment Method - ACH
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="settlements Venders"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Add Vender
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Search vender
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown.Item href="#action/3.1">
                  Settlements Massages
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="A / R" id="basic-nav-dropdown">
                <NavDropdown title="Cash Receipts" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Add cash receipts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Search Cash Receipts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Post Pending Cash Receipts
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Reports" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    A/R Aging Reports
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    A/R Aging Report (Classic)
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    A/R Days To Pay Reports
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Credit Limit Report
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Customer Call Report
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>

              <NavDropdown title="Claims" id="basic-nav-dropdown">
                <NavDropdown title="Incidents" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Search Incidents
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Add / Edit incidents
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>

              <NavDropdown title="Accounting" id="basic-nav-dropdown">
                <NavDropdown title="Accounting Reports" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Standard Financial Reports
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Chart of Accounts" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Add COA Accounts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Search Chart of Accounts
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="General Ledger" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Search General Ledger
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Failed Transactions Queue
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Add Pending GL Adjustments
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Search/Post GL Adjustments
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Cash Reconcilation" id="basic-nav-dropdown">
                  <NavDropdown title="Bank Accounts" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Add bank Adjustments
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Search Bank Accounts Adjustments
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Post Pending Bank Adjustments
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Cash Recon" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Search Cash Statements
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Post Cash Statements
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Process Cash Statements
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>

                <NavDropdown title="Fixed Assets" id="basic-nav-dropdown">
                  <NavDropdown
                    title="Fixed Assets Categories"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Add Fixed Assets Category
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Search Fixed Assets Category
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown.Item href="#action/3.1">
                    Search Fixed Assets
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Add Fixed Assets
                  </NavDropdown.Item>
                  <NavDropdown title="Reports" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Depreciation Report
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>

                <NavDropdown title="Checking Accounts" id="basic-nav-dropdown">
                  <NavDropdown
                    title="Checking Accounts"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Add Checking Account
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Search Checking Account
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Checks" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Search Checks
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#aSearchction/3.1">
                      Add Manual Voided Checks
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#aSearchction/3.1">
                      Unvalidated Checks Reports
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>

                <NavDropdown title="Accounts Payable" id="basic-nav-dropdown">
                  <NavDropdown title="Vouchers" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Search Vouchers Requests
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#aSearchction/3.1">
                      Add Vouchers
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#aSearchction/3.1">
                      Search Vouchers
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#aSearchction/3.1">
                      Post Pending Vouchers
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#aSearchction/3.1">
                      Import Card Transactions
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Open Voucher Queue
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    AP Aging Report
                  </NavDropdown.Item>

                  <NavDropdown
                    title="Recurring Vouchers"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#aSearchction/3.1">
                      Add Recurring Vouchers
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#aSearchction/3.1">
                      Search Recurring Vouchers
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Vendors" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#aSearchction/3.1">
                      Add Vendors
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#aSearchction/3.1">
                      Search Vendors
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    AP Check Queue
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>

              <NavDropdown title="Sales" id="basic-nav-dropdown">
                <NavDropdown title="Lead & Accounts" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Add Lead
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Search Lead & Accounts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Upload Leads
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Dashboards" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Sales Dashboard - Roll-up
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Sales Agent
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Manage Settings" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Manage Inactivity
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Manage Sales Entities
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Manage Dispositions
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>

              <NavDropdown title="Images" id="basic-nav-dropdown">
                <NavDropdown.Item href="#aSearchction/3.1">
                  Image Indexing
                </NavDropdown.Item>
                <NavDropdown.Item href="#aSearchction/3.1">
                  Search Image Files
                </NavDropdown.Item>
                <NavDropdown.Item href="#aSearchction/3.1">
                  Manage Documents Type
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Reports" id="basic-nav-dropdown">
                <NavDropdown title="Optional Reports" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Broker Carrier Reports
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Load Excalation Report
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Dispatch Continutity Report
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Driver Activity Report
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Driver Certification / Training Reports
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Driver Violations
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Equipments Location Reports
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Inbound Location Report
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    On-Time statices
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Safety Summary
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Tractors / Trailer Reports
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Sales Reports" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Customer Activity Reports
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Executive Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Lane Analysis
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Monthly Terminal Review
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Terminal Activity Reports
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Terminal Revenue Reports
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Terminal Scorecard
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Terminal Settlement Summary
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>

              <NavDropdown
                title="Administration"
                id="basic-nav-dropdown"
                align={{ lg: "start" }}
                className="me-5"
              >
                <NavDropdown
                  title="Manage Site Settings"
                  id="basic-nav-dropdown"
                  
                >
                  <NavDropdown
                    title="Manage Adjustments Codes"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#aSearchction/3.1">
                      Search Adjustments Codes
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#aSearchction/3.1">
                      Add Adjustments Codes
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Manage Carrier Quick Pay
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Manage Comodity Type
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Manage Lookup Tables
                  </NavDropdown.Item>

                  <NavDropdown
                    title="Manage Bill Codes"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#aSearchction/3.1">
                      Add Line Items
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#aSearchction/3.1">
                      Search Line Items
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Manage Settlements Codes"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#aSearchction/3.1">
                      Add Settlement Codes
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#aSearchction/3.1">
                      Search Settlement Codes
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
                <NavDropdown
                  title="Manage System Users"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Add System Users
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Search System Users
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Use Activity
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Manage Terminals" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Add Terminals
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#aSearchction/3.1">
                    Search For Terminals
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar2;
