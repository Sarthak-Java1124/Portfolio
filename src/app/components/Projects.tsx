'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Space_Mono } from 'next/font/google';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './projectButtons.css';

const spaceMono = Space_Mono({
    weight: ['400', '700'],
    subsets: ['latin'],
});

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubLink: string;
    liveLink?: string;
    index: number;
    isActive: boolean;
}

const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: index * 0.2,
            ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number]
        }
    })
};

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    technologies,
    imageUrl,
    githubLink,
    liveLink,
    index,
    isActive
}) => {
    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            animate={isActive ? "animate" : "initial"}
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className={`group relative bg-black/50 border-2 border-cyan-500/30 rounded-xl p-2 sm:p-3 md:p-4 overflow-hidden w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto
                       transition-all duration-300 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20
                       ${isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}
        >
            <div className="relative z-10">
                <motion.div 
                    className="relative h-24 sm:h-32 md:h-40 mb-2 sm:mb-3 md:mb-4 overflow-hidden rounded-lg border border-cyan-500/20 group-hover:border-cyan-400 transition-all duration-300"
                >
                    <motion.img 
                        src={imageUrl} 
                        alt={title} 
                        className="object-contain w-full h-full transition-all duration-300"
                    />
                </motion.div>

                <h3 
                    className={`text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2 text-cyan-400 group-hover:text-green-400 transition-colors duration-300 ${spaceMono.className} break-words`}
                >
                    {title}
                </h3>

                <div className="min-h-[40px] sm:min-h-[48px] md:min-h-[64px] mb-2 sm:mb-3 relative">
                    <p className="text-gray-400 text-[9px] sm:text-xs transition-opacity duration-300 group-hover:opacity-0 leading-tight break-words">
                        {description}
                    </p>
                    <p className="absolute top-0 left-0 w-full h-full text-[9px] sm:text-xs md:text-sm text-green-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [text-shadow:0_0_8px_rgba(74,222,128,0.7)] leading-tight break-words">
                        {description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                    {technologies.map((tech) => (
                        <span 
                            key={tech}
                            className="px-1 sm:px-1.5 md:px-2 py-0.5 sm:py-1 text-[8px] sm:text-[10px] md:text-xs rounded-full bg-cyan-900/50 text-cyan-300 border border-cyan-500/30
                                       transition-all duration-300 group-hover:bg-green-900/50 group-hover:text-green-300 group-hover:border-green-500/30 break-words"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-1 sm:gap-2 md:gap-3 mt-2 sm:mt-3 md:mt-4">
                    <motion.a 
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn text-[8px] sm:text-[10px] md:text-xs px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/50
                                   transition-all duration-300 cursor-pointer whitespace-nowrap"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        GitHub
                    </motion.a>
                    {liveLink && (
                        <motion.a 
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-btn text-[8px] sm:text-[10px] md:text-xs px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 rounded-md bg-green-500/10 text-green-400 border border-green-500/50
                                       transition-all duration-300 cursor-pointer whitespace-nowrap"
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Live Demo
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    
    const projects = [
        {
            title: "FixFit",
            description: "FixFit is an e-tailoring app where users can book small tailoring services such as altering, rafu, iron, dry cleaning, and more. A comprehensive platform connecting customers with local tailoring services.",
            technologies: ["Shadcn", "Node.js", "React.js", "Next.js", "MongoDB", "Next Auth"],
            imageUrl: "/static/FixFit.png",
            githubLink: "https://github.com/Sarthak-Java1124/FixFit",
            liveLink: "https://fix-fit.vercel.app/"
        },
        {
            title: "Maskd",
            description: "Maskd is an anonymous feedback and messaging platform inspired by NGL link, enabling users to receive honest, unfiltered feedback while maintaining complete anonymity. Built with AI-powered content moderation and secure messaging infrastructure.",
            technologies: ["Open AI", "Next.js", "Node.js", "React.js", "Tailwind CSS", "Shadcn", "Next Auth", "MongoDB"],
            imageUrl: "/static/maskd.png",
            githubLink: "https://github.com/Sarthak-Java1124/Maskd",
            liveLink: "https://maskd-eight.vercel.app/"
        },
        {
            title: "Robo Mint",
            description: "Robo Mint is a NFT minting marketplace for different robotos",
            technologies: ["Next.js", "Tailwind CSS", "Solana", "Shadcn", "Framer Motion", "Ethereum", "Node.js"],
            imageUrl: "/static/roboto-mint-preview.png",
            githubLink: "https://github.com/Sarthak-Java1124/RoboMint",
            liveLink: "https://robo-mint-nnie.vercel.app/"
        },
        {
            title: "1Stop",
            description: "1Stop is a feature-rich e-commerce application built with Flutter, delivering a seamless cross-platform shopping experience with Firebase integration.",
            technologies: ["Flutter", "Dart", "Firebase"],
            imageUrl: "/static/onestop.png",
            githubLink: "https://github.com/Sarthak-Java1124/FlutterEcommerce",
            liveLink: "https://youtube.com/shorts/HvWmdJ0y1ws"
        },
        {
            title: "CryptoWave",
            description: "CryptoWave is a web3 portfolio management app build on flutter and dart",
            technologies: ["Flutter", "Dart", "Solana", "Ethereum", "Getx"],
            imageUrl: "/static/appLogo (2).png",
            githubLink: "https://github.com/Sarthak-Java1124/CryptoWave",
            liveLink: "#"
        },
        {
            title: "Suggestion Blocker",
            description: "A browser extension that blocks YouTube suggestions and feed to help users stay focused and avoid distractions while watching videos. Enhances productivity by providing a cleaner, distraction-free YouTube experience.",
            technologies: ["TypeScript"],
            imageUrl: "/static/suggestion-blocker-preview.png",
            githubLink: "https://github.com/Sarthak-Java1124/JavaScriptExtension",
            liveLink: "#"
        },
        {
            title: "Terminal GPT",
            description: "A Cursor/CodeGen-style extension for command line interfaces that provides intelligent command suggestions and autocompletion. Enhances terminal productivity by offering context-aware command recommendations and smart autocomplete functionality.",
            technologies: ["Python"],
            imageUrl: "/static/terminal-gpt-preview.png",
            githubLink: "https://github.com/Sarthak-Java1124/CMDCHATGPT",
            liveLink: "#"
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <motion.section 
            className="py-16 sm:py-20 px-4 max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            id="projects"
        >
            <div className="text-center mb-12 sm:mb-16">
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent ${spaceMono.className}`}>
                    &#47;&#47; My Projects
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm mt-2">A selection of my work in the web3 and web development space.</p>
            </div>
            
            <div className="relative">
                <motion.button
                    onClick={prevSlide}
                    className="hidden sm:block absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/80 border border-cyan-500/50 rounded-full p-2 sm:p-3 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 transition-all duration-300 hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaChevronLeft size={16} className="sm:w-5 sm:h-5" />
                </motion.button>
                
                <motion.button
                    onClick={nextSlide}
                    className="hidden sm:block absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/80 border border-cyan-500/50 rounded-full p-2 sm:p-3 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 transition-all duration-300 hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaChevronRight size={16} className="sm:w-5 sm:h-5" />
                </motion.button>

                <div 
                    className="relative overflow-hidden rounded-xl"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <motion.div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {projects.map((project, index) => (
                            <div key={index} className="w-full flex-shrink-0 px-1 sm:px-2 md:px-4">
                                <ProjectCard 
                                    {...project}
                                    index={index}
                                    isActive={index === currentIndex}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="hidden sm:flex justify-center mt-6 sm:mt-8 gap-1 sm:gap-2">
                    {projects.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex 
                                    ? 'bg-cyan-400 scale-125' 
                                    : 'bg-gray-600 hover:bg-gray-500'
                            }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Projects; 