import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100 py-10 px-4">
      <div className="max-w-screen-2xl mx-auto space-y-8 md:space-y-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left gap-6">
          {/* Company Info */}
          <div className="space-y-1">
            <h2 className="text-lg font-semibold">Satyam Software Solutions</h2>
            <p className="text-sm text-gray-400">
              Empowering businesses with clean, scalable code.
            </p>
          </div>

          {/* Optional Quote / Slogan */}
          <div className="text-sm text-gray-400 italic max-w-md">
            "Transforming Ideas into Scalable Digital Products."
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700" />

        {/* Bottom Text */}
        <div className="text-center space-y-1 text-sm text-gray-500">
          <p>&copy; {currentYear} Satyam Software Solutions</p>
          <p>
            Crafted with <span className="text-red-500">❤️</span> by{" "}
            <span className="text-white font-medium">Satyam Sawant</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
