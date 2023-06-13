import { Route, Routes } from "react-router-dom"
import LoginPage from "./components/Pages/Login/LoginPage/LoginPage"
import RegisterPage from "./components/Pages/Register/RegisterPage"
import DashboardPage from "./components/Pages/Dashboard/DashboardPage"

function App() {

  return (
    <>
<Routes>
  <Route path="/" element={<LoginPage />} />
  <Route path="/register" element={<RegisterPage />} />
  <Route path="/dashboard" element={<DashboardPage />} />
</Routes>
    </>
  )
}

export default App
