import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import projects from '@/data/projects';

const Projects: React.FC = () => {
    return (
        <div className="flex flex-col lg:grid grid-cols-3 gap-8">
            {projects.map((project) => (
                <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow" key={project.title}>
                    <a href="#">
                        <Image
                            className="rounded-t-lg"
                            src={project.image}
                            alt={project.title}
                            width={500}
                            height={300}
                            layout="responsive"
                        />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{project.title}</h5>
                        </a>
                        <p className="mb-3 text-sm font-normal text-gray-700">{project.description}</p>

                        <div className="relative inline-flex group">

                            <a href="" className={`relative inline-flex items-center justify-center px-4 py-2 transition-all duration-200 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-500 focus:text-gray-400`}>Read more<svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg></a>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;
