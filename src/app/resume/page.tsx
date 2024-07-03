import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Resume',
  };

export default function Resume() {
    return (
        <div className="pdf-container">
            <iframe
                src="/resume.pdf"
                className="w-full h-screen"
                style={{ border: 'none' }}
                title="Resume PDF"
            ></iframe>
        </div>
    );
}
