import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import P_Project from "../components/ProjectComponents/P_Project"

function ProjectPage() {
  return (
    <div className="bg-[#fff]">
      <Navbar />
      <div className="mt-[80px] text-8xl font-bold flex flex-col justify-center text-center text-black">
        <h1 className="mt-[20px]">Project</h1>
        <div className="flex justify-center px-8">
          <hr className="mt-5 h-2 bg-black border-none w-full" />
        </div>
      </div>
      <div className="px-12 flex justify-center">
          <h4 className="mt-8 px-5 text-4xl font-medium text-black border-l-[20px] border-[#7E38B7] py-4">
            These are all the projects I have completed before. Most of them are
            open-source. You are welcome to use them in any way you like.
          </h4>
      </div>
      <P_Project />
      <Footer />
    </div>
  );
}

export default ProjectPage;
