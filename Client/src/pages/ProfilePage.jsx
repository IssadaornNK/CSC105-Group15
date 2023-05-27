import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import Admin_Waifu from "../assets/Admin_Waifu.jfif";
import CSS from "../assets/css.png";
import ProfileModal from "../components/ProfileModal";

function ProfilePage() {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState(null);

  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);

  const getMe = () => {
    axios.get("http://localhost:3000/me",{ withCredentials: true }).then((response) => {
        setUser(response.data[0]);
    });
  };

  useEffect(() => {
    getMe();
  }, []);

  function logout(){
    document.cookie = "token=;max-age=0";   
    location.href = "/login"
  }

  return user && (
    <div className="bg-[#fff]">
      <Navbar />

      <div className="mt-[100px] text-9xl font-bold flex flex-col justify-center text-center text-black">
        <h1 className="mt-[20px]">Profile</h1>
      </div>
      {/* ------------------------------------------------------------ */}
      <div className="mt-16 flex justify-center">
        <img
          src={Admin_Waifu}
          alt="WaifuProfile"
          width="500"
          height="600"
          style={{ borderRadius: "300px" }}
        />
      </div>

        <div
          key={user.name}
          className=""
        >
        
        <div className="mt-16 px-24">
        <h1
          className="flex text-[#60B9E1] hover:text-[#F18B24] justify-end text-5xl font-medium underline"
          onClick={() => setShowMyModal(true)}
        >
          Edit
        </h1>
        <h1 className="flex text-6xl font-semibold mt-10">
          Name: <span className="ml-8"> {user.name}</span>
        </h1>
        <h1 className="flex text-6xl font-semibold mt-8">
          Email: <span className="ml-8"> {user.email}</span>
        </h1>
        </div>
        </div>

      <div className="mt-16 px-24">
        <h1 className="flex text-6xl font-semibold mt-8">Order: </h1>
        <div className="mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="shadow-2xl shadow-[#FAD77B] bg-[#fff] hover:scale-110 duration-500 rounded-2xl text-center w-96 mt-8">
            <img className="w-20 mx-auto mt-4" src={CSS} alt="CSS icon" />
            <h1 className="my-4 mt-8 text-4xl text-black font-semibold ">
              CSS
            </h1>
          </div>
        </div>


        







        <div>
          <button className="bg-[#FF0000] hover:bg-[#B90E0A] text-white font-bold px-4 mt-16 my-8 rounded-xl"
          onClick={logout}>
            <div className="p-2 py-4 text-3xl">Logout</div>
          </button>
        </div>
      </div>
      <ProfileModal user={user} onClose={handleOnClose} visible={showMyModal} />
      <Footer />
    </div>
  );
}

export default ProfilePage;
