import React, { useState } from "react";
import pic from "../../public/satyam.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur shadow-sm">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src={pic} alt="Satyam" className="h-10 w-10 rounded-full shadow-md" />
          <div className="leading-tight">
            <h1 className="text-lg font-bold text-gray-800">
              Satyam <span className="text-green-600">Sawant</span>
            </h1>
            <p className="text-sm text-gray-500 -mt-1">Software Developer</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ id, text }) => (
            <Link
              key={id}
              to={text}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-gray-700 hover:text-green-600 font-medium cursor-pointer transition-all"
            >
              {text}
            </Link>
          ))}

          {/* CTA Button */}
          <a
            href="/resume.pdf"
            download
            className="bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition duration-300 shadow-md"
          >
            Download CV
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            aria-label="Toggle Menu"
            onClick={() => setMenu(!menu)}
            className="text-gray-800 focus:outline-none"
          >
            {menu ? <IoCloseSharp size={26} /> : <AiOutlineMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-400 text-white border-t border-gray-200 shadow-md transition duration-300">
          <ul className="flex flex-col items-center py-6 space-y-4 text-lg font-medium text-gray-700">
            {navItems.map(({ id, text }) => (
              <li key={id}>
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setMenu(false)}
                  className="hover:text-green-600"
                >
                  {text}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                className="inline-block mt-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-full transition duration-300"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
