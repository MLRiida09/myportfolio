"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { heroAssets } from "../../../../assets/assets";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black pt-[10vh] sm:pt-[12vh]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
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
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 rounded-full text-xs sm:text-sm text-gray-300">
                <HiOutlineLocationMarker className="text-green-400" />
                {heroAssets.badge.text}
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </span>
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
              className="text-base sm:text-lg text-gray-400 max-w-md sm:max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {heroAssets.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {heroAssets.buttons.map((btn, index) => {
                const Icon = btn.icon;
                return (
                  <motion.a
                    key={index}
                    href={btn.link}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-3 px-6 sm:px-8 py-3 font-medium rounded-lg transition-colors duration-200 text-sm sm:text-base ${btn.style}`}
                  >
                    <Icon />
                    {btn.text}
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* My picture  */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center lg:justify-end hidden lg:flex"
          >
            <motion.div
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative"
            >
              <div className="w-64 h-80 sm:w-72 sm:h-96 bg-gray-800 rounded-2xl overflow-hidden shadow-2xl relative">
                <Image
                  src={heroAssets.userPic}
                  alt="MLRiida-picture"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
