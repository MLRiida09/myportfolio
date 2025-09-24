"use client";

import React, { JSX, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { blogs, Blog } from "../../../../assets/assets"; 



export default function BlogDetailPage(): JSX.Element {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const blogId = params.id;
    const foundBlog = blogs.find((b: Blog) => b.id.toString() === blogId);
    
    if (foundBlog) {
      setBlog(foundBlog);
    }
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <motion.div
          className="text-white text-xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
          <p className="text-gray-400 mb-8">The blog you&apos;re looking for doesn&apos;t exist.</p>
          <button
            onClick={() => router.push('/Blog')}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Back to Blogs
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 px-4 pt-20 pb-16">
      <div className="max-w-4xl mx-auto">
        {/* Blog Title */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 text-center leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {blog.title}
        </motion.h1>

        {/* Blog Image */}
        <motion.div
          className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="aspect-video">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Blog Content Area */}
        <motion.div
          className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 md:p-12 min-h-[400px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {blog.content ? (
            <div 
              className="text-gray-300 leading-relaxed space-y-6 prose prose-lg prose-invert max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-p:leading-relaxed prose-strong:text-white prose-ul:text-gray-300 prose-li:text-gray-300"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          ) : (
            <div className="flex items-center justify-center h-full min-h-[300px]">
              <div className="text-center">
                <motion.div
                  className="text-6xl mb-6 opacity-30"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                </motion.div>
                <h2 className="text-2xl font-bold text-white mb-4">No content available</h2>
                <p className="text-white text-sm">No content has been written for this blog yet <span className="animate-pulse">...</span></p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}