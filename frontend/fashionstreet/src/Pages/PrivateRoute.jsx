import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { userAuth } = useSelector((state) => state.authManager);

  if (userAuth) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
