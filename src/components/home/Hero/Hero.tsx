"use client";
import React from "react";
import { motion } from "framer-motion";
import { heroAssets } from "../../../../assets/assets";
import { FaPersonFalling, FaPersonWalkingLuggage } from "react-icons/fa6";
import { CgDanger } from "react-icons/cg";
import { LiaTrophySolid } from "react-icons/lia";

const Hero = () => {
  const maze = [
    [1,1,1,1,1,1,1,1,1,1,1,1], 
    [2,0,0,0,1,0,0,0,0,0,3,1],
    [1,1,1,0,1,0,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,1,0,0,0,1], 
    [1,0,1,1,1,1,0,0,0,1,3,1],
    [1,3,1,0,0,0,0,1,1,1,1,1], 
    [1,1,1,0,1,1,1,1,0,0,0,1], 
    [1,0,0,0,0,0,0,0,0,1,0,1],
    [1,0,1,0,1,1,1,0,1,1,4,0],
    [1,0,0,0,1,1,1,0,0,1,1,1],
    [1,1,1,1,1,1,1,1,5,1,1,1],
  ];

  const obstacles = ["Anxiety", "Overthinking", "Self-Doubt"];

  const renderMazeCell = (cell: number) => {
    switch (cell) {
      case 1:
        return <div className="w-8 h-8 bg-gray-800" />;
      case 2:
        return (
          <div className="w-8 h-8 bg-gray-900 flex items-center justify-center">
            <FaPersonWalkingLuggage className="text-blue-400 text-lg drop-shadow-[0_0_4px_rgba(96,165,250,0.8)]" />
          </div>
        );
      case 3:
        return (
          <div className="w-8 h-8 bg-gray-900 flex items-center justify-center">
            <CgDanger className="text-red-500 text-lg drop-shadow-[0_0_4px_rgba(239,68,68,0.8)]" />
          </div>
        );
      case 4:
        return (
          <div className="w-8 h-8 flex items-center justify-center bg-transparent">
            <LiaTrophySolid className="text-green-400 text-2xl drop-shadow-[0_0_4px_rgba(34,197,94,0.8)]" />
          </div>
        );
      case 5:
        return (
          <div className="w-8 h-8 flex items-center justify-center rounded">
            <FaPersonFalling className="text-red-500 text-lg" />
          </div>
        );
      default:
        return <div className="w-8 h-8 bg-gray-900" />;
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-[10vh] sm:pt-[12vh]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-7xl font-bold text-white">
              {heroAssets.title}
            </h1>
            <h2 className="text-lg lg:text-3xl text-gray-300">
              {heroAssets.subtitle}
            </h2>
            <p className="text-base text-gray-300 max-w-lg mx-auto lg:mx-0">
              {heroAssets.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {heroAssets.buttons.map((btn, index) => {
                const Icon = btn.icon;
                return (
                  <a
                    key={index}
                    href={btn.link}
                    className={`inline-flex items-center gap-3 px-6 py-3 rounded-lg transition-colors ${btn.style}`}
                  >
                    <Icon />
                    {btn.text}
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="p-4 rounded-xl bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-700 shadow-2xl">
              <div
                className="grid gap-0 text-[0px]"
                style={{ gridTemplateColumns: `repeat(${maze[0].length}, 1fr)` }}
              >
                {maze.map((row, i) =>
                  row.map((cell, j) => (
                    <div key={`${i}-${j}`}>{renderMazeCell(cell)}</div>
                  ))
                )}
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-600 rounded-lg p-3 w-full shadow-lg">
              <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center gap-2 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
                  <FaPersonWalkingLuggage className="text-blue-400 text-lg" />
                  <span className="text-blue-400 font-medium">You</span>
                </div>
                {obstacles.map((o, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 bg-red-500/10 px-2 py-1 rounded border border-red-500/20"
                  >
                    <CgDanger className="text-red-500 text-lg" />
                    <span className="text-red-400 text-[10px]">{o}</span>
                  </div>
                ))}
                <div className="flex items-center gap-1 bg-red-500/10 px-2 py-1 rounded border border-red-500/20">
                  <FaPersonFalling className="text-red-500 text-lg" />
                  <span className="text-red-400 text-[10px]">Quit</span>
                </div>
                <div className="flex items-center gap-2 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">
                  <LiaTrophySolid className="text-green-400 text-lg" />
                  <span className="text-green-400 font-medium">Success</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
