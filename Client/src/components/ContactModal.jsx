import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const ContactModal = ({ visible, onClose }) => {
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
      <div className="w-[600px] flex flex-col">
        <div className="bg-white p-4 rounded-2xl px-5">
          <h1 className="text-7xl font-semibold text-[#7E38B7]">Contact</h1>
          <div className="flex justify-center">
            <hr className="mt-2 h-1.5 bg-[#7E38B7] border-none w-full" />
          </div>
          <div className="pb-2 mt-5">

            <div className="flex mt-5 text-6xl">
              <FaEnvelope /> <span className="pl-4 pt-3 text-3xl">xXNeonKitsuneXx@gmail.com</span>
            </div>

            <div>
              <a
                href="https://www.facebook.com/xXNekoLordXx/"
                target="_blank"
                className="text-6xl flex mt-5 hover:text-orange-400"
              >
                <FaFacebookSquare /> <span className="pl-4 pt-3 text-3xl">อยากรวย แต่ ไม่อยากเรียน เน</span>
              </a>
            </div>

            <div>
              <a
                href="https://www.instagram.com/kitsune_ne_cs/"
                target="_blank"
                className="text-6xl flex mt-5 hover:text-orange-400"
              >
                <FaInstagram /> <span className="pl-4 pt-3 text-3xl">@kitsune_ne_cs</span>
              </a>
            </div>

            <div>
              <a
                href="https://github.com/xXNeonKitsuneXx"
                target="_blank"
                className="text-6xl flex mt-5 hover:text-orange-400"
              >
                <FaGithub /> <span className="pl-4 pt-3 text-3xl">xXNeonKitsuneXx</span>
              </a>
            </div>

            <div>
              <a
                href="https://www.linkedin.com/in/nithit-lertcharoensombat-722855264/"
                target="_blank"
                className="text-6xl flex mt-5 hover:text-orange-400"
              >
                <FaLinkedin /> <span className="pl-4 pt-3 text-3xl">Nithit Lertcharoensombat</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
