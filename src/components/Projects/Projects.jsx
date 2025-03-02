import React, { useState, useEffect } from "react";
import { PROJECTS, GRAPHICSDESIGNS, VIDEOEDITING } from "../../constants";
import "./Projects.css";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("websites");
  const [activeCategory, setActiveCategory] = useState("All");

  const tabs = [
    { id: "websites", label: "Website and Web Apps" },
    { id: "graphics", label: "Graphic Design" },
    { id: "videos", label: "Video Editing" },
  ];

  const categories = ["All", "Thumbnails", "Chandra", "Kind Ocean"];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setActiveCategory("All"); // Reset category when switching tabs
  };

  return (
    <div
      className="font-poppins flex justify-center items-center px-2"
      id="projects"
    >
      <div className="w-full max-w-screen-2xl min-h-[924px] overflow-hidden flex justify-center gap-8 py-24 px-0 md:px-8">
        <div className="flex flex-col w-full ">
          <div className="text-center space-y-2 md:space-y-4">
            <p className="text-base md:text-xl font-semibold">My Projects</p>
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold">
              Bringing <span className="text-primary">Ideas</span> to Life
            </p>
            <p className="text-zinc-600">
              Take a look at some of the work I've done. Each project showcases
              my skills in web development, graphic design, and more.
            </p>
          </div>

          <div className="flex justify-center items-center space-x-2 md:space-x-4 mt-8">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`py-2 px-4 w-fit rounded-lg cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-primary text-white"
                    : "bg-zinc-200 hover:bg-primary transition"
                }`}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.label}
              </div>
            ))}
          </div>

          {activeTab === "graphics" && (
            <div className="flex justify-center items-center space-x-2 md:space-x-4 mt-4">
              {categories.map((category) => (
                <div
                  key={category}
                  className={`py-2 px-4 w-fit rounded-lg cursor-pointer ${
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "bg-zinc-200 hover:bg-primary transition"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          )}

          {activeTab === "websites" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
              {PROJECTS.slice()
                .reverse()
                .map((project) => (
                  <a
                    key={project.id}
                    className="group relative w-full h-[640px] bg-white rounded-lg overflow-hidden border border-background/30 cursor-pointer transition-all"
                    href={
                      project?.websiteLink
                        ? project?.websiteLink
                        : project?.repoLink
                        ? project?.repoLink
                        : null
                    }
                     target="_blank"
  rel="noopener noreferrer"
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
                  </a>
                ))}
            </div>
          )}

          {activeTab === "graphics" && (
            <div className="columns-1 sm:columns-2 lg:columns-3 mt-8">
              {GRAPHICSDESIGNS.filter(
                (category) =>
                  activeCategory === "All" ||
                  category.category === activeCategory
              )
                .flatMap((category) => category.items)
                .map((project) => (
                  <div key={project.id} className="mb-4 break-inside-avoid">
                    <img
                      className="w-full object-cover rounded-lg"
                      src={project.imageUrl}
                      alt={project.name}
                    />
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
