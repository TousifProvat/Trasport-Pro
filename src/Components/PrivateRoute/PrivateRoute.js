import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = localStorage.getItem("transport-token");
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
