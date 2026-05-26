import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin, Send, Github, Instagram, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-pink-600 text-sm font-bold tracking-[0.3em] uppercase mb-4 block underline decoration-pink-500/20 underline-offset-8">Connect</span>
                    <p className="text-neutral-600 max-w-xl mx-auto text-lg leading-relaxed">
                        I'm always open to discussing new projects, creative ideas, or being part of your vision.
                        Let's turn your dreams into digital reality.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-2 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[32px] glass-card border border-white/10 group hover:border-pink-500/30 transition-all duration-500"
                        >
                            <h3 className="text-xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
                                <MessageSquare className="text-pink-600" size={24} /> Contact Details
                            </h3>

                            <div className="space-y-8">
                                {[
                                    { icon: <Mail size={20} />, label: "Email", value: "charuka@example.com", color: "pink" },
                                    { icon: <MapPin size={20} />, label: "Homebase", value: "Colombo, Sri Lanka", color: "purple" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-5 group/item cursor-pointer">
                                        <div className={`w-12 h-12 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-400 group-hover/item:scale-110 group-hover/item:bg-${item.color}-500/20 transition-all duration-300 shadow-lg shadow-black/20`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold mb-0.5">{item.label}</p>
                                            <p className="text-neutral-700 font-medium group-hover/item:text-neutral-900 transition-colors">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-10 border-t border-white/5 flex gap-6">
                                {[
                                    { icon: <Linkedin size={20} />, link: "#", color: "text-blue-400" },
                                    { icon: <Github size={20} />, link: "#", color: "text-white" },
                                    { icon: <Instagram size={20} />, link: "#", color: "text-pink-400" }
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.link}
                                        className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center ${social.color} hover:bg-gray-100 hover:scale-110 active:scale-95 transition-all shadow-sm`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        <div className="p-6 rounded-3xl bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/10 text-center animate-pulse">
                            <p className="text-pink-400 text-sm font-medium">✨ Ready for Collaboration</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-3 p-10 rounded-[40px] glass-card border border-white/10 relative"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Grace Hopper"
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-pink-500/50 text-neutral-900 placeholder:text-neutral-400 transition-all backdrop-blur-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="hello@grace.com"
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-sky-500/50 text-neutral-900 placeholder:text-neutral-400 transition-all backdrop-blur-sm"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Topic</label>
                                <input
                                    type="text"
                                    placeholder="Project Inquiry"
                                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500/50 text-neutral-900 placeholder:text-neutral-400 transition-all backdrop-blur-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Tell me about your magic idea..."
                                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-pink-500/50 text-neutral-900 placeholder:text-neutral-400 transition-all backdrop-blur-sm resize-none"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full group relative py-4 rounded-2xl bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 text-white font-black tracking-widest uppercase text-sm overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="relative flex items-center justify-center gap-3">
                                    Send Transmission <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
