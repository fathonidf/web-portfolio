import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contents',
};

export default function ContentsPage() {
    return (
        <div className="flex flex-col items-start justify-start space-y-7 relative">
            <div className="absolute top-0 left-5 lg:left-20 w-40 h-52 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob z-0"></div>
            <div className="absolute top-0 right-5 lg:right-20 w-36 h-48 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob z-0"></div>

            <div className="z-10 flex flex-col items-center w-full space-y-4 p-8 m-8 border-solid bg-white/30 rounded-xl shadow-lg">
                <p className="text-black font-bold text-3xl lg:text-5xl">Contents</p>
                <p className="text-black text-lg lg:text-xl text-center">Some of the contents that i have made from the most of my experiences</p>
            </div>

            <div className="z-10 flex flex-col lg:flex-row items-start space-y-3 lg:space-x-5">
                <div className="flex items-center">
                    <a className="text-2xl font-bold pb-3" href="#music">Music</a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 ml-2 mb-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                    </svg>
                </div>
            </div>

            <div className="z-10 flex flex-col lg:flex-row items-start space-y-3 lg:space-x-5">
                <div className="flex items-center">
                    <a className="text-2xl font-bold pb-3" href="#video">Video</a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 ml-2 mb-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
