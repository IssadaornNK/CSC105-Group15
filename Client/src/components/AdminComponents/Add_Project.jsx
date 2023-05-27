import React from "react";

function Add_Project() {
  return (
    <div className="px-12 flex">
      <div className="mt-4 px-10 py-8 border-solid border-8 border-black">
        <h4 className="font-semibold text-5xl text-orange-400">
          Add Project
        </h4>
        <hr className="mt-1 h-2 bg-orange-400 border-none w-full mb-5" />

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
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add_Project;
