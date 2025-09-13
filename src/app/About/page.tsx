"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaGraduationCap,FaCode  } from "react-icons/fa";



import { heroAssets, certificates, skills } from "../../../assets/assets";

const AboutPage = () => {
  return (
    <main className="h-screen w-screen bg-black text-white pt-[12vh] px-4 overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl space-y-6">
        {/* ====== الصف العلوي - About & Certificates ====== */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 h-[40vh]">
          {/* 🧑 About Me */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 border border-gray-600 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl p-6 flex flex-col justify-center"
          >
            <div className="flex items-center mb-4">
              <FaUser className="text-white text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-white">
                About Me
              </h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              My name {" "}
              <span className="font-bold font-semibold">
                {heroAssets.title}
              </span>
              , I live in Algeria and have a strong passion for developing applications and websites,
              whether as a freelancer or an employee, with excellent front-end skills,
              solid back-end and database knowledge using various libraries and languages, 
              and I can work effectively both independently and as part of a team.<br/>feel free to contact me anytime.
            </p>
          </motion.div>

          {/* 🎓 Certificates */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 border border-gray-600 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl p-6 flex flex-col justify-center"
          >
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-white text-2xl mr-2" />
              <h2 className="text-2xl font-bold text-white">
                Certificates
              </h2>
            </div>
            <div className="space-y-3">
              {certificates.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800/50 rounded-lg p-3 border border-gray-700"
                >
                  <h3 className="text-sm font-semibold text-white">
                    {cert.title}
                  </h3>
                  <p className="text-blue-500 text-xs">{cert.issuer}</p>
                  <p className="text-gray-400 text-xs">{cert.year}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ====== Skills ====== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full border border-gray-600 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl p-6 flex flex-col"
        >
            <div className="flex items-center gap-3 mb-4">
                <FaCode className="text-2xl text-white" />
                <h2 className="text-2xl font-bold text-white">Skills</h2>
            </div>
          {/* 🧩skills cards*/}
          <div className="flex justify-between gap-6">
            {/* Languages */}
            <div className="flex-1 border border-gray-700 rounded-xl bg-gray-800/50 p-4 flex flex-col items-center">
              <h3 className="text-sm text-gray-300 mb-4">Languages</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {skills.languages.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <Icon key={i} className={`text-3xl ${skill.color}`} />
                  );
                })}
              </div>
            </div>

            {/* Frameworks */}
            <div className="flex-1 border border-gray-700 rounded-xl bg-gray-800/50 p-4 flex flex-col items-center">
              <h3 className="text-sm text-gray-300 mb-4">
                Frameworks & Libraries 
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {skills.frameworks.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <Icon key={i} className={`text-3xl ${skill.color}`} />
                  );
                })}
              </div>
            </div>

            {/* Tools */}
            <div className="flex-1 border border-gray-700 rounded-xl bg-gray-800/50 p-4 flex flex-col items-center">
              <h3 className="text-sm text-gray-300 mb-4">
                Tools & Platforms 
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {skills.tools.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <Icon key={i} className={`text-3xl ${skill.color}`} />
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default AboutPage;
