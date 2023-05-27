import React, { useState } from 'react';
import Edit_Project_Modal from "./Edit_Project_Modal"

function Edit_Project() {

  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  const [showMyModal, setShowMyModal] = useState(false)
  const handleOnClose = () => setShowMyModal(false)

  return (
    <div className="px-12 flex">
      <div className="mt-4 px-5 py-4 border-solid border-8 border-black">
        <h4 className="font-semibold text-5xl text-orange-400">
          Edit Project
        </h4>
        <hr className="mt-1 h-2 bg-orange-400 border-none w-full mb-5" />

        <div className="mb-3">
          <div className="block text-black text-3xl font-bold mb-2">
            Project
          </div>
          <div className="border-2 border-black flex">
            <div className="text-black text-2xl m-3 mr-10">Lorem isqup</div>
            <div className="">
              <button className="text-xl bg-blue-600 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded m-2 ml-4"
              onClick={() => setShowMyModal(true)}
              >
                Edit
              </button>
              <button className="text-xl bg-red-600 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded m-2 mr-4">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <Edit_Project_Modal onClose={handleOnClose} visible={showMyModal}/>

    </div>
  );
}

export default Edit_Project;
