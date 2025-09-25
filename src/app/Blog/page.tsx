"use client";

import React, { JSX, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { blogs, Blog } from "../../../assets/assets";

export default function BlogsPage(): JSX.Element {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // taking categories from assets just one time for each category 
  const categories: string[] = ["All",...new Set(blogs.map((b: Blog) => b.category || "Genral⭐")),];

  // Filter blogs by the selected category
  const filteredblogs: Blog[] = 
    selectedCategory === "All"
      ? blogs
      : blogs.filter(
          (blog: Blog) => (blog.category || "Genral⭐") === selectedCategory);
  
  const handleCategoryChange = (category: string): void => {
    setSelectedCategory(category);
  };

  const getCategoryCount = (category: string): number => {
    return category === "All"
      ? blogs.length
      : blogs.filter(
          (blog: Blog) => (blog.category || "Genral⭐") === category
        ).length;
  };

  const handleReadblog = (blogId: string | number): void => {
    router.push(`/Blog/${blogId}`);
  };

  return (
    <main className="min-h-screen px-4 pt-20 pb-16 overflow-y-hidden">
      <div className="max-w-7xl mx-auto">
        {/* ---------------- Header ---------------- */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 mt-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
         >
          {/* Left Side */}
          <div className="flex-1">
            <motion.h1
              className="text-6xl md:text-7xl font-bold text-white mb-4 text-left"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                bounce: 0.3,
              }}
            >
              Code tips
            </motion.h1>

            <motion.p
              className="text-xl text-gray-400 max-w-4xl leading-relaxed text-left "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              I&apos;ve written{" "}
              <span className="font-semibold">{blogs.length} total posts</span>{" "}
              spread across{" "}
              <span className="font-semibold">
                {categories.length-1} categories</span>{" "}
              <br />
              and a posts  where I share my interests in Industrial Automation and Computing through PLC coding and code examples.
            </motion.p>
          </div>
        </motion.div>
        {/* ---------------- Categories ---------------- */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <nav className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-3 max-w-5xl mx-auto shadow-2xl">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category: string, index: number) => (
                <motion.button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "text-white shadow-lg"
                      : "text-gray-300"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  layout
                >
                  {selectedCategory === category && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl border border-gray-500"
                      layoutId="activeCategory"
                      transition={{
                        type: "spring",
                        bounce: 0.3,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <motion.div className="relative z-10 flex items-center gap-2">
                    <span>{category}</span>
                    <motion.span
                      className={`text-xs px-2 py-1 rounded-full ${
                        selectedCategory === category
                          ? "bg-white/20"
                          : "bg-gray-700/50"
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
        <div
          className="flex justify-between items-center mb-10 px-4">
          <div className="text-gray-400 flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animated-puls"></div>
            <span>
              Showing {filteredblogs.length} of {blogs.length} blogs
            </span>
          </div>
        </div>

        {/* ---------------- Blogs Grid ---------------- */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {filteredblogs.map((blog: Blog, index: number) => (
            <motion.article
              key={blog.id}
              className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden h-[32rem] shadow-xl"
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                type: "spring",
                bounce: 0.4,
              }}
              layout
            >
              {/* blog image */}
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  onClick={() => handleReadblog(blog.id)}
                />

                {/* Category badge */}
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 * index,
                    type: "spring",
                  }}
                >
                  <span className="bg-green-400 text-white px-4 py-2 rounded-2xl text-sm font-medium backdrop-blur-sm shadow-lg border border-white/20">
                    {blog.category || "General"}
                  </span>
                </motion.div>
              </div>

              {/* blog content */}
              <div className="p-8 flex flex-col justify-between h-[20rem]">
                <div>
                  <motion.h3
                    className="text-2xl font-bold text-white mb-4 cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + 0.1 * index,
                    }}
                    onClick={() => handleReadblog(blog.id)}
                  >
                    {blog.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-200 mb-6 line-clamp-3 leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + 0.1 * index,
                    }}
                  >
                    {blog.description}
                  </motion.p>
                </div>

                {/* buttons */}
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + 0.1 * index }}
                >
                  {/* Read Blog */}
                  <motion.button
                    onClick={() => handleReadblog(blog.id)}
                    className="flex-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold px-6 py-3 rounded-2xl text-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Read blog
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </motion.svg>
                    </span>
                  </motion.button>

                  {/* Share Blog */}
                  <motion.button
                    onClick={() => {
                      const blogUrl = `${window.location.origin}/blogs/${blog.id}`;
                      if (navigator.share) {
                        navigator
                          .share({
                            title: blog.title,
                            text: blog.description,
                            url: blogUrl,
                          })
                          .then(() => console.log("Shared successfully ✅"))
                          .catch((err) =>
                            console.log("Share failed ❌", err)
                          );
                      } else {
                        navigator.clipboard.writeText(blogUrl);
                        alert("📋 Blog link copied to clipboard!");
                      }
                    }}
                    className="bg-gray-700/50 text-gray-300 px-6 py-3 rounded-2xl backdrop-blur-sm border border-gray-600/50 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </motion.button>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ---------------- Empty State ---------------- */}
        {filteredblogs.length === 0 && (
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
              No blogs found
            </motion.h3>

            <motion.p
              className="text-gray-300 text-lg max-w-md mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              No blogs match the selected category.
            </motion.p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
