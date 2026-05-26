import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const projects = [
    {
        title: "Japanese Learning Platform",
        description: "A premium interactive platform for mastering Japanese. Features Hiragana/Katakana tracking, Kanji practice, and immersive lessons designed with a modern Sakura-Neon aesthetic.",
        tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
        image: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        github: "https://github.com/Charuz1/japanese-learning-web-site.git",
        demo: "www.google.lk",
        featured: true,
        accent: "from-rose-500 via-indigo-500 to-sky-500"
    },
    {
        title: "Book & Film Recommendation",
        description: "A smart recommendation system for readers and viewers, blending genres, ratings, and mood-based discovery into one beautiful interface.",
        tags: ["React", "API Integration", "Tailwind"],
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        github: "#",
        demo: "#",
        accent: "from-orange-400 via-rose-500 to-fuchsia-500"
    },
    {
        title: "CampusLink",
        description: "A campus community portal for events, announcements, student groups, and academic support, designed to keep students connected and informed.",
        tags: ["React", "Firebase", "UX Design"],
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        github: "#",
        demo: "#",
        accent: "from-violet-500 to-indigo-500"
    },
    {
        title: "Global Weather Hub",
        description: "A beautiful, data-rich weather application featuring interactive maps and hyper-local atmospheric forecasts.",
        tags: ["JavaScript", "Weather API", "CSS3"],
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        github: "#",
        demo: "#",
        accent: "from-teal-400 to-emerald-400"
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group relative rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-white/20 transition-all duration-500 ${project.featured ? 'md:col-span-2 lg:col-span-2 animate-float' : ''}`}
        >
            {/* Background Glow */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${project.accent} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`} />

            <div className="relative h-full flex flex-col md:flex-row bg-neutral-950/40 backdrop-blur-xl">
                {/* Image Section */}
                <div className={`relative overflow-hidden ${project.featured ? 'md:w-1/2' : 'w-full h-56'}`}>
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60 md:hidden" />
                </div>

                {/* Content Section */}
                <div className={`p-8 flex flex-col justify-between ${project.featured ? 'md:w-1/2' : 'flex-1'}`}>
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            {project.featured && (
                                <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-pink-500/20 text-pink-400 rounded-full border border-pink-500/30">
                                    <Sparkles size={10} /> Featured Project
                                </span>
                            )}
                            <div className="flex gap-2">
                                {project.tags.slice(0, 3).map(tag => (
                                    <span key={tag} className="text-[10px] text-neutral-400 font-medium">#{tag}</span>
                                ))}
                            </div>
                        </div>

                        <h3 className={`text-2xl font-bold mb-3 group-hover:text-white transition-colors ${project.featured ? 'md:text-3xl' : ''}`}>
                            {project.title}
                        </h3>

                        <p className="text-neutral-400 leading-relaxed text-sm mb-6">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                        <div className="flex gap-4">
                            <a href={project.github} className="text-neutral-400 hover:text-white transition-all flex items-center gap-1.5 text-sm font-medium">
                                <Github size={18} /> Code
                            </a>
                            <a href={project.demo} className="text-cyan-400 hover:text-cyan-300 transition-all flex items-center gap-1.5 text-sm font-medium">
                                <ExternalLink size={18} /> Live
                            </a>
                        </div>

                        <motion.div
                            whileHover={{ x: 5 }}
                            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 group-hover:bg-white/10 group-hover:text-white transition-all"
                        >
                            <ExternalLink size={14} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[128px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-[128px]" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            Selected <span className="text-cyan-400 italic">Creations</span>
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed">
                            A showcase of my recent explorations in web development,
                            featuring high-performance applications and interactive experiences.
                        </p>
                    </div>

                    <div className="hidden md:block">
                        <div className="px-5 py-2 rounded-2xl bg-neutral-800/50 border border-neutral-700 text-neutral-300 text-sm font-medium">
                            {projects.length} Projects Total
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
