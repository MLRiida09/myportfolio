import React from 'react';
import { Navlinks } from '../../../../assets/assets';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

function MobileNavbar({ closeNav, showNav }: Props) {
  return (
    <div className="lg:hidden">
      <AnimatePresence>
        {showNav && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100002]"
              onClick={closeNav}
            />

            {/* Navigation Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                damping: 20, 
                stiffness: 100,
                duration: 0.6 
              }}
              className="fixed right-0 top-0 h-full w-[85%] sm:w-[70%] md:w-[60%] 
                         bg-gradient-to-bl from-gray-900 via-gray-800 to-gray-900 
                         z-[100050] shadow-2xl border-l border-gray-700"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-white text-xl font-bold"
                >
                  Menu
                </motion.h2>
                
                <button
                  onClick={closeNav}
                  className="p-2 hover:bg-gray-700/50 rounded-lg transition-all duration-300 "
                  aria-label="Close navigation"
                >
                  <CgClose className="text-white w-6 h-6 " />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col justify-center h-[calc(100%-80px)] px-6">
                <div className="space-y-2">
                  {Navlinks.map((link, index) => (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.1 * index + 0.3,
                        duration: 0.5,
                        ease: 'easeOut'
                      }}
                    >
                      <Link
                        href={link.url}
                        onClick={closeNav}
                        className="block group"
                      >
                        <div className="flex items-center p-4 rounded-xl  border border-transparent ">
                          <motion.p
                            className="text-white text-lg sm:text-xl font-medium "
                          >
                            {link.label}
                          </motion.p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNavbar;