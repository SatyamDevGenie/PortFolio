import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-10 bg-gray-100 text-gray-800">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Social Icons */}
            <div className="flex space-x-6 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition-colors"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>

            {/* Divider */}
            <div className="w-full border-t border-gray-300"></div>

            {/* Footer Text */}
            <div className="mt-6 text-sm text-gray-600 space-y-1">
              <p>&copy; {new Date().getFullYear()} Hi-Technic Systems and Services. All rights reserved.</p>
              <p>Built with ❤️ by Satyam Sawant | Special thanks to Ankush</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
