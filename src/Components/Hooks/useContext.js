// import React from 'react';

import { message, notification } from "antd";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";

const useContext = () => {
  // loading state
  const [loading, setLoading] = useState(false);

  //global state
  // terminal
  // const [terminalData, setTerminalData] = useState([]);
  // owner
  const [ownerData, setOwnerData] = useState([]);
  //driver
  const [driverData, setDriverData] = useState([]);
  //tractor
  const [tractorData, setTractorData] = useState([]);
  //trailer
  const [trailerData, setTrailerData] = useState([]);
  //customer
  const [customerData, setCustomerData] = useState([]);

  //billing
  const [billing, setBilling] = useState({
    loading: false,
    loadStats: {
      total: 0,
      planned: 0,
      dispatched: 0,
      delivered: 0,
      cancelled: 0,
    },
    revenueStats: { revenue: 0, paid: 0, unpaid: 0 },
    invoiceStats: { notInvoicedLoads: 0, loadsInvoiced: 0, paidLoads: 0 },
  });
  // auth
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: {},
    token: "",
  });

  // user signin
  const authSignin = async (credentials) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/auth/signin", credentials);
      setAuth((prev) => ({
        ...prev,
        isAuthenticated: true,
        user: data.user,
        token: data.token,
      }));

      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({ message: err.response.data.message });
    }
  };

  //owner
  const getOwners = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/owner");
      setOwnerData(data.owners);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };

  //customer
  const getCustomers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/customer");
      setCustomerData(data.customers);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };

  //driver
  const getDrivers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/driver");
      setDriverData(data.drivers);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };

  // tractor
  const getTractors = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/tractor");
      setTractorData(data.tractors);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };
  //trailer
  const getTrailers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/trailer");
      setTrailerData(data.trailers);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };
  //billing
  const billingLoading = (bool) => {
    setBilling((prev) => ({ ...prev, loading: bool }));
  };
  const getBilling = async () => {
    try {
      billingLoading(true);
      const { data } = await axios.get("/billing");
      setBilling(data);
      billingLoading(false);
    } catch (err) {
      billingLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };

  //call
  useEffect(() => {
    // use every call in one use effect until they have different dependencies
    getOwners();
    getDrivers();
    getTractors();
    getTrailers();
    getBilling();
  }, []);

  return {
    // driver
    driverData,
    // tractor
    tractorData,
    //trailer
    trailerData,
    // customer
    customerData,
    // owner
    ownerData,
    // billing
    billing,
    // auth
    auth,
    authSignin,
    // loading state
    loading,
  };
};

export default useContext;
