import React from "react";
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
      // description: "BlogSy is a trending blog platform made by me in 2025 using Mern Stack.",
      demoLink: "https://drive.google.com/file/d/10e3TTRDHd6ptuWZI6JqJbakgL0WngVLa/view?usp=drive_link",
      codeLink: "https://github.com/SatyamDevGenie/BlogSy",
    },
    {
      id: 2,
      logo: mern,
      name: "petsCare - Mern Stack",
      // description: "Minimal and flexible Node.js web framework for APIs.",
      demoLink: "https://drive.google.com/file/d/111zK26Clmz4V5epdJ3_JeLh_TNm93bHL/view?usp=drive_link",
      codeLink: "https://github.com/SatyamDevGenie/petsCare",
    },
    {
      id: 3,
      logo: mern,
      name: "Quickify - Mern Stack",
      // description: "Frontend library for building user interfaces using components.",
      demoLink: "#",
      codeLink: "https://github.com/SatyamDevGenie/Quickify",
    },
    {
      id: 4,
      logo: java,
      name: "CareConnect - Full Stack Java",
      // description: "Backend runtime for building scalable network applications.",
      demoLink: "https://drive.google.com/file/d/1uFVBQNXldc3xfcVryZl8sXwn1T7SlEqz/view?usp=drive_link",
      codeLink: "https://github.com/SatyamDevGenie/CareConnect360",
    },
     {
      id: 5,
      logo: mern,
      name: "NoteZipper",
      // description: "Backend runtime for building scalable network applications.",
      demoLink: "https://drive.google.com/file/d/1JTuYixYdebULzNUiHBOfgoiDwaYt0Cbv/view?usp=drive_link",
      codeLink: "https://github.com/SatyamDevGenie/NoteZipper2023",
    },
    {
      id: 6,
      logo: nodejs,
      name: "Nodify RestAPI - Backend",
      // description: "Backend runtime for building scalable network applications. you can see my backend code on my GitHub",
      demoLink: "https://github.com/SatyamDevGenie/NodifyREST_API",
      codeLink: "https://github.com/SatyamDevGenie/NodifyREST_API",
    },
  ];

  return (
    <section
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800">Portfolio</h1>
        <p className="text-lg text-gray-600 mt-2">Featured Technologies & Projects</p>
        <div className="w-24 h-1 bg-green-600 mx-auto mt-3"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardItem.map(({ id, logo, name, description, demoLink, codeLink }) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-md border hover:shadow-lg transform hover:scale-[1.03] transition duration-300 p-5 flex flex-col justify-between"
          >
            <div className="flex flex-col items-center">
              <img
                src={logo}
                alt={`${name} logo`}
                className="w-24 h-24 object-contain rounded-full border p-2 mb-4"
              />
              <h2 className="text-xl font-bold text-gray-800">{name}</h2>
              <p className="text-1xl font-medium text-gray-600 mt-2 text-center px-2">{description}</p>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-md"
              >
                View Project
              </a>
              {/* <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-md"
              >
                Source Code
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortFolio;
