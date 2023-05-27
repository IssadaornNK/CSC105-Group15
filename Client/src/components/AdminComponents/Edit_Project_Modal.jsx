import React from "react";

const Edit_Project_Modal = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-[black] bg-opacity-25 backdrop-blur-sm 
    flex justify-center items-center"
    >
      <div className="w-[700px] flex flex-col">
        <div className="bg-white p-4 rounded-2xl px-10 py-8">
          <h1 className="text-7xl font-semibold text-[#7E38B7]">
            Update Project
          </h1>
          <div className="flex justify-center">
            <hr className="mt-2 h-1.5 bg-[#7E38B7] border-none w-full" />
          </div>
          <div className="pb-2 mt-5">
            <form action="" className="flex flex-col">
              <div className="flex flex-row">
                <div className="mb-3 mr-20">
                  <label
                    htmlFor="Project_Name"
                    className="block text-black text-3xl font-bold mb-2"
                  >
                    Project Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="text-2xl w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter name"
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="Project_Tag"
                    className="block text-black text-3xl font-bold mb-2"
                  >
                    Tag <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="text-2xl w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter Tag"
                  />
                </div>
              </div>

              <div className="flex flex-row">
                <div className="mb-3 mr-20">
                  <label
                    htmlFor="Project_Language"
                    className="block text-black text-3xl font-bold mb-2"
                  >
                    Language
                  </label>
                  <input
                    type="text"
                    className="text-2xl w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter Language"
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="Project_Framework"
                    className="block text-black text-3xl font-bold mb-2"
                  >
                    Library/Framework
                  </label>
                  <input
                    type="text"
                    className="text-2xl w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter Library/Framework"
                  />
                </div>
              </div>

              <div className="flex flex-row">
                <div className="mb-3 mr-20">
                  <label
                    htmlFor="Project_Demo"
                    className="block text-black text-3xl font-bold mb-2"
                  >
                    Demo (Web Link)
                  </label>
                  <input
                    type="text"
                    className="text-2xl w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter Demo (Web Link)"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="Project_Github_Lnik"
                    className="block text-black text-3xl font-bold mb-2"
                  >
                    Github Lnik
                  </label>
                  <input
                    type="text"
                    className="text-2xl w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter Github Lnik"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="Project_Description"
                  className="block text-black text-3xl font-bold mb-2"
                >
                  Description
                </label>
                <input
                  type="text"
                  className="text-2xl w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Description about Project"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="Picture"
                  className="block text-black text-3xl font-bold mb-2"
                >
                  Upload Picture
                </label>
                <input
                  type="text"
                  className="text-2xl w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Picture"
                />
              </div>

              <button className="text-xl bg-[#7E38B7] hover:bg-orange-400 text-white font-bold py-2 px-4 rounded mt-2">
                Update Project
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit_Project_Modal;
