import React from "react";
import Waifu from "../../assets/Waifu.jfif";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function A_Profile() {
  return (
    <div>
      <div
        className="flex mt-[30px] border-l-[800px]
         border-[#7E38B7]"
      >
        <h1 className="px-5 text-6xl font-medium text-black py-4">
          Nithit Lertcharoensombat
          {/* <span className="text-[#8D00FF]"> [Ne] </span> */}
        </h1>
      </div>

      <div
        className="flex justify-end mt-[40px] 
        border-r-[800px] border-[#7E38B7]"
      >
        <h1 className="px-5 text-6xl font-medium text-orange-400 py-4">
          Software Developer
        </h1>
      </div>

      <div className="bg-[#fff] text-black mb-[200px]">
        <div className="flex flex-col items-center h-full mt-[100px]">
          <div className="grid sm:grid-cols-2 gap-48 px-96">
            <div className="flex justify-end h-[700px] object-cover">
              <img src={Waifu} alt="Profile Picture" />
            </div>
            <div className="text-4xl">
              <p className="mt-20">
                A first-year computer science student interested in working on a
                full-stack development team. Despite the fact that I am still
                learning to become a full stack developer, I am eager to put my
                knowledge to use and obtain practical experience in the field. I
                can speak Thai, English and have a beginner's level of skill in
                Japanese (N5).
              </p>

              {/* <div className="mt-16 text-2xl">
                <button className="text-black group border-2 border-black px-6 py-3 my-2 flex items-center hover:bg-[#8D00FF]">
                  <Link to="/ProjectPage">Download Resume</Link>
                  <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className="ml-3 " />
                  </span>
                </button>
              </div> */}

              {/* For Future Update */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default A_Profile;
