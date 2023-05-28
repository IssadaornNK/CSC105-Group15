import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import Admin_Waifu from "../assets/Admin_Waifu.jfif";
import ProfileModal from "../components/ProfileModal";
import Swal from "sweetalert2";

function ProfilePage() {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState(null);

  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);

  const getMe = () => {
    axios
      .get("http://localhost:3000/me", { withCredentials: true })
      .then((response) => {
        setUser(response.data[0]);
      });
  };

  useEffect(() => {
    getMe();
  }, []);

  function remove(id) {
    axios
      .delete(`http://localhost:3000/selfDelete?id=${id}`)
      .then(({ data }) => {
        getMe();
        Swal.fire({
          icon: "success",
          title: data,
        });
      });
  }

  function logout() {
    document.cookie = "token=;max-age=0";
    location.href = "/";
  }

  const [orderList, setOrderList] = useState([]);
  const [order, setOrder] = useState(null);

  function getCookie(key) {
    var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
  }

  const getOrder = () => {
    axios
      .get("http://localhost:3000/Order/" + getCookie("token"))
      .then((response) => {
        console.log(response.data);
        setOrderList(response.data);
      });
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    user && (
      <div className="bg-[#fff]">
        <Navbar />

        <div className="mt-[100px] md:text-9xl text-7xl font-bold flex flex-col justify-center text-center text-black">
          <h1 className="mt-[20px]">Profile</h1>
        </div>
        {/* ------------------------------------------------------------ */}
        <div className="mt-16 flex justify-center">
          <img
            src={Admin_Waifu}
            alt="WaifuProfile"
            width="400"
            height="600"
            style={{ borderRadius: "300px" }}
            className="border-8 border-black md:w-[500px]"
          />
        </div>

        <div key={user.name} className="">
          <div className="mt-16 px-14 md:px-24">
            <h1
              className="flex flex-row text-[#60B9E1] hover:text-[#F18B24] justify-end md:text-4xl text-2xl lg:text-5xl font-medium underline"
              onClick={() => setShowMyModal(true)}
            >
              Edit
            </h1>
            <h1 className="flex text-2xl md:text-4xl font-semibold mt-10">
              Name: <span className="ml-4"> {user.name}</span>
            </h1>
            <h1 className="flex text-2xl md:text-4xl font-semibold mt-8">
              Email: <span className="ml-4"> {user.email}</span>
            </h1>
          </div>
        </div>

        <div className="mt-16 px-14 md:px-24">
          <h1 className="flex text-2xl md:text-4xl font-semibold mt-4">
            Order:{" "}
          </h1>
          {/* //////////////////////////////////////////////// */}
          <div className="flex flex-row">
        <div className="md:px-4 flex flex-col">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-24 px-14 py-14">
            {orderList.map((order) => (
              <div
                key={order.name}
                className="flex hover:scale-105 duration-500 justify-center"
                onClick={() => {
                  setOrder(order)
                }}
              >
                <div className="border-8 border-black flex rounded-3xl md:w-[275px] w-[250]">
                  <div className="flex overflow-hidden border-4 object-cover border-black my-6 ml-6 rounded-3xl items-center justify-center w-[200px] h-[200px]">
                    <img
                      src={order.image}
                      alt="fox"
                      style={{ height: "100%" }}
                    />
                  </div>

                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

          <div>
            <button
              className="bg-[#FF0000] hover:bg-[#B90E0A] text-white font-bold px-4 mt-16 md:my-8 my-4 rounded-xl"
              onClick={() => {
                remove(user.id);
                logout();
              }}
            >
              <div className="p-2 py-4 text-xl md:text-3xl">Delete account</div>
            </button>
          </div>
        </div>

        <ProfileModal
          user={user}
          onClose={handleOnClose}
          visible={showMyModal}
        />
        <Footer />
      </div>
    )
  );
}

export default ProfilePage;
