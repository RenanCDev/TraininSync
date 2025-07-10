import { Route, Routes } from "react-router-dom";
import App from "../App";
import { NotFound } from "../pages/notFound";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { RegisterStudent } from "../pages/student/register-student";
import { RegisterSchedule } from "../pages/schedule/register-schedule";
import { RegisterService } from "../pages/service/register-service";
import { RegisterPayment } from "../pages/payment/register-payment";
import { RegisterProgress } from "../pages/progress/register-progress";
import { RegisterPersonal } from "../pages/personal/register-personal";
import { StudentTable } from "../pages/student/get-student";
import { EditStudent } from "../pages/student/update-student";
import { ContractTable } from "../pages/contract/get-contract";
import { RegisterContract } from "../pages/contract/register-contract";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/register/personal" element={<RegisterPersonal />} />
      <Route path="/register/student" element={<RegisterStudent />} />
      <Route path="/register/schedule" element={<RegisterSchedule />} />
      <Route path="/register/service" element={<RegisterService />} />
      <Route path="/register/payment" element={<RegisterPayment />} />
      <Route path="/register/progress" element={<RegisterProgress />} />
      <Route path="/register/contract" element={<RegisterContract />} />

      <Route path="/student" element={<StudentTable />} />
      <Route path="/contract" element={<ContractTable />} />
      {/* <Route path="/schedule" element={<ScheduleTable />} />
      <Route path="/service" element={<ServiceTable />} />
      <Route path="/payment" element={<PaymentTable />} />
      <Route path="/progress" element={<ProgressTable />} /> */}

      <Route path="/edit-student/:id" element={<EditStudent />} />
    </Routes>
  );
}
