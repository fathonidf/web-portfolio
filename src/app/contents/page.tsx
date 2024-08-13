import Musics from '@/ui/musics/Musics';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contents',
};

export default function ContentsPage() {
    return (
        <div className="flex flex-col items-center justify-center space-y-5 relative w-full max-w-5xl mx-auto">
            <div className="absolute top-0 left-5 lg:left-20 w-40 h-52 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob z-0"></div>
            <div className="absolute top-0 right-5 lg:right-20 w-36 h-48 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob z-0"></div>

            <div className="z-10 flex flex-col items-center w-full space-y-4 p-8 m-8 border-solid bg-white/30 rounded-xl shadow-lg">
                <p className="text-black font-bold text-3xl lg:text-5xl">Contents</p>
                <p className="text-black text-lg lg:text-xl text-center">Some of the contents that I have made from the most of my experiences</p>
            </div>

            <div className="flex items-center justify-start w-full">
                <a className="text-2xl font-bold pb-3" href="#music">Music</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2 mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                </svg>
            </div>
            
            <Musics />

        </div>
    );
}
