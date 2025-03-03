import React, { useState } from "react";
import { Button, Input, Textarea } from "@heroui/react";
import { toast } from "sonner";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
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
    if (!formData.user_name) newErrors.user_name = "Name is required";
    if (!formData.user_email) {
      newErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = "Email is invalid";
    }
    if (!formData.user_message) newErrors.user_message = "Message is required";
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
        "template_d5h126d",
        e.target,
        "MLwtI9VnLQZGM9OPW"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setIsLoading(false);
          setFormData({
            user_name: "",
            user_email: "",
            user_message: "",
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
                  value={formData.user_name}
                  onChange={handleChange}
                  name="user_name"
                  error={errors.user_name}
                />
                {errors.user_name && (
                  <p className="text-red-500 pt-1 text-xs">{errors.user_name}</p>
                )}
              </div>

              <div className="w-full">
                <Input
                  placeholder="Email"
                  size="lg"
                  value={formData.user_email}
                  onChange={handleChange}
                  name="user_email"
                  error={errors.user_email}
                />
                {errors.user_email && (
                  <p className="text-red-500 pt-1 text-xs">{errors.user_email}</p>
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
                value={formData.user_message}
                onChange={handleChange}
                name="user_message"
                error={errors.user_message}
              />
              {errors.user_message && (
                <p className="text-red-500 pt-1 text-sm">{errors.user_message}</p>
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
