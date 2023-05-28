import React from "react";
import TorF from "../../assets/TorF.jpg";

const H_Pollution = () => {
  return (
    <div
      className="flex justify-center h-screen bg-center"
      style={{
        backgroundImage: `url(${TorF})`,
        marginTop: "0px",
        backgroundColor: "black",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Container */}
      <div className=" items-center flex flex-col justify-center">
        <div className="grid px-64 my-56 ">
          <h1 className="md:text-[220px] text-[120px] font-bold text-red-500 items-center ">
            40%
          </h1>
          <div className="justify-center items-center flex flex-col ">
            <h1 className="md:text-[80px] text-[50px] font-bold text-[#fff] text-center ">pollution</h1>
            <h1 className="md:text-[80px] text-[50px] font-bold text-[#fff] items-center ">reduce</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default H_Pollution;
