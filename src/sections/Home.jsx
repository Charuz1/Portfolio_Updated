import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Download, Heart, Stars } from "lucide-react";


const Home = () => {
    const [text, setText] = useState("");
    const fullText = "Full Stack Developer";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText[index]);
                setIndex((prev) => prev + 1);
            }, 150);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-light text-white mb-2">
                            Hi, I am
                        </h2>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                            Charuka Herath
                        </h1>

                        <h2 className="text-3xl md:text-5xl font-bold mb-8">
                            And I'm a{" "}
                            <span className="text-neutral-400 font-serif italic">
                                {text}
                            </span>

                            <span className="inline-block w-1 h-10 bg-white ml-2 animate-pulse align-middle" />
                        </h2>

                        <p className="text-neutral-400 text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
                            A thoughtfully curated showcase of my work, ideas,
                            and design process, focused on creating meaningful,
                            user-centered, and visually engaging digital experiences.
                        </p>

                        <div className="flex flex-col gap-8">

                            {/* Social Icons */}
                            <div className="flex items-center gap-4">

                                <a
                                    href="https://linkedin.com/in/charukaherath"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                                >
                                    <Linkedin size={20} />
                                </a>

                                <a
                                    href="https://github.com/Charuz1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                                >
                                    <Github size={20} />
                                </a>

                            </div>

                            {/* CTA */}
                            <motion.a
                                href="/cv.pdf"
                                download="Charuka_Herath_CV.pdf"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-fit px-10 py-4 rounded-full bg-[#3d2f2d] text-[#e8c0b0] font-bold shadow-[0_0_20px_rgba(61,47,45,0.4)] hover:shadow-[0_0_30px_rgba(61,47,45,0.6)] transition-all border border-[#e8c0b0]/10 flex items-center gap-2"
                            >
                                <Download size={20} />
                                Download CV
                            </motion.a>

                        </div>
                    </motion.div>

                    {/* Right Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative flex justify-center lg:justify-end"
                    >

                        {/* Decorative Background Shape */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-[#1a1a1a] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] opacity-20 blur-3xl animate-pulse" />

                        <div className="relative z-10 w-full max-w-lg aspect-square">

                            {/* Image Frame */}
                            <div className="absolute inset-0 bg-[#151515] rounded-[40%_60%_70%_30%/40%_40%_60%_60%] border border-white/5 shadow-2xl overflow-hidden">

                                <img
                                    src="/my.png"
                                    alt="Charuka Herath Profile"
                                    className="w-full h-full object-cover transition-all duration-700"
                                />

                            </div>

                            {/* Floating Stats - Top Right */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute top-10 -right-4 bg-neutral-900/90 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-xl z-20"
                            >
                                <div className="flex items-center gap-3">

                                    <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">
                                        <Heart size={16} />
                                    </div>

                                    <div className="pr-2">
                                        <p className="text-[8px] text-neutral-400 uppercase tracking-widest font-bold">
                                            Passion
                                        </p>

                                        <p className="text-xs text-white font-medium whitespace-nowrap">
                                            Design & Code
                                        </p>
                                    </div>

                                </div>
                            </motion.div>

                            {/* Floating Stats - Bottom Left */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                                className="absolute bottom-20 -left-6 bg-neutral-900/90 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-xl z-20"
                            >
                                <div className="flex items-center gap-3">

                                    <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400">
                                        <Stars size={16} />
                                    </div>

                                    <div className="pr-2">
                                        <p className="text-[8px] text-neutral-400 uppercase tracking-widest font-bold">
                                            Experience
                                        </p>

                                        <p className="text-xs text-white font-medium whitespace-nowrap">
                                            Ready to Build
                                        </p>
                                    </div>

                                </div>
                            </motion.div>

                        </div>

                        {/* Decorative Outline */}
                        <div className="absolute -inset-4 border border-white/5 rounded-[40%_60%_70%_30%/40%_40%_60%_60%] -z-10 animate-[spin_20s_linear_infinite]" />

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Home;