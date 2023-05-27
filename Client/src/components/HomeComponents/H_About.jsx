import React from "react";
import MarketFishH from "../../assets/MarketFishH.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className=" bg-[#fff] text-black">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="grid sm:grid-cols-2 gap-24 px-96 my-80">
          <div className="flex justify-end">
            <img src={MarketFishH} alt="Profile Picture" />
          </div>
          <div>
            <div className="pb-8 ">
              <p className=" text-7xl font-bold inline border-b-4 border-[#7E38B7]">
                About us
              </p>
            </div>
            <p className="text-5xl">
              A highly motivated first-year computer science student seeking an
              opportunity to apply my knowledge and gain hands-on experience in
              the field.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
