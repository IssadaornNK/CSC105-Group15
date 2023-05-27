import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import A_Profile from "../components/AboutComponents/A_Profile"
import A_Skill from "../components/AboutComponents/A_Skill"
import A_AAC from "../components/AboutComponents/A_AAC"

function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="mt-[80px] text-8xl font-bold flex flex-col justify-center text-center text-black">
        <h1 className="mt-[20px]">Profile</h1>
      </div>
      <A_Profile />
      <A_Skill />
      <A_AAC />
      <Footer />
    </div>
  );
}

export default AboutPage;
