import React from "react";

const Edit_AAC_Modal = ({ visible, onClose }) => {
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
            Update A&A&C
          </h1>
          <div className="flex justify-center">
            <hr className="mt-2 h-1.5 bg-[#7E38B7] border-none w-full" />
          </div>
          <div className="pb-2 mt-5">
            <form action="" className="flex flex-col">
              <div className="flex flex-row">
                <div className="mb-3 mr-20">
                  <label
                    htmlFor="AAC_Name"
                    className="block text-black text-3xl font-bold mb-2"
                  >
                    A&A&C Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="text-2xl w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter name"
                    onChange={(event) => {
                      setAAC_Name(event.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="AAC_Place"
                    className="block text-black text-3xl font-bold mb-2"
                  >
                    Place <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="text-2xl w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter place"
                    onChange={(event) => {
                      setAAC_Place(event.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="AAC_Year"
                  className="block text-black text-3xl font-bold mb-2"
                >
                  Year
                </label>
                <input
                  type="text"
                  className="text-2xl w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter year"
                  onChange={(event) => {
                    setAAC_Year(event.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="AAC_Description"
                  className="block text-black text-3xl font-bold mb-2"
                >
                  Description
                </label>
                <input
                  type="text"
                  className="text-2xl w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Description about A&A&C"
                  onChange={(event) => {
                    setAAC_Description(event.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="AAC_Picture"
                  className="block text-black text-3xl font-bold mb-2"
                >
                  Upload Picture
                </label>
                <input
                  type="text"
                  className="text-2xl w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Picture"
                  onChange={(event) => {
                    setAAC_Picture(event.target.value);
                  }}
                />
              </div>

              <button className="text-xl bg-[#7E38B7] hover:bg-orange-400 text-white font-bold py-2 px-4 rounded mt-2">
                {/* onClick={addAACs} */}
                Update A&A&C
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit_AAC_Modal;
