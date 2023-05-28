import React from "react";
import ICCF from "../../assets/ICCF.PNG";

const About = () => {
  return (
    <div className=" bg-[#fff] text-black">
      
        <div className="grid lg:grid-cols-2 md:grid-cols2-2 sm:grid-cols-2 xs:grid-cols-2 ">
          <div className="flex jrow">
            <img src={ICCF} alt="Profile Picture" style={{width: "500px"}}/>
          </div>
          <div>
            <div className="lg:pb-8 items-center lg:flex-col md:flex-row lg:mt-24">
              <p className=" lg:text-7xl font-bold inline border-b-4 border-[#333198]">
                About us
              </p>
            </div>
            <p className="lg:text-5xl ">
              A highly motivated first-year computer science student seeking an
              opportunity to apply my knowledge and gain hands-on experience in
              the field.
            </p>

          </div>
        </div>
      
    </div>
  );
};

export default About;
