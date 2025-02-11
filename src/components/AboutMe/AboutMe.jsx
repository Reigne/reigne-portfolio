import { Slider } from "@heroui/react";
import React from "react";

const AboutMe = () => {
  return (
    <div className="font-poppins flex justify-center items-center bg-white px-2 sm:px-4">
      <div
        className="w-full max-w-screen-2xl overflow-hidden flex flex-col md:flex-row justify-center gap-6 md:gap-16 py-8 md:py-24 px-4 md:px-8 items-center"
        id="about"
      >
        <div className="w-full md:w-2/5 max-w-[400px] md:max-w-none mx-auto md:mx-0">
          <img
            src="/images/reigne-circle.png"
            alt="About Me"
            className="w-full h-auto scale-90 md:scale-100"
          />
        </div>

        <div className="flex flex-col gap-8 w-full md:w-3/5">
          <div className="flex flex-col items-center md:items-start justify-start gap-3 md:gap-4">
            <p className="text-base md:text-lg font-semibold">About Me</p>
            <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center md:text-left leading-tight">
              Who is <span className="text-primary">Reigne</span>?
            </p>
            <p className="text-zinc-800 text-sm md:text-base lg:text-lg text-center md:text-left leading-relaxed">
              Hey there! I'm Reigne, a freelance fullstack developer, video
              editor, and graphic designer who loves combining creativity with
              technology. I’m all about building smooth web applications,
              creating videos that capture attention, and designing visuals that
              stand out. I’m passionate about bringing ideas to life and always
              aim to make each project fun, functional, and unique. Let’s create
              something awesome together!
            </p>
          </div>

          <div className="flex flex-col gap-3 md:gap-4 w-full mt-2">
            {/* <Slider
              value={92}
              label="Fullstack Development"
              renderThumb={(props) => (
                <div
                  {...props}
                  className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                >
                  <span className="transition-transform bg-gradient-to-br shadow-small from-lime-100 to-lime-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" />
                </div>
              )}
              size="sm"
              className="text-xs md:text-sm"
              classNames={{
                base: "w-full gap-2 md:gap-3",
                track: "border-s-lime-100 h-2 md:h-3",
                filler: "bg-gradient-to-r from-lime-100 to-lime-500 h-2 md:h-3",
              }}
            /> */}

            <Slider
              classNames={{
                base: "w-full gap-3",
                track: "border-s-lime-100",
                filler: "bg-gradient-to-r from-lime-100 to-lime-500",
              }}
              value={92}
              label="Backend Development"
              renderThumb={(props) => (
                <div
                  {...props}
                  className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                >
                  <span className="transition-transform bg-gradient-to-br shadow-small from-lime-100 to-lime-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" />
                </div>
              )}
              size="md"
            />

            <Slider
              classNames={{
                base: "w-full gap-3",
                track: "border-s-lime-100",
                filler: "bg-gradient-to-r from-lime-100 to-lime-500",
              }}
              value={96}
              label="Frontend Development"
              renderThumb={(props) => (
                <div
                  {...props}
                  className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                >
                  <span className="transition-transform bg-gradient-to-br shadow-small from-lime-100 to-lime-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" />
                </div>
              )}
              size="md"
            />

            <Slider
              classNames={{
                base: "w-full gap-3",
                track: "border-s-lime-100",
                filler: "bg-gradient-to-r from-lime-100 to-lime-500",
              }}
              value={94}
              label="Website Design"
              renderThumb={(props) => (
                <div
                  {...props}
                  className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                >
                  <span className="transition-transform bg-gradient-to-br shadow-small from-lime-100 to-lime-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" />
                </div>
              )}
              size="md"
            />

            <Slider
              classNames={{
                base: "w-full gap-3",
                track: "border-s-lime-100",
                filler: "bg-gradient-to-r from-lime-100 to-lime-500",
              }}
              value={98}
              label="Graphic Design"
              renderThumb={(props) => (
                <div
                  {...props}
                  className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                >
                  <span className="transition-transform bg-gradient-to-br shadow-small from-lime-100 to-lime-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" />
                </div>
              )}
              size="md"
            />

            <Slider
              classNames={{
                base: "w-full gap-3",
                track: "border-s-lime-100",
                filler: "bg-gradient-to-r from-lime-100 to-lime-500",
              }}
              value={82}
              label="Video Editing"
              renderThumb={(props) => (
                <div
                  {...props}
                  className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                >
                  <span className="transition-transform bg-gradient-to-br shadow-small from-lime-100 to-lime-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" />
                </div>
              )}
              size="md"
            />
          </div>

          <button className="w-full md:w-fit bg-primary text-black px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-primary-dark hover:scale-105 transform transition duration-300 text-md sm:text-md md:text-base shadow-md md:shadow-lg shadow-primary/30 md:shadow-primary/50 mt-2">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
