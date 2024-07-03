import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Resume',
};

export default function Resume() {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <iframe
                src="/resume.pdf"
                className="w-full h-full rounded-lg"
                style={{ border: 'none' }}
                title="Resume PDF"
            ></iframe>
        </div>
    );
}
