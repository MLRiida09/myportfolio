"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { Navlinks } from "../../../../assets/assets";
import { ChevronsLeftRightEllipsis } from 'lucide-react';


const Nav = () => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        transition-all duration-300 h-[12vh] z-[10000] fixed w-full
        ${navBg 
          ? "bg-[#0a0a1a]/95 backdrop-blur-md shadow-2xl transform translate-y-0" 
          : "fixed "
        }
      `}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        
        {/* LOGO - Simple Star */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center">
            <ChevronsLeftRightEllipsis className="w-8 h-8 transition-colors duration-200 text-white" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            MLRiida
          </h1>
        </div>

        {/* Nav Links - Simple */}
        <div className="hidden lg:flex items-center space-x-8">
          {Navlinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-base text-gray-300 font-medium hover:text-purple-400 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          
          {/* Download Button */}
          <button className="flex items-center space-x-2 px-6 py-3 text-sm rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-200 text-white">
            <BiDownload className="w-4 h-4" />
            <span className="hidden sm:inline">Download CV</span>
          </button>

          {/* Burger Menu */}
          <button className="lg:hidden">
            <HiBars3BottomLeft className="w-8 h-8 text-gray-300 hover:text-purple-400 transition-colors duration-200" />
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Nav;