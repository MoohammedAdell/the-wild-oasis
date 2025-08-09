import { Routes as Router, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import AppLayout from "./ui/AppLayout";
import { getCabins } from "./services/apiCabins";

function App() {
  getCabins()
    .then((data) => console.log("DATA:", data))
    .catch((err) => console.error("ERROR:", err));

  return (
    <>
      <Router>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/cabins" element={<Cabins />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Router>
    </>
  );
}

export default App;
