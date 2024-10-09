import React from "react";

import logo from "../assets/shivam.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-24 rounded-full" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center text-3xl lg:gap-7 md:gap-2 pr-2  ">
          <a href="https://www.linkedin.com/in/shivam-rathore-039464259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedin />
          </a>

          <FaGithub />
          <FaSquareXTwitter />

          <a href="https://www.instagram.com/shiivam_rathore7777?igsh=MWJnMGRrc2xvMmkyZg==">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
