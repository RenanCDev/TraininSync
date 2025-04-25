import { Route, Routes } from "react-router-dom";
import App from "../App";
import { NotFound } from "../pages/notFound";
import { Login } from "../pages/login";
import { RegisterPersonal } from "../pages/register-personal";
import { Register } from "../pages/register";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />{" "}
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register/personal" element={<RegisterPersonal />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
