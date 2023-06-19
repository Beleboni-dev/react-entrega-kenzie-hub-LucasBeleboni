import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserProvider } from '../providers/UserContext';
import LoginPage from '../components/Pages/Login/LoginPage/LoginPage';
import RegisterPage from '../components/Pages/Register/RegisterPage/RegisterPage';
import DashboardPage from '../components/Pages/Dashboard/DashboardPage';
import ProtectedRoute from './ProtectedRoute';
import CommonRoute from './CommonRoute';

const RoutesMain = () => {
  return (
    <UserProvider>
      <Routes>
        <Route element={<CommonRoute />}>
        <Route index path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<ProtectedRoute />}>
        <Route index path="/dashboard" element={<DashboardPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </UserProvider>
  );
};

export default RoutesMain;
