import React from "react";
import MarketFishH from "../../assets/MarketFishH.jpg";

const About = () => {
  return (
    <div name="about" className="h-screen bg-[#fff] text-black">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="md:px-40 md:mt-[150px] mt-[450px] mx-[20px]">
          <div className="flex justify-center">
            <img src={MarketFishH} alt="Profile Picture" className="w-[600px] mt-[80px]"/>
          </div>
          <div className="md:text-4xl text-2xl mb-[80px]">
            <div className="pb-8 mt-16">
              <p className=" md:text-4xl text-3xl font-bold inline border-b-4 border-[#333198]">
                About us
              </p>
            </div>
            <p className=" md:text-4xl text-2xl">
            
            Welcome to FishHub! We offer a variety of authentic processed fish products like canned fish, fish oil, fish collagen, 
            and fish sauce. Our goal is to provide high-quality products at budget-friendly prices, while delivering excellent customer service. 
            We stay updated with the latest trends in the fish industry and prioritize our customers' satisfaction. With a focus on reducing overfishing waste, 
            we aim to make our products more beneficial for everyone. Join us in our mission to promote sustainable fishing practices.

            </p>

          </div>
        </div>
      </div>
    </div>

  );
};

export default About;
