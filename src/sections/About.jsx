import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Stars, Coffee, Sparkles, BookOpen, PenTool } from 'lucide-react';


const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Soft Background Accents */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px] -translate-y-1/2" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        {/* Decorative Frames */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-pink-500/20 via-purple-500/10 to-transparent rounded-[40px] blur-2xl group-hover:opacity-60 transition-opacity duration-500" />

                        <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-[32px] overflow-hidden border border-gray-100 glass-card p-3 shadow-2xl shadow-gray-200">
                            <img
                                src="/my.png"
                                alt="Charuka Herath Portfolio"
                                className="w-full h-full object-cover rounded-[24px] grayscale group-hover:grayscale-0 transition-all duration-700"
                            />

                            {/* Floating Stats */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-8 -right-4 bg-neutral-950/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl shadow-pink-500/5"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">
                                        <Heart size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Passion</p>
                                        <p className="text-sm text-white font-medium">Design & Code</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-12 -left-6 bg-neutral-950/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl shadow-cyan-500/5"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                        <Stars size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Experience</p>
                                        <p className="text-sm text-white font-medium">Ready to Build</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-pink-400 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">About the Creator</span>
                            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                                Hi! I'm <span className="text-white font-bold">Charuka</span>. I believe that code is an art form, and the web is my canvas.
                                I specialize in MERN stack development, building modern React applications backed by Node.js, Express, and MongoDB.
                                Whether it's learning a new Japanese kanji or architecting a complex React system,
                                I bring the same level of curiosity and precision to everything I do.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { icon: <Sparkles size={18} />, title: "Creative Mindset", desc: "Finding beauty in logic.", color: "pink" },
                                { icon: <PenTool size={18} />, title: "UI Architect", desc: "Pixel-perfect precision.", color: "cyan" },
                                { icon: <BookOpen size={18} />, title: "Continuous Learner", desc: "Always evolving.", color: "purple" },
                                { icon: <Coffee size={18} />, title: "Detail Oriented", desc: "Small things matter.", color: "teal" }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex gap-4 items-start group"
                                >
                                    <div className={`mt-1 p-2 rounded-lg bg-${item.color}-500/10 text-${item.color}-400 group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                                        <p className="text-neutral-500 text-xs">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
