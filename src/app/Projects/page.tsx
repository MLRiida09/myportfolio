"use client";
import React from "react";
import { projects } from "../../../assets/assets";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-10">My Projects</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id} // 
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 
                         rounded-xl overflow-hidden flex flex-col  
                         transition-colors h-[28rem]"
            >
              {/* Project image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />

              {/* Card content */}
              <div className="flex flex-col justify-between flex-1 p-6">
                <div>
                  {/* Project title */}
                  <h3 className="text-2xl font-semibold text-blue-300 mb-4">
                    {project.title}
                  </h3>

                  {/* Project description */}
                  <p className="text-gray-400 mb-6">{project.description}</p>
                </div>

                {/* Action buttons */}
                <div className="flex justify-center gap-4 mt-auto">
                  {/* Live demo button */}
                  <a
                    href={project.liveUrl}
                    className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 font-bold text-white px-4 py-2 rounded-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo
                  </a>

                  {/* Source code button */}
                  <a
                    href={project.sourceUrl}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
