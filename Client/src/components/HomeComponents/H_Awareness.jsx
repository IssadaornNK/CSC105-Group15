import React from "react";
import Dona from "../../assets/Dona.jpg";

const H_Awareness = () => {
  return (
    <div
      className="flex justify-center h-screen bg-center"
      style={{
        backgroundImage: `url(${Dona})`,
        marginTop: "0px",
        backgroundColor: "black",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Container */}
      <div className="lg:px-8 items-center flex flex-col justify-center">
        <h1 className="text-12xl sm:text-9xl font-bold text-[#fff] item-center">
          <span className="text-[#FAD77B]">123,456</span> people
        </h1>
        <h1 className="text-12xl sm:text-9xl font-bold text-[#fff] item-center mt-16">
          got a food from us
        </h1>
      </div>
    </div>
  );
};

export default H_Awareness;
