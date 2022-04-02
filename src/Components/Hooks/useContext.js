// import React from 'react';

import { useEffect, useState } from "react";

const useContext = () => {
  const [terminalData, setTerminalData] = useState([]);
  const [driverDate, setDriverDate] = useState([]);
  const [tractorData, setTractorData] = useState([]);
  const [trailerDate, setTrailerData] = useState([]);
  const [searchTerminalData, setSearchTerminalData] = useState([]);
  const [customerData, setCustomerData] = useState([]);
  const value = 17;

  useEffect(() => {
    fetch('./owner.json')
      .then((response) => response.json())
      .then(data => setTerminalData(data));
  }, []);


  useEffect(() => {
    fetch('./Driver.json')
      .then((response) => response.json())
      .then(data => setDriverDate(data));
  }, []);



  useEffect(() => {
    fetch('./Tractor.json')
      .then((response) => response.json())
      .then(data => setTractorData(data));
  }, []);

  useEffect(() => {
    fetch('./Trailer.json')
      .then((response) => response.json())
      .then(data => setTrailerData(data));
  }, []);



  useEffect(() => {
    fetch('./Terminal.json')
      .then((response) => response.json())
      .then(data => setSearchTerminalData(data));
  }, []);



  useEffect(() => {
    fetch("./Customer.json")
      .then((response) => response.json())
      .then((data) => setCustomerData(data));
  }, []);
    
    
  return {
    value,
    terminalData,
    driverDate,
    tractorData,
    trailerDate,
    searchTerminalData,
    customerData,
  };
};

export default useContext;
