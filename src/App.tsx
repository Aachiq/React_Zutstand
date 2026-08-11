import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import AdminRoute from "./components/AdminRoute";
import AdminPanel from "./pages/AdminPanel";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Pages without Navbar */}
        <Route path="/login" element={<LoginPage />}  />

        {/* Pages with Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          {/* Protected pages */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          
          {/* Admin pages */}
          <Route element={<AdminRoute />}>
            <Route path="/admin-panel" element={<AdminPanel />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;