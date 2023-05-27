import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

function Add_AAC() {
  const [AAC_Name, setAAC_Name] = useState("");
  const [AAC_Place, setAAC_Place] = useState("");
  const [AAC_Year, setAAC_Year] = useState("");
  const [AAC_Description, setAAC_Description] = useState("");
  const [AAC_Picture, setAAC_Picture] = useState("");
  const navigate = useNavigate(); 
  
  const addAACs = (event) => {
    
    event.preventDefault(); 
    axios
      .post("http://localhost:3000/Create_AAC", {
        AAC_Name: AAC_Name,
        AAC_Place: AAC_Place,
        AAC_Year: AAC_Year,
        AAC_Description: AAC_Description,
        AAC_Picture: AAC_Picture,
      }).then(() => {
        event.target.reset();
        
      }).finally(() => {
      navigate("/login", {
        replace: true,
      }); 
      }); 
  };



  return (
    <div className="px-12 flex">
      <div className="mt-4 px-10 py-8 border-solid border-8 border-black">
        <h4 className="font-semibold text-5xl text-orange-400">Add A&A&C</h4>
        <hr className="mt-1 h-2 bg-orange-400 border-none w-full mb-5" />

        <form onSubmit={addAACs} className="flex flex-col">
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
            Add A&A&C
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add_AAC;
