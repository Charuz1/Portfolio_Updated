import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Blocks, Cpu } from 'lucide-react';

const skillGroups = [
    {
        category: "Frontend Artistry",
        icon: <Layout className="w-6 h-6" />,
        items: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"],
        description: "Crafting beautiful, responsive, and performance-driven user interfaces.",
        accent: "from-pink-500 to-rose-500"
    },
    {
        category: "Backend Engine",
        icon: <Database className="w-6 h-6" />,
        items: ["MERN Stack", "Node.js", "Express", "REST APIs", "MongoDB"],
        description: "Building robust MERN servers and scalable database architectures.",
        accent: "from-cyan-500 to-blue-500"
    },
    {
        category: "Developer Core",
        icon: <Cpu className="w-6 h-6" />,
        items: ["Git/GitHub", "Vite", "NPM/Yarn", "Terminal", "Postman"],
        description: "Equipped with the right tools for efficient, modern development workflows.",
        accent: "from-purple-500 to-indigo-500"
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-pink-600 text-sm font-bold tracking-[0.3em] uppercase mb-4 block underline decoration-pink-500/20 underline-offset-8">Expertise</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                        My Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">Toolkit</span>
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Bridging the gap between design and functionality through a curated selection of modern technologies.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="relative group p-8 rounded-[32px] glass-card border border-white/10 hover:border-white/20 transition-all duration-500"
                        >
                            {/* Accent Glow */}
                            <div className={`absolute -inset-1 bg-gradient-to-br ${group.accent} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-[32px]`} />

                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${group.accent} p-3.5 mb-8 text-white shadow-lg shadow-orange-950/20 group-hover:scale-110 transition-transform duration-500`}>
                                    {group.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4">{group.category}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                                    {group.description}
                                </p>

                                <div className="flex flex-wrap gap-2.5">
                                    {group.items.map((skill, i) => (
                                        <motion.span
                                            key={skill}
                                            whileHover={{ scale: 1.05 }}
                                            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl text-xs font-medium text-neutral-300 transition-all cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Creative Divider */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 flex items-center justify-center gap-4 text-neutral-600"
                >
                    <div className="h-px w-12 bg-white/5" />
                    <Blocks className="w-5 h-5 animate-spin-slow" />
                    <div className="h-px w-12 bg-white/5" />
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
