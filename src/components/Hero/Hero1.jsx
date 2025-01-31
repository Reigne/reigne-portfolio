import React from "react";
import { FaLink } from "react-icons/fa6";
import { MouseParallax } from "react-just-parallax";

const Hero1 = () => {
  return (
    <div
      className="bg-cover bg-bottom bg-background text-white font-poppins flex justify-center items-center overflow-hidden min-h-screen"
      style={{ backgroundImage: "url('/images/background-9.png')" }}
    >
      <div className="w-full max-w-screen-2xl px-4 sm:px-8 md:px-12  py-12 md:py-24 font-poppins overflow-hidden flex flex-col-reverse lg:flex-row justify-center items-center gap-8">
        {/* Image Section */}
        <div className="relative flex justify-center items-center w-full lg:w-1/2">
          <div className="w-full">
            <img
              src="/images/rectangle.png"
              alt="rectangle"
              width="92%"
              className="absolute bottom-0 left-0 "
            />

            <MouseParallax
              enableOnTouchDevice
              isAbsolutelyPositioned
              strength={0.04}
            >
              <img
                src="/images/photoshop-toolbar.png"
                alt="rectangle"
                width="12%"
                className="absolute z-10 ml-20 bottom-10"
              />
            </MouseParallax>

            <img
              src="/images/reigne.png"
              alt="reigne"
              width="75%"
              className="relative z-0 ml-12 sm:ml-20"
            />

            <MouseParallax
              enableOnTouchDevice
              isAbsolutelyPositioned
              strength={0.04}
            >
              <img
                src="/images/codeblock.png"
                alt="rectangle"
                width="55%"
                className="absolute z-30 left-[20rem] -bottom-14"
              />
            </MouseParallax>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center items-start w-full lg:w-1/2 p-4 md:p-0">
          {/* Heading */}
          <p className="text-3xl sm:text-4xl text-[50px] leading-[50px] lg:leading-[70px]">
            Hello, there <br />
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[100px] font-bold">
              I am <span className="text-primary">Reigne</span>
            </span>
          </p>

          {/* Description */}
          <span className="text-base sm:text-lg pt-4 sm:pt-6 md:pt-8">
            A passionate web developer and designer based in the Philippines. I
            love to create beautiful and functional websites that help
            businesses grow. I am always eager to learn new technologies and
            improve my skills.
          </span>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-8 mt-6 sm:mt-8 md:mt-12 w-full">
            <button className="w-full sm:w-auto bg-primary text-black px-6 sm:px-8 md:px-12 py-2 sm:py-3 rounded-full hover:bg-primary-dark hover:scale-105 transform transition duration-300 text-sm sm:text-base md:text-lg">
              Download Resume
            </button>
            <button className="w-full sm:w-auto flex justify-center items-center gap-2 sm:gap-4 hover:scale-105 transform transition duration-300 text-sm sm:text-base md:text-lg">
              <FaLink />
              linkedin.com/ph/elijareigne-monterona
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
