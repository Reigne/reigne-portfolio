import { Button } from "@heroui/react";
import React from "react";
import { Link } from "react-router-dom";

const NotFoundMessage = () => {
  return (
    <div
      className="font-poppins flex justify-center items-center px-4 bg-background bg-center"
      style={{ backgroundImage: "url('/images/gradient.png')" }}
    >
      <div className="w-full min-h-[924px] max-w-screen-2xl px-4 md:px-8 overflow-hidden flex items-center justify-center gap-8 py-24 text-white">
        <div className="flex flex-col items-center gap-2">
          <p className="text-[300px] font-extrabold leading-[280px] text-center">404</p>
          <p className="text-lg text-center">Ooops! Page Not Found</p>
          <p className="text-lg text-zinc-300 text-center">The page you're looking for isn't here—maybe it moved or never existed.</p>

          <Link to="/">
            <Button className="bg-primary mt-8" size="lg">
              Back to home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundMessage;
