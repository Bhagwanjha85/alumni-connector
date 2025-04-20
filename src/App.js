import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import CustomNavbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Directory from "./pages/Directory";
import Events from "./pages/Events";
import Forum from "./pages/Forum";
import Mentorship from "./pages/Mentorship";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

const ProtectedLayout = () => (
  <ProtectedRoute>
    <CustomNavbar />
    <Outlet />
  </ProtectedRoute>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Protected routes with navbar */}
          <Route element={<ProtectedLayout />}>
            <Route index element={<Home />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/events" element={<Events />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;