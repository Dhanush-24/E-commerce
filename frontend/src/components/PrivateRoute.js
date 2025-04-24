import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Check if the token exists in localStorage

  if (!token) {
    // If the token is not found, redirect to login page
    return <Navigate to="/login" />;
  }

  // If the token exists, allow access to the protected route
  return children;
};

export default PrivateRoute;
