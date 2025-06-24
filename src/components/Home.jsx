import React from "react";
import pic from "../../public/satyam.png";

import { FaGithub, FaLinkedin, FaTelegram, FaReact, FaNodeJs } from "react-icons/fa6";
import { SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <section name="Home" className="max-w-screen-2xl mx-auto px-4 md:px-20 py-20 mt-12">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6">
          <span className="text-xl text-gray-500">Welcome to My Portfolio</span>
          <div className="text-3xl md:text-5xl font-semibold flex flex-wrap gap-2">
            <h1>Hello, I'm a</h1>
            <ReactTyped
              className="text-red-700 font-bold"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>

          <p className="text-base md:text-lg text-gray-700 text-justify">
            I'm a passionate Full Stack Developer specializing in building modern, scalable web applications using the MERN stack. I love solving real-world problems and turning ideas into digital solutions.
          </p>

          {/* Social Media & Stack */}
          <div className="flex flex-col md:flex-row justify-between gap-8 pt-4">
            {/* Social Links */}
            <div className="space-y-2">
              <h2 className="font-bold text-center">Connect With Me</h2>
              <ul className="flex justify-center md:justify-start space-x-4 text-2xl text-gray-600">
                <li>
                  <a href="https://www.linkedin.com/in/satyam-sawant-a257802a7/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-blue-500 transition duration-200" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/SatyamDevGenie" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-blue-400 transition duration-200" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h2 className="font-bold text-center">Tech Stack</h2>
              <div className="flex justify-center md:justify-start space-x-4 text-3xl text-gray-700">
                <SiMongodb className="hover:text-green-600 hover:scale-110 transition duration-200" />
                <SiExpress className="hover:text-black hover:scale-110 transition duration-200" />
                <FaReact className="hover:text-blue-500 hover:scale-110 transition duration-200" />
                <FaNodeJs className="hover:text-green-700 hover:scale-110 transition duration-200" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={pic}
            alt="Satyam Sawant"
            className="rounded-full w-60 h-60 md:w-[450px] md:h-[450px] object-cover shadow-lg border-4 border-gray-200 hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      <hr className="mt-16 border-gray-300" />
    </section>
  );
}

export default Home;
