import React from "react";
import { data } from "../../data/data.js";
import CafeKitsune_AdminLogin from "../../assets/CafeKitsune_AdminLogin.jfif";

function P_Project() {
  const project = data;

  return (
    <div className=" bg-green-200">
      <div className="px-4 pb-4 pt-2 flex flex-col">
        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16 m-20">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md
          flex justify-center text-center items-center h-96 hover:scale-105 duration-500"
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-3xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2 mr-8
                   bg-[#7E38B7] hover:bg-orange-400 text-white font-bold text-xl"
                    >
                      Demo
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                   bg-[#7E38B7] hover:bg-orange-400 text-white font-bold text-xl"
                    >
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default P_Project;
