import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Test001 from "../../assets/Test001.jpeg";


function A_AAC() {

  const [AACList, setAACList] = useState([]);

  const getAACs = () => {
    axios.get("http://localhost:3000/AACs").then((response) => {
      setAACList(response.data);
    });
  };

  useEffect(() => {
    getAACs();
  }, []) 


  return (
    <div className="flex flex-col justify-center pb-4">
      <div className="flex mt-5">
        <div className="flex justify-center m-auto bg-[#7E38B7] w-full">
          <div className="bg-white">
            <h1 className="px-5 text-6xl font-medium text-black py-4">
              Awards & Activities & Certificates
            </h1>
          </div>
        </div>
      </div>

      <div className="px-4 flex flex-col">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-14 py-14">
          {AACList.map((aac) => ( 
            <div
              key={aac.AAC_Name}
              className="flex hover:scale-105 duration-500 justify-center"
            >
              <div className="border-4 border-black flex rounded-3xl">
                <div className="flex overflow-hidden border-4 object-cover border-black my-6 ml-6 rounded-3xl items-center justify-center w-[200px] h-[200px]">
                  <img
                    src={aac.AAC_Picture}
                    alt="fox"
                   style={{ height: '100%'}}
                  />
                </div>

                <div className="m-8">
                  <h3 className="text-[#7E38B7] text-4xl font-bold">
                    {aac.AAC_Place}
                  </h3>
                  <div className="text-2xl font-semibold">
                    {aac.AAC_Name}
                    <span className="text-2xl font-normal">
                      {aac.AAC_Description}
                    </span>
                  </div>
                  <div className="text-2xl font-normal">{aac.AAC_Year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default A_AAC;
