import React from 'react'
import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import ReactImg from '../../assets/react.png';
import NodeJS from '../../assets/node.png';
import MariaDB from '../../assets/MariaDB.png';
import GitHub from '../../assets/GitHub_Mark.png';
import Tailwind from '../../assets/tailwind.png';
import Figma from '../../assets/Figma.png';
import JLPT_N5 from '../../assets/JLPT_N5.png'

function A_Skill() {
  return (
    <div name='skills' className='w-full h-screen bg-[#000] text-white text-2xl'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <h1 className='text-6xl font-bold inline border-b-4 border-[#7E38B7] '>Skills</h1>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-x-32 gap-y-16 text-center py-8 mt-6'>
              <div className='shadow-md shadow-orange-500 bg-[#fff] hover:scale-110 duration-500 rounded-2xl w-60'>
                  <img className='w-20 mx-auto mt-4' src={HTML} alt="HTML icon" />
                  <p className='my-4 text-black font-bold'>HTML</p>
              </div>
              <div className='shadow-md shadow-blue-500 bg-[#fff] hover:scale-110 duration-500 rounded-2xl w-60'>
                  <img className='w-20 mx-auto mt-4' src={CSS} alt="CSS icon" />
                  <p className='my-4 text-black font-bold'>CSS</p>
              </div>
              <div className='shadow-md shadow-yellow-200 bg-[#fff] hover:scale-110 duration-500 rounded-2xl w-60'>
                  <img className='w-20 mx-auto mt-4' src={JavaScript} alt="JS icon" />
                  <p className='my-4 text-black font-bold'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-blue-400 bg-[#fff] hover:scale-110 duration-500 rounded-2xl w-60'>
                  <img className='w-20 mx-auto mt-4' src={ReactImg} alt="React icon" />
                  <p className='my-4 text-black font-bold'>React</p> 
              </div>
              <div className='shadow-md shadow-gray-400 bg-[#fff] hover:scale-110 duration-500 rounded-2xl w-60'>
                  <img className='w-20 mx-auto mt-4' src={GitHub} alt="GitHub icon" />
                  <p className='my-4 text-black font-bold'>GitHub</p>
              </div>
              <div className='shadow-md shadow-green-500 bg-[#fff] hover:scale-110 duration-500 rounded-2xl w-60'>
                  <img className='w-20 mx-auto mt-4' src={NodeJS} alt="NodeJS icon" />
                  <p className='my-4 text-black font-bold'>NodeJS</p>
              </div>
              <div className='flex flex-col justify-between shadow-md shadow-gray-400 bg-[#fff] hover:scale-110 duration-500 rounded-2xl w-60'>
                  <img className='w-20 mx-auto mt-6' src={MariaDB} alt="MariaDB icon" />
                  <p className='my-4 text-black font-bold'>MariaDB</p>
              </div>
              <div className='shadow-md shadow-sky-400 bg-[#fff] hover:scale-110 duration-500 rounded-2xl w-60'>
                  <img className='w-20 mx-auto mt-4' src={Tailwind} alt="Tailwind icon" />
                  <p className='my-4 text-black font-bold'>Tailwind CSS</p>
              </div>
              <div className='shadow-md shadow-orange-300 bg-[#fff] hover:scale-110 duration-500 rounded-2xl w-60'>
                  <img className='w-20 mx-auto mt-4' src={Figma} alt="Figma icon" />
                  <p className='my-4 text-black font-bold'>Figma</p>
              </div>
              <div className='shadow-md shadow-red-600 bg-[#fff] hover:scale-110 duration-500 rounded-2xl w-60'>
                  <img className='w-20 mx-auto mt-4' src={JLPT_N5} alt="Figma icon" />
                  <p className='my-4 text-black font-bold'>JLPT N5</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default A_Skill;