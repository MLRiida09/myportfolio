"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { heroAssets, maze, obstacles, social } from "../../../../assets/assets";
import { FaPersonFalling, FaPersonWalkingLuggage,  } from "react-icons/fa6";
import { CgDanger } from "react-icons/cg";
import { LiaTrophySolid } from "react-icons/lia";

const Hero = () => {
  // State to toggle between maze and contact form
  const [showBlankMaze, setShowBlankMaze] = useState(false);
  
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });



  // Handle input changes for form fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission - opens email client with pre-filled content
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email subject
    const subject = encodeURIComponent('Contact Request from Website');
    
    // Email body with user data
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
${formData.company ? `Company: ${formData.company}` : ''}

Please contact me.
    `);
    
    // Open email client
    window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
    
    // Reset form after submission
    setFormData({ name: '', email: '', company: '' });
  };

  // Render maze cells based on cell type
  const renderMazeCell = (cell: number) => {
    if (showBlankMaze) {
      // When showing contact form, all cells become wall color
      return <div className="w-8 h-8 bg-gray-800" />;
    }

    switch (cell) {
      case 1: // Wall
        return <div className="w-8 h-8 bg-gray-800" />;
      case 2: // Start position (You)
        return (
          <div className="w-8 h-8 bg-gray-900 flex items-center justify-center">
            <FaPersonWalkingLuggage className="text-blue-400 text-lg drop-shadow-[0_0_4px_rgba(96,165,250,0.8)]" />
          </div>
        );
      case 3: // Obstacles
        return (
          <div className="w-8 h-8 bg-gray-900 flex items-center justify-center">
            <CgDanger className="text-red-500 text-lg drop-shadow-[0_0_4px_rgba(239,68,68,0.8)]" />
          </div>
        );
      case 4: // Goal (Success)
        return (
          <div className="w-8 h-8 flex items-center justify-center bg-transparent">
            <LiaTrophySolid className="text-green-400 text-2xl drop-shadow-[0_0_4px_rgba(34,197,94,0.8)]" />
          </div>
        );
      case 5: // Quit point
        return (
          <div className="w-8 h-8 flex items-center justify-center rounded">
            <FaPersonFalling className="text-red-500 text-lg" />
          </div>
        );
      default: // Path
        return <div className="w-8 h-8 bg-gray-900" />;
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-[10vh] sm:pt-[12vh]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            {/* Main title */}
            <h1 className="text-4xl lg:text-7xl font-bold text-white">
              {heroAssets.title}
            </h1>
            {/* Subtitle */}
            <h2 className="text-lg lg:text-3xl text-gray-300">
              {heroAssets.subtitle}
            </h2>
            {/* Description */}
            <p className="text-base text-gray-300 max-w-lg mx-auto lg:mx-0">
              {heroAssets.description}
            </p>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {heroAssets.buttons.map((btn, index) => {
                const Icon = btn.icon;
                const isPdf = btn.link.endsWith(".pdf");
                
                // Check if this is the contact button
                const isGetInTouch = btn.text.toLowerCase().includes("get in touch") || 
                                   btn.text.toLowerCase().includes("contact");
                
                if (isGetInTouch) {
                  // Contact button - toggles maze/form view
                  return (
                    <button
                      key={index}
                      onClick={() => setShowBlankMaze(!showBlankMaze)}
                      className={`inline-flex items-center gap-3 px-6 py-3 rounded-lg transition-colors ${btn.style}`}
                    >
                      <Icon />
                      {btn.text}
                    </button>
                  );
                }
                
                // Regular buttons (download, external links, etc.)
                return (
                  <a
                    key={index}
                    href={btn.link}
                    download={isPdf}
                    className={`inline-flex items-center gap-3 px-6 py-3 rounded-lg transition-colors ${btn.style}`}
                  >
                    <Icon />
                    {btn.text}
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right side - Maze/Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-4 hidden md:flex"
          >
            {/* Maze container with contact form overlay */}
            <motion.div 
              className="p-4 rounded-xl bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-700 shadow-2xl"
              animate={{ 
                scale: 1,
                boxShadow: showBlankMaze 
                  ? "0 25px 50px -12px rgba(0, 0, 0, 0.8)" 
                  : "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Maze grid */}
              <div
                className="grid gap-0 text-[0px] relative"
                style={{ gridTemplateColumns: `repeat(${maze[0].length}, 1fr)` }}
              >
                {/* Render maze cells */}
                {maze.map((row, i) =>
                  row.map((cell, j) => (
                    <motion.div 
                      key={`${i}-${j}`}
                      initial={false}
                      animate={{ 
                        scale: showBlankMaze ? [1, 0.95, 1] : 1, // Wave effect
                        backgroundColor: showBlankMaze ? "#374151" : undefined
                      }}
                      transition={{ 
                        duration: 0.4, 
                        delay: showBlankMaze ? (i + j) * 0.02 : 0, // Staggered animation
                        ease: "easeInOut"
                      }}
                    >
                      {renderMazeCell(cell)}
                    </motion.div>
                  ))
                )}
                
                {/* Contact form overlay (appears over maze when showBlankMaze is true) */}
                {showBlankMaze && (
                  <motion.div 
                    className="absolute inset-0 flex flex-col justify-center items-center gap-2 p-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {/* Form header with close button */}
                    <div className="flex items-center justify-between w-full mb-1">
                      <h3 className="text-sm font-bold text-white">Contact Me</h3>
                    </div>
                    
                    {/* Contact form */}
                    <form onSubmit={handleSubmit} className="w-full space-y-2">
                      {/* Name field */}
                      <motion.input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-2 py-1.5 bg-gray-900/80 backdrop-blur-sm border border-gray-600/50 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-xs"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      />
                      
                      {/* Email field */}
                      <motion.input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-2 py-1.5 bg-gray-900/80 backdrop-blur-sm border border-gray-600/50 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-xs"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                      />
                      
                      {/* Company field (optional) */}
                      <motion.input
                        type="text"
                        name="company"
                        placeholder="Company (Optional)"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-2 py-1.5 bg-gray-900/80 backdrop-blur-sm border border-gray-600/50 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-xs"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                      />
                      
                      {/* Submit button */}
                      <motion.button
                        type="submit"
                        className="w-full bg-blue-600/90 backdrop-blur-sm hover:bg-blue-700 text-white font-medium py-1.5 px-3 rounded transition-colors text-xs"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Send
                      </motion.button>
                    </form>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Bottom card - Maze legend or Social icons */}
            <motion.div 
              className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-600 rounded-lg p-3 w-full shadow-lg"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Show maze legend when not in contact mode */}
              {!showBlankMaze ? (
                <motion.div 
                  className="flex items-center gap-3 text-xs"
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* You (start position) */}
                  <div className="flex items-center gap-2 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
                    <FaPersonWalkingLuggage className="text-blue-400 text-lg" />
                    <span className="text-blue-400 font-medium">You</span>
                  </div>
                  
                  {/* Obstacles */}
                  {obstacles.map((o, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1 bg-red-500/10 px-2 py-1 rounded border border-red-500/20"
                    >
                      <CgDanger className="text-red-500 text-lg" />
                      <span className="text-red-400 text-[10px]">{o}</span>
                    </div>
                  ))}
                  
                  {/* Quit point */}
                  <div className="flex items-center gap-1 bg-red-500/10 px-2 py-1 rounded border border-red-500/20">
                    <FaPersonFalling className="text-red-500 text-lg" />
                    <span className="text-red-400 text-[10px]">Quit</span>
                  </div>
                  
                  {/* Success goal */}
                  <div className="flex items-center gap-2 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">
                    <LiaTrophySolid className="text-green-400 text-lg" />
                    <span className="text-green-400 font-medium">Success</span>
                  </div>
                </motion.div>
              ) : (
                /* Show social media icons when in contact mode */
                <motion.div 
                  className="flex items-center justify-center gap-4 text-xs"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {social.map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={i}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.4 + (i * 0.1), // Staggered appearance
                          ease: "easeOut"
                        }}
                        
                      >
                        <Icon className="text-slate-200 text-lg drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]" />
                        <span className="text-slate-100 text-[11px] font-medium tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                          {social.label}
                        </span>
                      </motion.a>
                    );
                  })}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;