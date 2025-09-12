"use client";
import Link from "next/link";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Navlinks } from "../../../../assets/assets";
import { SiCodingninjas } from "react-icons/si";
import { motion } from "framer-motion";
import {
  logoContainerVariants,
  iconHover,
  linkHover,
  buttonHover,
  buttonTap,
} from "../../../../assets/assets"; 

type props = {
  openNav: () => void;
};

const Nav = ({ openNav }: props) => {
  return (
    <div className="h-[12vh] z-[10000] fixed w-full bg-black/95 backdrop-blur-md">
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* LOGO */}
        <motion.div
          className="flex items-center space-x-3 cursor-pointer"
          variants={logoContainerVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } }}
        >
          <div className="flex items-center justify-center p-2 rounded-lg bg-transparent">
            <motion.div whileHover ={iconHover} className="mr-2">
              <SiCodingninjas className="w-6 h-6 text-white" />
            </motion.div>
            <motion.h1 className="text-xl sm:block md:text-2xl text-white font-bold">
              MLRiida
            </motion.h1>
          </div>
        </motion.div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {Navlinks.map((link) => (
            <motion.div key={link.id} whileHover={linkHover}>
              <Link
                href={link.url}
                className="text-base text-gray-300 font-medium 
                  px-3 py-2 rounded-lg transition-all duration-200 
                  hover:bg-gray-700 hover:text-white"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Burger Menu */}
        <motion.button
          className="lg:hidden p-2 rounded-lg transition-all duration-200"
          whileHover={buttonHover}
          whileTap={buttonTap}
        >
          <HiBars3BottomLeft
            onClick={openNav}
            className="w-8 h-8 text-white transition-colors duration-200"
          />
        </motion.button>
      </div>
    </div>
  );
};

export default Nav;
