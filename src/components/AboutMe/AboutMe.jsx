import { Slider } from "@heroui/react";
import React from "react";

const AboutMe = () => {
  return (
    <div className="font-poppins flex justify-center items-center bg-white px-2">
      <div
        className="w-full max-w-screen-2xl overflow-hidden flex justify-center gap-16 py-24 px-0 md:px-8 items-center"
        id="about"
      >
        <div className="w-2/5">
          <img
            src="/images/reigne-circle.png"
            alt="About Me"
            className="w-full h-auto"
          />
        </div>

        <div className="space-y-2 md:space-y-4 w-3/5">
          <p className="text-base md:text-xl font-semibold">About Me</p>
          <p className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Who is <span className="text-primary">Reigne</span>?
          </p>
          <p>
            Hey there! I'm Reigne, a fullstack developer, video editor, and
            graphic designer who loves combining creativity with technology. I’m
            all about building smooth web applications, creating videos that
            capture attention, and designing visuals that stand out. I’m
            passionate about bringing ideas to life and always aim to make each
            project fun, functional, and unique. Let’s create something awesome
            together!
          </p>

          <div className="flex flex-col gap-4 w-full">
            <Slider
              classNames={{
                base: "w-full gap-3",
                track: "border-s-lime-100",
                filler: "bg-gradient-to-r from-lime-100 to-lime-500",
              }}
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
              size="md"
            />

            <Slider
              classNames={{
                base: "w-full gap-3",
                track: "border-s-lime-100",
                filler: "bg-gradient-to-r from-lime-100 to-lime-500",
              }}
              value={90}
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
              value={96}
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
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
