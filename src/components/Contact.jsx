import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://getform.io/f/byvymlza", data);
      toast.success("Your message has been sent successfully! 🎉");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Oops! Something went wrong. Try again.");
    }
  };

  return (
    <section
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Contact Me</h1>
        <p className="text-gray-600 mt-2">
          I'd love to hear from you! Fill out the form below and I'll get back
          to you soon.
        </p>
        <div className="w-24 h-1 bg-green-600 mx-auto mt-3 mb-10"></div>
      </div>

      <div className="flex justify-center">
        <form
          action="https://getform.io/f/byvymlza"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-xl w-full max-w-md p-8 rounded-xl space-y-6"
        >
          <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
            Send Your Message
          </h2>

          {/* Name Field */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              {...register("name", { required: "Full name is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              type="email"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              rows="4"
              className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your message or query..."
            ></textarea>
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
