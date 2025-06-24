import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-gray-900 text-gray-100 py-10">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
            {/* Company Info */}
            <div>
              <h2 className="text-lg font-semibold">Satyam Software Solutions</h2>
              <p className="text-sm text-gray-400">
                Empowering Businesses with Clean, Scalable Code.
              </p>
            </div>

            {/* Developer Slogan Block (Optional Centered Line) */}
            <div>
              <p className="text-sm text-gray-400 italic">
                "Transforming Ideas into Scalable Digital Products."
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-6"></div>

          {/* Footer Bottom Text */}
          <div className="text-center text-sm text-gray-500">
            <p>&copy; {currentYear} Satyam Software Solutions. All rights reserved.</p>
            <p>
              Crafted with ❤️ by{" "}
              <span className="text-white font-medium">Satyam Sawant</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
