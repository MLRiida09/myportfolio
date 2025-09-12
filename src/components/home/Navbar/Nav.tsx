"use client";

import Link from "next/link";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Navlinks } from "../../../../assets/assets";
import { ChevronsLeftRightEllipsis } from 'lucide-react';

type props ={
  openNav:() => void  ;
};

const Nav = ({openNav}:props) => {
  return (
    <div className="h-[12vh] z-[10000] fixed w-full bg-[#0a0a1a]/95 backdrop-blur-md">
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        
        {/* LOGO */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center">
            <ChevronsLeftRightEllipsis className="w-8 h-8 transition-colors duration-200 text-white" />
          </div>
          <h1 className="text-xl sm:block md:text-2xl text-white font-bold">
            MLRiida
          </h1>
        </div>

        {/* Nav Links */}
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

        {/* Burger Menu */}
        <button className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-300 group">
          <HiBars3BottomLeft onClick={openNav} className="w-8 h-8 text-gray-300 group-hover:text-purple-400 transition-colors duration-300" />
        </button>
      </div>
    </div>
  );
};

export default Nav;