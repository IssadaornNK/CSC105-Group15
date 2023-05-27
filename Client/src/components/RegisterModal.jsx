import React, { useState } from "react";

const RegisterModal = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;


  const [User_Name, setUser_Name] = useState("");
  const [User_Email, setUser_Email] = useState("");
  const [User_Password, setUser_Password] = useState("");
  
  const addUser = (event) => {
    
    event.preventDefault(); 
    axios
      .post("http://localhost:3000/Create_User", {
        User_Name: User_Name,
        User_Email: User_Email,
        User_Password: User_Password,
      }).then(() => {
        event.target.reset();
        
      }).finally(() => {
      navigate("/Admin", {
        replace: true,
      }); 
      }); 
  };

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-[black] bg-opacity-25 backdrop-blur-sm 
    flex justify-center items-center"
    >
      <div className="w-[600px] flex flex-col">
        <div className="bg-white p-4 rounded-2xl px-5">
          <h1 className="text-7xl font-semibold text-[#7E38B7]">Register</h1>
          <div className="flex justify-center">
            <hr className="mt-2 h-1.5 bg-[#7E38B7] border-none w-full" />
          </div>

          <form onSubmit={addUser} className="flex flex-col my-4">
            <div className="flex flex-row">
              <div className="mb-3 mr-20">
                <label
                  htmlFor="User_Name"
                  className="block text-black text-3xl font-bold mb-2"
                >
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="text-2xl w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter name"
                  onChange={(event) => {
                    setUser_Name(event.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="User_Email"
                  className="block text-black text-3xl font-bold mb-2"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="text-2xl w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter email"
                  onChange={(event) => {
                    setUser_Email(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="mb-3">
              <label
                htmlFor="User_password"
                className="block text-black text-3xl font-bold mb-2"
              >
                Password <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="text-2xl w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter password"
                onChange={(event) => {
                    setUser_Password(event.target.value);
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
    </div>
  );
};

export default RegisterModal;
