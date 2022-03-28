// import React from 'react';

import { useEffect, useState } from "react";

const useContext = () => {
  const [terminalData, setTerminalData] = useState([]);
  const [driverDate, setDriverDate] = useState([]);
  const [tractorData, setTractorData] = useState([]);
  const [trailerDate, setTrailerData] = useState([]);
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
    
    
  return {
    value,
    terminalData,
    driverDate,
    tractorData,
    trailerDate
  };
};

export default useContext;
