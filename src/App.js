import "./App.css";
import Navbar1 from "./Components/Navbars/Navbar1/Navbar1";
import Navbar2 from "./Components/Navbars/Navbar2/Navbar2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FreightOptionsDashboard from "./Components/FreightOptionsDashboard/FreightOptionsDashboard";
import AuthProvider from "./Components/Contexts/AuthProvider";
import AddNewLoad from "./Components/FreightOptionsDashboard/AddNewLoad/AddNewLoad";
import AddOwner from "./Components/AddOwner/AddOwner";
import SearchOwner from "./Components/SearchOwner/SearchOwner"
import AddDrivers from "./Components/AddDrivers/AddDrivers";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar1></Navbar1>
          <hr></hr>
          <Navbar2></Navbar2>
        </div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<FreightOptionsDashboard />} />
          <Route path="frtOpsDash" element={<FreightOptionsDashboard />} />
          <Route path="addNewLoad" element={<AddNewLoad />} />
          <Route path="addOwner" element={<AddOwner />} />
          <Route path="searchOwner" element={<SearchOwner />} />
          <Route path="addDriver" element={<AddDrivers/>} />
          </Routes>
      </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
