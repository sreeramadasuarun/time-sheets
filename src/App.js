import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/navLink.js";
import Login from "./routes/login/Login";
import Logout from "./routes/login/Logout";
import Profile from "./routes/profile";
import Signup from "./routes/signup";
import Forms from "./routes/formsdetails";
import { UserAuthContextProvider } from "./routes/login/UserAuthContext";
// import PrivateRoute from "./routes/login/PrivateRoute";

function App() {
  return (
    <UserAuthContextProvider>
      <Navbar />
      <Routes>
        {/* <Route
          path="/Shop"
          element={
            <PrivateRoute>
              <Shop />
            </PrivateRoute>
          }
        /> */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/formsdetails" element={<Forms />} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
