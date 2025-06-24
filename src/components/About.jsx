import React from "react";

function About() {
  return (
    <section
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">About Me</h1>
        <p className="text-gray-700 text-justify">
          Hello, I'm <span className="font-semibold text-red-600">Satyam Sawant</span>, a passionate Full Stack Web Developer with deep expertise in the
          <span className="font-medium text-green-700"> MERN Stack (MongoDB, Express, React, Node.js)</span>. With a background in IT and a strong
          foundation in JavaScript, I focus on building scalable, efficient, and
          user-centric software applications that solve real-world problems.
        </p>

        {/* Education */}
        <div>
          <h2 className="text-xl font-semibold text-green-700">
            🎓 Education & Training
          </h2>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>ANIIT in Cloud & Mobile Software Engineering – NIIT Institute (2023)</li>
            <li>B.Sc in Computer Application – Mumbai University (2024)</li>
            <li>Certified in React.js, Node.js, and MongoDB – Udemy & Coursera</li>
          </ul>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-xl font-semibold text-green-700">
            🛠️ Skills & Expertise
          </h2>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>JavaScript, TypeScript, Java, C++, Python</li>
            <li>MERN Stack (MongoDB, Express.js, React, Node.js)</li>
            <li>Redux Toolkit, REST APIs, JWT Auth, Firebase</li>
            <li>Tailwind CSS, Bootstrap, Responsive UI Design</li>
            <li>Git, GitHub, Postman, MongoDB Compass</li>
          </ul>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-xl font-semibold text-green-700">
            💼 Professional Experience
          </h2>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>
              <span className="font-semibold">Junior Web Developer</span> – CodeMatrix Solutions (2022–2023)
              <p className="ml-5 text-sm">
                Built and maintained full stack web applications using React and Node.js. Collaborated with designers and backend teams to optimize user experience.
              </p>
            </li>
            <li>
              <span className="font-semibold">Freelance Developer</span> – Self-employed (2023–Present)
              <p className="ml-5 text-sm">
                Completed various client projects including blogs, e-commerce sites, voting apps, and portfolio websites with fully responsive UIs and secure authentication.
              </p>
            </li>
          </ul>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-xl font-semibold text-green-700">
            🏆 Achievements & Awards
          </h2>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Top 10% Performer – NIIT Capstone Project Showcase (2023)</li>
            <li>Hackathon Finalist – DevJam Mumbai (2022)</li>
          </ul>
        </div>

        {/* Mission Statement */}
        <div>
          <h2 className="text-xl font-semibold text-green-700">
            🚀 Mission Statement
          </h2>
          <p className="text-gray-700 mt-2 text-justify">
            My mission is to use my skills to deliver innovative and impactful web solutions that exceed expectations. I'm committed to lifelong learning and building digital products that make lives easier and businesses smarter.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
