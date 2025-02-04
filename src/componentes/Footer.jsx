import React from "react";
import FooterBackground from "../images/CaroueselImages/Space_background1-scaled.jpg";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaSpotify,
  FaBandcamp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div
        className="relative h-auto bg-cover bg-center text-white text-center"
        style={{ backgroundImage: `url(${FooterBackground})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div class="text-center pt-10 relative z-10">
          <h3 className="pb-6 font-semibold">Product categories</h3>
          <a href="#" class="block font-bold mb-2 hover:text-gray-400 text-lg">
            CD & K7
          </a>
          <a href="#" class="block font-bold mb-2 hover:text-gray-400 text-lg">
            Shirts
          </a>
          <a href="#" class="block font-bold mb-2 hover:text-gray-400 text-lg">
            The Loop
          </a>
          <a href="#" class="block font-bold mb-2 hover:text-gray-400 text-lg">
            Things
          </a>
          <a href="#" class="block font-bold pb-2 hover:text-gray-400 text-lg">
            Vinyl
          </a>
        </div>
        <div className="flex justify-center items-center space-x-5 text-center pt-12  relative z-10">
          <a
            href="#"
            className="group border-2 rounded-full p-3 border-slate-500 transition duration-500 ease-in-out hover:border-red-500"
          >
            <FaTwitter className="text-lg  transition duration-500 ease-in-out group-hover:text-red-500" />
          </a>
          <a
            href="#"
            className="group border-2 rounded-full p-3 border-slate-500 transition duration-500 ease-in-out hover:border-red-500"
          >
            <FaFacebookF className="text-lg  transition duration-500 ease-in-out group-hover:text-red-500" />
          </a>
          <a
            href="#"
            className="group border-2 rounded-full p-3 border-slate-500 transition duration-500 ease-in-out hover:border-red-500"
          >
            <FaYoutube className="text-lg transition duration-500 ease-in-out group-hover:text-red-500" />
          </a>
          <a
            href="#"
            className="group border-2 rounded-full p-3 border-slate-500 transition duration-500 ease-in-out hover:border-red-500"
          >
            <FaInstagram className="text-lg  transition duration-500 ease-in-out group-hover:text-red-500" />
          </a>
          <a
            href="#"
            className="group border-2 rounded-full p-3 border-slate-500 transition duration-500 ease-in-out hover:border-red-500"
          >
            <FaSpotify className="text-lg  transition duration-500 ease-in-out group-hover:text-red-500" />
          </a>
          <a
            href="#"
            className="group border-2 rounded-full p-3 border-slate-500 transition duration-500 ease-in-out hover:border-red-500"
          >
            <FaBandcamp className="text-lg  transition duration-500 ease-in-out group-hover:text-red-500" />
          </a>
        </div>

        <p className="pt-6 pb-20  relative z-10">© 2025. Replicado por Thiago Hatadani</p>
      </div>
    </footer>
  );
};

export default Footer;
