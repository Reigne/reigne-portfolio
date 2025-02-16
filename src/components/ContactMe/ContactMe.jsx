import { Button, Input, Textarea } from "@heroui/react";
import React from "react";

const ContactMe = () => {
  return (
    <div
      className="font-poppins flex justify-center items-center px-4 bg-background bg-center"
      style={{ backgroundImage: "url('/images/gradient.png')" }}
    >
      <div className="w-full min-h-[924px] max-w-screen-2xl  overflow-hidden flex items-center justify-center gap-8 py-24 text-white">
        <div className="flex flex-col items-center gap-4 w-full" id="contact">
          <p className="text-5xl font-bold text-center">
            Get in <span className="text-primary">touch</span>
          </p>
          <p className="text-zinc-300 text-center">
            I’d love to hear from you! Fill out the form, and I’ll be in touch.
          </p>

          <div className="bg-white/5 rounded-2xl w-full max-w-[36rem] flex flex-col items-center gap-4 p-4 text-black">
            <div className="flex flex-col md:flex-row gap-4 w-full">
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
