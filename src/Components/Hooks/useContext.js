// import React from 'react';

import { message, notification } from "antd";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";

const useContext = () => {
  // loading state
  const [loading, setLoading] = useState(false);

  //global state
  // load
  const [load, setLoad] = useState([]);
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

  //console.log(auth.isAuthenticated);

  //commodity
  const [commodity, setCommodity] = useState([]);

  //eobr
  const [eobr, setEobr] = useState([]);

  //load

  const getLoads = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/load");
      setLoad(data.loads);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };

  const addLoad = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post("/load", values);
      if (res.status === 201) {
        notification.success({ message: res.data.message });
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };

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
  const addOwner = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post("/owner", values);
      if (res.status === 201) {
        notification.success({ message: res.data.message });
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({ message: err.response.data.message });
    }
  };
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

  const addDriver = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post("/driver", values);
      if (res.status === 201) {
        notification.success({ message: res.data.message });
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({ message: err.response.data.message });
    }
  };

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
  const addTractor = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post("/tractor", values);
      if (res.status === 201) {
        notification.success({ message: res.data.message });
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({ message: err.response.data.message });
    }
  };
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

  //commodity
  const getCommodities = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/commodity");
      setCommodity(data.commodities);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };

  //eobr
  const getEobr = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/eobr");
      setEobr(data.eobrs);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };

  //call
  useEffect(() => {
    // use every call in one use effect until they have different dependencies
    getLoads();
    getOwners();
    getCustomers();
    getDrivers();
    getTractors();
    getTrailers();
    getBilling();
    getCommodities();
    getEobr();
  }, []);

  return {
    //load
    load,
    addLoad,
    // driver
    driverData,
    addDriver,
    // tractor
    tractorData,
    addTractor,
    //trailer
    trailerData,
    // customer
    customerData,
    // owner
    ownerData,
    addOwner,
    // billing
    billing,
    // auth
    auth,
    authSignin,
    //commodity
    commodity,
    //eobr
    eobr,
    // loading state
    loading,
  };
};

export default useContext;
