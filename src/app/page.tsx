"use client"; // Add this line at the top

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/ui/Footer';
import Navbar from '@/ui/Navbar';
import TitlePage from '@/ui/TitlePage';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
};

export default function Home() {
    return (
        <main>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col min-h-screen mx-auto sm:px-10 px-5"
            >
                <Navbar />
                <div className="flex flex-col items-center justify-center flex-grow">
                    <TitlePage />
                </div>
                <Footer />
            </motion.div>
        </main>
    );
}
