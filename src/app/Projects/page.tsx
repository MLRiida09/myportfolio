"use client";
import React from "react";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">My Projects</h1>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <div
              key={project}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg p-6 hover:bg-gray-700/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-blue-300 mb-3">
                Project {project}
              </h3>
              <p className="text-gray-400">
                Description of project {project}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}