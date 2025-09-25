"use client";
import Image from "next/image";
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

  // شاشة التحميل
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <motion.div className="flex flex-col items-center">
          <motion.div
            className="w-12 h-12 border-4 border-emerald-400 border-t-transparent rounded-full mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p
            className="text-gray-200 text-xl"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  // إذا لم يوجد المقال
  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <motion.div
          className="text-center max-w-md mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
          <p className="text-gray-400 mb-8">
            The blog you&apos;re looking for doesn&apos;t exist.
          </p>
          <motion.button
            onClick={() => router.push("/Blog")}
            className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Back to Blogs
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // الصفحة الرئيسية للمقال
  return (
    <main className="min-h-screen bg-gray-950 px-4 pt-20 pb-16 text-gray-200">
      <div className="max-w-4xl mx-auto">
        {/* Category Badge */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 text-emerald-400 text-sm font-medium">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            {blog.category || "General"}
          </span>
        </motion.div>

        {/* Blog Title */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {blog.title}
        </motion.h1>

        {/* Blog Description */}
        <motion.p
          className="text-xl text-gray-400 mb-10 leading-relaxed max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {blog.description}
        </motion.p>

        {/* Blog Image */}
        {blog.image && (
          <motion.div
            className="relative mb-12 rounded-2xl overflow-hidden shadow-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="aspect-video">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}

        {/* Blog Content Area */}
        <motion.div
          className="bg-gray-900/40 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 md:p-12 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {blog.content ? (
            <div
              className="prose prose-lg prose-invert max-w-3xl mx-auto
                prose-headings:text-white prose-headings:font-bold
                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                prose-strong:text-emerald-400 prose-strong:font-semibold
                prose-ul:text-gray-300 prose-li:text-gray-400 prose-li:mb-2
                prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:bg-gray-800/40 
                prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg
                prose-code:bg-gray-900 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-emerald-400
                prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:text-emerald-300"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          ) : (
            <div className="flex items-center justify-center h-full min-h-[400px]">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Content Coming Soon
                </h2>
                <p className="text-gray-400 text-lg">
                  This article is currently being written{" "}
                  <span className="animate-pulse">...</span>
                </p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Author Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-emerald-500/50">
              <Image
                
                alt="my-picture"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">Rida Mellal</h3>
              <p className="text-gray-400">Full Stack Developer</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
