import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserProvider } from '../providers/UserContext';
import ProtectedRoute from './ProtectedRoute';
import CommonRoute from './CommonRoute';
import LoginPage from '../Pages/Login/LoginPage';
import RegisterPage from '../Pages/Register/RegisterPage';
import DashboardPage from '../Pages/Dashboard/DashboardPage';
const RoutesMain = () => {
  return (
    <UserProvider>
      <Routes>
        <Route element={<CommonRoute />}>
        <Route index path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        </Route>
        <Route element={<ProtectedRoute />}>
        <Route index path='/dashboard' element={<DashboardPage />} />
        </Route>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </UserProvider>
  );
};

export default RoutesMain;
