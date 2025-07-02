import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <motion.div
        className="space-y-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          About Me
        </h1>
        <p className="text-gray-700 text-justify leading-relaxed text-[17px]">
          Hello, I'm <span className="font-semibold text-red-600">Satyam Sawant</span>, a passionate Full Stack Web Developer with deep expertise in the
          <span className="font-medium text-green-700"> MERN Stack (MongoDB, Express, React, Node.js)</span>. With a background in IT and a strong
          foundation in JavaScript, I focus on building scalable, efficient, and
          user-centric software applications that solve real-world problems.
        </p>

        {/* Education */}
        <div className="border-l-4 pl-4 border-green-600">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            🎓 Education & Training
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>ANIIT in Cloud & Mobile Software Engineering – NIIT Institute (2019 - 2022)</li>
            <li>Bachelor’s Degree – Mumbai University (2023)</li>
            <li>Certified in React.js, Node.js, and MongoDB – RstForum (2023)</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="border-l-4 pl-4 border-green-600">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            🛠️ Skills & Expertise
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>JavaScript, TypeScript, Java, C++, Python</li>
            <li>MERN Stack (MongoDB, Express.js, React, Node.js)</li>
            <li>Redux Toolkit, REST APIs, JWT Auth, Firebase</li>
            <li>Tailwind CSS, Bootstrap, Responsive UI Design</li>
            <li>Git, GitHub, Postman, MongoDB, SQL, Linode</li>
          </ul>
        </div>

        {/* Experience */}
        <div className="border-l-4 pl-4 border-green-600">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            💼 Professional Experience
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <span className="font-semibold">Web Developer</span> – CodeMatrix Solutions (2024–2025)
              <p className="ml-5 text-sm text-gray-600">
                Built and maintained full stack web applications using React and Node.js. Collaborated with designers and backend teams to optimize user experience.
              </p>
            </li>
            <li>
              <span className="font-semibold">Full Stack Developer Training</span> – Trainee (2023) under RstForum Experts
              <p className="ml-5 text-sm text-gray-600">
                Completed various client projects including blogs, e-commerce sites, voting apps, and portfolio websites with responsive UIs and secure auth.
              </p>
            </li>
          </ul>
        </div>

        {/* Achievements */}
        <div className="border-l-4 pl-4 border-green-600">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            🏆 Achievements & Awards
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Top 5% Performer – NIIT Capstone Project Showcase (2022) - CareConnect360</li>
          </ul>
        </div>

        {/* Mission */}
        <div className="border-l-4 pl-4 border-green-600">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            🚀 Mission Statement
          </h2>
          <p className="text-gray-700 text-justify text-[17px]">
            My mission is to use my skills to deliver innovative and impactful web solutions that exceed expectations. I'm committed to lifelong learning and building digital products that make lives easier and businesses smarter.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
