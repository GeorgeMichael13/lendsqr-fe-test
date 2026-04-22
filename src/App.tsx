import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// 1. IMPORT YOUR GLOBAL SCSS HERE
// Ensure the path correctly points to your main.scss file
import "./styles/main.scss";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import UserPage from "./pages/users/UserPage";
import UserDetails from "./pages/UserDetails/UserDetails";

const App: React.FC = () => {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* UserPage only loads when you click the specific link */}
          <Route path="users" element={<UserPage />} />
          {/* Default dashboard view is now empty/null */}
          <Route index element={null} />
        </Route>

        {/* Independent User Details Page */}
        <Route path="/user-details/:id" element={<UserDetails />} />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
