import React from "react";

import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import python from "../../public/python.webp";
import typescript from "../../public/typescript.png";
import sql from "../../public/sql.png";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import mysql from "../../public/mysql.png";
import deepseek from "../../public/deepseek.png";
import logic from "../../public/logic.jpg";

function Experience() {
  const technologies = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: java, name: "Java" },
    { id: 4, logo: javascript, name: "JavaScript" },
    { id: 5, logo: oracle, name: "Oracle" },
    { id: 6, logo: reactjs, name: "ReactJS" },
    { id: 7, logo: nodejs, name: "NodeJS" },
    { id: 8, logo: python, name: "Python" },
    { id: 9, logo: typescript, name: "TypeScript" },
    { id: 10, logo: sql, name: "SQL" },
    { id: 11, logo: mongoDB, name: "MongoDB" },
    { id: 12, logo: express, name: "ExpressJS" },
    { id: 13, logo: mysql, name: "MySQL" },
    { id: 14, logo: deepseek, name: "DeepSeek" },
    { id: 15, logo: logic, name: "Logical Thinking" },
  ];

  return (
    <section
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="text-center"><br/><br/>
        <h1 className="text-4xl font-extrabold text-gray-800">Experience</h1>
        <p className="text-gray-600 text-md mt-2">
          I have over 2 years of hands-on experience with these technologies:
        </p>
        <div className="w-24 h-1 bg-green-600 mx-auto mt-3"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-12">
        {technologies.map(({ id, logo, name }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center bg-white border rounded-xl shadow-md hover:shadow-xl p-4 transition-transform hover:scale-105 duration-300"
          >
            <img
              src={logo}
              alt={`${name} logo`}
              className="w-24 h-24 object-contain rounded-full border-2 p-2 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
