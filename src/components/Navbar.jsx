import React, { useState } from "react";
import pic from "../../public/satyam.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={pic}
            alt="Satyam"
            className="h-10 w-10 rounded-full shadow-md"
          />
          <div className="leading-tight">
            <h1 className="text-lg font-bold text-gray-800">
              Satyam <span className="text-green-600">Sawant</span>
            </h1>
            <p className="text-sm text-gray-500 -mt-1">Software Developer</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ id, text }) => (
            <Link
              key={id}
              to={text}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-gray-700 hover:text-green-600 font-medium cursor-pointer transition-all duration-300"
            >
              {text}
            </Link>
          ))}
          <a
            href="/Satyam_CV.pdf"
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

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white/90 backdrop-blur-md border-t shadow-lg"
          >
            <ul className="flex flex-col items-center py-6 space-y-4 text-lg font-medium text-gray-700">
              {navItems.map(({ id, text }) => (
                <li key={id}>
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setMenu(false)}
                    className="hover:text-green-600 transition duration-300"
                  >
                    {text}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/Satyam_CV.pdf"
                  download
                  className="bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition duration-300 shadow-md"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
