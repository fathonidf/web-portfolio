"use client"; // Add this line at the top

import React from 'react';
import { motion } from 'framer-motion';
import TitlePage from '@/ui/titlepage/TitlePage';
import AboutButton from '@/ui/decoration/AboutButton';

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
                className="flex flex-col items-center justify-center"
            >
                <TitlePage />
                <AboutButton />
            </motion.div>
        </main>
    );
}
