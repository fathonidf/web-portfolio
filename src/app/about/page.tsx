import { Metadata } from 'next';
import profilePic from '../../../public/daffapp.jpg';
import Educations from '@/ui/about/Educations';
import Experiences from '@/ui/about/Experiences';
import Image from 'next/image';
import Awards from '@/ui/about/Awards';

export const metadata: Metadata = {
    title: 'About',
};

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center space-y-7">
            <div className="flex flex-col lg:flex-row items-center space-y-3 lg:space-x-5">
                <Image
                    src={profilePic}
                    width={150}
                    height={150}
                    className="rounded-full"
                    alt="Photo profile of Daffa Mohamad Fathoni"
                    priority
                />
                <p className="text-black font-bold text-2xl lg:text-5xl">Daffa Mohamad Fathoni</p>
            </div>

            <div className="border-solid rounded-lg shadow-lg p-5">
                <p className="text-justify text-black font-bold ">
                    A Computer Science student at <a href="" className="text-yellow-400">Universitas Indonesia</a>, thriving on crafting sleek web applications with 
                    cutting-edge frameworks while supporting peers as a teaching assistant for courses in Discrete Mathematics and Programming Foundations. 
                    Beyond coding, His fingers dance on the keys of a classical piano, and his sociable nature finds joy in gatherings and new connections. 
                    He channel his passion for soft skills development through active participation in projects and 
                    organizations aimed at empowering fellow computer science students.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row w-full">
                <div className="w-full lg:w-1/2 lg:pr-4">
                    <Educations />
                    <Awards />
                </div>
                <div className="w-full lg:w-1/2 lg:pl-4">
                    <Experiences />
                </div>
            </div>
        </div>
    );
}
