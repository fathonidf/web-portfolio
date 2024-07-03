"use client"; // Add this line at the top

import React from 'react';
import { motion } from 'framer-motion';
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
            >
                <TitlePage />
            </motion.div>
        </main>
    );
}
