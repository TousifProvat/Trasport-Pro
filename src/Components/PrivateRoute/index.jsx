import React from "react";
import { Navigate, Outlet } from "react-router-dom";
//components
import TopNav from "../Navbar/TopNav";
import BottomTopNav from "../Navbar/BottomTopNav";

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = localStorage.getItem("transport-token");
  return isAuthenticated ? (
    <>
      <TopNav />
      <BottomTopNav />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
