import React from 'react';
import { Link } from 'next-view-transitions'
import Image from 'next/image';
import projects from '@/data/projects';

const Projects: React.FC = () => {
    return (
        <div className="flex flex-col lg:grid grid-cols-3 gap-8">
            {projects.map((project) => (
                <Link href={`projects/${project.id}`} className="relative max-w-sm bg-white border border-gray-200 rounded-xl shadow hover:scale-110 transition duration-150 ease-in-out group" key={project.title}>
                    <Image
                        className="rounded-t-lg"
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={300}
                        layout="responsive"
                    />
                    <div className="p-5 relative">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{project.title}</h5>
                        <p className="mb-8 text-sm font-normal text-gray-700">{project.description}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 p-5 inline-flex items-center justify-center text-sm font-bold text-gray-900 rounded-lg">
                        Read more
                        <svg className="w-3 h-3 ms-2 rtl:rotate-180 transition-transform duration-300 transform group-hover:translate-x-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Projects;