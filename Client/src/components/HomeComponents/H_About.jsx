import React from "react";
import ICCF from "../../assets/ICCF.PNG";

const About = () => {
  return (
    <div name="about" className="h-screen bg-[#fff] text-black">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="grid grid-cols-2 md:gap-20"></div>
        <div className="grid sm:grid-cols-2 md:gap-24 md:px-96 px-40 md:mt-6 mt-[120px]">
          <div className="flex justify-end">
            <img src={ICCF} alt="Profile Picture" />
          </div>
          <div className="md:text-4xl text-2xl">
            <div className="pb-8 mt-8">
              <p className=" md:text-4xl text-4xl font-bold inline border-b-4 border-[#333198]">
                About us
              </p>
            </div>
            <p>
            Welcome to FishHub!
            We aim to offer our customers a variety of the latest and authentic processed fish products. 
            Like canned fish, fish oil , fish collagen, fish sauce and so on.We’ve come a long way, so we 
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
