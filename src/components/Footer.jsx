import React from "react";
import { FaTwitter, FaInstagramSquare , FaGithub, FaLinkedin, } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
          <div>
            <h2 className="text-xl font-bold mb-4">
              Google Developer Group on Campus
              <span className="font-normal text-lg text-gray-400">
                <p>Bharata Mata College, Thrikkakara</p>
              </span>
            </h2>
           
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-white">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/*Connect with us */}
          <div>
            <h2 className="text-xl font-bold mb-4">Connect with Us</h2>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://twitter.com/"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com/"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagramSquare  size={20} />
              </a>
              <a
                href="https://github.com/"
                className="text-gray-400 hover:text-white"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
            <p className="text-gray-400">Email: contact@gdgcommunity.com</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} GDGC BMC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
