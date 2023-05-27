import React from "react";
import Navbar from "../components/Navbar";
import Add_AAC from "../components/AdminComponents/Add_AAC";
import Add_Project from "../components/AdminComponents/Add_Project";
import Edit_AAC from "../components/AdminComponents/Edit_AAC";
import Edit_Project from "../components/AdminComponents/Edit_Project";
import Footer from "../components/Footer";

function Admin() {
  if (!document.cookie.includes("token")) {
    location.href = "/login";
  }

  return (
    <div>
      <Navbar />
      <div className="mt-[80px] text-8xl font-semibold flex flex-col justify-center text-center text-black mb-8">
        <h1 className="mt-[20px] text-[#7E38B7]">Admin</h1>
        <div className="flex justify-center px-8">
          <hr className="mt-5 h-2 bg-[#7E38B7] border-none w-full" />
        </div>
      </div>

      <div className="flex flex-row mb-8 justify-center">
        <Add_AAC />
        <Edit_AAC />
      </div>

      <div className="flex flex-row mb-14 justify-center">
        <Add_Project />
        <Edit_Project />
      </div>

      <Footer />
    </div>
  );
}

export default Admin;
