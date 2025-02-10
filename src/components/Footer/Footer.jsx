import { footer } from "framer-motion/client";
import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <div
      className="bg-background font-poppins flex flex-col justify-center items-center px-4 bg-bottom text-white"
      //   style={{ backgroundImage: "url('/images/old/background-1.png')" }}
    >
      <div className="w-full max-w-screen-2xl px-4 md:px-8 overflow-hidden grid grid-cols-1 md:grid-cols-4 gap-8 py-12 md:py-20">
        <div className="flex flex-col gap-3 md:gap-4">
          <h1 className="text-xl md:text-2xl font-bold flex items-center gap-3">
            <span>
              <img src="/images/logo.png" alt="logo" className="w-6 h-6" />
            </span>
            reigne.
          </h1>

          <p className="text-zinc-400 text-sm md:text-base">
            Crafting websites, videos, and designs with passion and creativity.
            Let’s build something amazing together!
          </p>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          <p className="text-base md:text-lg font-semibold">Pages</p>

          <p className="text-zinc-400 text-sm md:text-base">Home</p>
          <p className="text-zinc-400 text-sm md:text-base">Contact</p>
          <p className="text-zinc-400 text-sm md:text-base">404</p>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          <p className="text-base md:text-lg font-semibold">Contact Me</p>

          <p className="text-zinc-400 text-sm md:text-base">elijareigne@gmail.com</p>
          <p className="text-zinc-400 text-sm md:text-base">(63+) 921 9201 772</p>
          <p className="text-zinc-400 text-sm md:text-base">
            1234 St. California, USA Cityvillem State, 1234
          </p>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          <p className="text-base md:text-lg font-semibold">Follow Me</p>

          <div className="flex gap-4 justify-start md:justify-center">
            <FaFacebookF className="text-xl text-white" />
            <RiInstagramFill className="text-xl text-white" />
            <FaTwitter className="text-xl text-white" />
            <IoLogoGithub className="text-xl text-white" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-2xl px-4 md:px-8 overflow-hidden flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/30 py-6 md:py-8">
        <p className="text-center text-zinc-400 text-sm md:text-base">
          &copy; 2025 Reigne. All rights reserved.
        </p>

        <p className="text-sm md:text-base text-center md:text-left">
          Designed by <span className="font-bold">Reigne</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
