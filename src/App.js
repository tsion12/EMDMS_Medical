import logo from "./logo.svg";
import "./App.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Routes } from "react-router-dom";

import MedicalLayout from "./layout/MedicalLayout";
import routes from "./routes/route";

function App() {
  return (
    <div className="h-screen bg-green-200 overflow-hidden  relative font-poppins">
      <MedicalLayout>
        <Routes>{routes}</Routes>
      </MedicalLayout>
    </div>
  );
}

export default App;
