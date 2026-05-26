import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-cyan-500/30 selection:text-cyan-200">
            <Navbar />
            <main className="w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
