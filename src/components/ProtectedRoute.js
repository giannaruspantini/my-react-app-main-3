// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('authToken');

  // If there's no token, redirect to login
  return token ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
