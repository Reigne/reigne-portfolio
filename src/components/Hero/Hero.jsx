import React from "react";
import { MouseParallax } from "react-just-parallax";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-bottom bg-background text-white font-poppins flex justify-center items-center"
      style={{ backgroundImage: "url('/images/background-1.png')" }}
    >
      <div className="w-full max-w-[120rem] h-[924px] px-[12rem] font-poppins overflow-hidden flex flex-row justify-center items-center gap-12">
        <div className="relative flex justify-center items-center p-4 md:p-0   w-full">
          <div className="relative w-full">
            <img
              src="/images/rectangle.png"
              alt="rectangle"
              className="absolute bottom-0 left-0"
            />

            <MouseParallax
              enableOnTouchDevice
              isAbsolutelyPositioned
              strength={0.01}
            >
              <img
                src="/images/photoshop-toolbar.png"
                alt="rectangle"
                className="absolute z-10 ml-16 bottom-10"
              />
            </MouseParallax>

            <img
              src="/images/reigne.png"
              alt="reigne"
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
                className="absolute z-30 left-96 -bottom-16"
              />
            </MouseParallax>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center p-4 md:p-0 ">
          <h1 className="text-4xl font-bold text-center">
            I'm <span className="text-primary">John Doe</span>
          </h1>
          <p className="text-center">
            I'm a full-stack developer with a passion for building beautiful and
            functional websites.
          </p>
          <button className="bg-primary rounded-full px-8 py-2 text-black">
            Hire Me
          </button>
          <button className="bg-transparent border border-white rounded-full px-8 py-2 text-white">
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
