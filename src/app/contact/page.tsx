'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import { Space_Mono } from 'next/font/google';

const spaceMono = Space_Mono({
    weight: ['400', '700'],
    subsets: ['latin'],
});

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });

            if (res.ok) {
                setStatus('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
                setTimeout(() => setStatus(''), 5000);
            } else {
                const errorData = await res.json();
                setStatus(`Error: ${errorData.error || 'Unknown error'}`);
                setTimeout(() => setStatus(''), 5000);
            }
        } catch (error) {
            console.error('Submission error', error);
            setStatus('Error: Could not send message.');
            setTimeout(() => setStatus(''), 5000);
        }
    };

    const inputVariant = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <div className="bg-black min-h-screen text-white flex items-center justify-center p-4 overflow-hidden">
            <motion.div 
                className="relative w-full max-w-lg p-8 space-y-8 bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl shadow-xl shadow-cyan-500/10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "circOut" }}
            >
                {/* Background Grid */}
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                
                <div className="text-center">
                    <motion.h1 
                        className={`text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent ${spaceMono.className}`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Get In Touch
                    </motion.h1>
                    <motion.p 
                        className="text-gray-400 mt-2 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Let's build something amazing together.
                    </motion.p>
                </div>
                
                {isClient ? (
                    <motion.form 
                        onSubmit={handleSubmit} 
                        className="space-y-8"
                        variants={{ show: { transition: { staggerChildren: 0.2 } } }}
                        initial="hidden"
                        animate="show"
                    >
                        {[{id: 'name', type: 'text', value: name, setter: setName, label: 'Your Name'},
                        {id: 'email', type: 'email', value: email, setter: setEmail, label: 'Your Email'},
                        {id: 'message', type: 'textarea', value: message, setter: setMessage, label: 'Your Message'}].map((field, i) => (
                            <motion.div key={field.id} className="relative" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} transition={{ delay: i * 0.1 + 0.5 }}>
                                {field.type === 'textarea' ? (
                                    <textarea
                                        id={field.id}
                                        value={field.value}
                                        onChange={(e) => field.setter(e.target.value)}
                                        required
                                        rows={4}
                                        className="peer w-full px-4 py-3 bg-transparent border-2 border-gray-700 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-300 placeholder-transparent"
                                        placeholder={field.label}
                                    />
                                ) : (
                                    <input
                                        id={field.id}
                                        type={field.type}
                                        value={field.value}
                                        onChange={(e) => field.setter(e.target.value)}
                                        required
                                        className="peer w-full px-4 py-3 bg-transparent border-2 border-gray-700 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-300 placeholder-transparent"
                                        placeholder={field.label}
                                    />
                                )}
                                <label 
                                    htmlFor={field.id} 
                                    className="absolute left-4 top-3.5 text-gray-400 text-base transition-all duration-300 pointer-events-none
                                               peer-focus:-top-3 peer-focus:left-3 peer-focus:text-cyan-400 peer-focus:text-xs peer-focus:bg-black peer-focus:px-1
                                               peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-cyan-400 peer-[:not(:placeholder-shown)]:bg-black peer-[:not(:placeholder-shown)]:px-1"
                                >
                                    {field.label}
                                </label>
                            </motion.div>
                        ))}
                        
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} transition={{ delay: 0.9 }}>
                            <motion.button
                                type="submit"
                                className={`w-full px-6 py-3 text-lg font-semibold text-black bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 ${spaceMono.className}`}
                                disabled={!isClient || status === 'Sending...'}
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(45, 212, 191, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiSend />
                                {status === 'Sending...' ? 'Transmitting...' : 'Send Message'}
                            </motion.button>
                        </motion.div>
                    </motion.form>
                ) : (
                    <div className="space-y-8 animate-pulse">
                        <div className="h-12 bg-gray-800 rounded-lg"></div>
                        <div className="h-12 bg-gray-800 rounded-lg"></div>
                        <div className="h-24 bg-gray-800 rounded-lg"></div>
                        <div className="h-12 bg-gray-800 rounded-lg"></div>
                    </div>
                )}

                <AnimatePresence>
                {isClient && status && status !== 'Sending...' && (
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`text-center text-sm mt-4 ${status.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}
                    >
                        {status}
                    </motion.p>
                )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default ContactPage; 