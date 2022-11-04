import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route element={<ProtectedRoutes />}> */}
      <Route path="/home" element={<Dashboard />} />
      {/* </Route> */}
    </Routes>
  );
};

export default RoutesMain;
