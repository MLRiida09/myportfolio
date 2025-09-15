"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {FaServicestack} from "react-icons/fa";
import { services } from "../../../assets/assets";

const ServicesPage = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  

  const toggleFlip = (serviceId: number) => {
    setFlippedCards((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <main className="h-screen w-screen bg-black text-white pt-[12vh] px-4 overflow-hidden flex flex-col items-center justify-start">
      <div className="w-full max-w-7xl space-y-6 h-full flex flex-col">
        {/* ===== Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="border border-gray-600 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl p-6 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <FaServicestack className="text-white text-3xl mr-3" />
            <h1 className="text-3xl font-bold">My Services</h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            I provide comprehensive and high-quality development and design
            services—from web development to mobile apps and e-commerce
            solutions—ensuring professionalism and top-notch results.
          </p>
        </motion.div>

        {/* ===== Cards ===== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-gray-600 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl p-6 flex-1 flex flex-col"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isFlipped = flippedCards.includes(service.id);

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative cursor-pointer"
                  onClick={() => toggleFlip(service.id)}
                >
                  {/* Card */}
                  <div
                    className="relative w-full h-64 preserve-3d transition-transform duration-700"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isFlipped
                        ? "rotateY(180deg)"
                        : "rotateY(0deg)",
                    }}
                  >
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden border border-gray-700 rounded-xl bg-gray-800/50 p-6 flex flex-col items-center justify-center hover:bg-gray-800/70 transition-colors duration-300">
                      <Icon className={`text-5xl ${service.color} mb-4`} />
                      <h3 className="text-lg font-semibold text-center">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-xs text-gray-400 text-center">
                        Click for more details
                      </p>
                    </div>

                    {/* Back */}
                    <div
                      className="absolute inset-0 backface-hidden border border-gray-700 rounded-xl bg-gray-800/80 p-6 flex flex-col justify-center"
                      style={{ transform: "rotateY(180deg)" }}
                    >
                      <Icon
                        className={`text-3xl ${service.color} mb-3 self-center`}
                      />
                      <h4 className="text-md font-semibold mb-3 text-center">
                        {service.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed text-center">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Instructions */}
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm">
              Click any card to flip and view details
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </main>
  );
};

export default ServicesPage;
