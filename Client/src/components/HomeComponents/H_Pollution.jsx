import React from "react";
import TorF from "../../assets/TorF.jpg";

const H_Pollution = () => {
  return (
    <div
      className="flex justify-center h-screen bg-center"
      style={{
        backgroundImage: `url(${TorF})`,
        marginTop: "100px",
        backgroundColor: "black",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Container */}
      <div className=" items-center flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 lg:gap-24 md:gap-0 sm:gap-18 lg:px-64 my-56 ">
          <h1 className="lg:text-[300px] md:text-[220px] sm:text-[200px] xs:text-[64px] font-bold text-red-500 items-center ">
            40%
          </h1>
          <div className="justify-center items-start flex flex-col ">
            <h1 className="lg:text-[150px] md:text-[80px] sm:text-[75px] xs:text-[48px] font-bold text-[#fff] ">pollution</h1>
            <h1 className="lg:text-[150px] md:text-[80px] sm:text-[75px] xs:text-[48px] font-bold text-[#fff] ">reduce</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default H_Pollution;
