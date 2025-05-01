import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./global.css";
import "./tailwind.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppRoutes />
    <ToastContainer autoClose={3000} />
  </BrowserRouter>
);
