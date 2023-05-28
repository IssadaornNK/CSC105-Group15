import React from "react";
import { Link } from "react-router-dom";

import MarketFishH from "../../assets/MarketFishH.jpg";

const Skills = () => {
  return (
    <div className=" bg-[#fff] text-black ">
      <div className="flex flex-col justify-center items-center mt-[200px]">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-2 md:px-32 px-2 md:my-40">
          <div>
            <div className="pb-8">
              <p className="text-6xl font-bold inline border-b-4 border-[#333198]">
                Subscription
              </p>
            </div>
            <p className="text-3xl">
            We believe that together, we can make a significant impact on the future of our oceans. 
            Join us on this journey towards sustainable fishing practices, marine conservation, 
            and the preservation of fish stocks. Download the Overfishing App today and become part 
            of the movement to safeguard our precious marine ecosystems for generations to come.

            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#fff] rounded-3xl border-8 border-black">
              <div className="m-8 ">
                <div className="text-3xl font-bold mb-4">Start with Free Plan</div>
                <div className="text-2xl">
                  For individuals just getting started with FishHub
                </div>
              </div>
              <div className="mt-10 font-bold text-3xl m-6">Free</div>
              <div className="m-8">
                <div className="mt-6 text-2xl flex justify-center font-semibold">
                  <button
                    className="text-black group border-4  px-6 py-3 my-2 flex items-center 
                  border-black hover:bg-[#F18B24] rounded-3xl"
                  >
                    <Link to="/Login">Sign up</Link>
                  </button>
                </div>

                <div className="mt-6 text-2xl">
                  <div className="text-2xl font-medium ">Free includes:</div>
                  <div className="text-xl ml-4">
                    Choose your product on your own.
                  </div>
                </div>
              </div>
            </div>
          


            <div className="bg-[#FAD77B] rounded-3xl border-8 border-black mb-[30px]">
              <div className="m-8 ">
                <div className="text-3xl font-bold mb-4">Continously Subsciption</div>
                <div className="text-2xl">
                  Recommended for company and individuals who want us to provide our product every month
                </div>
              </div>
              <div className="mt-10 font-bold text-3xl m-6">฿99/Month</div>
              <div className="m-8">
                <div className="mt-6 text-2xl flex justify-center font-semibold">
                  <button
                    className="text-black group border-4  px-6 py-3 my-2 flex items-center 
                  border-black hover:bg-[#F18B24] rounded-3xl"
                  >
                    <Link to="/Login">Subscribe</Link>
                  </button>
                </div>

                <div className="mt-6 text-2xl">
                  <div className="text-2xl font-medium ">Previledge:</div>
                  <div className="text-xl ml-4">
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
