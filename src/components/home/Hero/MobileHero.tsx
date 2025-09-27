import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { heroAssets } from "../../../../assets/assets";
import { FaSquareUpwork, FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaStackOverflow } from "react-icons/fa";
import { SiWellfound } from "react-icons/si";
import { IoClose } from "react-icons/io5";

const social = [
  { icon: FaSquareUpwork, label: "Upwork", link: "https://www.upwork.com/freelancers/~01296c693cf92bee69" },
  { icon: FaLinkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/rida-mellal-203989371/" },
  { icon: FaGithub, label: "GitHub", link: "https://github.com/MLRiida09" },
  { icon: FaStackOverflow, label: "StackOverflow", link: "https://stackoverflow.com/users/31533786/rida-mellal" },
  { icon: SiWellfound, label: "Wellfound", link: "https://wellfound.com/u/rida-mellal-2" },
];

const MobileHero = () => {
  const [showSocialCard, setShowSocialCard] = useState(false);

  const handleContactClick = () => {
    setShowSocialCard(true);
  };

  const closeSocialCard = () => {
    setShowSocialCard(false);
  };

  const handleSocialLink = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='lg:hidden pt-[20vh] relative'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 gap-10 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6 text-center'
          >
            <h1 className='text-4xl font-bold text-white leading-tight'>
              {heroAssets.title}
            </h1>
            <h2 className='text-lg text-gray-300'>
              {heroAssets.subtitle}
            </h2>
            <p className='text-base text-gray-300 max-w-lg mx-auto leading-relaxed'>
              {heroAssets.description}
            </p>

            <motion.div 
              className='flex flex-col sm:flex-row gap-4 justify-center pt-4'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {heroAssets.buttons.map((btn, index) => {
                const Icon = btn.icon;
                const isPdf = btn.link.endsWith(".pdf");
                const isContact =
                  btn.text.toLowerCase().includes("get in touch") ||
                  btn.text.toLowerCase().includes("contact");

                if (isContact) {
                  return (
                    <motion.button
                      key={index}
                      className={`inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 ${btn.style} min-w-[140px]`}
                      onClick={handleContactClick}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={`${btn.text} button`}
                    >
                      <Icon className="text-lg" />
                      <span className="text-sm font-medium">{btn.text}</span>
                    </motion.button>
                  );
                } else if (isPdf) {
                  return (
                    <motion.a
                      key={index}
                      href={btn.link}
                      download
                      className={`inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 ${btn.style} min-w-[140px]`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={`Download ${btn.text}`}
                    >
                      <Icon className="text-lg" />
                      <span className="text-sm font-medium">{btn.text}</span>
                    </motion.a>
                  );
                } else {
                  return (
                    <motion.a
                      key={index}
                      href={btn.link}
                      target={btn.link.startsWith('http') ? '_blank' : '_self'}
                      rel={btn.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 ${btn.style} min-w-[140px]`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={btn.text}
                    >
                      <Icon className="text-lg" />
                      <span className="text-sm font-medium">{btn.text}</span>
                    </motion.a>
                  );
                }
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Social Media Card Modal */}
      <AnimatePresence>
        {showSocialCard && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={closeSocialCard}
            />

            {/* Social Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-2xl p-6 z-50 max-w-md mx-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Get in Touch</h3>
                <button
                  onClick={closeSocialCard}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <IoClose className="text-gray-400 hover:text-white text-xl" />
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-6 text-center">
                Connect with me on these platforms
              </p>

              {/* Social Links */}
              <div className="space-y-3">
                {social.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleSocialLink(item.link)}
                      className="w-full flex items-center gap-4 p-4 bg-gray-800/50 hover:bg-gray-700/70 rounded-xl transition-all duration-300 group"
                    >
                      <div className="flex-shrink-0">
                        <Icon className="text-2xl text-blue-400 group-hover:text-blue-300 transition-colors" />
                      </div>
                      <div className="flex-1 text-left">
                        <span className="text-white font-medium group-hover:text-blue-100 transition-colors">
                          {item.label}
                        </span>
                      </div>
                      <div className="flex-shrink-0">
                        <svg 
                          className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-gray-700">
                <p className="text-xs text-gray-400 text-center">
                  Click any platform to connect with me
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileHero