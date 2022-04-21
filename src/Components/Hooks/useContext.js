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
  const [tractorSummary, setTractorSummary] = useState([]);
  const [trailerSummary, setTrailerSummary] = useState([]);
  const [billingDashboard, setBillingDashboard] = useState([]);
  const value = 17;

  useEffect(() => {
    fetch("https://transport-test-server.herokuapp.com/api/v1/owner")
      .then((response) => response.json())
      .then((data) => setTerminalData(data.owners));
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
    fetch("https://transport-test-server.herokuapp.com/api/v1/driver")
      .then((response) => response.json())
      .then((data) => setDriverDate(data.drivers));
  }, []);

//console.log(driverDate);

  const getDriverDetail = (id) => {
    const info = driverDate.find((i) => i._id === id);

    setTractorSummary(info);

    return info;
  };

  //console.log(tractorData);

  const perDriverDetails = (id) => {
    getDriverDetail(id);
    return driverDate;
  };

  

  useEffect(() => {
    fetch("https://transport-test-server.herokuapp.com/api/v1/tractor")
      .then((response) => response.json())
      .then((data) => setTractorData(data.tractors));
  }, []);



  const getTractorDetail = (id) => {
    const info = tractorData.find((i) => (i._id === id));
    
    setTractorSummary(info);
    
    return info;
  };

  //console.log(tractorData);

  const perTractorDetails = (id) => {
    getTractorDetail(id);
    return tractorData;
  };

  //console.log(tractorData);
  useEffect(() => {
    fetch("https://transport-test-server.herokuapp.com/api/v1/trailer")
      .then((response) => response.json())
      .then((data) => setTrailerData(data.trailers));
  }, []);

  //console.log(trailerDate);

  const getTrailerDetail = (id) => {
    const info = terminalData.find((i) => i.id === id);
    setTrailerSummary(info);
    return info;
  };

  const perTrailerDetails = (id) => {
    getTrailerDetail(id);
    return trailerDate;
  };


  useEffect(() => {
    fetch("https://transport-test-server.herokuapp.com/api/v1/billing")
      .then((response) => response.json())
      .then((data) => setBillingDashboard(data));
  }, []);

  
    
    
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
    perTractorDetails,
    billingDashboard,
    perTrailerDetails,
    perDriverDetails,
  };
};

export default useContext;
