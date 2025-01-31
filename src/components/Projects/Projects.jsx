import React from "react";

const Projects = () => {
  return (
    <div className="font-poppins flex justify-center items-center px-4">
      <div className="w-full max-w-screen-2xl min-h-[924px] px-4 md:px-8 overflow-hidden flex justify-center gap-8 py-8 ">
        <div className="flex flex-col w-full ">
          <div className="text-center space-y-2 md:space-y-4">
            <p className="text-base md:text-lg font-semibold">My Projects</p>

            <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
              The <span className="text-primary">Services</span> We Offer
            </p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* 4 cols container size width 475 x height 556 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <div className="group relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[640px] bg-white rounded-lg overflow-hidden border border-background/10 cursor-pointer transition-all">
              <img
                src="/images/projects/project-1.jpeg"
                alt="project"
                className="w-full h-full rounded-t-lg object-cover lg:object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-bold tracking-wide">
                  View Project
                </span>
              </div>
            </div>

            <div className="group relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[640px] bg-white rounded-lg overflow-hidden border border-background/10 cursor-pointer transition-all">
              <img
                src="/images/projects/project-2.jpeg"
                alt="project"
                className="w-full h-full rounded-t-lg object-cover  lg:object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-bold tracking-wide">
                  View Project
                </span>
              </div>
            </div>

            <div className="group relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[640px] bg-white rounded-lg overflow-hidden border border-background/10 cursor-pointer transition-all">
              <img
                src="/images/projects/project-3.jpeg"
                alt="project"
                className="w-full h-full rounded-t-lg object-cover  lg:object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-bold tracking-wide">
                  View Project
                </span>
              </div>
            </div>

            <div className="group relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[640px] bg-white rounded-lg overflow-hidden border border-background/10 cursor-pointer transition-all">
              <img
                src="/images/projects/project-4.png"
                alt="project"
                className="w-full h-full rounded-t-lg object-cover  lg:object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-bold tracking-wide">
                  View Project
                </span>
              </div>
            </div>

            <div className="group relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[640px] bg-white rounded-lg overflow-hidden border border-background/10 cursor-pointer transition-all">
              <img
                src="/images/projects/project-4.jpeg"
                alt="project"
                className="w-full h-full rounded-t-lg object-cover  lg:object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-bold tracking-wide">
                  View Project
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
