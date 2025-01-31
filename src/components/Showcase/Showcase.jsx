import React from "react";
import { CLIENTS_LOGO, SKILLS } from "../../constants";
import "./Showcase.css"; // Import the CSS file for animations

const Showcase = () => {
  return (
    <div className="w-full flex justify-center bg-transparent font-poppins overflow-hidden z-50">
      <div className="w-full max-w-screen-2xl px-4 md:px-8 py-6 flex justify-between items-center gap-12">
        <div className="min-w-fit">
          <p className="font-semibold tracking-wider text-md">MY SKILLS</p>
        </div>

        <div className="marquee">
          <div className="marquee-content">
            {SKILLS.concat(SKILLS).map((client, index) => (
              <img
                key={index}
                className="inline-block mr-28 mix-blend-luminosity opacity-60"
                src={client.imageUrl}
                alt={client.name}
                width={60}
                //   onDragStart={preventImageDrag}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
