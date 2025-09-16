"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { heroAssets } from "../../../../assets/assets";


const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black pt-[10vh] sm:pt-[12vh] relative overflow-hidden"
    >
      {/* Simple elegant background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/30"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gray-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          {/* texts animation*/}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* badge  */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-start hidden lg:flex"
            >
              
            </motion.div>

            {/* titles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                {heroAssets.title}
              </h1>
              <h2 className="text-lg sm:text-2xl lg:text-3xl text-gray-300">
                {heroAssets.subtitle}
              </h2>
            </motion.div>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base sm:text-lg text-gray-300 max-w-md sm:max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {heroAssets.description}
            </motion.p>
            
            {/* Simple regular buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              {heroAssets.buttons.map((btn, index) => {
                const Icon = btn.icon;
                return (
                  <a
                    key={index}
                    href={btn.link}
                    className={`inline-flex items-center gap-3 px-6 sm:px-8 py-3 font-medium rounded-lg transition-colors duration-200 text-sm sm:text-base ${btn.style}`}
                  >
                    <Icon />
                    {btn.text}
                  </a>
                );
              })}
            </motion.div>
          </motion.div>
          
          {/* My picture with border only */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center lg:justify-end hidden lg:flex"
          >
            <div className="relative">
              <div className="w-64 h-80 sm:w-72 sm:h-96 bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-500">
                <Image
                  src={heroAssets.userPic}
                  alt="MLRiida-picture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;