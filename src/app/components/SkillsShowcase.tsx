'use client';
import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { Space_Mono } from 'next/font/google';

const spaceMono = Space_Mono({
    weight: ['400', '700'],
    subsets: ['latin'],
});

import { SiJavascript, SiTypescript, SiFlutter, SiDart, SiGoland, SiC, SiCplusplus, SiSolidity, SiSolana, SiShadcnui, SiFramer, SiEthereum, SiFirebase, SiMongodb, SiMysql } from 'react-icons/si';
import { FaShieldAlt, FaUserShield, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
  { 
    name: 'React', 
    icon: <FaReact className="text-cyan-400" />,
    description: 'A JavaScript library for building user interfaces, particularly single-page applications. Known for its component-based architecture and virtual DOM.'
  },
  { 
    name: 'Node.js', 
    icon: <FaNodeJs className="text-green-400" />,
    description: 'A JavaScript runtime built on Chrome\'s V8 engine that enables server-side development with JavaScript. Perfect for building scalable network applications.'
  },
  { 
    name: 'JavaScript', 
    icon: <SiJavascript className="text-yellow-400" />,
    description: 'A high-level, interpreted programming language that is one of the core technologies of the World Wide Web. Essential for web development.'
  },
  { 
    name: 'TypeScript', 
    icon: <SiTypescript className="text-blue-400" />,
    description: 'A strongly typed programming language that builds on JavaScript, adding optional static types, classes, and modules for better development experience.'
  },
  { 
    name: 'Flutter', 
    icon: <SiFlutter className="text-cyan-300" />,
    description: 'Google\'s UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase using Dart.'
  },
  { 
    name: 'Dart', 
    icon: <SiDart className="text-blue-300" />,
    description: 'A client-optimized language for fast apps on any platform. Used primarily for Flutter development and web applications.'
  },
  { 
    name: 'Golang', 
    icon: <SiGoland className="text-teal-300" />,
    description: 'Go is a statically typed, compiled programming language designed at Google. Known for its simplicity, efficiency, and excellent concurrency support.'
  },
  { 
    name: 'Java', 
    icon: <FaJava className="text-orange-400" />,
    description: 'A high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.'
  },
  { 
    name: 'C', 
    icon: <SiC className="text-blue-500" />,
    description: 'A general-purpose programming language created by Dennis Ritchie. Known for its efficiency and control over system resources.'
  },
  { 
    name: 'C++', 
    icon: <SiCplusplus className="text-blue-300" />,
    description: 'An extension of the C programming language with object-oriented features. Widely used for system software, game development, and applications.'
  },
  { 
    name: 'Solidity', 
    icon: <SiSolidity className="text-yellow-300" />,
    description: 'A statically-typed programming language designed for developing smart contracts that run on the Ethereum Virtual Machine (EVM).'
  },
  { 
    name: 'Solana', 
    icon: <SiSolana className="text-green-300" />,
    description: 'A high-performance blockchain platform designed for decentralized applications and marketplaces. Known for its fast transaction speeds.'
  },
  { 
    name: 'Shadcn', 
    icon: <SiShadcnui className="text-gray-400" />,
    description: 'A collection of re-usable components built using Radix UI and Tailwind CSS. Provides beautiful, accessible components for modern web applications.'
  },
  { 
    name: 'Framer Motion', 
    icon: <SiFramer className="text-purple-400" />,
    description: 'A production-ready motion library for React. Makes it easy to create smooth animations and transitions in React applications.'
  },
  { 
    name: 'Ethereum', 
    icon: <SiEthereum className="text-gray-500" />,
    description: 'A decentralized, open-source blockchain with smart contract functionality. The foundation for decentralized applications (dApps).'
  },
  { 
    name: 'Next Auth', 
    icon: <FaShieldAlt className="text-green-400" />,
    description: 'A complete authentication solution for Next.js applications. Provides secure, flexible authentication with multiple providers and session management.'
  },
  { 
    name: 'Clerk', 
    icon: <FaUserShield className="text-blue-400" />,
    description: 'A complete user management system for developers. Provides authentication, user profiles, and user management with a beautiful UI.'
  },
  { 
    name: 'Firebase', 
    icon: <SiFirebase className="text-orange-400" />,
    description: 'Google\'s mobile and web application development platform. Provides tools for authentication, database, hosting, and analytics.'
  },
  { 
    name: 'MongoDB', 
    icon: <SiMongodb className="text-green-500" />,
    description: 'A source-available cross-platform document-oriented database program. Classified as a NoSQL database program using JSON-like documents.'
  },
  { 
    name: 'MySQL', 
    icon: <SiMysql className="text-blue-500" />,
    description: 'An open-source relational database management system. One of the most popular databases for web applications and online transaction processing.'
  },
  { 
    name: 'Hardhat', 
    icon: <div className="text-orange-400 font-bold text-4xl">H</div>,
    description: 'A development environment for Ethereum that helps developers compile, deploy, test, and debug smart contracts. Provides a comprehensive toolkit for Ethereum development.'
  },
  { 
    name: 'Foundry', 
    icon: <div className="text-red-400 font-bold text-4xl">F</div>,
    description: 'A blazing fast, portable and modular toolkit for Ethereum application development written in Rust. Provides testing, deployment, and development tools for smart contracts.'
  },
];

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export default function SkillsShowcase() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  const openModal = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-black py-20" id="skills">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent ${spaceMono.className}`}>
          &#47;&#47; Tools that I have used
        </h2>
      </div>
      <div className="flex justify-center items-center max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSkillIndex}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => openModal(skills[currentSkillIndex])}
            className="flex flex-col items-center justify-center bg-[#23232a] rounded-2xl shadow-[0_4px_32px_0_rgba(59,130,246,0.15),0_1.5px_8px_0_rgba(147,51,234,0.10),0_1px_4px_0_rgba(236,72,153,0.08)] hover:shadow-[0_8px_40px_0_rgba(59,130,246,0.25),0_3px_16px_0_rgba(147,51,234,0.18),0_2px_8px_0_rgba(236,72,153,0.14)] transition-all duration-300 p-6 sm:p-8 md:p-12 group cursor-pointer w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4 drop-shadow-[0_0_12px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform duration-300">
              {skills[currentSkillIndex].icon}
            </div>
            <span className="text-white text-sm sm:text-base md:text-lg font-mono opacity-70 text-center">{skills[currentSkillIndex].name}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hidden sm:flex justify-center mt-8 gap-2">
        {skills.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSkillIndex 
                ? 'bg-cyan-400 scale-125' 
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => setCurrentSkillIndex(index)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#1a1a1a] border-2 border-cyan-500/30 rounded-2xl p-8 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaTimes size={20} />
              </button>

              <div className="text-center">
                <div className="text-6xl mb-4 drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]">
                  {selectedSkill.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 font-mono">
                  {selectedSkill.name}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {selectedSkill.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 