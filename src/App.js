import "./App.css";
import Navbar1 from "./Components/Navbars/Navbar1/Navbar1";
import Navbar2 from "./Components/Navbars/Navbar2/Navbar2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FreightOptionsDashboard from "./Components/FreightOptionsDashboard/FreightOptionsDashboard";

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
          <Route path="/" element={<FreightOptionsDashboard />} />
          <Route path="frtOpsDash" element={<FreightOptionsDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
