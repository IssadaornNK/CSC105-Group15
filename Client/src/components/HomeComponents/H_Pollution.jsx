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
      <div className="px-8 items-center flex flex-col justify-center">
        <div className="grid sm:grid-cols-2 gap-24 px-64 my-56">
          <h1 className="text-[400px] font-bold text-red-500 items-center">
            40%
          </h1>
          <div className="justify-center items-start flex flex-col">
            <h1 className="text-[150px] font-bold text-[#fff]">pollution</h1>
            <h1 className="text-[150px] font-bold text-[#fff]">reduce</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default H_Pollution;
