import React from "react";
import BG_WaifuKitsune from "../../assets/BG_WaifuKitsune.jfif";

const Home = () => {
  return (
    <div
      name="home"
      className="flex justify-end h-screen mt-[80] bg-cover bg-center"
      style={{ backgroundImage: `url(${BG_WaifuKitsune})`, marginTop: "80px" }}
    >
      {/* Container */}
      <div className="w-2/5 px-8 items-end flex flex-col justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#7E38B7]">
          Nithit Lertcharoensombat
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#fff]">
          Software Developer
        </h2>
      </div>
    </div>
  );
};

export default Home;
