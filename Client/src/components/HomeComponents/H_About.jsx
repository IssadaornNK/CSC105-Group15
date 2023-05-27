import React from "react";
import KONKON from "../../assets/KON KON KITSUNE.gif";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div name="about" className="h-screen bg-[#fff] text-black">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="grid grid-cols-2 gap-20"></div>
        <div className="grid sm:grid-cols-2 gap-24 px-96 mt-6">
          <div className="flex justify-end">
            <img src={KONKON} alt="Profile Picture" />
          </div>
          <div className="text-4xl">
            <div className="pb-8 mt-8">
              <p className=" text-6xl font-bold inline border-b-4 border-[#7E38B7]">
                About me
              </p>
            </div>
            <p>
              A highly motivated first-year computer science student seeking an
              opportunity to apply my knowledge and gain hands-on experience in
              the field.
            </p>

            <div className="mt-6 text-2xl">
              <button className="text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-400 border-black">
                <Link to="/AboutPage">More about me</Link>
                <span>
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
