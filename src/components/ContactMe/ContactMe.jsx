import React, { useState } from "react";
import { Button, Input, Textarea } from "@heroui/react";
import { toast } from "sonner";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_9hthklk",
        "template_jz44fpj",
        e.target,
        "MLwtI9VnLQZGM9OPW"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setIsLoading(false);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          e.target.reset();

          // thanks
          toast.success(
            "I appreciate your message and will reply to you as soon as I can."
          );
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsLoading(false);

          toast.error("Something went wrong., please try again.");
        }
      );
  };

  return (
    <div
      className="font-poppins flex justify-center items-center px-4 bg-background bg-center"
      style={{ backgroundImage: "url('/images/gradient.png')" }}
    >
      <div className="w-full min-h-[924px] max-w-screen-2xl  overflow-hidden flex items-center justify-center gap-8 py-24 text-white">
        <form
          className="flex flex-col items-center gap-4 w-full"
          id="contact"
          onSubmit={handleSubmit}
        >
          <p className="text-5xl font-bold text-center">
            Get in <span className="text-primary">touch</span>
          </p>
          <p className="text-zinc-300 text-center">
            I’d love to hear from you! Fill out the form, and I’ll be in touch.
          </p>

          <div className="bg-white/5 rounded-2xl w-full max-w-[36rem] flex flex-col items-center gap-4 p-4 text-black">
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="w-full ">
                <Input
                  placeholder="Name"
                  size="lg"
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                  error={errors.name}
                />
                {errors.name && (
                  <p className="text-red-500 pt-1 text-xs">{errors.name}</p>
                )}
              </div>

              <div className="w-full">
                <Input
                  placeholder="Email"
                  size="lg"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  error={errors.email}
                />
                {errors.email && (
                  <p className="text-red-500 pt-1 text-xs">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="w-full">
              <Textarea
                color=""
                variant="flat"
                placeholder="Message here..."
                minRows={8}
                maxRows={12}
                size="lg"
                value={formData.message}
                onChange={handleChange}
                name="message"
                error={errors.message}
              />
              {errors.message && (
                <p className="text-red-500 pt-1 text-sm">{errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-primary"
              size="lg"
              isLoading={isLoading}
              disabled={isLoading}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
