import React from "react";
import ICCF from "../../assets/ICCF.PNG";

const About = () => {
  return (
    <div className=" bg-[#fff] text-black">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="grid sm:grid-cols-2 gap-56 px-96 my-56">
          <div className="flex justify-end">
            <img src={ICCF} alt="Profile Picture" style={{width: "500px"}}/>
          </div>
          <div>
            <div className="pb-8 items-center flex justify-center mt-24">
              <p className=" text-7xl font-bold inline border-b-4 border-[#333198]">
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
