'use client'

import React from 'react';
import { Link } from 'next-view-transitions';

const AboutButton: React.FC = () => {
    return (
        <>
            {/* Desktop version */}
            <Link href="/about" className="hidden md:inline-flex relative items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black hover:text-white rounded-lg group transition-all ease duration-75">
                <span className="absolute inset-0 bg-white/30 transition-all ease duration-75 group-hover:bg-opacity-0"></span>
                <span className="absolute inset-0 bg-gradient-to-br from-red-500 to-blue-500 opacity-0 transition-all ease duration-75 group-hover:opacity-100"></span>
                <span className="relative px-5 py-2.5 bg-transparent rounded-md">
                    About Me!
                </span>
            </Link>

            {/* Mobile version */}
            <div className="md:hidden relative inline-flex group">
                <div
                    className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-blue-500 to-red-500 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                </div>
                <Link href="/about" 
                    className="relative inline-flex items-center justify-center px-4 py-2 font-bold transition-all duration-200 bg-white font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button">
                    About Me!
                </Link>
            </div>
        </>
    )
}

export default AboutButton;
