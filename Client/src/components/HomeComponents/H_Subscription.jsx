import React from "react";
import { Link } from "react-router-dom";

import MarketFishH from "../../assets/MarketFishH.jpg";

const Skills = () => {
  return (
    <div className=" bg-[#fff] text-black ">
      <div className="flex flex-col justify-center items-center">
        <div className="grid md:sm:grid-cols-2 sm:grid-cols-2 lg:gap-32 lg:px-56 lg:my-80 md:my-32 sm:my-6 xs:my-6">
          <div>
            <div className="lg:pb-8">
              <p className=" lg:text-6xl font-bold inline border-b-4 border-[#333198]">
                Subscription
              </p>
            </div>
            <p className="lg:text-4xl">
              A highly motivated first-year computer science student seeking an
              opportunity to apply my knowledge and gain hands-on experience in
              the field.
            </p>
          </div>
          <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:gap-24">
            <div className="bg-[#fff] rounded-3xl border-8 border-black">
              <div className="m-8">
                <div className="lg:text-4xl font-bold">Start with Free Plan</div>
                <div className="lg:text-3xl">
                  For individuals just getting started with NAME
                </div>
              </div>
              <div className="mt-10 font-bold text-5xl m-6">Free</div>
              <div className="m-8">
                <div className="mt-6 text-3xl flex justify-center font-semibold">
                  <button
                    className="text-black group border-4 lg:px-20 py-3 my-2 flex items-center 
                  border-black hover:bg-[#F18B24] rounded-3xl"
                  >
                    <Link to="/ProjectPage">Sign up</Link>
                  </button>
                </div>

                <div className="mt-6 lg:text-2xl">
                  <div className="lg:text-3xl font-medium ">Free includes:</div>
                  <div className="lg:text-2xl ml-4">
                    Choose your product on your own.
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#FAD77B] rounded-3xl border-8 border-black">
              <div className="m-8">
                <div className="lg:text-4xl font-bold">Continously Subscription</div>
                <div className="lg:text-3xl">
                  Recommended for company and individuals who want us to provide our product every month
                </div>
              </div>
              <div className="mt-10 font-bold text-5xl  m-6">฿99/Month</div>
              <div className="m-8">
                <div className="mt-6 text-3xl flex justify-center font-semibold">
                  <button
                    className="text-black group border-4 lg:px-22 py-4 my-3 flex items-center 
                  border-black hover:bg-[#F18B24] rounded-3xl"
                  >
                    <Link to="/ProjectPage">Subscribe</Link>
                  </button>
                </div>

                <div className="mt-6 lg:text-2xl">
                  <div className="lg:text-3xl font-medium ">Previledge:</div>
                  <div className="lg:text-2xl ml-4">
                    Custom a product and delivery date as you wish and reduce more pollution with us.
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
