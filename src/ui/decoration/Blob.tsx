import React from 'react';

interface BlobProps {
    firstColor: string;
    secondColor: string;
    combinationColor: string;
}

const Blob: React.FC<BlobProps> = ({ firstColor, secondColor, combinationColor }) => {
    return (
        <>
            <div
                className={`absolute top-0 left-20 w-72 h-72 ${firstColor} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob`}
            ></div>
            <div
                className={`absolute top-0 right-20 w-72 h-72 ${secondColor} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000`}
            ></div>
            <div
                className={`absolute bottom-0 left-1/3 w-48 h-48 ${combinationColor} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000`}
            ></div>
        </>
    );
}

export default Blob;
