"use client";
import React from "react";

const AboutPage = () => {
  return (
    <main className="h-screen w-screen bg-black flex flex-col items-center justify-center space-y-6 overflow-hidden">
      {/* الصف العلوي - بطاقتان */}
      <div className="flex space-x-6">
        {/* بطاقة About Me */}
        <div className="border border-gray-600 rounded-2xl bg-gray-800 shadow-lg w-72 h-48 flex items-center justify-center hover:bg-gray-700 transition-all duration-300">
          <h2 className="text-xl font-semibold text-white">About Me</h2>
        </div>
        
        {/* بطاقة Certificates */}
        <div className="border border-gray-600 rounded-2xl bg-gray-800 shadow-lg w-72 h-48 flex items-center justify-center hover:bg-gray-700 transition-all duration-300">
          <h2 className="text-xl font-semibold text-white">Certificates</h2>
        </div>
      </div>
      
      {/* البطاقة الثالثة بعرض الشاشة تقريباً */}
      <div className="border border-gray-600 rounded-2xl bg-gray-800 shadow-lg w-[90%] h-48 flex items-center justify-center hover:bg-gray-700 transition-all duration-300">
        <h2 className="text-xl font-semibold text-white">Full Width Card</h2>
      </div>
    </main>
  );
};

export default AboutPage;