import { Route, Routes } from "react-router-dom";
import App from "../App";
import { NotFound } from "../pages/notFound";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { RegisterStudent } from "../pages/student/register-student";
import { ScheduleCalendar } from "../pages/schedule/register-schedule";
import { RegisterService } from "../pages/service/register-service";
import { RegisterPayment } from "../pages/payment/register-payment";
import { RegisterProgress } from "../pages/progress/register-progress";
import { RegisterPersonal } from "../pages/personal/register-personal";
import { StudentTable } from "../pages/student/get-student";
import { EditStudent } from "../pages/student/update-student";
import { ContractTable } from "../pages/contract/get-contract";
import { RegisterContract } from "../pages/contract/register-contract";
import { ServiceTable } from "../pages/service/get-service";
import { EditService } from "../pages/service/update-service";
import { EditContract } from "../pages/contract/update-contract";
import { PaymentTable } from "../pages/payment/get-payment"
import { EditPayment } from "../pages/payment/update-payment";
import { EditProgress } from "../pages/progress/update-progress";
import { ProgressTable } from "../pages/progress/get-progress";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/register/personal" element={<RegisterPersonal />} />
      <Route path="/register/student" element={<RegisterStudent />} />
      <Route path="/register/service" element={<RegisterService />} />
      <Route path="/register/contract" element={<RegisterContract />} />
      <Route path="/register/payment" element={<RegisterPayment />} />
      <Route path="/register/progress" element={<RegisterProgress />} />

      <Route path="/student" element={<StudentTable />} />
      <Route path="/service" element={<ServiceTable />} />
      <Route path="/contract" element={<ContractTable />} />
      <Route path="/payment" element={<PaymentTable />} />
      <Route path="/progress" element={<ProgressTable />} />
      <Route path="/schedule" element={<ScheduleCalendar />} />

      <Route path="/edit-student/:id" element={<EditStudent />} />
      <Route path="/edit-service/:id" element={<EditService />} />
      <Route path="/edit-contract/:id" element={<EditContract />} />
      <Route path="/edit-payment/:id" element={<EditPayment />} />
      <Route path="/edit-progress/:id" element={<EditProgress />} />
    </Routes>
  );
}
