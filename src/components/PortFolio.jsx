import React from "react";
import { motion } from "framer-motion";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import mern from "../../public/mern.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mern,
      name: "BlogSy - Mern Stack",
      description: "A trending blog platform built using MERN Stack in 2025 with authentication and post management.",
      demoLink: "https://drive.google.com/file/d/10e3TTRDHd6ptuWZI6JqJbakgL0WngVLa/view?usp=sharing",
      codeLink: "https://github.com/SatyamDevGenie/BlogSy",
    },
    {
      id: 2,
      logo: mern,
      name: "petsCare - Mern Stack",
      description: "A pet management and care platform featuring user roles and vet functionalities.",
      demoLink: "https://drive.google.com/file/d/111zK26Clmz4V5epdJ3_JeLh_TNm93bHL/view?usp=sharing",
      codeLink: "https://github.com/SatyamDevGenie/petsCare",
    },
    {
      id: 3,
      logo: mern,
      name: "Quickify - Mern Stack",
      description: "Task tracking and productivity app built with a clean UI and secure backend.",
      demoLink: "https://drive.google.com/file/d/1qb0mnmdYRcjTH6mCwE23ijutTTQYSPHw/view?usp=sharing",
      codeLink: "https://github.com/SatyamDevGenie/Quickify",
    },
    {
      id: 4,
      logo: java,
      name: "CareConnect - Full Stack Java",
      description: "A hospital appointment system using Java Servlets and JDBC.",
      demoLink: "https://drive.google.com/file/d/1uFVBQNXldc3xfcVryZl8sXwn1T7SlEqz/view?usp=sharing",
      codeLink: "https://github.com/SatyamDevGenie/CareConnect360",
    },
    {
      id: 5,
      logo: mern,
      name: "NoteZipper - Mern Stack",
      description: "A secure personal note management app with user authentication.",
      demoLink: "https://drive.google.com/file/d/1JTuYixYdebULzNUiHBOfgoiDwaYt0Cbv/view?usp=sharing",
      codeLink: "https://github.com/SatyamDevGenie/NoteZipper2023",
    },
    {
      id: 6,
      logo: nodejs,
      name: "Nodify RestAPI - Backend",
      description: "A RESTful API backend using Express.js for scalable data operations. I just uploaded soruce of this project",
      demoLink: "https://github.com/SatyamDevGenie/NodifyREST_API",
      codeLink: "https://github.com/SatyamDevGenie/NodifyREST_API",
    },
  ];

  return (
    <section
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      ><br/><br/>
        <h1 className="text-4xl font-extrabold text-gray-800">Projects</h1>
        <p className="text-lg text-gray-600 mt-2">
          Featured Technologies & Projects
        </p>
        <div className="w-24 h-1 bg-green-600 mx-auto mt-3"></div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardItem.map(({ id, logo, name, description, demoLink, codeLink }) => (
          <motion.div
            key={id}
            className="bg-white rounded-xl shadow-md border hover:shadow-xl transform hover:scale-[1.02] transition duration-300 p-5 flex flex-col justify-between"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: id * 0.1 }}
          >
            <div className="flex flex-col items-center">
              <img
                src={logo}
                alt={`${name} logo`}
                className="w-24 h-24 object-contain rounded-full border p-2 mb-4"
              />
              <h2 className="text-xl font-bold text-gray-800 text-center">{name}</h2>
              <p className="text-sm text-gray-600 mt-3 text-center px-2">{description}</p>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-md transition"
              >
                View Project
              </a>
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-md transition"
              >
                Source Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default PortFolio;
