'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaPaperPlane } from 'react-icons/fa6';
import { Space_Mono } from 'next/font/google';

const spaceMono = Space_Mono({
    weight: ['400', '700'],
    subsets: ['latin'],
});

const AboutMe = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => { setIsClient(true); }, []);

    return (
        <section className="w-full bg-black py-20 overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Abstract Cyberpunk Animation */}
                    <div className="lg:w-1/2 flex items-center justify-center">
                        <motion.div
                            className="relative w-80 h-80"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            {/* Central Core */}
                            <motion.div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-green-400/30 to-cyan-400/30 rounded-full border-2 border-cyan-400"
                                animate={{
                                    boxShadow: [
                                        '0 0 20px rgba(45, 212, 191, 0.2)',
                                        '0 0 40px rgba(45, 212, 191, 0.4)',
                                        '0 0 20px rgba(45, 212, 191, 0.2)',
                                    ],
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            
                            {/* Orbiting Nodes */}
                            {isClient && [...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-6 h-6 bg-cyan-400 rounded-full"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        x: '-50%',
                                        y: '-50%',
                                    }}
                                    animate={{
                                        rotate: 360,
                                        x: `${(Math.cos(i * Math.PI / 2) * 140)}px`,
                                        y: `${(Math.sin(i * Math.PI / 2) * 140)}px`,
                                    }}
                                    transition={{
                                        duration: 8 + i * 2,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                />
                            ))}

                            {/* Glitchy Connectors */}
                            {isClient && [...Array(4)].map((_, i) => (
                                <svg key={i} className="absolute top-0 left-0 w-full h-full overflow-visible">
                                    <motion.line
                                        x1="50%"
                                        y1="50%"
                                        x2="50%"
                                        y2="50%"
                                        stroke="rgba(45, 212, 191, 0.3)"
                                        strokeWidth="1"
                                        animate={{
                                            x2: `calc(50% + ${(Math.cos(i * Math.PI / 2) * 140)}px)`,
                                            y2: `calc(50% + ${(Math.sin(i * Math.PI / 2) * 140)}px)`,
                                        }}
                                        transition={{
                                            duration: 8 + i * 2,
                                            repeat: Infinity,
                                            ease: 'linear',
                                        }}
                                    />
                                </svg>
                            ))}
                        </motion.div>
                    </div>

                    {/* About Me Content */}
                    <motion.div 
                        className="lg:w-1/2 space-y-6"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent ${spaceMono.className}`}>
                            &#47;&#47; About Me
                        </h2>
                        
                        <div className="space-y-4 text-gray-300">
                             <p className="leading-relaxed">
                             Hey, I'm Sarthak — a web and app developer who's more inclined towards Web3. I’m comfortable building full-stack apps, writing clean and scalable code, and working with both frontend and backend. I’ve got solid hands-on experience with Solidity, and I’ve explored Rust too.


                              </p>
                              
                              <p className="leading-relaxed">
                              I love learning by building, and I’m always curious about how things work under the hood , especially when it comes to blockchain tech. Whether it’s smart contracts or digging into protocol-level stuff, I enjoy figuring it all out.

Always up for solving real problems, experimenting with new tools, and just leveling up every day.
                              </p>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <motion.a
                                href="mailto:sarthakit12412004@iiitsonepat.ac.in"
                                className={`px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg text-black font-semibold flex items-center gap-2 ${spaceMono.className}`}
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(45, 212, 191, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaPaperPlane />
                                Hire Me
                            </motion.a>

                            <motion.a
                                href="/static/Sarthak_Resume.pdf"
                                download="Sarthak_Resume"
                                className={`px-6 py-3 bg-transparent border-2 border-cyan-500/50 rounded-lg text-cyan-400 font-semibold flex items-center gap-2 hover:bg-cyan-500/10 hover:border-cyan-400 transition-colors ${spaceMono.className}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaDownload />
                                Resume
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe; 