"use client";

import React, { useState } from "react";
import { services } from "../../../../assets/assets";

const MobileServices = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleFlip = (serviceId: number) => {
    setFlippedCards((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <main className="w-full bg-black text-white min-h-screen overflow-y-auto pt-16 pb-12 px-4 md:hidden">
      <div className="max-w-md mx-auto h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            خدماتي المهنية
          </h1>
          <p className="text-gray-300 text-base mt-2">
            اضغط على الخدمة لعرض التفاصيل
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFlipped = flippedCards.includes(service.id);

            return (
              <div
                key={service.id}
                onClick={() => toggleFlip(service.id)}
                className="relative cursor-pointer group transform transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-700 rounded-xl p-4 h-[150px] flex flex-col justify-center items-center text-center"
                style={{
                  animation: `fadeIn 0.6s ease-out ${index * 0.08}s both`,
                }}
              >
                {!isFlipped ? (
                  <>
                    <Icon
                      className={`w-8 h-8 mb-2 ${service.color} transition-transform duration-300 group-hover:scale-110`}
                    />
                    <h3 className="text-xs font-semibold">{service.title}</h3>
                  </>
                ) : (
                  <>
                    <h4 className="text-xs font-bold mb-1">{service.title}</h4>
                    <p className="text-[10px] text-gray-300 line-clamp-4">
                      {service.description.length > 50
                        ? service.description.slice(0, 50) + "..."
                        : service.description}
                    </p>
                  </>
                )}
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

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
};

export default MobileServices;
