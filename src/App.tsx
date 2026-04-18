import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import "./styles/main.scss";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Force entry to Login */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        {/* 2. Add the Dashboard Route */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Fallback — redirect unknown paths to Login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
