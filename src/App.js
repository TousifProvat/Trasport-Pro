import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FreightOptionsDashboard from "./Components/FreightOptionsDashboard/FreightOptionsDashboard";
import AddNewLoad from "./Components/FreightOptionsDashboard/AddNewLoad/AddNewLoad";
import AddOwner from "./Components/AddOwner/AddOwner";
import SearchOwner from "./Components/SearchOwner/SearchOwner";
import AddDrivers from "./Components/AddDrivers/AddDrivers";
import SearchDrivers from "./Components/SearchDrivers/SearchDrivers";
import Tractors from "./Components/Tractors/Tractors";
import AddTrailers from "./Components/AddTrailers/AddTrailers";
import SearchTractor from "./Components/SearchTractor/SearchTractor";
import SearchTrailer from "./Components/SearchTrailer/SearchTrailer";
import AddTerminal from "./Components/AddTerminal/AddTerminal";
import SearchTerminal from "./Components/SearchTerminal/SearchTerminal";
import TerminalManagerDashboard from "./Components/SearchTerminal/TerminalManagerDashboard/TerminalManagerDashboard";
import AddCustomer from "./Components/AddCustomer/AddCustomer";
import SearchCustomer from "./Components/SearchCustomer/SearchCustomer";
import OwnerSummary from "./Components/OwnerSummary/OwnerSummary";
import SearchLoad from "./Components/SearchLoad/SearchLoad";
import BillingDashboard from "./Components/BillingDashboard/BillingDashboard";
import TractorSummary from "./Components/TractorSummary/TractorSummary";
import TrailerSummary from "./Components/TrailerSummary/TrailerSummary";
import DriverSummary from "./Components/DriverSummary/DriverSummary";
import SiteSettings from "./Components/SiteSettings/SiteSettings";
import Login from "./Components/Login/Login";
import UserManagement from "./Components/UserManagement/UserManagement";
import InspectionLog from "./Components/InspectionLog/InspectionLog";
import MaintenanceLog from "./Components/MaintenanceLog/MaintenanceLog";
import AccidentLog from "./Components/AccidentLog/AccidentLog";
import Invoice from "./Components/Invoice/Invoice";
import PrivateRoute from "./Components/PrivateRoute";
import CustomerSummary from "./Components/CustomerSummary/CustomerSummary";
//
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//actions
import { fetchSettings } from "./features/siteSettings/action";
import { isUserAutheticated } from "./features/auth/action";
import { fetchTrailers } from "./features/trailer/action";
import { fetchTractors } from "./features/tractor/action";
import { fetchDrivers } from "./features/driver/action";
import { fetchUsers } from "./features/user/action";
import { fetchCommodities } from "./features/commodity/action";
import { fetchCustomer } from "./features/customer/action";
import { fetchEobrs } from "./features/eobr/action";
import { fetchOwners } from "./features/owner/action";

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(isUserAutheticated());
  }, []);

  useEffect(() => {
    if (auth.isAuthenticated) {
      dispatch(fetchEobrs());
      dispatch(fetchSettings());
      dispatch(fetchCommodities());
      dispatch(fetchOwners());
      dispatch(fetchCustomer());
      dispatch(fetchTrailers());
      dispatch(fetchTractors());
      dispatch(fetchDrivers());
      dispatch(fetchUsers());
    }
  }, [auth.isAuthenticated]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<FreightOptionsDashboard />} />
            <Route
              path="freight-options-dashboard"
              element={<FreightOptionsDashboard />}
            />
            <Route path="add-new-load" element={<AddNewLoad />} />
            <Route path="add-owner" element={<AddOwner />} />
            <Route path="search-owner" element={<SearchOwner />} />
            <Route path="add-driver" element={<AddDrivers />} />
            <Route path="search-driver" element={<SearchDrivers />} />
            <Route path="add-tractor" element={<Tractors />} />
            <Route path="add-trailer" element={<AddTrailers />} />
            <Route path="search-tractor" element={<SearchTractor />} />
            <Route path="search-trailer" element={<SearchTrailer />} />
            <Route path="add-terminal" element={<AddTerminal />} />
            <Route path="search-terminal" element={<SearchTerminal />} />
            <Route path="add-customer" element={<AddCustomer />} />
            <Route path="search-customer" element={<SearchCustomer />} />
            <Route path="search-load" element={<SearchLoad />} />
            <Route path="site-setting" element={<SiteSettings />} />
            <Route path="invoice" element={<Invoice />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="owner/:ownerId" element={<OwnerSummary />} />
            <Route path="tractor/:tractorId" element={<TractorSummary />} />
            <Route path="trailer/:trailerId" element={<TrailerSummary />} />
            <Route path="driver/:driverId" element={<DriverSummary />} />
            <Route path="customer/:customerId" element={<CustomerSummary />} />
            <Route path="billing-dashboard" element={<BillingDashboard />} />
            <Route path="inspection" element={<InspectionLog />} />
            <Route path="maintenance" element={<MaintenanceLog />} />
            <Route path="accident-log" element={<AccidentLog />} />
            <Route
              path="terminal-manage-dashboard"
              element={<TerminalManagerDashboard />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
