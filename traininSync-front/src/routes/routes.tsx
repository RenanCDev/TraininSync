import { Route, Routes } from "react-router-dom";
import App from "../App";
import { RegisterForm } from "../pages/register";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
}
