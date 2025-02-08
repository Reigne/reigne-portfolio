import React from "react";
import { FaCode } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

const Services = () => {
  return (
    <div className="font-poppins flex justify-center items-center px-4">
      <div className="w-full max-w-screen-2xl px-4 md:px-8 overflow-hidden flex justify-center gap-8 py-24">
        <div className="flex flex-col w-full ">
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
          <div className="flex justify-center items-center gap-2 mt-8 md:mt-16 w-full">
            {/* Web Development Service */}
            <div
              className="bg-background text-white p-8 rounded-3xl transition w-[480px] h-[588px]"
              style={{
                backgroundImage: "url('/images/services-container-3.png')",
              }}
            >
              <div className="space-y-4">
                <div className="rounded-3xl border border-zinc-600 p-6 w-fit">
                  <FaCode className="text-4xl text-primary" />
                </div>
                <h3 className="text-2xl font-bold pt-4">Web Development</h3>
                <p className="text-gray-300">Full-stack web solutions</p>
                <ul className="space-y-2 list-disc ">
                  <li className="flex items-center">
                    <FaCheck className="mr-3 text-green-500" /> Responsive
                    Website Development
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 text-green-500" /> Frontend
                    (React/Next.js)
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 text-green-500" /> Backend
                    (Node.js/Express)
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 text-green-500" /> Database
                    Integration
                  </li>
                </ul>
              </div>
            </div>

            {/* Graphic Design Service */}
            <div
              className="bg-background text-white p-8 rounded-3xl transition w-[530px] h-[638px] bg-cover"
              style={{
                backgroundImage: "url('/images/services-container-3.png')",
              }}
            >
              <div className="space-y-4">
                <div className="rounded-3xl border border-zinc-600 p-6 w-fit">
                  <FaCode className="text-4xl text-primary" />
                </div>

                <h3 className="text-2xl font-bold pt-4">Graphic Design</h3>
                <p className="text-gray-300">
                  Professional visual communication solutions
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Brand Identity & Logo Design</li>
                  <li>UI/UX Design & Prototyping</li>
                  <li>Print & Digital Media Design</li>
                  <li>Marketing Material Creation</li>
                </ul>
              </div>
            </div>

            {/* Video Editor */}
            <div
              className="bg-zinc-200 p-8 rounded-3xl transition w-[480px] h-[588px] text-white"
              style={{
                backgroundImage: "url('/images/services-container-3.png')",
              }}
            >
              <div className="space-y-4">
              <div className="rounded-3xl border border-zinc-600 p-6 w-fit">
                  <FaCode className="text-4xl text-primary" />
                </div>
                <h3 className="text-2xl font-bold pt-4">Video Editing</h3>
                <p className="text-gray-300">
                  Professional video editing services
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Video Editing & Post-Production</li>
                  <li>Color Correction & Grading</li>
                  <li>Audio Editing & Mixing</li>
                  <li>Visual Effects & Motion Graphics</li>
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
