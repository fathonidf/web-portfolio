import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Resume',
};

export default function Resume() {
    return (
        <div className="flex justify-center items-center w-full">
            <iframe
                src="/resume.pdf"
                className="w-full rounded-lg"
                style={{ border: 'none', height: '590px', width:'700px' }}
                title="Resume PDF"
            ></iframe>
        </div>
    );
}
