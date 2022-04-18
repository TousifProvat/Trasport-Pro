// import React from 'react';

import { useEffect, useState } from "react";

const useContext = () => {
  const [terminalData, setTerminalData] = useState([]);
  const [driverDate, setDriverDate] = useState([]);
  const [tractorData, setTractorData] = useState([]);
  const [trailerDate, setTrailerData] = useState([]);
  const [searchTerminalData, setSearchTerminalData] = useState([]);
  const [customerData, setCustomerData] = useState([]);
  const [ownerSummary, setOwnerSummary] = useState([]);
  const value = 17;

  useEffect(() => {
    fetch("https://transport-test-server.herokuapp.com/api/v1/owner")
      .then((response) => response.json())
      .then((data) => setTerminalData(data.owners));
    console.log(terminalData);
  }, []);


  const getDetail = (id) => {
    const info = terminalData.find(i => i.id === id);
    setOwnerSummary(info);
    return info;
    
  }

  const perDetails = (id) => {
    getDetail(id);
    return terminalData;
  }

  useEffect(() => {
    fetch("http://transport-test-server.herokuapp.com/api/v1/driver")
      .then((response) => response.json())
      .then((data) => setDriverDate(data));
  }, []);



  // useEffect(() => {
  //   fetch('./Tractor.json')
  //     .then((response) => response.json())
  //     .then(data => setTractorData(data));
  // }, []);

  // useEffect(() => {
  //   fetch('./Trailer.json')
  //     .then((response) => response.json())
  //     .then(data => setTrailerData(data));
  // }, []);



  // useEffect(() => {
  //   fetch('./Terminal.json')
  //     .then((response) => response.json())
  //     .then(data => setSearchTerminalData(data));
  // }, []);



  // useEffect(() => {
  //   fetch("./Customer.json")
  //     .then((response) => response.json())
  //     .then((data) => setCustomerData(data));
  // }, []);
    
    
  return {
    value,
    terminalData,
    driverDate,
    tractorData,
    trailerDate,
    searchTerminalData,
    customerData,
    perDetails,
    ownerSummary,
  };
};

export default useContext;
