import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  return (
    <div className="center mt-[3.6rem]">
      <h1>Logout</h1>
      <button className="btn" onClick={() => navigate("/")}>
        back to home page
      </button>
    </div>
  );
};

export default Logout;
