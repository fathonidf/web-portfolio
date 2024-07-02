import React from 'react';

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
