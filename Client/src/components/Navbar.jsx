import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/LogoKitsuNe_P.png";
import { Link } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);

  function logout() {
    document.cookie = "token=;max-age=0";
    location.href = "/";
  }

  const [hasCookie, setHasCookie] = useState(false);

  useEffect(() => {
    const cookieExists = document.cookie.indexOf("token=") !== -1;
    setHasCookie(cookieExists);
  }, []);

  return (
    <div className="fixed w-full h-[100px] flex top-0 justify-between items-center px-8 bg-[#fff] text-black font-bold shadow-md shadow-gray-400">
      <div>
        <Link to="/">
          <h1 className="text-5xl text-[#333198] hover:text-[#F18B24]">
            FishHub
          </h1>
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex text-2xl items-center ">
        <li className="hover:text-[#F18B24] px-5">
          <Link to="/">Home</Link>
        </li>

        <li className="hover:text-[#F18B24] px-5">
          <Link to="/ShopPage">Shop</Link>
        </li>

        <li className="px-5">
          {hasCookie ? (
            <ProfileIcon />
          ) : (
            <Link className="hover:text-[#F18B24]" to="/Login">
              Login
            </Link>
          )}
        </li>
      </ul>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 hover:text-orange-400"
      >
        {!nav ? <FaBars size={"25px"} /> : <FaTimes size={"25px"} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "fixed top-0 left-0 w-full h-screen bg-[#fff] flex flex-col justify-center items-center origin-bottom duration-500 transform translate-y-0 opacity-100"
        }
      >
        <li className="py-6 text-4xl hover:text-[#F18B24]">
          <Link onClick={handleClick} to="/">
            Home
          </Link>
        </li>

        <li className="py-6 text-4xl hover:text-[#F18B24]">
          <Link onClick={handleClick} to="/ShopPage">
            Shop
          </Link>
        </li>

        <li className=" py-6">
          {hasCookie ? (
            <Link
              className="hover:text-[#F18B24] py-6 text-4xl"
              to="/ProfilePage"
            >
              Profile
            </Link>
          ) : (
            <Link className="hover:text-[#F18B24] py-6 text-4xl" to="/Login">
              Login
            </Link>
          )}
        </li>

        <li className="py-6">
          {hasCookie ? (
            <div className="text-4xl text-[#FF0000] hover:text-[#B90E0A]">
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            ""
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
