import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ inLoggedIn, children }) => {
  if (!inLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default Protected;
