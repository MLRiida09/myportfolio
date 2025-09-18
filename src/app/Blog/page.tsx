"use client";
import React from "react";
import { projects } from "../../../assets/assets"; // Reuse the same data for blogs

export default function BlogsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
      <div className="text-center">
        {/* Page title */}
        <h1 className="text-4xl font-bold text-white mb-10">My Blogs</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 
                         rounded-xl overflow-hidden flex flex-col  
                         transition-colors h-[28rem] hover:bg-gray-700/50"
            >
              {/* Blog image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover transform hover:scale-105 transition-transform duration-300"
              />

              {/* Blog content */}
              <div className="flex flex-col justify-between flex-1 p-6">
                <div>
                  {/* Blog title */}
                  <h3 className="text-2xl font-semibold text-blue-300 mb-4">
                    {blog.title}
                  </h3>

                  {/* Blog description */}
                  <p className="text-gray-400 mb-6">
                    {blog.description}
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex justify-center gap-4 mt-auto">
                  {/* Button to read the blog */}
                  <a
                    href={blog.liveUrl}
                    className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 font-bold text-white px-4 py-2 rounded-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Blog
                  </a>

                  {/* Button for more details or source */}
                  <a
                    href={blog.sourceUrl}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Details
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
