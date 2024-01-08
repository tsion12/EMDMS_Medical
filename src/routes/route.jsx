import { Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import MedicalExamination from "../pages/MedicalExamination";
import Status from "../pages/Status";

const routes = [
  <Route path="/" element={<Dashboard />} />,
  <Route path="/medical" element={<MedicalExamination />} />,
  <Route path="/status" element={<Status />} />,
];

export default routes;
