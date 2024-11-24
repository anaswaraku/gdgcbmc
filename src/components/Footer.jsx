import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Google Developer Group on Campus
            </h2>
            <p className="text-lg text-gray-500">
              Bharata Mata College, Thrikkakara
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-white transition-colors"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us Section */}
          <section id="#contact">
            <div>
              <h2 className="text-xl font-semibold mb-4">Connect with Us</h2>
              <div className="flex space-x-5 mb-6">
                <a
                  href="https://www.instagram.com/gdgc.bmc?igsh=bWN6anBvcDVxdjRw"
                  className="hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://github.com/"
                  className="hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/"
                  className="hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
              <p className="text-gray-500">
                Email:{" "}
                <a
                  href="mailto:gdsc.bmc@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  gdsc.bmc@gmail.com
                </a>
              </p>
            </div></section>
                    </div>
          

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Google Developer Group on Campus,
            Bharata Mata College. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
