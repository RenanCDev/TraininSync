import { Route, Routes } from "react-router-dom";
import { Teste } from "../pages/teste";
import App from "../App";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/teste" element={<Teste />} />
    </Routes>
  );
}
