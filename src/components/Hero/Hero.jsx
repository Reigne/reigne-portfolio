import React from "react";
import { FaLink } from "react-icons/fa6";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="w-full flex justify-center bg-background text-white font-poppins overflow-hidden relative px-2"
      id="home"
    >
      <img
        src="/images/gradient.png"
        alt="Gradient"
        className="absolute z-40 bottom-0 w-full h-auto"
        draggable="false"
        onClick={(e) => e.preventDefault()}
      />

      <img
        src="/images/bottom-shadow.png"
        alt="Bottom Blur"
        className="absolute z-30 bottom-0 w-full h-auto"
        draggable="false"
        onClick={(e) => e.preventDefault()}
      />

      <img
        className="absolute z-20 bottom-8 left-[230px] mix-blend-hard-light"
        src="/images/photoshop-toolbar.png"
        alt="Container"
        draggable="false"
        width="133px"
        onClick={(e) => e.preventDefault()}
      />

      <img
        src="/images/reigne.png"
        alt="Reigne"
        className="absolute z-20 bottom-0 left-[180px] h-auto "
        draggable="false"
        width="732px"
        onClick={(e) => e.preventDefault()}
      />

      <ScrollParallax enableOnTouchDevice isAbsolutelyPositioned strength={0.5}>
        <img
          src="/images/gradient-container-2.png"
          alt="Container"
          className="absolute z-10 -bottom-[208px] left-[130px]"
          draggable="false"
          onClick={(e) => e.preventDefault()}
        />
      </ScrollParallax>

      <div className="w-full max-w-screen-2xl min-h-[924px] overflow-hidden flex justify-center gap-8 py-8 relative z-40 px-0 md:px-8">
        <div className="w-full lg:w-1/2"></div>

        <div className="flex flex-col justify-center items-start w-full lg:w-1/2 p-4 md:p-0">
          {/* Heading */}
          <p className="text-3xl sm:text-4xl text-[50px] leading-[50px] lg:leading-[50px] pt-8">
            Hello, there <br />
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold">
              I am <span className="text-primary">Reigne</span>
            </span>
          </p>

          {/* Description */}
          <span className=" pt-2 sm:pt-4 md:pt-6">
            I’m a freelance fullstack developer, video editor,
            and graphic designer from the Philippines. I create websites and
            designs that look great and work well. I’m always learning new
            things to improve and help businesses grow.
          </span>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-8 mt-4 sm:mt-6 md:mt-8 w-full">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-primary text-black px-6 sm:px-8 md:px-12 py-2 sm:py-3 rounded-full hover:bg-primary-dark hover:scale-105 transform transition duration-300 text-sm sm:text-base shadow-lg shadow-primary/50 "
            >
              Hire Me
            </Link>
            <button className="w-full sm:w-auto flex justify-center items-center gap-2 sm:gap-4 hover:scale-105 transform transition duration-300 text-sm sm:text-base">
              <FaLink />
              linkedin.com/ph/elijareigne-monterona
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
