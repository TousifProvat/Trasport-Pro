import "./App.css";
import Navbar1 from "./Components/Navbars/Navbar1/Navbar1";
import Navbar2 from "./Components/Navbars/Navbar2/Navbar2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FreightOptionsDashboard from "./Components/FreightOptionsDashboard/FreightOptionsDashboard";
import AddNewLoad from "./Components/FreightOptionsDashboard/AddNewLoad/AddNewLoad";
import AddOwner from "./Components/AddOwner/AddOwner";
import SearchOwner from "./Components/SearchOwner/SearchOwner";
import AddDrivers from "./Components/AddDrivers/AddDrivers";
import SearchDrivers from "./Components/SearchDrivers/SearchDrivers";
import Tractors from "./Components/Tractors/Tractors";
import AddTrailers from "./Components/AddTrailters/AddTrailers";
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
import EditDriver from "./Components/EditDriver/EditDriver";
import EditTractor from "./Components/EditTractor/EditTractor";
import EditTrailer from "./Components/EditTrailer/EditTrailer";
import SiteSettings from "./Components/SiteSettings/SiteSettings";
import Login from "./Components/Login/Login";
import UserManagement from "./Components/UserManagement/UserManagement";
import InspectionLog from "./Components/InspectionLog/InspectionLog";
import MaintenanceLog from "./Components/MaintenanceLog/MaintenanceLog";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar1></Navbar1>
          <hr></hr>
          <Navbar2></Navbar2>
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/">
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
            <Route path="user-management" element={<UserManagement />} />
            {/* <Route path="editDriver" element={<EditDriver />} />
              <Route path="editTrailer" element={<EditTrailer />} />
              <Route path="editTractor" element={<EditTractor />} /> */}
            <Route path="owner/:ownerId" element={<OwnerSummary />} />
            <Route path="tractor/:tractorId" element={<TractorSummary />} />
            <Route path="trailer/:trailerId" element={<TrailerSummary />} />
            <Route path="driver/:driverId" element={<DriverSummary />} />
            <Route path="billing-dashboard" element={<BillingDashboard />} />
            <Route path="inspection-log" element={<InspectionLog />} />
            <Route path="maintenance-log" element={<MaintenanceLog />} />
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
