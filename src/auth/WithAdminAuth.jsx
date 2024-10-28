/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const WithAdminAuth = ({ children }) => {
  const adminToken = localStorage.getItem('admintoken');

  if (adminToken) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" replace />;
  }
}

export default WithAdminAuth;
