import React from "react";
import { Link } from "react-router-dom";

import MarketFishH from "../../assets/MarketFishH.jpg";

const Skills = () => {
  return (
    <div className=" bg-[#fff] text-black">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="grid sm:grid-cols-2 gap-32 px-56 my-80">
          <div>
            <div className="pb-8 ">
              <p className=" text-6xl font-bold inline border-b-4 border-[#333198]">
                Subscription
              </p>
            </div>
            <p className="text-4xl">
              A highly motivated first-year computer science student seeking an
              opportunity to apply my knowledge and gain hands-on experience in
              the field.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-24">
            <div className="bg-[#fff] rounded-3xl border-8 border-black">
              <div className="m-8">
                <div className="text-4xl font-bold">Free</div>
                <div className="text-3xl">
                  For individuals just getting started with NAME
                </div>
              </div>
              <div className="mt-10 font-bold text-6xl m-6">Free</div>
              <div className="m-8">
                <div className="mt-6 text-3xl flex justify-center font-semibold">
                  <button
                    className="text-black group border-4 px-20 py-3 my-2 flex items-center 
                  border-black hover:bg-[#F18B24] rounded-3xl"
                  >
                    <Link to="/ProjectPage">Sign up</Link>
                  </button>
                </div>

                <div className="mt-6 text-2xl">
                  <div className="text-3xl font-medium ">Free includes:</div>
                  <div className="text-2xl ml-4">
                    Choose your product on your own.
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#FAD77B] rounded-3xl border-8 border-black">
              <div className="m-8">
                <div className="text-4xl font-bold">Free</div>
                <div className="text-3xl">
                  For individuals just getting started with NAME
                </div>
              </div>
              <div className="mt-10 font-bold text-6xl m-6">Free</div>
              <div className="m-8">
                <div className="mt-6 text-3xl flex justify-center font-semibold">
                  <button
                    className="text-black group border-4 px-20 py-3 my-2 flex items-center 
                  border-black hover:bg-[#F18B24] rounded-3xl"
                  >
                    <Link to="/ProjectPage">Sign up</Link>
                  </button>
                </div>

                <div className="mt-6 text-2xl">
                  <div className="text-3xl font-medium ">Free includes:</div>
                  <div className="text-2xl ml-4">
                    Choose your product on your own.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
