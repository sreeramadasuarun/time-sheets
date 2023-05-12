import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // //.......sign login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="h-screen md:flex justify-center items-center">
      <div className="flex md:w-1/2 justify-center  items-center bg-white">
        <div className="flex flex-col gap-4 z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 shadow-2xl px-7 rounded-none">
          <h3 className="mb-6 text-2xl font-medium text-center">
            Sign in your Account
          </h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 focus:ring focus:ring-blue-500 focus:outline-none rounded-none"
              placeholder="Email address"
            />
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 focus:ring focus:ring-blue-500 focus:outline-none rounded-none"
              placeholder="Password"
            />
            <input
              type="submit"
              value="LogIn"
              className="cursor-pointer	 block w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-none"
            />
          </form>

          {/* <p className="w-full mt-4 text-sm text-center text-gray-500">
            Don't have an account?{" "}
            <NavLink to="/signup" className="text-blue-500 underline">
              Sign up here
            </NavLink>
          </p> */}
          {error && <p className="text-red-500 font-bold mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
