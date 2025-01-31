import React from "react";
import { FaLink } from "react-icons/fa6";
import { MouseParallax, ScrollParallax } from "react-just-parallax";

const Hero = () => {
  return (
    <div
      className="w-full flex justify-center bg-background text-white font-poppins overflow-hidden relative "
      id="about"
    >
      {/* <img
        src="/images/gradient.png"
        alt="Gradient"
        className="absolute z-40 bottom-0 w-full h-auto"
        draggable="false"
        onClick={(e) => e.preventDefault()}
      /> */}
      <img
        src="/images/bottom-blur.png"
        alt="Bottom Blur"
        className="absolute z-30 bottom-0 w-full h-auto"
        draggable="false"
        onClick={(e) => e.preventDefault()}
      />

      <img
        className="absolute z-20 bottom-8 left-[160px] mix-blend-hard-light"
        src="/images/toolbar.png"
        alt="Container"
        draggable="false"
        onClick={(e) => e.preventDefault()}
      />

      <img
        src="/images/reigne.png"
        alt="Reigne"
        className="absolute z-20 bottom-0 left-[100px] h-auto"
        draggable="false"
        onClick={(e) => e.preventDefault()}
      />

      <ScrollParallax enableOnTouchDevice isAbsolutelyPositioned strength={0.5}>
        <img
          src="/images/container.png"
          alt="Container"
          className="absolute z-10 bottom-8 left-[70px]"
          draggable="false"
          onClick={(e) => e.preventDefault()}
        />
      </ScrollParallax>

      <div className="w-full max-w-screen-2xl min-h-[1000px] px-4 md:px-8 overflow-hidden flex justify-center gap-8 py-8 relative z-50">
        <div className="w-full lg:w-1/2"></div>

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
            <button className="w-full sm:w-auto bg-primary text-black px-6 sm:px-8 md:px-12 py-2 sm:py-3 rounded-full hover:bg-primary-dark hover:scale-105 transform transition duration-300 text-sm sm:text-base md:text-lg shadow-lg shadow-primary/50">
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

export default Hero;
