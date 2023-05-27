import React, { useState } from "react";
import BG_WaifuKitsune from "../assets/BG_WaifuKitsune.jfif";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Perform login authentication here
    axios.post("http://localhost:3000/auth/login", {
      username,
      password
    }, {  
      withCredentials: true
    }).then( ({ data }) => {
      navigate('/Admin'); 
      console.log(data);
    });
    console.log("Username:", username);
    console.log("Password:", password);
  };
  
  if (document.cookie.includes("token")) {
    location.href = "/admin"
  }

  return (
    <div
      className="flex justify-end h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BG_WaifuKitsune})` }}
    >
      {/* Login */}
      <div className="w-1/3 px-16 flex flex-col justify-center h-full bg-white">
        <div className="">
          <h2 className="text-5xl font-bold mb-6 text-[#7E38B7]">Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block font-medium mb-1 text-3xl">
                Username <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter username"
                className="border border-gray-300 rounded px-3 py-2 w-full text-2xl"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block font-medium mb-1 text-3xl">
                Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter password"
                className="border border-gray-300 rounded px-3 py-2 w-full text-2xl"
              />
            </div>
            <button
              type="submit"
              className="bg-[#7E38B7] text-white py-2 px-6 rounded-lg hover:bg-orange-400 text-2xl"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;