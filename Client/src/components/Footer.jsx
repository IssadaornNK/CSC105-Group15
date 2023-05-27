import React from "react";
import { FaFacebookSquare, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#333198] flex text-center justify-center text-white p-[rem3]">
      <div className="">
        <h3 className="font-bold text-4xl my-8">FishHub</h3>
        

        <ul className="grid grid-cols-2 items-center mb-8">
          <li className="hover:text-[#F18B24]">
            <a href="https://www.facebook.com/xXNekoLordXx/" target="_blank" className="text-4xl"><FaFacebookSquare /></a>
          </li>
          <li className="hover:text-[#F18B24]">
            <a href="https://www.instagram.com/kitsune_ne_cs/" target="_blank" className="text-4xl"><FaInstagram /></a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
