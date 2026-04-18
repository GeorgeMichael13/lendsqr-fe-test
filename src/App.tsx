import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login/Login"; // Adjusted to relative path for safety
import "./styles/main.scss"; // Adjusted to your SCSS entry point

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Force entry to Login */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        {/* Placeholders for later — keeping it simple */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
