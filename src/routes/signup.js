import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../routes/login/UserAuthContext";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signUp(email, password);

      navigate("/formsdetails");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-r from-purple-500 to-purple-900 i justify-around items-center hidden">
        <div className="text-left">
          <h1 className="text-white font-bold text-[1rem] font-sans uppercase">
            Why Streams?
          </h1>
          <p className="text-zinc-200  text-[2.7rem] font-thin mt-3 w-[30rem]">
            Streams always equips talents with excellent knowledge.{" "}
          </p>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <div className="flex flex-col gap-4 w-[25rem] z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 shadow-2xl px-7 rounded-none">
          <h3 className="mb-6 text-2xl font-medium text-center">
            create a account
          </h3>

          <form onSubmit={handleSignupSubmit}>
            <input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 focus:ring focus:ring-blue-500 focus:outline-none rounded-none"
              placeholder="Email address"
              required
            />
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 focus:ring focus:ring-blue-500 focus:outline-none rounded-none"
              placeholder="Password"
              required
            />
            <input
              value="Register"
              type="submit"
              className="cursor-pointer	block w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-none"
            />
          </form>
          <p className="w-full mt-4 text-sm text-center text-gray-500">
            Already have an account?{" "}
            <NavLink to="/Login" className="text-blue-500 underline">
              Sign In here
            </NavLink>
            {error && <p className="text-red-500 font-bold mt-4">{error}</p>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
