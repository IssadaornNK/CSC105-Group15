import React from "react";
import MarketFishH from "../../assets/MarketFishH.jpg";

const About = () => {
  return (
    <div name="about" className="h-screen bg-[#fff] text-black">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="md:px-40 md:mt-[150px] mt-[80px]">
          <div className="flex justify-center">
            <img src={MarketFishH} alt="Profile Picture" className="w-[600px]"/>
          </div>
          <div className="md:text-4xl text-2xl mb-[80px]">
            <div className="pb-8 mt-16">
              <p className=" md:text-4xl text-4xl font-bold inline border-b-4 border-[#333198]">
                About us
              </p>
            </div>
            <p>
            Welcome to FishHub!
            We aim to offer our customers a variety of the latest and authentic processed fish products. 
            Like canned fish, fish oil, fish collagen, fish sauce and so on.We’ve come a long way, so we 
            know exactly which direction to take when supplying you with high quality yet budget-friendly
            products. We offer all of this while providing excellent customer service and friendly support.
            We always keep an eye on the latest trends in our fish products and put our customers’ wishes first. 
            That is why we have satisfied customers all over the world, and are thrilled to be a part of 
            the processed fish industry.Also our main goal is to reach our product to our customer with a cheaper 
            rate as possible as we can. The most interesting part of our product is , anyone can buy it easily with 
            a great reduction of pollution which can help fishermen a lot. So, basically, we will work on to reduce 
            the waste of overfishing and make it more beneficial for everyone.

            </p>

          </div>
        </div>
      </div>
    </div>

  );
};

export default About;
