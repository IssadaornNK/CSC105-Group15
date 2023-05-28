import React from "react";
import ICCF from "../../assets/ICCF.PNG";

const About = () => {
  return (
    <div name="about" className="h-screen bg-[#fff] text-black">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="grid grid-cols-2 md:gap-20"></div>
        <div className="grid sm:grid-cols-2 md:gap-24 md:px-96 px-40 md:mt-6 mt-[120px]">
          <div className="flex justify-end">
            <img src={ICCF} alt="Profile Picture" />
          </div>
          <div className="md:text-4xl text-2xl">
            <div className="pb-8 mt-8">
              <p className=" md:text-6xl text-4xl font-bold inline border-b-4 border-[#333198]">
                About us
              </p>
            </div>
            <p>
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
