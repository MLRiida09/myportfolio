"use client";
import Image from 'next/image'
import React, { JSX, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { projects, Project } from "../../../assets/assets";

export default function ProjectsPage(): JSX.Element {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // ---------------- Categories ----------------
  const categories: string[] = [
    "All",
    ...new Set(projects.map((p: Project) => p.category || "General⭐"))
  ];

  const filteredProject: Project[] =
    selectedCategory === "All"
      ? projects
      : projects.filter((project: Project) => (project.category || "General⭐") === selectedCategory);

  const handleCategoryChange = (category: string): void => {
    setSelectedCategory(category);
  };

  const getCategoryCount = (category: string): number => {
    return category === "All"
      ? projects.length
      : projects.filter((project: Project) => (project.category || "General⭐") === category).length;
  };

  return (
    <main className="min-h-screen px-4 pt-20 pb-16 overflow-y-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ---------------- Header ---------------- */}
        <motion.div
          className="flex flex-col justify-start items-start gap-8 mb-16 mt-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold text-white mb-4 text-left"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.3 }}
          >
            My Projects
          </motion.h1>

          <motion.p
            className="text-xl text-gray-400 max-w-2xl leading-relaxed text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            I have <span className="font-semibold">{projects.length} total projects </span>
            spread across <span className="font-semibold">{categories.length-1} categories </span>
            <br />
            You can check out the source code and live demo of the projects.
          </motion.p>
        </motion.div>

        {/* ---------------- Categories Nav ---------------- */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <nav className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-3 max-w-5xl mx-auto shadow-2xl">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    selectedCategory === category ? "text-white shadow-lg" : "text-gray-300"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileTap={{ scale: 0.98 }}
                  layout
                >
                  {selectedCategory === category && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl border border-gray-500"
                      layoutId="activeCategory"
                      transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    />
                  )}
                  <motion.div className="relative z-10 flex items-center gap-2">
                    <span>{category}</span>
                    <motion.span
                      className={`text-xs px-2 py-1 rounded-full ${
                        selectedCategory === category ? "bg-white/20" : "bg-gray-700/50"
                      }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 * index }}
                    >
                      {getCategoryCount(category)}
                    </motion.span>
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </nav>
        </motion.div>

        {/* ---------------- Results Info ---------------- */}
        <div className="flex justify-between items-center mb-10 px-4">
          <div className="text-gray-400 flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>
              Showing {filteredProject.length} of {projects.length} projects
            </span>
          </div>
        </div>

        {/* ---------------- Projects Grid ---------------- */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {filteredProject.map((project, index) => (
            <motion.article
              key={project.id}
              className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden h-[32rem] shadow-xl"
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index, type: "spring", bounce: 0.4 }}
              layout
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <div className="relative w-full h-full">
              <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover cursor-pointer transition-transform duration-600 hover:scale-110"
               priority={index < 3} // تحميل الصور الأولى بأولوية
              />
              </div>
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index, type: "spring" }}
                >
                  <span className="bg-green-400 text-white px-4 py-2 rounded-2xl text-sm font-medium backdrop-blur-sm shadow-lg border border-white/20">
                    {project.category || "General"}
                  </span>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col justify-between h-[20rem]">
                <div>
                  <motion.h3
                    className="text-2xl font-bold text-white mb-4 cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + 0.1 * index }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-200 mb-6 line-clamp-non leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + 0.1 * index }}
                  >
                    {project.description}
                  </motion.p>
                </div>

                {/* Buttons */}
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + 0.1 * index }}
                >
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    className="flex-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold px-6 py-3 rounded-2xl text-center shadow-lg"
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Live Demo
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </span>
                  </motion.a>

                  <motion.a
                    href={project.sourceUrl}
                    target="_blank"
                    className="bg-gray-700/50 text-gray-300 px-6 py-3 rounded-2xl backdrop-blur-sm border border-gray-600/50 flex items-center justify-center"
                    whileTap={{ scale: 0.98 }}
                  >
                    GitHub Repo
                  </motion.a>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ---------------- Empty State ---------------- */}
        {filteredProject.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <motion.h3
              className="text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              No Projects found
            </motion.h3>

            <motion.p
              className="text-gray-300 text-lg max-w-md mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              No projects match the selected category.
            </motion.p>
          </motion.div>
        )}

      </div>
    </main>
  );
}
