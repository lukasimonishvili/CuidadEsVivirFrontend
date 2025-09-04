import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/DashBoard";
import Profile from "./pages/Profile";
import CreateTask from "./pages/CreateTask";
import TaskDetail from "./pages/TaskDetail";
import CreateEvent from "./pages/CreateEvent";
import EventDetail from "./pages/EventDetail";
import Ayudados from "./pages/Ayudados";
import { useUser } from "./UserContext";

export default function App() {
  const { userRole } = useUser();

  return (
    <Routes>
      <Route path="/" element={<Navigate to={userRole ? "/dashboard" : "/login"} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={userRole ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/profile" element={userRole ? <Profile /> : <Navigate to="/login" />} />
      <Route path="/create-task" element={userRole === "admin" ? <CreateTask /> : <Navigate to="/dashboard" />} />
      <Route path="/task/:id" element={userRole ? <TaskDetail /> : <Navigate to="/login" />} />
      <Route path="/create-event" element={userRole === "admin" ? <CreateEvent /> : <Navigate to="/dashboard" />} />
      <Route path="/event/:id" element={userRole ? <EventDetail /> : <Navigate to="/login" />} />
      <Route path="/ayudados" element={userRole ? <Ayudados /> : <Navigate to="/login" />} />
    </Routes>
  );
}

