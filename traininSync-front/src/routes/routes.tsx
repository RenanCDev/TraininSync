import { Route, Routes } from "react-router-dom";
import App from "../App";
import { RegisterPersonal } from "../pages/register-personal";
import { NotFound } from "../pages/notFound";
import { Login } from "../pages/login";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />{" "}
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register/personal" element={<RegisterPersonal />} />
    </Routes>
  );
}
