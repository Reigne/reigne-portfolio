import React from "react";
import { FaLink } from "react-icons/fa6";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { Link } from "react-router-dom";
import Aurora from "../Backgrounds/Aurora";

const Hero = () => {
  return (
    <div
      className="w-full flex justify-center bg-background text-white font-poppins overflow-hidden relative px-4 pt-24 md:pt-14"
      id="home"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Aurora />
      </div>

      <img
        src="/images/bottom-shadow.png"
        alt="Bottom Blur"
        className="absolute z-20 bottom-0 w-full h-auto"
        draggable="false"
        onClick={(e) => e.preventDefault()}
      />

      {/* <img
        src="/images/gradient.png"
        alt="Gradient"
        className="absolute z-20 bottom-0 w-full h-auto"
        draggable="false"
        onClick={(e) => e.preventDefault()}
      /> */}

      <div className="w-full max-w-screen-2xl flex flex-col-reverse md:flex-row justify-center gap-4 md:gap-8 px-0 md:px-8 pt-8 md:pt-4">
        <div className="relative h-auto w-full md:w-1/2 pt-[101px] z-10">
          <div className="relative">
            <ScrollParallax
              enableOnTouchDevice
              isAbsolutelyPositioned
              strength={0.5}
            >
              <img
                src="/images/gradient-container-2.png"
                alt="Reigne"
                className="absolute z-10 w-full -bottom-[200px] md:-bottom-[100px] lg:-bottom-[200px]"
                draggable="false"
                onClick={(e) => e.preventDefault()}
              />
            </ScrollParallax>

            <img
              className="absolute z-20 bottom-0 left-[50px] md:left-[40px] lg:left-[60px] xl:left-[80px] mix-blend-hard-light w-[20%] h-auto"
              src="/images/photoshop-toolbar.png"
              alt="Container"
              draggable="false"
              // width="133px"
              onClick={(e) => e.preventDefault()}
            />

            <img
              src="/images/reigne.png"
              alt="Reigne"
              className="relative z-20 w-full"
              draggable="false"
              onClick={(e) => e.preventDefault()}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-start sw-full md:w-1/2 relative z-40">
          <div className="flex flex-col w-full gap-2">
            <p className="text-4xl sm:text-2xl md:text-xl lg:text-4xl">
              Hello, there
            </p>

            <p className="text-5xl sm:text-6xl md:text-3xl lg:text-6xl xl:text-7xl font-bold">
              I am <span className="text-primary">Reigne</span>
            </p>

            {/* Description */}
            <span className="text-sm md:text-base">
              I’m a freelance fullstack developer, video editor, and graphic
              designer from the Philippines. I create websites and designs that
              look great and work well. I’m always learning new things to
              improve and help businesses grow.
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-start items-center gap-4 sm:gap-8 mt-4 sm:mt-6 md:mt-8 w-full">
            <Link
              to="/contact"
              className="min-w-[10rem] md:w-auto w-full bg-primary text-black px-6 sm:px-8 md:px-12 py-2 sm:py-3 rounded-full hover:bg-primary-dark hover:scale-105 transform transition duration-300 text-base sm:text-base md:text-sm lg:text-base shadow-lg shadow-primary/50 "
            >
              Hire Me
            </Link>
            <a
              href="https://www.linkedin.com/in/elijareigne/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex justify-center items-center gap-2 sm:gap-4 hover:scale-105 transform transition duration-300 text-base sm:text-base md:text-sm lg:text-base"
            >
              <FaLink />
              linkedin.com/in/elijareigne
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
