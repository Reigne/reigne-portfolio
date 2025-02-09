import React from "react";
import { PROJECTS } from "../../constants";

const Projects = () => {
  return (
    <div className="font-poppins flex justify-center items-center px-2">
      <div className="w-full max-w-screen-2xl min-h-[924px] overflow-hidden flex justify-center gap-8 py-24 px-0 md:px-8">
        <div className="flex flex-col w-full ">
          <div className="text-center space-y-2 md:space-y-4">
            <p className="text-base md:text-xl font-semibold">My Projects</p>

            <p className="text-2xl md:text-3xl lg:text-5xl font-bold">
              The <span className="text-primary">Services</span> We Offer
            </p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-24">
            {PROJECTS.slice()
              .reverse()
              .map((project) => (
                <div
                  key={project.id}
                  className="group relative w-full h-[640px] bg-white rounded-lg overflow-hidden border border-background/30 cursor-pointer transition-all "
                >
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-full group-hover:scale-105 transition rounded-t-lg object-cover lg:object-cover object-top"
                  />

                  <div className="absolute inset-0 bg-zinc-950 MyGradient2 transition-opacity duration-300 flex items-end justify-center">
                    <span className="text-white font-bold mb-4">
                      {project.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-zinc-950 MyGradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                    <span className="text-white font-bold mb-4">
                      {project.name}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
