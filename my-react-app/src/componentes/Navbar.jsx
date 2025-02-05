import React from "react";
import { useState, useEffect } from "react";
import homeIcon from "../images/volkorx-dark.svg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { BsBag} from "react-icons/bs";
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaSpotify  } from "react-icons/fa";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <div
        className={`navbar flex justify-between bg-base-100 fixed top-0 left-0 w-full pt-4 px-4 transition-all duration-300 h-40 ${
          isScrolled
            ? "bg-white text-black shadow-lg"
            : "bg-transparent text-white"
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="flex-1 lg:hidden">
          <a className="btn btn-ghost text-xl">
            <img src={homeIcon} className="w-10 h-10" alt="Ícone Volkor Home" />
            <span>Volkor X</span>
          </a>
        </div>
        <div className=" flex-row hidden lg:block">
          <ul className="menu-horizontal">
            <li className="pt-5 px-2">
              <a>
                <FaTwitter />
              </a>
            </li>
            <li className="pt-5 px-2">
              <a>
                <FaFacebookF />
              </a>
            </li>
            <li className="pt-5 px-2">
              <a>
                <FaYoutube />
              </a>
            </li>
            <li className="pt-5 px-2">
              <a>
                <FaInstagram />
              </a>
            </li>
            <li className="pt-5 px-2">
              <a>
                <FaSpotify />
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <ul className="menu-horizontal flex items-center">
            <li className="px-5">
              <a href="">Home</a>
            </li>
            <li className="px-5">
              <a href="">Shop</a>
            </li>
            <li className="px-5">
              <a href="">
                <img
                  src={homeIcon}
                  className={`w-48 h-48 mt-2 ${
                    isScrolled ? "filter invert-0" : "filter invert"
                  }`}
                  alt="Ícone Volkor Home"
                />
              </a>
            </li>
            <li className="px-5">
              <a href="">About</a>
            </li>
            <li className="px-5">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row">
          <ul className="menu-horizontal">
            <li className="pt-5 px-2">
              <a>
                <FaMagnifyingGlass />
              </a>
            </li>
            <li className="pt-5 px-2">
              <a>
                <IoPersonOutline />
              </a>
            </li>
            <li className="pt-5 px-2">
              <a>
                <BsBag />
              </a>
            </li>
            <li>
              <details className="dropdown">
                <summary className="list-none pt-3 mt-1 mr-5 cursor-pointer lg:hidden">
                  {" "}
                  &nbsp; &nbsp; Menu{" "}
                </summary>
                <ul className="bg-base-100 list-none cursor-pointer p-2">
                  <li className="py-1 text-center">
                    <a className="text-black border-b-2 border-transparent hover:border-black hover:scale-x-100 transition-all duration-300 ease-out">Home</a>
                  </li>
                  <li className="py-1 text-center">
                    <a className="text-black border-b-2 border-transparent hover:border-black hover:scale-x-100 transition-all duration-300 ease-out">About</a>
                  </li>
                  <li className="py-1 text-center">
                    <a className="text-black border-b-2 border-transparent hover:border-black hover:scale-x-100 transition-all duration-300 ease-out">Shop</a>
                  </li>
                  <li className="py-1 text-center ">
                    <a className="text-black border-b-2 border-transparent hover:border-black hover:scale-x-100 transition-all duration-300 ease-out">Contact</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
