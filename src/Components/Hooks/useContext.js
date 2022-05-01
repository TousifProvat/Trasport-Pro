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
  //owner
  const [ownerData, setOwnerData] = useState([]);
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
  const updateOwner = async (id, values) => {
    try {
      setLoading(true);
      const res = await axios.put(`/owner/${id}`, values);
      notification.success({ message: res.data.message });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };
  //driver
  const [driverData, setDriverData] = useState([]);

  const updateDriver = async (driverId, values) => {
    try {
      setLoading(true);
      const { data } = await axios.put(`/driver/${driverId}`, values);
      setLoading(false);
      notification.success({ message: data.message });
    } catch (err) {
      setLoading(false);
      notification.error({ message: err.response.data.message });
    }
  };
  const assignDriverToOwner = async (driverId, values) => {
    try {
      setLoading(true);
      const res = await axios.put(
        `/driver/toggle-owner/${driverId}?action=assign`,
        values
      );
      notification.success({ message: res.data.message });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };
  const unassignDriverFromOwner = async (driverId, values) => {
    try {
      setLoading(true);
      const res = await axios.put(
        `/driver/toggle-owner/${driverId}?action=unassign`,
        values
      );
      notification.success({ message: res.data.message });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };
  const assignDriverToTractor = async (driverId, values) => {
    try {
      setLoading(true);
      const res = await axios.put(
        `/driver/toggle-tractor/${driverId}?action=assign`,
        values
      );
      notification.success({ message: res.data.message });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };
  const unassignDriverFromTractor = async (driverId, values) => {
    try {
      setLoading(true);
      const res = await axios.put(
        `/driver/toggle-tractor/${driverId}?action=unassign`,
        values
      );
      notification.success({ message: res.data.message });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };
  const assignDriverToTrailer = async (driverId, values) => {
    try {
      setLoading(true);
      const res = await axios.put(
        `/driver/toggle-trailer/${driverId}?action=assign`,
        values
      );
      notification.success({ message: res.data.message });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };
  const unassignDriverFromTrailer = async (driverId, values) => {
    try {
      setLoading(true);
      const res = await axios.put(
        `/driver/toggle-trailer/${driverId}?action=unassign`,
        values
      );
      notification.success({ message: res.data.message });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };
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
  const authSignin = async (credentials) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/auth/signin", credentials);
      localStorage.setItem("transport-token", data.token);
      localStorage.setItem("transport-user", JSON.stringify(data.user));
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
  const isUserAutheticated = () => {
    let token = localStorage.getItem("transport-token");
    let user = localStorage.getItem("transport-user");
    if (token && user) {
      setAuth({
        ...auth,
        isAuthenticated: true,
        user: JSON.parse(user),
        token: token,
      });
    } else {
      setAuth({
        ...auth,
        isAuthenticated: false,
        user: {},
        token: "",
      });
    }
  };
  const authSignOut = () => {
    localStorage.removeItem("transport-token");
    localStorage.removeItem("transport-user");
    setAuth({
      isAuthenticated: false,
      user: {},
      token: "",
    });
  };
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
  //site settings
  const [settings, setSettings] = useState({
    _id: "",
    name: "",
    street: "",
    city: "",
    zip: "",
    state: "",
  });
  const getSiteSettings = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/company");
      setSettings(data.company);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };
  const updateSettings = async (id, values) => {
    try {
      setLoading(true);
      const res = await axios.put(`/company/${id}`, values);
      notification.success({ message: res.data.message });
      console.log(values);
      setSettings({ ...values });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };

  //users
  const [user, setUser] = useState([]);
  const getUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/user");
      setUser(data.users);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };
  const updateUser = async (id, values) => {
    try {
      setLoading(true);
      const res = await axios.put(`/user/${id}`, values);
      notification.success({ message: res.data.message });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };
  const addUser = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post(`/user`, values);
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
  const removeUser = async (id) => {
    try {
      setLoading(true);
      const res = await axios.delete(`/user/${id}`);
      notification.success({ message: res.data.message });
      setLoading(false);
      const newUsers = user.filter((user) => user._id !== id);
      setUser(newUsers);
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

  //accident
  const [incident, setIncident] = useState([]);
  const getIncidents = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/incident");
      setIncident(data.incidents);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };
  const updateIncident = async (id, values) => {
    try {
      setLoading(true);
      const res = await axios.put(`/incident/${id}`, values);
      notification.success({ message: res.data.message });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };
  const addIncident = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post(`/incident`, values);
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
  const removeIncident = async (id) => {
    try {
      setLoading(true);
      const res = await axios.delete(`/incident/${id}`);
      notification.success({ message: res.data.message });
      setLoading(false);
      const newIncidents = incident.filter((incident) => incident._id !== id);
      setIncident(newIncidents);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };

  //invoice
  const [invoice, setInvoice] = useState([]);
  const getInvoices = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/invoice");
      setInvoice(data.invoices);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
      console.log({ err });
    }
  };
  const addInvoice = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post(`/invoice`, values);
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
  const updateInvoice = async (id, values) => {
    try {
      setLoading(true);
      const res = await axios.put(`/invoice/${id}`, values);
      notification.success({ message: res.data.message });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: err.response.data.message,
      });
    }
  };

  useEffect(() => {
    isUserAutheticated();
  }, []);

  useEffect(() => {
    if (auth.isAuthenticated) {
      getSiteSettings();
      getEobr();
      getCommodities();
    }
  }, [auth.isAuthenticated]);

  return {
    //settings
    getSiteSettings,
    //load
    load,
    addLoad,
    getLoads,
    // driver
    driverData,
    getDrivers,
    addDriver,
    updateDriver,
    assignDriverToOwner,
    unassignDriverFromOwner,
    assignDriverToTractor,
    unassignDriverFromTractor,
    assignDriverToTrailer,
    unassignDriverFromTrailer,
    // tractor
    tractorData,
    getTractors,
    addTractor,
    //trailer
    trailerData,
    getTrailers,
    // customer
    customerData,
    getCustomers,
    // owner
    ownerData,
    getOwners,
    updateOwner,
    addOwner,
    // billing
    billing,
    getBilling,
    // auth
    auth,
    isUserAutheticated,
    authSignin,
    authSignOut,
    //commodity
    commodity,
    getCommodities,
    //eobr
    eobr,
    getEobr,
    // maintenance
    maintenance,
    addMaintenance,
    updateMaintenance,
    removeMaintenance,
    getMaintenance,

    // maintenance
    inspection,
    addInspection,
    updateInspection,
    removeInspection,
    getInspection,
    //settings
    settings,
    updateSettings,
    //user
    user,
    addUser,
    updateUser,
    removeUser,
    getUsers,
    // incident
    incident,
    addIncident,
    updateIncident,
    removeIncident,
    getIncidents,
    //invoice
    invoice,
    addInvoice,
    updateInvoice,
    getInvoices,
    // loading state
    loading,
  };
};

export default useContext;
