import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center absolute top-0 left-0 bg-transparent text-white font-poppins overflow-hidden">
      <div className="w-full max-w-[120rem] px-[12rem] py-6 flex justify-between items-center gap-4">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <span>
            <img src="/images/logo.png" alt="logo" className="w-6 h-6" />
          </span>
          reigne.
        </h1>

        <ul className="flex items-center gap-14">
          <li className="relative hover:text-primary transition duration-300 cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
            about
          </li>
          <li className="relative hover:text-primary transition duration-300 cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
            skills
          </li>
          <li className="relative hover:text-primary transition duration-300 cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
            projects
          </li>
          <li className="relative hover:text-primary transition duration-300 cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
            testimonials
          </li>
          <Link to="/contact">
            <li className="bg-primary rounded-full cursor-pointer px-8 py-2 text-black hover:bg-primary-dark hover:scale-105 transition duration-300">
              Contact Me
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
