import React from "react";
import { BiShare } from "react-icons/bi";
import { FaLink } from "react-icons/fa6";
import { MouseParallax } from "react-just-parallax";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-bottom bg-background text-white font-poppins flex justify-center items-center"
      style={{ backgroundImage: "url('/images/background-1.png')" }}
    >
      <div className="w-full max-w-[120rem] h-[924px] px-[12rem] font-poppins overflow-hidden flex flex-row justify-center items-center">
        <div className="relative flex justify-center items-center p-4 md:p-0 w-full ">
          <div className="w-full">
            <img
              src="/images/rectangle.png"
              alt="rectangle"
              width="88%"
              className="absolute bottom-0 left-0 "
            />

            <MouseParallax
              enableOnTouchDevice
              isAbsolutelyPositioned
              strength={0.01}
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
              width="70%"
              className="relative z-0 ml-20"
            />

            <MouseParallax
              enableOnTouchDevice
              isAbsolutelyPositioned
              strength={0.01}
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

        <div className="flex flex-col justify-center  items-start p-4 md:p-0 w-[110rem] ">
          <p className="text-[80px] leading-[110px]">
            Hi, there <br />
            <span className="text-[128px] font-bold">I am Reigne</span>
          </p>

          <span className="text-xl pt-6">
            A passionate web developer and designer based in the Philippines. I
            love to create beautiful and functional websites that help
            businesses grow. I am always eager to learn new technologies and
            improve my skills.
          </span>

          {/* button */}
          <div className="flex justify-start items-center gap-8 mt-12">
            <button className="bg-primary text-black px-12 py-3 rounded-full hover:bg-primary-dark hover:scale-105 transform transition duration-300">
              Download Resume
            </button>
            <button className="flex items-center gap-4 hover:scale-105 transform transition duration-300">
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
