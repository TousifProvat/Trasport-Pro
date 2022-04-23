import "./App.css";
import Navbar1 from "./Components/Navbars/Navbar1/Navbar1";
import Navbar2 from "./Components/Navbars/Navbar2/Navbar2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FreightOptionsDashboard from "./Components/FreightOptionsDashboard/FreightOptionsDashboard";
import AuthProvider from "./Components/Contexts/AuthProvider";
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

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <div className="App">
            <Navbar1></Navbar1>
            <hr></hr>
            <Navbar2></Navbar2>
          </div>
          <Routes>
            <Route path="/" element={<FreightOptionsDashboard />} />
            <Route path="frtOpsDash" element={<FreightOptionsDashboard />} />
            <Route path="addNewLoad" element={<AddNewLoad />} />
            <Route path="addOwner" element={<AddOwner />} />
            <Route path="searchOwner" element={<SearchOwner />} />
            <Route path="addDriver" element={<AddDrivers />} />
            <Route path="searchDriver" element={<SearchDrivers />} />
            <Route path="addTractor" element={<Tractors />} />
            <Route path="addTrailer" element={<AddTrailers />} />
            <Route path="searchTractor" element={<SearchTractor />} />
            <Route path="searchTrailer" element={<SearchTrailer />} />
            <Route path="addTerminal" element={<AddTerminal />} />
            <Route path="searchTerminal" element={<SearchTerminal />} />
            <Route path="addCustomer" element={<AddCustomer />} />
            <Route path="searchCustomer" element={<SearchCustomer />} />
            <Route path="searchLoad" element={<SearchLoad />} />
            <Route path="site-setting" element={<SiteSettings />} />
            <Route path="login" element={<Login />} />
            <Route path="editDriver" element={<EditDriver />} />
            <Route path="editTrailer" element={<EditTrailer />} />
            <Route path="editTractor" element={<EditTractor />} />
            <Route path="summary/:ownerId" element={<OwnerSummary />} />
            <Route
              path="summary/tractor/:tractorId"
              element={<TractorSummary />}
            />
            <Route
              path="summary/trailer/:trailerId"
              element={<TrailerSummary />}
            />
            <Route
              path="summary/driver/:driverId"
              element={<DriverSummary />}
            />
            <Route path="billingDashboard" element={<BillingDashboard />} />
            <Route
              path="terminalManagerDashboard"
              element={<TerminalManagerDashboard />}
            />
            {/* <Route path="addNewLoad" element={<AddNewLoad/>} /> */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
