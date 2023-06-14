import LoginPage from "./components/Pages/Login/LoginPage/LoginPage";
import RegisterPage from "./components/Pages/Register/RegisterPage/RegisterPage";
import DashboardPage from "./components/Pages/Dashboard/DashboardPage";
import { UserContext, UserProvider } from "./hooks/UserContext";

import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

const App = () => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    }
  }, [user]);
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </UserProvider>
  );
};

export default App;
