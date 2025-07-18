'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from 'react-icons/fa6';

const socials = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/Sarthak-Java1124',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/sarthak-harsh-3980b625b/',
  },
  {
    name: 'X',
    icon: FaXTwitter,
    url: 'https://x.com/SarthakHarsh',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    url: 'mailto:sarthakit12412004@gmail.com',
  },
];

const wireColor = 'bg-gradient-to-r from-blue-500/40 via-blue-400/20 to-purple-600/40';

const ContactMe: React.FC = () => {
  return (
    <section className="w-full bg-black py-16 sm:py-20 scroll-mt-20" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Contact Me
        </h2>
        
        <div className="relative h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] w-full">

          <div className={`absolute left-0 right-0 top-1/2 h-1 ${wireColor} rounded-full z-0`} style={{ transform: 'translateY(-50%)' }} />
          

          <motion.div
            className="z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-black border border-blue-500/30 rounded-xl flex items-center justify-center shadow-2xl"
            initial={{ scale: 0.8, boxShadow: '0 0 0px #3b82f6' }}
            animate={{ scale: [0.8, 1.1, 1], boxShadow: ['0 0 0px #3b82f6', '0 0 40px #3b82f6', '0 0 24px #6366f1'] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          >
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-400">
              <FaEnvelope />
            </span>
          </motion.div>


          <div className="absolute left-0 top-1/2 flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-8 -translate-y-1/2 z-10">
            {socials.map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.div
                  key={social.name}
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: [0, 80, 160, 220], opacity: [0, 1, 0.8, 0.2] }}
                  transition={{
                    delay: i * 0.5,
                    duration: 2.2,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                  }}
                  className="relative"
                  style={{ zIndex: 20 - i }}
                >
                  <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-blue-400 bg-black rounded-full border border-blue-500/30 shadow-lg p-1 sm:p-1.5 md:p-2">
                    <Icon />
                  </span>
                </motion.div>
              );
            })}
          </div>


          <div className="absolute right-0 top-1/2 flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4 -translate-y-1/2 z-10">
            {socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.7 + i * 0.5,
                  duration: 0.8,
                  ease: 'easeOut'
                }}
                className="text-xs sm:text-sm md:text-base lg:text-lg font-mono text-blue-300 hover:text-purple-400 transition-colors duration-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-2 rounded-lg bg-black/60 border border-blue-500/20 shadow"
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe; 