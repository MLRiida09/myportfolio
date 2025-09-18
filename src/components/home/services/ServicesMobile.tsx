"use client";

import React from "react";
import { services } from "../../../../assets/assets";

const MobileServices = () => {
  return (
    <main className="w-full text-white min-h-screen overflow-y-auto pt-20 pb-12 px-4 md:hidden">
      <div className="max-w-md mx-auto flex flex-col">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            My Professional Services
          </h1>
          <p className="text-gray-300 text-base mt-2">
            • four professional services I offer •
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className={`relative cursor-pointer transform transition-all duration-300 hover:scale-105 
                h-[160px] flex flex-col justify-center items-center text-center rounded-2xl 
                bg-gradient-to-br ${service.bgGradient} border border-white/10 shadow-lg p-4`}
                style={{
                  animation: `fadeIn 0.6s ease-out ${index * 0.08}s both`,
                }}
              >
                <div className={`p-3 rounded-xl bg-white/10 ${service.color} backdrop-blur-sm mb-2`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-sm font-semibold text-white">{service.title}</h3>
                <p className="text-[10px] text-gray-300 mt-1 line-clamp-3">
                  {service.description.length > 50
                    ? service.description.slice(0, 50) + "..."
                    : service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
};

export default MobileServices;
