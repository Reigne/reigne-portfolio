import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center absolute top-0 left-0 bg-transparent text-white font-poppins">
      <div className="w-full max-w-[120rem] px-[12rem] py-6 flex justify-between items-center gap-4">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <span>
            <img src="/images/logo.png" alt="logo" className="w-6 h-6" />
          </span>
          reigne.
        </h1>

        <ul className="flex items-center gap-10">
          <li>about</li>
          <li>skills</li>
          <li>projects</li>
          <li>testimonials</li>
          <Link to="/contact">
            <li className="bg-primary rounded-full cursor-pointer px-8 py-2 text-black">
              Contact Me
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
