// import React from 'react';

import { useEffect, useState } from "react";

const useContext = () => {
  const [terminalData, setTerminalData] = useState([]);
  const value = 17;

  useEffect(() => {
    fetch('./owner.json')
      .then((response) => response.json())
      .then(data => setTerminalData(data));
  }, []);
    
    
  return {
    value,
    terminalData,
  };
};

export default useContext;
