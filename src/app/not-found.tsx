"use client"; // Add this line at the top

'use client'

import { useRouter } from 'next/navigation'
import React from 'react';

const NotFound = () => {
    const router = useRouter()

    return (
        <main className="flex flex-col items-center justify-center space-y-7 relative">
            <h1 className="text-4xl font-bold">Page Not Found</h1>
            <p className="mb-4">The page you are looking for does not exist.</p>
            <div className="relative inline-flex group">
                <div
                    className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-blue-500 to-red-500 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                </div>
                <button onClick={() => router.push('/')} 
                    className="relative inline-flex items-center justify-center px-4 py-2 font-bold transition-all duration-200 bg-white font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button">
                    Back to Home
                    <svg className="w-3 h-3 ml-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
        </main>
    );
};

export default NotFound;
