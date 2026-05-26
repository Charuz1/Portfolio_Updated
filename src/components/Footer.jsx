import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-neutral-800 mt-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center bg-neutral-950 text-neutral-400">
                <div className="mb-4 md:mb-0">
                    <p className="text-sm">© {new Date().getFullYear()} Charuka Herath. All rights reserved.</p>
                </div>
                <div className="flex space-x-6">
                    <a href="https://github.com/Charuz1" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><Github size={20} /></a>
                    <a href="https://linkedin.com/in/charukaherath" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="hover:text-cyan-400 transition-colors"><Twitter size={20} /></a>
                    <a href="mailto:charukaherath@gmail.com" className="hover:text-cyan-400 transition-colors"><Mail size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
