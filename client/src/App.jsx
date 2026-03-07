import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ApplyJob from "./pages/ApplyJobPage";
import Applications from "./pages/Applications";
import { AppContext } from "./contexts/AppContext";
import RecruiterLogin from "./components/RecruiterLogin";
import Dashboard from "./pages/Dashboard";
import ManageJobs from "./pages/ManageJobs";
import ViewApplications from "./pages/ViewApplications";
import AddJob from "./pages/AddJob";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ManageUsers from "./pages/ManageUsers";
import ManageAllJobs from "./pages/ManageAllJobs";

const App = () => {
  const { showRecruiterLogin, showAdminLogin } = useContext(AppContext)
  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin />}
      {showAdminLogin && <AdminLogin />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applyjob/:id" element={<ApplyJob />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="manage-jobs" element={<ManageJobs />} />
          <Route path="view-applications" element={<ViewApplications />} />
          <Route path="add-job" element={<AddJob />} />
        </Route>
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="manage-jobs" element={<ManageAllJobs />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
