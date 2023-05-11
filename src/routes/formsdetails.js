import React, { useState } from "react";
import { useUserAuth } from "../routes/login/UserAuthContext";
import { useNavigate } from "react-router-dom";

const Forms = () => {
  const { handleSubmit } = useUserAuth();
  const navigate = useNavigate();

  const [fullname, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [skill, setSkill] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [about, setAbout] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();
    navigate("/profile");

    await handleSubmit(
      fullname,
      companyName,
      companyAddress,
      skill,
      permanentAddress,
      about
    );
  };

  return (
    <div className="mt-[2.3rem]">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
        <div className="w-[92rem]">
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="flex gap-10">
              <div className="text-white  w-[30rem] h-[33rem] bg-cover bg-hero-image2 flex flex-col justify-center items-center">
                <p className="font-medium text-lg ">Personal Details</p>
                <p>Please fill out all the fields...</p>
              </div>

              <div className="lg:col-span-2 w-full ">
                <form
                  onSubmit={formSubmit}
                  className="grid gap-4 gap-y-2 text-md grid-cols-1 md:grid-cols-5 "
                >
                  <div className="md:col-span-5 ">
                    <label htmlFor="full_name">Full Name</label>
                    <input
                      // placeholder={user ? show.fullname : "login for details"}
                      type="text"
                      name="full_name"
                      id="full_name"
                      className="h-10 border  mt-1 rounded px-4 w-full bg-gray-100 shadow-inner hover:bg-gray-200 duration-500"
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="setCompanyName">Company Name</label>
                    <input
                      // placeholder={
                      //   user ? show.companyName : "login for details"
                      // }
                      type="text"
                      name="setCompanyName"
                      id="setCompanyName"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-100 shadow-inner hover:bg-gray-200 duration-500"
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="setCompanyAddress">Company Address</label>
                    <input
                      // placeholder={
                      //   user ? show.companyAddress : "login for details"
                      // }
                      type="text"
                      name="setCompanyAddress"
                      id="setCompanyAddress"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-100 shadow-inner hover:bg-gray-200 duration-500"
                      onChange={(e) => setCompanyAddress(e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="setSkill">Skill In</label>
                    <input
                      // placeholder={user ? show.skill : "login for details"}
                      type="text"
                      name="setSkill"
                      id="setSkill"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-100 shadow-inner hover:bg-gray-200 duration-500"
                      onChange={(e) => setSkill(e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="setPermanentAddress">
                      Permanent address
                    </label>
                    <input
                      // placeholder={
                      //   user ? show.permanentAddress : "login for details"
                      // }
                      type="text"
                      name="setPermanentAddress"
                      id="setPermanentAddress"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-100 shadow-inner hover:bg-gray-200 duration-500"
                      onChange={(e) => setPermanentAddress(e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-5  pb-10">
                    <label htmlFor="setAbout">About</label>
                    <textarea
                      // placeholder={user ? show.about : "login for details"}
                      type="text"
                      name="setAbout"
                      id="setAbout"
                      className="h-[5rem] border mt-1 rounded px-4 w-full bg-gray-100 shadow-inner hover:bg-gray-200 duration-500"
                      onChange={(e) => setAbout(e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <div className="text-center">
                      {/* <input
                        onClick={() => navigate("/profile")}
                        type="button"
                        value="cancel"
                        className=" mr-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                      /> */}
                      <input
                        type="submit"
                        value="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
