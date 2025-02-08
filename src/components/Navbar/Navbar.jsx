import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center absolute top-0 left-0 bg-transparent text-white font-poppins overflow-hidden z-50">
      <div className="w-full max-w-screen-2xl px-4 md:px-8 py-6 flex justify-between items-center gap-4">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <span>
            <img src="/images/logo.png" alt="logo" className="w-6 h-6" />
          </span>
          reigne.
        </h1>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden p-2 text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-14">
          <Link to="/" className="relative hover:text-primary transition duration-300 cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
            about
          </Link>
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

        {/* Fullscreen Overlay Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-50 md:hidden">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 p-2 text-white focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Menu Items */}
            <ul className="text-white text-2xl flex flex-col items-center gap-8">
              <li className="hover:text-primary transition duration-300 cursor-pointer">
                about
              </li>
              <li className="hover:text-primary transition duration-300 cursor-pointer">
                skills
              </li>
              <li className="hover:text-primary transition duration-300 cursor-pointer">
                projects
              </li>
              <li className="hover:text-primary transition duration-300 cursor-pointer">
                testimonials
              </li>
              <Link to="/contact">
                <li className="bg-primary rounded-full cursor-pointer px-8 py-2 text-black hover:bg-primary-dark hover:scale-105 transition duration-300">
                  Contact Me
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
