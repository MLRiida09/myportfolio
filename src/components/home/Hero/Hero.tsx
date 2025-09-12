"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { heroAssets } from "../../../../assets/assets";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-black pt-[12vh]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* texts animtion*/}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* badge*/}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 rounded-full text-sm text-gray-300">
                <HiOutlineLocationMarker className="text-green-400" />
                {heroAssets.badge.text}
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </span>
            </motion.div>

            {/*  titles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
                {heroAssets.title}
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-300">
                {heroAssets.subtitle}
              </h2>
            </motion.div>
            {/*Descrpction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-400 max-w-lg leading-relaxed"
            >
              {heroAssets.description}
            </motion.p>
            {/* cv and email buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {heroAssets.buttons.map((btn, index) => {
                const Icon = btn.icon;
                return (
                  <motion.a
                    key={index}
                    href={btn.link}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-3 px-8 py-3 font-medium rounded-lg transition-colors duration-200 ${btn.style}`}
                  >
                    <Icon />
                    {btn.text}
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
          {/* My picture*/}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative"
            >
              <div className="w-80 h-96 bg-gray-800 rounded-2xl overflow-hidden shadow-2xl relative">
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
