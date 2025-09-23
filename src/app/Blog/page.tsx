"use client";

import React, { JSX, useState } from "react";
import { RiAdminFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { projects } from "../../../assets/assets"; // Reuse the same data for blogs

// Type definitions
interface Blog {
  id: string | number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  sourceUrl: string;
  category?: string;
}

export default function BlogsPage(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  // استخراج الفئات الفريدة من البيانات
  const categories: string[] = [ ...new Set(projects.map((blog: Blog) => blog.category || "General"))];
  
  // تصفية المدونات حسب الفئة المختارة
  const filteredBlogs: Blog[] = selectedCategory === "All" 
    ? projects 
    : projects.filter((blog: Blog) => (blog.category || "General") === selectedCategory);

  const handleCategoryChange = (category: string): void => {
    setSelectedCategory(category);
  };

  const getCategoryCount = (category: string): number => {
    return category === "All" 
      ? projects.length 
      : projects.filter((blog: Blog) => (blog.category || "General") === category).length;
  };

  const handleAddBlog = (): void => {
    // سيتم ربطه لاحقاً بـ admin panel
    console.log("Navigate to add blog panel");
  };

  return (
    <main className="min-h-screen px-4 pt-20 pb-16">

      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-6xl md:text-7xl font-bold  text-white mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.3 }}
          >
            My Blogs
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            
            Explore a world of tips, tutorials, and insights in web development, design, and technology — featuring {" "}
            <span className="text-blue-500 animate-pulse">{projects.length} Categories</span> and {" "}
            <span className="text-green-500 animate-pulse">{projects.length} Total Blogs</span>.
            
          </motion.p>
        </motion.div>

        {/* Action Bar */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Add Blog Button */}
          <motion.button
            onClick={handleAddBlog}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-slate-600 to-gray-700 
                       text-white font-bold px-8 py-4 rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Admin Panel</span>
            <motion.div
            className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <RiAdminFill className="text-white w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.div>
        {/* Enhanced Navigation Filter */}
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
                      transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
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

        {/* Results Info */}
        <motion.div 
          className="flex justify-between items-center mb-10 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="text-gray-400 flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Showing {filteredBlogs.length} of {projects.length} blogs</span>
          </div>
          
          <motion.div 
            className="text-sm text-gray-500"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {selectedCategory !== "All" && `Filtered by: ${selectedCategory}`}
          </motion.div>
        </motion.div>

        {/* Enhanced Blogs Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {filteredBlogs.map((blog: Blog, index: number) => (
            <motion.article
              key={blog.id}
              className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 
                         rounded-3xl overflow-hidden h-[32rem] shadow-xl"
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 * index,
                type: "spring",
                bounce: 0.4
              }}
              layout
            >

              {/* Blog image */}
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                {/* Category badge */}
                <motion.div 
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index, type: "spring" }}
                >
                  <span className="bg-blue-400
                                   text-white px-4 py-2 rounded-2xl text-sm font-medium
                                   backdrop-blur-sm shadow-lg border border-white/20">
                    {blog.category || "General"}
                  </span>
                </motion.div>
              </div>

              {/* Blog content */}
              <div className="p-8 flex flex-col justify-between h-[20rem]">
                <div>
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + 0.1 * index }}
                  >
                    {blog.title}
                  </motion.h3>

                  <motion.p 
                    className="text-gray-400 mb-6 line-clamp-3 leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + 0.1 * index }}
                  >
                    {blog.description}
                  </motion.p>
                </div>

                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + 0.1 * index }}
                >
                  <motion.a
                    href={blog.liveUrl}
                    className="flex-1 bg-gradient-to-r from-green-400 to-emerald-500 
                               text-white font-semibold px-6 py-3 rounded-2xl text-center shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Read Blog
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
                    href={blog.sourceUrl}
                    className="bg-gray-700/50 text-gray-300 px-6 py-3 rounded-2xl
                               backdrop-blur-sm border border-gray-600/50 flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Enhanced Empty state */}
        {filteredBlogs.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <motion.div 
              className="relative inline-block mb-8"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="text-8xl opacity-50">📝</div>
            </motion.div>
            
            <motion.h3 
              className="text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              No blogs found
            </motion.h3>
            
            <motion.p 
              className="text-gray-400 text-lg max-w-md mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              No blogs match the selected category. Try exploring other categories or create your first blog!
            </motion.p>

            <motion.button
              onClick={handleAddBlog}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Create Your First Blog
            </motion.button>
          </motion.div>
        )}
      </div>
    </main>
  );
}