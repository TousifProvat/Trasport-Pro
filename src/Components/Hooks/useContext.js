// import React from 'react';

import { message, notification } from "antd";
import { ar } from "date-fns/locale";
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

  //maintenance
  const [maintenance, setMaintenance] = useState([]);
  const getMaintenance = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/maintenance");
      setMaintenance(data.maintenances);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };
  const updateMaintenance = async (id, values) => {
    try {
      setLoading(true);
      const res = await axios.put(`/maintenance/${id}`, values);
      notification.success({ message: res.data.message });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };
  const addMaintenance = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post(`/maintenance`, values);
      notification.success({ message: res.data.message });
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };
  const removeMaintenance = async (id) => {
    try {
      setLoading(true);
      const res = await axios.delete(`/maintenance/${id}`);
      notification.success({ message: res.data.message });
      setLoading(false);
      const newMaintenance = maintenance.filter(
        (maintenance) => maintenance._id !== id
      );
      setMaintenance(newMaintenance);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };
  //inspection
  const [inspection, setInspection] = useState([]);
  const getInspection = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/inspection");
      setInspection(data.inspections);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };
  const updateInspection = async (id, values) => {
    try {
      setLoading(true);
      const res = await axios.put(`/inspection/${id}`, values);
      notification.success({ message: res.data.message });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };
  const addInspection = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post(`/inspection`, values);
      notification.success({ message: res.data.message });
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };
  const removeInspection = async (id) => {
    try {
      setLoading(true);
      const res = await axios.delete(`/inspection/${id}`);
      notification.success({ message: res.data.message });
      setLoading(false);
      const newInspection = inspection.filter(
        (inspection) => inspection._id !== id
      );
      setInspection(newInspection);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };

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

  // auth & user
  const isUserAutheticated = () => {
    let token = localStorage.getItem("transport-token");
    let user = localStorage.getItem("transport-user");

    if (token && user) {
      setAuth({
        ...auth,
        isAuthenticated: true,
        user: JSON.parse(user),
      });
    } else {
      setAuth({
        ...auth,
        isAuthenticated: false,
        user: {},
      });
    }
  };

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

      localStorage.setItem("transport-token", data.token);
      localStorage.setItem("transport-user", JSON.stringify(data.user));
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
    isUserAutheticated();
    if (auth.isAuthenticated) {
      getLoads();
      getOwners();
      getCustomers();
      getDrivers();
      getTractors();
      getTrailers();
      getBilling();
      getCommodities();
      getEobr();
      getMaintenance();
      getInspection();
    }
  }, [auth.isAuthenticated]);

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
    // maintenance
    maintenance,
    addMaintenance,
    updateMaintenance,
    removeMaintenance,
    // maintenance
    inspection,
    addInspection,
    updateInspection,
    removeInspection,
    // loading state
    loading,
  };
};

export default useContext;
