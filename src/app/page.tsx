"use client"; // Add this line at the top

import React from 'react';
import TitlePage from '@/ui/titlepage/TitlePage';
import AboutButton from '@/ui/decoration/AboutButton';
import { notFound } from 'next/navigation';

export default function Home() {
    return (
        <main>
            <div className="flex flex-col items-center justify-center">
                <TitlePage />
                <AboutButton />
            </div>
        </main>
    );
}
