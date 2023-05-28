import React from "react";
import SeaBG2 from "../../assets/SeaBG2.jpg";

const Home = () => {
  return (
    <div
      className="flex justify-center h-screen bg-center mb-[60px]"
      style={{
        backgroundImage: `url(${SeaBG2})`,
        marginTop: "80px",
        backgroundColor: "black",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Container */}
      <div className="px-8 items-center flex flex-col justify-center">
        <h1 className="text-6xl md:text-8xl font-bold text-[#fff] item-center">
          Make the MOST benefit
        </h1>
        <h1 className="text-6xl md:text-8xl font-bold text-[#fff] item-center mt-16">
          of Fish-wasted from Overfishing
        </h1>
      </div>
    </div>
  );
};

export default Home;
