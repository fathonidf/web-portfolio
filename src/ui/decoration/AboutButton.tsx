'use client'
 
import { useRouter } from 'next/navigation'
import React from 'react';

const AboutButton: React.FC = () => {
    const router = useRouter()

    return (
        <button onClick={() => router.push('/about')} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black hover:text-white rounded-lg group transition-all ease duration-75">
            <span className="absolute inset-0 bg-white/30 transition-all ease duration-75 group-hover:bg-opacity-0"></span>
            <span className="absolute inset-0 bg-gradient-to-br from-red-500 to-blue-500 opacity-0 transition-all ease duration-75 group-hover:opacity-100"></span>
            <span className="relative px-5 py-2.5 bg-transparent rounded-md">
                About Me! 
            </span>
        </button>
    )
}

export default AboutButton;
