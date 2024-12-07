import { Metadata } from 'next';
import profilePic from '../../../public/daffapp.jpg';
import Educations from '@/ui/about/Educations';
import Experiences from '@/ui/about/Experiences';
import Image from 'next/image';
import Awards from '@/ui/about/Awards';

export const metadata: Metadata = {
    title: 'About',
};

export default function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center space-y-7 relative">
            <div className="absolute top-0 left-20 w-40 h-52 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob z-0"></div>
            <div className="absolute top-0 left-2 w-36 h-48 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob z-0"></div>
            <div className="z-10 flex flex-col lg:flex-row items-center space-y-3 lg:space-x-5">
                <Image
                    src={profilePic}
                    width={150}
                    height={150}
                    className="rounded-full"
                    alt="Photo profile of Daffa Mohamad Fathoni"
                    priority
                    quality={100}
                />
                <p className="text-black font-bold text-2xl lg:text-5xl">Daffa Mohamad Fathoni</p>
            </div>

            <div className="z-10 border-solid bg-white/30 rounded-lg shadow-lg p-5">
                <p className="text-justify text-black font-bold">
                    A Computer Science student at <a href="https://www.ui.ac.id/" className="text-yellow-500 hover:underline">Universitas Indonesia</a>,
                    I thrive on crafting sleek web applications using cutting-edge frameworks while supporting my peers as a teaching assistant
                    for courses in Discrete Mathematics and Programming Foundations. Beyond coding, my fingers dance on the keys of a classical piano,
                    and my sociable nature finds joy in gatherings and new connections.
                    I channel my passion for soft skills development through active participation in projects and organizations
                    aimed at empowering fellow computer science students.
                </p>
            </div>

            <div className="relative inline-flex group">
                <div
                    className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-blue-500 to-red-500 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                </div>
                <a href="https://drive.google.com/file/d/1xxe2law9-O5U0EdRaHlMAMvv2u5XSZZv/view?usp=sharing" target="_blank"
                    className="relative inline-flex items-center justify-center px-4 py-2 font-bold transition-all duration-200 bg-white font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button">
                    Download my resume!
                    <svg className="w-3 h-3 ml-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>


            <div className="flex flex-col lg:flex-row w-full">
                <div className="w-full lg:w-1/2 lg:pr-4">
                    <section id="educations">
                        <Educations />
                    </section>
                    <section id="awards">
                        <Awards />
                    </section>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-4">
                    <section id="experiences">
                        <Experiences />
                    </section>
                </div>
            </div>
        </div>
    );
}
