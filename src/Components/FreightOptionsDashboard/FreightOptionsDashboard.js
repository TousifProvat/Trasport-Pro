import React from "react";
import { Dropdown } from "react-bootstrap";
import "./freightOptionsDashboard.css";
const FreightOptionsDashboard = () => {
  return (
    <>
      <div className="frt-header">
        <p className="lead mt-3 ms-3">
          <span className="me-auto">Freight Options</span>
        </p>

        <Dropdown className="frt-drop mt-3 me-3">
          <Dropdown.Toggle variant="success" id="dropdown-basic" >
            Global Terminal Filters
          </Dropdown.Toggle>

          <Dropdown.Menu className="me-5" >
            <p className="ms-3">Global Terminal Filters</p>
            <hr></hr>
            <Dropdown.Item href="#/action-1">ABC - ABC Terminal</Dropdown.Item>
            <Dropdown.Item href="#/action-2">ADT - Carrier Jhonson</Dropdown.Item>
            <Dropdown.Item href="#/action-3">B1 - Broker 1</Dropdown.Item>
            <Dropdown.Item href="#/action-3">RFT - Rob Finney</Dropdown.Item>
            <Dropdown.Item href="#/action-3">CK - C & K Trucking Inc.</Dropdown.Item>
            <Dropdown.Item href="#/action-3">DT - DT</Dropdown.Item>
            <Dropdown.Item href="#/action-3">ERT - ERT Logistics Inc.</Dropdown.Item>
            <Dropdown.Item href="#/action-3">1 - Headquarter</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Shop - Kamps</Dropdown.Item>
            <Dropdown.Item href="#/action-3">KK - Kenneth Kloeppel</Dropdown.Item>
            <Dropdown.Item href="#/action-3">MD1 - Medal 1</Dropdown.Item>
            <Dropdown.Item href="#/action-3">MD2 - Medal 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">KDC - Kings Drayage Company</Dropdown.Item>
            <Dropdown.Item href="#/action-3">MD3 - Medal 3</Dropdown.Item>
            <Dropdown.Item href="#/action-3">MD4 - Medal 4</Dropdown.Item>
            <Dropdown.Item href="#/action-3">EGT - Mount Juliet</Dropdown.Item>
            <Dropdown.Item href="#/action-3">NAGH - Nashville Terminal</Dropdown.Item>
            <Dropdown.Item href="#/action-3">PSNPR - North Pole Terminal</Dropdown.Item>
            <Dropdown.Item href="#/action-3">102 - Agent 102</Dropdown.Item>
            <Dropdown.Item href="#/action-3">88 - JJ Trucking Terminal</Dropdown.Item>
            <Dropdown.Item href="#/action-3">ETTY -East TN Drop Yard</Dropdown.Item>
            <Dropdown.Item href="#/action-3">A-1 - Orbit Station</Dropdown.Item>
            <Dropdown.Item href="#/action-3">1012 - PB02 Transport Inc.</Dropdown.Item>
            <Dropdown.Item href="#/action-3">PFT - PFT Transportation</Dropdown.Item>
            <Dropdown.Item href="#/action-3">C2 - Test Agent Terminal</Dropdown.Item>
            <Dropdown.Item href="#/action-3">WASH - Washington</Dropdown.Item>
            <Dropdown.Item href="#/action-3">COM-TH - THron Logistics Inc.</Dropdown.Item>
            <Dropdown.Item href="#/action-3">412 - THT</Dropdown.Item>
            <Dropdown.Item href="#/action-3">088 - Wade</Dropdown.Item>
            <Dropdown.Item href="#/action-3">BON - Woerner TURF</Dropdown.Item>
            <Dropdown.Item href="#/action-3">alfen - yard</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="frt-drop mt-3 me-3">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Show Freight Options Tools
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <p className="ms-3">Freight options</p>
            <hr></hr>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <hr></hr>
    </>
  );
};

export default FreightOptionsDashboard;
