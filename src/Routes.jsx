import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/DashBoard";
import Profile from "./pages/Profile";
import CreateEvent from "./pages/CreateEvent";
import EventDetail from "./pages/EventDetail";
import { useUser } from "./UserContext";
import Landing from "./pages/Landing";

const Router = () => {
  const { userRole } = useUser();
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={userRole ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/profile"
        element={userRole ? <Profile /> : <Navigate to="/login" />}
      />
      <Route
        path="/create-event"
        element={
          userRole === "admin" ? <CreateEvent /> : <Navigate to="/dashboard" />
        }
      />
      <Route
        path="/event/:id"
        element={userRole ? <EventDetail /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default Router;
