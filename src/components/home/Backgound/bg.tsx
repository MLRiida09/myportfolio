"use client";
import React from 'react';

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative">
      {/* Gradient background: Dark blue + gray + soft white */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #e5e7eb 100%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Background;
