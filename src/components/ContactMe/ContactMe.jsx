import { Button, Input, Textarea } from "@heroui/react";
import React from "react";

const ContactMe = () => {
  return (
    <div
      className="font-poppins flex justify-center items-center px-4 bg-background bg-center"
      style={{ backgroundImage: "url('/images/gradient.png')" }}
    >
      <div className="w-full min-h-[924px] max-w-screen-2xl px-4 md:px-8 overflow-hidden flex items-center justify-center gap-8 py-24 text-white">
        <div className="flex flex-col items-center gap-4" id="contact">
          <p className="text-5xl font-bold">
            Get in <span className="text-primary">touch</span>
          </p>
          <p className="text-zinc-300">
            Fill out the form below and we’ll get back to you ASAP.
          </p>

          <div className="bg-white/5 rounded-2xl w-[36rem] flex flex-col items-center gap-4 p-4 text-black">
            <div className="flex gap-4 w-full">
              <div className="w-full">
                <Input placeholder="Name" size="lg" />
              </div>

              <div className="w-full">
                <Input placeholder="Email" size="lg" />
              </div>
            </div>

            <Textarea
              color=""
              variant="flat"
              placeholder="Message here..."
              minRows={8}
              maxRows={12}
              size="lg"
            />

            <Button className="w-full bg-primary" size="lg">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
