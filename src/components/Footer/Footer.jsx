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
      <div className="w-full max-w-screen-2xl px-4 md:px-8 overflow-hidden flex justify-between gap-8 py-20">
        <div className="flex flex-col gap-4 w-[30rem]">
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <span>
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-6 h-6"
              />
            </span>
            reigne.
          </h1>

          <p className="text-zinc-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-[10rem]">
          <p className="text-lg font-semibold">Pages</p>

          <p className="text-zinc-400">Home</p>
          <p className="text-zinc-400">Contact</p>
          <p className="text-zinc-400">404</p>
        </div>

        <div className="flex flex-col gap-4 w-[20rem]">
          <p className="text-lg font-semibold">Contact Me</p>

          <p className="text-zinc-400">elijareigne@gmail.com</p>
          <p className="text-zinc-400">(63+) 921 9201 772</p>
          <p className="text-zinc-400">
            1234 St. California, USA Cityvillem State, 1234
          </p>
        </div>

        <div className="flex flex-col gap-4 w-[15rem]">
          <p className="text-lg font-semibold">Follow Me</p>

          <p className="text-zinc-400">Lorem ipsum dolor sit amet.</p>

          <div className="flex gap-4">
            <FaFacebookF className="text-xl text-white" />
            <RiInstagramFill className="text-xl text-white" />
            <FaTwitter className="text-xl text-white" />
            <IoLogoGithub className="text-xl text-white" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-2xl px-4 md:px-8 overflow-hidden flex justify-between gap-8 border-t border-white/30 py-8">
        <p className="text-center text-zinc-400">
          &copy; 2025 Reigne. All rights reserved.
        </p>

        <p>Designed by <span className="font-bold">Reigne</span></p>
      </div>
    </div>
  );
};

export default Footer;
