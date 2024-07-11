import { Metadata } from 'next';
import Projects from '@/ui/projects/Projects';

export const metadata: Metadata = {
    title: 'Projects',
};

export default function ProjectsPage() {
    return (
        <div className="flex flex-col items-center justify-center space-y-7 relative">
            <div className="absolute top-0 left-5 lg:left-20 w-40 h-52 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob z-0"></div>
            <div className="absolute top-0 right-5 lg:right-20 w-36 h-48 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob z-0"></div>

            <div className="z-10 flex flex-col items-center w-full space-y-4 p-8 m-8 border-solid bg-white/30 rounded-xl shadow-lg">
                <p className="text-black font-bold text-3xl lg:text-5xl">Previous Projects</p>
                <p className="text-black text-lg lg:text-xl text-center">Some previous projects I developed with my friends for college assignments.</p>
            </div>

            <div className="z-10">
                <Projects />
            </div>
        </div>
    );
}