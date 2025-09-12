"use client";
import Link from "next/link";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Navlinks } from "../../../../assets/assets";
import { SiCodingninjas } from "react-icons/si";


type props = {
  openNav: () => void;
};

const Nav = ({ openNav }: props) => {
  return (
    <div className="h-[12vh] z-[10000] fixed w-full bg-black/95 backdrop-blur-md">
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        
        {/* LOGO */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center p-2 rounded-lg bg-transprent">
            <SiCodingninjas  className="w-6 h-6 text-white" />
            <h1 className="text-xl sm:block md:text-2xl text-white font-bold">
            MLRiida
          </h1>
          </div>
          
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center space-x-8 ">
          {Navlinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-base text-gray-300 font-medium 
              px-3 py-2 rounded-lg transition-all duration-200 
              hover:bg-gray-700 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Burger Menu */}
        <button className="lg:hidden p-2 rounded-lg hover:bg-orange-500/20 transition-all duration-200">
          <HiBars3BottomLeft 
            onClick={openNav} 
            className="w-8 h-8 text-gray-300 hover:text-orange-400 transition-colors duration-200" 
          />
        </button>
      </div>
    </div>
  );
};

export default Nav;