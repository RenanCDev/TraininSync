import { Route, Routes } from "react-router-dom";
import App from "../App";
import { RegisterForm } from "../pages/register";
import { NotFound } from "../pages/notFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} /> {/* Pagina de erro 404 (Not Found)  */}
      <Route path="/" element={<App />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
}
