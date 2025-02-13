import React from "react";
import { FaCode } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { MdOndemandVideo } from "react-icons/md";

const Services = () => {
  return (
    <div className="font-poppins flex justify-center items-center bg-zinc-50 px-2">
      <div
        className="w-full max-w-screen-2xl overflow-hidden flex justify-center gap-8 py-24 px-0 md:px-8"
        id="services"
      >
        <div className="flex flex-col w-full">
          <div className="text-center space-y-2 md:space-y-4 max-w-4xl mx-auto">
            <p className="text-base md:text-xl font-semibold">My Services</p>

            <p className="text-2xl md:text-3xl lg:text-5xl font-bold">
              How I Can <span className="text-primary">Help</span> You
            </p>

            <p className="text-zinc-600">
              I offer a variety of services to help you achieve your goals. From
              web development to graphic design, I provide professional
              solutions to help you succeed.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-2 mt-8 md:mt-16 w-full">
            {/* Web Development Service */}
            <div
              className="bg-background text-white p-8 rounded-[3rem] transition w-full lg:w-[490px] h-[588px] bg-cover hover:shadow-2xl hover:shadow-primary"
              style={{
                backgroundImage: "url('/images/services-container-4.png')",
              }}
            >
              <div className="space-y-4">
                <div className="rounded-3xl border border-zinc-600 p-6 w-fit">
                  <FaCode className="text-4xl text-primary" />
                </div>
                <h3 className="text-2xl font-bold pt-4">Web Development</h3>
                <p className="text-gray-300">
                  Building scalable and responsive web applications to enhance
                  user experience and business growth.
                </p>
                <ul className="space-y-2 list-disc ">
                  <li className="flex items-center">
                    <FaCheck className="mr-3 text-green-500" /> Custom Website
                    Development
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 text-green-500" /> Interactive
                    UI/UX with React.js & Vite
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 text-green-500" /> Backend API
                    Development (Node.js/Express)
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 text-green-500" /> Database
                    Management & Optimization
                  </li>
                </ul>
              </div>
            </div>

            {/* Graphic Design Service */}
            <div
              className="bg-background text-white p-8 rounded-[3rem] transition w-full lg:w-[540px] h-[638px] bg-cover hover:shadow-2xl hover:shadow-primary"
              style={{
                backgroundImage: "url('/images/services-container-4.png')",
              }}
            >
              <div className="space-y-4">
                <div className="rounded-3xl border border-zinc-600 p-6 w-fit">
                  <MdModeEditOutline className="text-4xl text-primary" />
                </div>

                <h3 className="text-2xl font-bold pt-4">Graphic Design</h3>
                <p className="text-gray-300">
                  Crafting visually compelling designs that communicate your
                  brand’s identity.
                </p>
                <ul className="space-y-2 list-disc ">
                  <li className="flex items-center">
                    <FaCheck className="mr-3 text-green-500" /> Logo & Branding
                    Design
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 text-green-500" /> Website & Mobile
                    UI/UX Prototyping
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 text-green-500" /> YouTube
                    Thumbnails & Channel Art
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 text-green-500" /> Social Media Ads
                    (Facebook, Instagram, Google)
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 text-green-500" /> Facebook &
                    Instagram Posts
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 text-green-500" /> Banners &
                    Posters (Web & Print)
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 text-green-500" /> Business Cards &
                    Print Media
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 text-green-500" /> Presentation &
                    Infographic Design
                  </li>
                </ul>
              </div>
            </div>

            {/* Video Editor */}
            <div
              className="bg-background text-white p-8 rounded-[3rem] transition w-full lg:w-[490px] h-[588px] bg-cover hover:shadow-2xl hover:shadow-primary"
              style={{
                backgroundImage: "url('/images/services-container-4.png')",
              }}
            >
              <div className="space-y-4">
                <div className="rounded-3xl border border-zinc-600 p-6 w-fit">
                  <MdOndemandVideo className="text-4xl text-primary" />
                </div>
                <h3 className="text-2xl font-bold pt-4">Video Editing</h3>
                <p className="text-gray-300">
                  Delivering high-quality, engaging videos for social media,
                  marketing, and content creation.
                </p>
                <ul className="space-y-2 list-disc ">
                  <li className="flex items-center">
                    <FaCheck className="mr-3 text-green-500" /> YouTube Videos
                    (Vlogs, Tutorials, Reviews)
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 text-green-500" /> Ads &
                    Promotional Videos
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 text-green-500" /> Long-Form Video
                    Editing (Podcasts, Documentaries)
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 text-green-500" /> Short-Form
                    Content (TikTok, Shorts, Reels)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
