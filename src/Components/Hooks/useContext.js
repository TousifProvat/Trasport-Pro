// import React from 'react';

import { useEffect, useState } from "react";

const useContext = () => {
  const [terminalData, setTerminalData] = useState([]);
  const [driverDate, setDriverDate] = useState([])
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
    
    
  return {
    value,
    terminalData,
    driverDate
  };
};

export default useContext;
