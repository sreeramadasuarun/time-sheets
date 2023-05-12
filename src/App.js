import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Navbar from "./navbar/navLink.js";
import Login from "./routes/login/login.js";
import Logout from "./routes/login/logout";
import Profile from "./routes/profile";
import Signup from "./routes/signup";
import Forms from "./routes/formsdetails";
import { UserAuthContextProvider } from "./routes/login/UserAuthContext";
import PrivateRoute from "./routes/login/PrivateRoute";
import Employees from "./routes/employees.js";
// import { useUserAuth } from "./routes/login/UserAuthContext.js";
import Teamleader from "./routes/teamleader.js";

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/teamleader" element={<Teamleader />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/formsdetails"
            element={
              <PrivateRoute>
                <Forms />
              </PrivateRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
