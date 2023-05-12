import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useUserAuth } from "../routes/login/UserAuthContext";
import userpic from "../assets/images/userpic.avif";
import { VscArchive, VscPersonAdd, VscGear } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, show, getData, logOut } = useUserAuth();
  getData();
  const navigate = useNavigate();

  const data = useUserAuth();

  // console.log(data);
  //logout
  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <section className="fixed ml-[-100%]  z-50 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[17%] 2xl:w-[15%]">
            <div>
              <div className="mt-5 px-6 py-4 -ml-[1rem] ">
                <NavLink to="./" title="home">
                  <img
                    src="https://streamsss.com/wp-content/themes/streamsss/assets/images/logo/logo-head.png"
                    className="w-[11rem] "
                    alt="tailus logo"
                  />
                </NavLink>
                <p className="font-semibold	text-slate-400	tracking-wide	  py-4 text-left">
                  Dashboard
                </p>
              </div>

              <ul className="space-y-2 tracking-wide mt-2 bg-slate-100 rounded-xl	 ">
                {user.email === "user@gmail.com" && (
                  <NavLink
                    to="/"
                    className="relative tracking-widest		 flex items-center space-x-4 rounded-xl text-gray-600 hover:text-white hover:bg-gradient-to-r from-sky-600 to-cyan-400 py-5 px-3"
                  >
                    <VscPersonAdd />
                    <span className="font-semibold ml-5">Profile</span>
                  </NavLink>
                )}

                {user.email === "teamleader@gmail.com" ? (
                  <>
                    <NavLink
                      to="/"
                      className="relative tracking-widest		 flex items-center space-x-4 rounded-xl text-gray-600 hover:text-white hover:bg-gradient-to-r from-sky-600 to-cyan-400 py-5 px-3"
                    >
                      <VscPersonAdd />
                      <span className="font-semibold ml-5">Profile</span>
                    </NavLink>
                    <NavLink
                      to="/profile"
                      className="relative tracking-widest	 flex items-center space-x-4 rounded-xl text-gray-600 hover:text-white hover:bg-gradient-to-r from-sky-600 to-cyan-400 py-5 px-3"
                    >
                      <VscArchive />
                      <span className="font-semibold ml-5">Employees</span>
                    </NavLink>
                  </>
                ) : (
                  ""
                )}
                {user.email === "superadmin@gmail.com" ? (
                  <>
                    <NavLink
                      to="/"
                      className="relative tracking-widest		 flex items-center space-x-4 rounded-xl text-gray-600 hover:text-white hover:bg-gradient-to-r from-sky-600 to-cyan-400 py-5 px-3"
                    >
                      <VscPersonAdd />
                      <span className="font-semibold ml-5">Profile</span>
                    </NavLink>
                    <NavLink
                      to="/employees"
                      className="relative tracking-widest	 flex items-center space-x-4 rounded-xl text-gray-600 hover:text-white hover:bg-gradient-to-r from-sky-600 to-cyan-400 py-5 px-3"
                    >
                      <VscArchive />
                      <span className="font-semibold ml-5">Employees</span>
                    </NavLink>
                    <NavLink
                      to="/teamleader"
                      className="relative tracking-widest	 flex items-center space-x-4 rounded-xl text-gray-600 hover:text-white hover:bg-gradient-to-r from-sky-600 to-cyan-400 py-5 px-3"
                    >
                      <VscArchive />
                      <span className="font-semibold ml-5">Team Leaders</span>
                    </NavLink>
                  </>
                ) : (
                  ""
                )}
              </ul>
            </div>

            {user && (
              <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t pb-7">
                <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>

                  <NavLink
                    onClick={handleSignOut}
                    to="/logout"
                    className="group-hover:text-gray-700 "
                  >
                    Logout
                  </NavLink>
                </button>
              </div>
            )}
          </section>

          <div className="fixed top-0  w-screen z-40  h-16 border-b bg-white lg:py-2.5 px-6 flex items-center justify-end space-x-4 2xl:container">
            <button className="w-12 h-16 -mr-2 border-r lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {!user && (
              <NavLink to="/Login" className="py-5 px-3">
                Login
              </NavLink>
            )}
            <div className="flex space-x-4 justify-center items-center">
              <div className=" w-10 h-10 ">
                <img src={userpic} alt="" className="rounded-xl border" />
              </div>
              <div className="pr-[3rem] text-left">
                <p className="text-[1rem]	font-bold	">
                  {user ? (show ? show.fullname : "Loading....") : " "}
                </p>
                <p className="text-[0.8rem]">
                  {user ? (show ? show.skill : "Loading....") : " "}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
